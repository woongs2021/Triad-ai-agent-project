export const navItems = [
  { href: "/intro", label: "Project intro" },
  { href: "/mentors", label: "AI Mentors" },
  { href: "/process", label: "AI dev process" },
] as const;

export const mentors = [
  {
    id: "william",
    name: "William",
    role: "전략 중심 UX 멘토",
    avatarSrc: "/agents/William.png",
    accent: "#4065F8",
    summary:
      "UX 의사결정을 제품 전략, 비즈니스 임팩트, 장기적인 시스템 가치와 연결하는 principal-level 멘토입니다.",
    priorities: ["명확성", "논리", "시스템 사고", "비즈니스 임팩트"],
  },
  {
    id: "maya",
    name: "Maya",
    role: "감정 중심 UX 멘토",
    avatarSrc: "/agents/Maya.png",
    accent: "#B85C4F",
    summary:
      "스토리텔링, 감정적 명확성, 발표 흐름, 커뮤니케이션 품질을 다듬는 따뜻하고 사려 깊은 멘토입니다.",
    priorities: ["인간 이해", "감정적 공명", "서사 일관성", "접근성"],
  },
  {
    id: "cody",
    name: "Cody",
    role: "UX Research + AI Workflow Mentor",
    avatarSrc: "/agents/Cody.png",
    accent: "#9747FF",
    summary:
      "UX 결정을 리서치 근거, 사용성 신호, workflow 설계, AI 운영 관점으로 grounded하게 만드는 실무형 멘토입니다.",
    priorities: ["리서치 엄밀성", "근거", "운영 명확성", "실행 가능한 인사이트"],
  },
] as const;

export const phases = [
  {
    phase: "Phase 1",
    title: "Mobile Chat Prototype",
    status: "완료",
    summary:
      "메신저 스타일 UI, 에이전트 아바타, 메시지 버블, typing indicator, mock 시나리오, Cody 인트로 흐름을 구현했습니다.",
    href: "https://github.com/woongs2021/Triad-ai-agent-project/blob/main/.cursor/plans/phase1-chat-prototype.plan.md",
  },
  {
    phase: "Phase 2",
    title: "Gemini Mentor Streaming",
    status: "완료",
    summary:
      "Gemini 2.5 Flash로 시작해 품질 개선을 위해 Gemini 3 Flash Preview로 전환했습니다. 하이브리드 멘토 라우팅, 태그 파싱, SSE 응답, mock fallback 흐름을 연결했습니다.",
    href: "https://github.com/woongs2021/Triad-ai-agent-project/blob/main/.cursor/plans/phase2-gemini-streaming.plan.md",
  },
  {
    phase: "Phase 3",
    title: "Cody Daily News Feed",
    status: "완료",
    summary:
      "RSS 기반 daily news, 같은 날 캐시, Gemini Cody 코멘트, NewsCard UI, mock fallback을 추가했습니다.",
    href: "https://github.com/woongs2021/Triad-ai-agent-project/blob/main/.cursor/plans/phase3-cody-news.plan.md",
  },
  {
    phase: "Phase 4",
    title: "Web Shell and Deployment",
    status: "진행 중",
    summary:
      "채팅 프로토타입을 프로젝트 페이지, 멘토 소개, 개발 과정 문서, Vercel 배포 준비가 포함된 반응형 웹사이트 셸로 감쌉니다.",
    href: "https://github.com/woongs2021/Triad-ai-agent-project/blob/main/.cursor/plans/phase4-web-shell.plan.md",
  },
] as const;
