import { streamGemini } from "@/lib/gemini";
import { buildMultiSystemPrompt, buildSingleSystemPrompt } from "@/lib/prompts";
import { routeQuery } from "@/lib/router";
import { detectLatestTaggedAgent, parseTaggedReply } from "@/lib/tagParser";
import type { AgentId, ScenarioReply } from "@/lib/types";

export const runtime = "nodejs";

const encoder = new TextEncoder();

type MentorStreamEvent =
  | {
      event: "start";
      data: { agent: AgentId };
    }
  | {
      event: "message";
      data: ScenarioReply;
    }
  | {
      event: "error";
      data: { message: string };
    }
  | {
      event: "done";
      data: Record<string, never>;
    };

function encodeSse({ event, data }: MentorStreamEvent) {
  return encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
}

function enqueue(controller: ReadableStreamDefaultController<Uint8Array>, event: MentorStreamEvent) {
  controller.enqueue(encodeSse(event));
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Mentor response failed.";
}

async function parseRequest(request: Request) {
  const body = (await request.json().catch(() => null)) as { query?: unknown } | null;
  const query = typeof body?.query === "string" ? body.query.trim() : "";

  if (!query) {
    throw new Error("Query is required.");
  }

  return query;
}

export async function POST(request: Request) {
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const emittedStarts = new Set<AgentId>();

      function startAgent(agent: AgentId, force = false) {
        if (!force && emittedStarts.has(agent)) {
          return;
        }

        emittedStarts.add(agent);
        enqueue(controller, {
          event: "start",
          data: { agent },
        });
      }

      function sendMessage(reply: ScenarioReply) {
        enqueue(controller, {
          event: "message",
          data: reply,
        });
      }

      try {
        const query = await parseRequest(request);
        const route = routeQuery(query);

        if (route.mode === "single") {
          let content = "";
          startAgent(route.agent);

          for await (const chunk of streamGemini({
            system: buildSingleSystemPrompt(route.agent),
            user: query,
            signal: request.signal,
          })) {
            content += chunk;
          }

          sendMessage({
            agent: route.agent,
            content: content.trim(),
          });
        } else {
          let content = "";
          let activeAgent: AgentId | null = null;

          // Auto routing has no known speaker until Gemini emits the first tag.
          // Cody acts as the temporary researcher/loading presence for that gap.
          startAgent("cody");
          activeAgent = "cody";

          for await (const chunk of streamGemini({
            system: buildMultiSystemPrompt(),
            user: query,
            signal: request.signal,
          })) {
            content += chunk;
            const latestAgent = detectLatestTaggedAgent(content);

            if (latestAgent && latestAgent !== activeAgent) {
              activeAgent = latestAgent;
              startAgent(latestAgent);
            }
          }

          const replies = parseTaggedReply(content);

          if (replies.length === 0) {
            throw new Error("Gemini returned an empty mentor response.");
          }

          replies.forEach((reply) => {
            startAgent(reply.agent, true);
            sendMessage(reply);
          });
        }

        enqueue(controller, {
          event: "done",
          data: {},
        });
      } catch (error) {
        enqueue(controller, {
          event: "error",
          data: { message: getErrorMessage(error) },
        });
        enqueue(controller, {
          event: "done",
          data: {},
        });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/event-stream; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
