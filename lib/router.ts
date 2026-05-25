import { agents, agentOrder } from "@/lib/agents";
import type { AgentId } from "@/lib/types";

const autoRouteKeywords = ["포트폴리오", "전체", "전반", "피드백", "멘토", "리뷰"];

export type MentorRoute =
  | {
      mode: "single";
      agent: AgentId;
    }
  | {
      mode: "auto";
    };

function normalizeQuery(query: string) {
  return query.trim().toLowerCase();
}

function countMatches(query: string, agentId: AgentId) {
  return agents[agentId].keywords.filter((keyword) =>
    query.includes(keyword.toLowerCase()),
  ).length;
}

export function routeQuery(query: string): MentorRoute {
  const normalizedQuery = normalizeQuery(query);

  if (!normalizedQuery) {
    return { mode: "auto" };
  }

  const shouldAutoRoute = autoRouteKeywords.some((keyword) =>
    normalizedQuery.includes(keyword.toLowerCase()),
  );

  if (shouldAutoRoute) {
    return { mode: "auto" };
  }

  const matchedAgents = agentOrder.filter((agentId) => countMatches(normalizedQuery, agentId) > 0);

  if (matchedAgents.length === 1) {
    return {
      mode: "single",
      agent: matchedAgents[0],
    };
  }

  return { mode: "auto" };
}
