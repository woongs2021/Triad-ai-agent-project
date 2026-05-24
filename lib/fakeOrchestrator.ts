import scenarios from "@/mock/scenarios.json";
import type { Scenario, ScenarioReply } from "@/lib/types";

const scenarioList = scenarios as Scenario[];

function normalizeQuery(query: string) {
  return query.trim().toLowerCase();
}

function shuffleReplies(replies: ScenarioReply[]) {
  return [...replies].sort(() => Math.random() - 0.5);
}

export function getScenarioReplies(query: string): ScenarioReply[] {
  const normalizedQuery = normalizeQuery(query);

  const matchedScenario = scenarioList.find((scenario) => {
    if (scenario.id === "default") {
      return false;
    }

    return scenario.keywords.some((keyword) =>
      normalizedQuery.includes(keyword.toLowerCase()),
    );
  });

  if (matchedScenario) {
    return matchedScenario.replies;
  }

  const defaultScenario = scenarioList.find((scenario) => scenario.id === "default");

  return defaultScenario ? shuffleReplies(defaultScenario.replies) : [];
}

export function createMessageId(prefix: string) {
  return `${prefix}-${Date.now()}-${crypto.randomUUID()}`;
}
