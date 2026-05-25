export type AgentId = "william" | "maya" | "cody";

export type MessageVariant = "user" | "news" | AgentId;

export type NewsCategory = "AI" | "UX" | "Design Ops";

export type NewsItem = {
  id: string;
  publishedAt: string;
  category: NewsCategory;
  title: string;
  summary: string;
  source: string;
  url?: string;
  fallbackComment: string;
};

export type NewsApiResponse = {
  news: NewsItem;
  comment: string;
  source: "rss" | "fallback";
  commentSource: "gemini" | "fallback";
  dayKey: string;
};

export type ChatMessage = {
  id: string;
  variant: MessageVariant;
  author: string;
  content: string;
  createdAt: number;
  payload?: NewsItem;
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
