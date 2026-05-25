import type { AgentId, ScenarioReply } from "@/lib/types";

const tagToAgent: Record<string, AgentId> = {
  william: "william",
  maya: "maya",
  cody: "cody",
};

const tagPattern = /^\s*\[(William|Maya|Cody)\]\s*$/gim;

function resolveAgent(tag: string): AgentId {
  return tagToAgent[tag.toLowerCase()] ?? "william";
}

export function parseTaggedReply(text: string): ScenarioReply[] {
  const matches = [...text.matchAll(tagPattern)];

  if (matches.length === 0) {
    const content = text.trim();
    return content ? [{ agent: "william", content }] : [];
  }

  return matches
    .map((match, index) => {
      const nextMatch = matches[index + 1];
      const contentStart = (match.index ?? 0) + match[0].length;
      const contentEnd = nextMatch?.index ?? text.length;
      const content = text.slice(contentStart, contentEnd).trim();

      return {
        agent: resolveAgent(match[1]),
        content,
      };
    })
    .filter((reply) => reply.content.length > 0);
}

export function detectLatestTaggedAgent(text: string): AgentId | null {
  const matches = [...text.matchAll(tagPattern)];
  const lastMatch = matches.at(-1);

  return lastMatch ? resolveAgent(lastMatch[1]) : null;
}
