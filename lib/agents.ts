import type { AgentId, AgentProfile } from "@/lib/types";

export const agents: Record<AgentId, AgentProfile> = {
  william: {
    id: "william",
    name: "William",
    role: "전략 중심 UX 멘토",
    avatarSrc: "/agents/William.png",
    gradientClass: "bg-gradient-azure-night",
    keywords: ["전략", "비즈니스", "제품", "구조", "우선순위", "포지셔닝"],
  },
  maya: {
    id: "maya",
    name: "Maya",
    role: "감정 중심 UX 멘토",
    avatarSrc: "/agents/Maya.png",
    gradientClass: "bg-gradient-terracotta-abyssal",
    keywords: ["스토리", "감정", "발표", "공감", "커뮤니케이션", "내러티브"],
  },
  cody: {
    id: "cody",
    name: "Cody",
    role: "UX Research + AI Workflow 멘토",
    avatarSrc: "/agents/Cody.png",
    gradientClass: "bg-gradient-violet-auburn",
    keywords: ["리서치", "사용성", "워크플로우", "AI", "자동화", "검증"],
  },
};

export const agentOrder: AgentId[] = ["william", "maya", "cody"];
