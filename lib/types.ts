export type AgentId = "william" | "maya" | "cody";

export type MessageVariant = "user" | AgentId;

export type ChatMessage = {
  id: string;
  variant: MessageVariant;
  author: string;
  content: string;
  createdAt: number;
};

export type AgentProfile = {
  id: AgentId;
  name: string;
  role: string;
  avatarSrc: string;
  gradientClass: string;
  keywords: string[];
};

export type ScenarioReply = {
  agent: AgentId;
  content: string;
};

export type Scenario = {
  id: string;
  keywords: string[];
  replies: ScenarioReply[];
};
