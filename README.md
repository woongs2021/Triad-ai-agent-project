# Triad AI UX Mentor

> 세 명의 AI UX 멘토가 실제 단톡방처럼 응답하는 mobile-first 대화형 UI 프로토타입.

Triad AI UX Mentor는 AI-native UX 멘토링 경험을 위한 lightweight MVP다. 일반적인 챗봇이 아니라, 사용자가 작고 믿을 수 있는 UX 멘토 팀과 실시간으로 대화하고 있다고 느끼게 만드는 것이 목표다.

> 이 README는 외부 방문자를 위한 **요약**이다. 실제 구현 디테일, 도식, 검증 기준, harness engineering 관점의 상세 계획은 [Mainplan.md](Mainplan.md)에 있고, 디자인 시스템 정책은 [Woongdesign.md](Woongdesign.md)에 있다.

## 핵심 컨셉

제품은 세 명의 멘토 에이전트를 중심으로 작동한다.

- **William** — product reasoning, systems thinking, business impact, portfolio maturity에 집중하는 전략형 UX 멘토.
- **Maya** — storytelling, emotional clarity, communication quality, presentation flow에 집중하는 human-centered UX 멘토.
- **Cody** — usability evidence, research quality, automation, operational UX에 집중하는 UX research 및 AI workflow 멘토.

사용자는 플로팅 **Ask anything** 입력창에 질문을 입력한다. 사용자 메시지는 오른쪽에 나타나고, 멘토들은 왼쪽에서 프로필 이미지가 붙은 메시지 버블, staged timing, typing indicator로 응답한다.

## 화면 구조

아래 구조는 실제 화면의 계층을 나타낸다. 바깥은 desktop viewport이고, 내부에는 mobile phone frame이 중앙에 배치된다.

```text
Desktop Viewport
└── MobileFrame
    ├── 외부: dark background
    └── 내부: ChatWindow
        ├── 전체 배경
        │   └── Polar Beige full gradient background
        │
        ├── Floating Header
        │   ├── Title
        │   │   ├── Triad Mentor Room
        │   │   └── Live UX Mentor Chat
        │   └── Mentor Avatars
        │       ├── William.png
        │       ├── Maya.png
        │       └── Cody.png
        │
        ├── Scrollable Message List
        │   ├── User Message
        │   │   └── Me Bubble · right aligned
        │   ├── William Message
        │   │   ├── William avatar
        │   │   └── William Bubble · left aligned
        │   ├── Maya Message
        │   │   ├── Maya avatar
        │   │   └── Maya Bubble · left aligned
        │   ├── Cody Message
        │   │   ├── Cody avatar
        │   │   └── Cody Bubble · left aligned
        │   └── TypingIndicator
        │       ├── active mentor avatar
        │       └── animated dots
        │
        └── Floating AskAnythingInput
            ├── Refresh button
            ├── Ask anything input field
            └── Send button
```

## 디자인 방향

UI는 [Woongdesign.md](Woongdesign.md) 토큰을 따른다.

- **Background**: Polar Beige gradient
- **Me bubble**: Mystic Violet → Kinetic Azure
- **William bubble**: Kinetic Azure → Phantom Night
- **Maya bubble**: Terracotta Red → Abyssal Red
- **Cody bubble**: Mystic Violet → Auburn Flare
- **Typography**: Pretendard 기반 본문
- **Visual language**: typography, color planes, whitespace, rounded surfaces

## 기술 스택

- **Next.js App Router**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 연다.

## 코드 구조 (요약)

```text
/app          ← Next.js App Router entry
/components   ← MobileFrame, ChatWindow, MessageBubble 등 UI
/lib          ← agents, tokens, fakeOrchestrator, types
/mock         ← intro.json, scenarios.json
/public/agents ← William.png, Maya.png, Cody.png
```

자세한 컴포넌트 책임 분담은 [Mainplan.md](Mainplan.md)의 *컴포넌트 역할 요약* 표를 참고한다.

## 로드맵

| Phase | 범위 |
|---|---|
| **Phase 1** | mobile chat UI, fake scenario, typing animation, intro sequence |
| **Phase 2** | Gemini 2.5 Flash 연동 및 `[William] / [Maya] / [Cody]` response parsing |
| **Phase 3** | Cody proactive news feed |
| **Phase 4** | portfolio upload, preview, page selection |
| **Phase 5** | portfolio AI analysis |
| **Phase 6** | local memory 및 chat history optimization |

각 Phase의 구체 작업 단위, 가드 로직, 검증 시나리오는 [Mainplan.md](Mainplan.md)에 있다.

## 더 자세한 문서

- [Mainplan.md](Mainplan.md) — harness engineering 관점의 구현 상세, 화면 구조 도식, 메시지 흐름 도식, 구현 체크리스트, 검증 시나리오, MVP 규칙
- [Woongdesign.md](Woongdesign.md) — 색·타이포·그라데이션 토큰 등 디자인 시스템 정책
- [Agent md/William.md](Agent%20md/William.md) · [Agent md/Maya.md](Agent%20md/Maya.md) · [Agent md/Cody.md](Agent%20md/Cody.md) — 각 에이전트 constitution

## 철학

우선순위는 기술적 복잡도가 아니다. 가장 중요한 것은 실제 UX 멘토 팀과 대화하고 있다는 느낌이다.

Triad는 아키텍처적으로 정교해지기 전에 먼저 살아 있고, 감정적으로 섬세하며, 실무적으로 유용하고, 전략적으로 도움이 되는 제품처럼 느껴져야 한다.
