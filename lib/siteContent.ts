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

export const processOverview = {
  title: "Harness engineering, phase by phase.",
  description:
    "이 프로젝트는 believable chat experience를 먼저 완성한 뒤, 실제 모델 호출, Cody의 daily news feed, 배포 가능한 web shell을 단계적으로 얹는 방식으로 성장합니다. 각 Phase는 `.cursor/plans` 문서와 연결되어 있으며, 외부 방문자도 개발 흐름을 따라갈 수 있게 정리했습니다.",
  principles: [
    "Prompt engineering보다 harness engineering을 우선합니다.",
    "복잡한 multi-agent infrastructure 대신 believable interaction을 먼저 검증합니다.",
    "각 Phase는 mock fallback을 유지해 프로토타입이 항상 동작하도록 설계합니다.",
  ],
} as const;

export const phases = [
  {
    phase: "Phase 1",
    title: "Mobile Chat Prototype",
    status: "완료",
    summary:
      "API 없이 mock 시나리오만으로 William, Maya, Cody가 살아 있는 단톡방처럼 응답하는 mobile-first 채팅 프로토타입을 완성했습니다.",
    highlights: [
      "메신저 스타일 UI, 멘토 아바타, variant별 메시지 버블",
      "typing indicator와 순차 응답으로 fake realtime UX 구현",
      "fakeOrchestrator 키워드 라우팅과 turn guard",
      "Cody 인트로 시퀀스와 refresh 초기화",
    ],
    href: "https://github.com/woongs2021/Triad-ai-agent-project/blob/main/.cursor/plans/phase1-chat-prototype.plan.md",
  },
  {
    phase: "Phase 2",
    title: "Gemini Mentor Streaming",
    status: "완료",
    summary:
      "Gemini 2.5 Flash로 시작해 품질 개선을 위해 Gemini 3 Flash Preview로 전환했습니다. mock 답변을 실제 멘토 응답으로 교체하면서 Phase 1 UX harness는 그대로 유지했습니다.",
    highlights: [
      "하이브리드 멘토 라우팅: 단독 키워드 매칭 vs auto 태그 split",
      "SSE 기반 메시지 단위 스트리밍과 typing indicator 연동",
      "`[William]`, `[Maya]`, `[Cody]` 태그 파싱",
      "API 키 없음/실패 시 Phase 1 mock fallback",
      "모델 재검토 후 `gemini-3-flash-preview` 채택",
    ],
    href: "https://github.com/woongs2021/Triad-ai-agent-project/blob/main/.cursor/plans/phase2-gemini-streaming.plan.md",
  },
  {
    phase: "Phase 3",
    title: "Cody Daily News Feed",
    status: "완료",
    summary:
      "앱 로드 시 Cody가 RSS에서 가져온 UX/AI 뉴스 1건을 짧은 코멘트와 NewsCard로 공유합니다. 같은 날에는 서버 캐시를 재사용합니다.",
    highlights: [
      "RSS feed 수집과 NewsItem 정규화",
      "KST day key 기반 same-day server cache",
      "Gemini Cody 코멘트 생성",
      "RSS/Gemini 실패 시 mock/news.json fallback",
      "Phase 2 일반 채팅 흐름 유지",
    ],
    href: "https://github.com/woongs2021/Triad-ai-agent-project/blob/main/.cursor/plans/phase3-cody-news.plan.md",
  },
  {
    phase: "Phase 4",
    title: "Web Shell and Deployment",
    status: "완료",
    summary:
      "채팅 프로토타입을 외부 방문자가 바로 테스트할 수 있는 반응형 웹사이트 셸로 확장했습니다. 데스크탑 2-column, 모바일 풀스크린 채팅, 햄버거 정보 메뉴를 추가했습니다.",
    highlights: [
      "SiteShell, SiteHeader, RouteTransition, MobileMenuOverlay",
      "/, /intro, /mentors, /process 라우트 구성",
      "라우트 이동 시 ChatWindow state 유지",
      "MentorCard, PhaseCard 기반 정보 페이지",
      "Vercel 배포 준비 및 README/Mainplan 문서화",
    ],
    href: "https://github.com/woongs2021/Triad-ai-agent-project/blob/main/.cursor/plans/phase4-web-shell.plan.md",
  },
] as const;

export const upcomingPhases = [
  {
    phase: "Phase 5",
    title: "Portfolio AI Analysis",
    status: "예정",
    summary: "포트폴리오 업로드 후 William → Maya → Cody 순서로 분석하는 흐름을 추가할 예정입니다.",
  },
  {
    phase: "Phase 6",
    title: "Memory and Chat History",
    status: "예정",
    summary: "대화 기록 최적화와 local memory persistence를 통해 멘토링 맥락을 더 오래 유지할 예정입니다.",
  },
] as const;
