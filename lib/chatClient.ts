import type { AgentId, ScenarioReply } from "@/lib/types";

type StreamMentorHandlers = {
  onStart: (agent: AgentId) => void | Promise<void>;
  onMessage: (reply: ScenarioReply) => void | Promise<void>;
  onError: (message: string) => void | Promise<void>;
  onDone: () => void | Promise<void>;
  signal?: AbortSignal;
};

type ParsedSseEvent = {
  event: string;
  data: unknown;
};

function parseSseEvent(rawEvent: string): ParsedSseEvent | null {
  const lines = rawEvent.split("\n");
  const eventLine = lines.find((line) => line.startsWith("event:"));
  const dataLines = lines
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.replace(/^data:\s?/, ""));

  if (!eventLine || dataLines.length === 0) {
    return null;
  }

  const event = eventLine.replace(/^event:\s?/, "").trim();
  const data = JSON.parse(dataLines.join("\n")) as unknown;

  return { event, data };
}

function isAgentId(value: unknown): value is AgentId {
  return value === "william" || value === "maya" || value === "cody";
}

function isScenarioReply(value: unknown): value is ScenarioReply {
  if (!value || typeof value !== "object") {
    return false;
  }

  const reply = value as Partial<ScenarioReply>;
  return isAgentId(reply.agent) && typeof reply.content === "string";
}

async function dispatchEvent(event: ParsedSseEvent, handlers: StreamMentorHandlers) {
  if (event.event === "start") {
    const data = event.data as { agent?: unknown };

    if (isAgentId(data.agent)) {
      await handlers.onStart(data.agent);
    }

    return;
  }

  if (event.event === "message") {
    if (isScenarioReply(event.data)) {
      await handlers.onMessage(event.data);
    }

    return;
  }

  if (event.event === "error") {
    const data = event.data as { message?: unknown };
    await handlers.onError(typeof data.message === "string" ? data.message : "Mentor response failed.");
    return;
  }

  if (event.event === "done") {
    await handlers.onDone();
  }
}

export async function streamMentors(query: string, handlers: StreamMentorHandlers) {
  const response = await fetch("/api/mentors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    signal: handlers.signal,
  });

  if (!response.ok || !response.body) {
    throw new Error("Mentor stream failed to start.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();

    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const events = buffer.split("\n\n");
    buffer = events.pop() ?? "";

    for (const rawEvent of events) {
      const parsedEvent = parseSseEvent(rawEvent.trim());

      if (parsedEvent) {
        await dispatchEvent(parsedEvent, handlers);
      }
    }
  }

  buffer += decoder.decode();

  if (buffer.trim()) {
    const parsedEvent = parseSseEvent(buffer.trim());

    if (parsedEvent) {
      await dispatchEvent(parsedEvent, handlers);
    }
  }
}
