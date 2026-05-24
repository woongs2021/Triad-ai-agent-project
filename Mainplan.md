# AI UX 멘토 팀 MVP

> 실시간 AI UX 멘토 단톡방처럼 느껴지는 lightweight MVP 웹 애플리케이션 프로젝트. 일반적인 챗봇이 아니다.

## Overview

이 프로젝트의 핵심 목표는 다음과 같다:

- <span style="color:#B85C4F">**살아있는 UX 멘토 팀**</span> — 실제 그룹 채팅처럼 느껴지는 경험
- <span style="color:#B85C4F">**실제 그룹 채팅 경험**</span> — collaborative AI mentor interaction
- <span style="color:#4065F8">**mobile-first messenger UX**</span> — 메신저 중심의 몰입형 인터페이스

---

## 핵심 철학

이 프로젝트는 **Prompt Engineering** 보다 **Harness Engineering** 중심으로 설계한다.

즉, 복잡한 AI 구조보다 다음을 우선한다:

- <span style="color:#B85C4F">**believable interaction**</span> — 믿을 수 있는 상호작용
- <span style="color:#B85C4F">**emotional UX**</span> — 감정적 UX
- <span style="color:#B85C4F">**immersive mentor experience**</span> — 몰입형 멘토 경험

**Key Characteristics**
- 기술적 완벽함보다 *실제 UX 멘토 팀과 대화하는 느낌*을 최우선
- 감정적인 UX와 believable mentor interaction을 기술 복잡도보다 앞세운다
- Cursor-first vibecoding으로 빠른 반복을 목표로 한다

---

## MVP 핵심 전략

초기 단계에서는 다음을 목표로 한다:

| 목표 | 설명 |
|---|---|
| **low complexity** | 단순한 아키텍처, 빠른 구현 |
| **low API cost** | Gemini Flash, 최대 5페이지 분석 등 비용 절감 |
| **fast iteration** | Phase 단위 점진적 개발 |
| **Cursor-first vibecoding** | AI 코딩 도구 중심 개발 흐름 |

---

## MVP 규칙 · 구현하지 않는 것

<span style="color:#FF105C">**MVP 단계에서 구현하지 않는다:**</span>

- real multi-agent infrastructure
- LangGraph
- vector database
- distributed agents
- websocket infrastructure
- advanced orchestration
- real-time synchronization

<span style="color:#4065F8">**대신 아래 구조를 사용한다:**</span>

- **fake multi-agent orchestration** — 단일 API 호출 + 역할별 포맷팅
- **single Gemini API call** — 1회 호출로 3명 응답 생성
- **role-based response formatting** — `[William]`, `[Maya]`, `[Cody]` 태그 분리
- **fake typing animations** — 타이핑·지연으로 생동감 연출
- **lightweight architecture** — 최소 의존성, 빠른 배포

---

## 핵심 컨셉 · 3명의 AI UX 멘토

### 1. William — <span style="color:#4065F8">전략 중심 UX 멘토</span>

**전문 영역**
- systems thinking · business impact · product thinking
- UX strategy · information architecture · portfolio strategy

**특징**
- 논리적 · 구조적 · 전략 중심
- *principal designer* 느낌

### 2. Maya — <span style="color:#B85C4F">감정 중심 UX 멘토</span>

**전문 영역**
- storytelling · emotional UX · communication clarity
- presentation flow · human-centered thinking

**특징**
- 따뜻함 · 공감 중심 · narrative 기반
- *UX lead* 느낌

### 3. Cody — <span style="color:#9747FF">UX Research + AI Workflow 멘토</span>

**전문 영역**
- UX research · design research · usability analysis
- AI workflow · implementation systems · automation · operational UX

**특징**
- 실무형 · 시스템 중심 · 리서치 기반
- *AI workflow engineer* 느낌

---

## 핵심 UX 방향

사용자는 **William**, **Maya**, **Cody**와 그룹 채팅 형태로 동시에 대화한다.

UX는 다음처럼 느껴져야 한다:

- <span style="color:#B85C4F">**살아있는 단톡방**</span>
- <span style="color:#B85C4F">**실제 멘토 그룹**</span>
- <span style="color:#4065F8">**AI 메신저**</span>

---

## 핵심 UI 방향

웹사이트 전체는 <span style="color:#4065F8">**MOBILE CHAT UI**</span> 중심으로 구성한다.

**Desktop browser 기준**
- 어두운 배경
- 중앙 mobile phone frame
- mobile-first UX
- immersive messenger 느낌

**참고 UX:** iMessage · Discord · modern AI messenger

### 주요 UI 요소 · 반드시 포함

- smooth animations
- rounded message bubbles
- typing indicators
- agent avatars
- smooth scrolling
- subtle transitions
- bottom `Ask anything` input · 물리 키보드 호환

### 그라데이션 토큰 매핑 · Woong Design 기반

모든 그라데이션은 <span style="color:#4065F8">**−45° 방향**</span>으로 통일 ([Woongdesign.md](Woongdesign.md) 규칙 유지).

| 대상 | 토큰 | From → To | 텍스트 |
|---|---|---|---|
| **MobileFrame BG** | `{gradient.mixed.soft.polar-beige}` | Polar Dew `#A1D0F6` → Soft Beige `#EEDCD6` | — |
| **User Bubble** (우측) | `{gradient.cool.ice-azure}` | Luminous Ice `#CAF7FF` → Kinetic Azure `#4065F8` | <span style="color:#FCFCFF">**Canvas #FCFCFF**</span> |
| **William Bubble** (좌측) | `{gradient.cool.azure-night}` | Kinetic Azure `#4065F8` → Phantom Night `#001C33` | <span style="color:#FCFCFF">**Canvas #FCFCFF**</span> |
| **Maya Bubble** (좌측) | `{gradient.warm.rose-terracotta}` | Dusty Rose `#C8847D` → Terracotta Red `#B85C4F` | <span style="color:#FCFCFF">**Canvas #FCFCFF**</span> |
| **Cody Bubble** (좌측) | `{gradient.mixed.soft.polar-rose}` | Polar Dew `#A1D0F6` → Dusty Rose `#C8847D` | <span style="color:#FCFCFF">**Canvas #FCFCFF**</span> |

**Border radius** — 버블 `{rounded.lg}` 16px · MobileFrame `{rounded.frame}` 24px · 아바타 `{rounded.full}` 50%

**Typography** — Pretendard 본문 (디스플레이는 프로토타입 단계 사용 안 함)

### 디자인 시스템 예외 메모

<span style="color:#FF105C">**의도된 예외:**</span> [Woongdesign.md](Woongdesign.md)는 그라데이션을 *풀블리드 배경 / 큰 헤더 배너* 전용으로 제한하고, Cool/Warm 톤을 한 페이지에 섞지 않는다고 규정한다. 본 프로토타입은 <span style="color:#9747FF">**에이전트 식별을 색으로 즉시 인지시키는 목적**</span>에 한해 이 두 규칙의 예외를 적용한다. 카드·버튼 등 다른 컴포넌트에는 이 예외를 확장하지 않는다.

---

## 핵심 경험

앱을 열면 **Cody**가 먼저 등장해서 AI 뉴스 또는 디자인 뉴스를 그룹 채팅에 공유한다 (Phase 1에서는 `/mock/intro.json` 재생, Phase 3에서 daily news로 확장).

**예시**

```
Cody:
오늘은 AI agent UX 관련해서 흥미로운 흐름이 보여요.
```

그 이후 사용자가 하단 `Ask anything`에 쿼리를 던지면, 키워드에 맞는 멘토가 활성화되어 **William** · **Maya** · **Cody**가 각자의 톤으로 응답한다.

핵심은 <span style="color:#B85C4F">**"살아있는 UX 멘토 그룹"**</span>처럼 느껴지는 것이다.

---

## 시스템 구조

초기 MVP는 실제 multi-agent architecture를 구현하지 않는다.

<span style="color:#4065F8">**Single Gemini Call + Fake Multi-Agent Formatting**</span> 방식을 사용한다.

### Fake Multi-Agent 방식

Gemini API는 **1번만** 호출한다.

**응답 예시**

```
[William]
전략적으로는...

[Maya]
사용자 경험 측면에서는...

[Cody]
리서치 관점에서는...
```

프론트엔드는 응답 split · 개별 message rendering · fake typing animation을 처리한다.

---

## Tech Stack

| 영역 | 기술 |
|---|---|
| 프레임워크 | Next.js App Router |
| 언어 | TypeScript |
| 스타일 | TailwindCSS |
| 애니메이션 | Framer Motion |
| AI | <span style="color:#9747FF">**Gemini 2.5 Flash API**</span> |
| 배포 | Vercel |

---

## 프로젝트 폴더 구조

```
/app
  layout.tsx · page.tsx · globals.css
/components
  MobileFrame.tsx
  ChatWindow.tsx
  ChatHeader.tsx
  MessageBubble.tsx
  AgentAvatar.tsx
  TypingIndicator.tsx
  AskAnythingInput.tsx
  NewsCard.tsx        ← Phase 3
  UploadModal.tsx     ← Phase 4
/lib
  agents.ts           ← 에이전트 메타데이터 (이름, 그라데이션, 아바타 경로, 키워드)
  tokens.ts           ← 그라데이션 토큰 상수 (Woong Design 미러)
  fakeOrchestrator.ts ← 시나리오 매칭 + 순차 dispatch
  types.ts            ← Message · Agent · Variant 타입
/agents
  william.md · maya.md · cody.md  ← Agent Constitution (compressed)
/mock
  scenarios.json      ← 쿼리 키워드 → 멘토별 응답 매핑
  intro.json          ← 앱 로드 시 Cody 인트로 메시지
  news.json           ← Phase 3 daily news
/memory
  memory.json         ← Phase 6 local memory
/public/agents
  William.png · Maya.png · Cody.png  ← Agent profile images에서 복사
```

### 컴포넌트 역할 요약

| 컴포넌트 | 역할 |
|---|---|
| **`MobileFrame`** | 데스크탑에서 중앙 정렬 · 어두운 외부 BG · 모바일은 풀스크린 |
| **`ChatWindow`** | Polar Beige 그라데이션 BG · 스크롤 메시지 리스트 컨테이너 |
| **`ChatHeader`** | 상단 고정 · 멘토 3인 아바타 + 이름 + 상태 |
| **`MessageBubble`** | `variant: 'user' \| 'william' \| 'maya' \| 'cody'` 별 그라데이션·정렬·아바타 표시 |
| **`AgentAvatar`** | 40px 원형 · `/public/agents/*.png` 로드 |
| **`TypingIndicator`** | 좌측 정렬 · 해당 멘토 아바타 + 3점 애니메이션 |
| **`AskAnythingInput`** | 하단 sticky · Canvas BG + 1px hairline · Enter submit · Shift+Enter 줄바꿈 |

---

## Agent Constitution 구조

`/agents/william.md` · `/agents/maya.md` · `/agents/cody.md` 각 파일은 다음을 markdown 형태로 정의한다:

- **personality** — 성격
- **tone** — 어조
- **role** — 역할
- **constraints** — 제약
- **output style** — 응답 스타일

> 상세 정의는 [Agent md/William.md](Agent%20md/William.md) · [Agent md/Maya.md](Agent%20md/Maya.md) · [Agent md/Cody.md](Agent%20md/Cody.md) 참고.

<span style="color:#FF105C">**IMPORTANT:**</span> 초기 MVP에서는 full constitution 대신 **compressed summary constitution**을 사용한다 (Phase 2에서 Gemini 프롬프트의 system 영역에 주입).

---

## Fake Orchestrator 구조

초기 orchestrator는 매우 단순하게 구현한다.

| 질문 유형 | 활성화 에이전트 |
|---|---|
| 전략 질문 | William |
| storytelling 질문 | Maya |
| UX research 질문 | Cody |
| 복합 질문 | 3명 모두 |

<span style="color:#FF105C">**IMPORTANT:**</span> 항상 3명 모두 응답하지 않는다. **필요한 에이전트만** 활성화한다.

---

## Cody Daily News Feed

앱 로드 시 Cody가 proactive하게 뉴스 하나를 공유한다.

- 초기에는 **mocked local JSON** 사용
- <span style="color:#FF105C">real crawling 구현 금지</span>

**예시 구조:** `/mock/news.json`

**초기 목표:** believable researcher 느낌 · UX trend briefing 느낌

---

## Portfolio Upload MVP

사용자는 PDF portfolio · image portfolio를 업로드할 수 있어야 한다.

### Portfolio 분석 흐름

1. PDF 업로드
2. page preview 생성
3. **최대 5페이지** 선택
4. 선택한 페이지 분석
5. AI mentor feedback 출력

<span style="color:#FF105C">**IMPORTANT:**</span> API 비용 절감을 위해 **최대 5페이지까지만** 분석한다.

### 분석 UX

분석 중 fake realtime UX를 적극 사용한다.

**예시:** `"Cody is analyzing UX research quality..."`

이후 순서대로 출력:
- **William** → 전략 피드백
- **Maya** → storytelling 피드백
- **Cody** → research/process 피드백

### Portfolio 분석 비용 최적화 · 반드시 적용

- Gemini Flash만 사용
- max 5 pages
- image compression · image resize
- 최근 대화만 유지
- <span style="color:#FF105C">긴 context 금지</span>

### 이미지 처리 전략

PDF 업로드 시: PDF → image 변환 → resize → compressed jpeg 생성

**권장:** max width 1400px · jpeg quality 0.6~0.7

---

## Memory 전략

초기 MVP에서는 <span style="color:#FF105C">vector DB 사용 금지</span>.

대신 **local JSON memory** 사용. 예시: `/memory/memory.json`

### Memory 구조 예시

```json
{
  "career_goal": "",
  "preferred_style": "",
  "recent_topics": [],
  "agent_notes": {
    "william": [],
    "maya": [],
    "cody": []
  }
}
```

---

## Fake Realtime UX

초기 MVP에서는 <span style="color:#FF105C">실제 realtime 구현 금지</span>.

대신 fake realtime UX 사용:
- typing indicator
- delayed responses
- staged rendering

핵심은 <span style="color:#B85C4F">**"실제로 살아있는 팀처럼 느껴지는 UX"**</span>이다.

---

## 추천 개발 순서

| Phase | 범위 | 상태 |
|---|---|---|
| <span style="color:#4065F8">**Phase 1**</span> | mobile chat UI · fake 시나리오 응답 · 타이핑 애니메이션 · 인트로 시퀀스 | <span style="color:#4065F8">**이번 단계**</span> |
| **Phase 2** | Gemini 2.5 Flash 연동 · `[William]/[Maya]/[Cody]` 태그 split · 응답 스트리밍 | 다음 단계 |
| **Phase 3** | Cody proactive news feed (mock JSON 기반) | — |
| **Phase 4** | portfolio upload · page preview · 최대 5페이지 선택 | — |
| **Phase 5** | portfolio AI analysis (William → Maya → Cody 순) | — |
| **Phase 6** | memory persistence · chat history optimization | — |

---

## Phase 1 프로토타입 상세

<span style="color:#4065F8">**이번 단계 목표**</span> — 3명의 멘토가 살아 있는 듯이 대화하는 *모바일 채팅 UI 프로토타입*을 완성한다. API 호출 없이 mock 시나리오로 모든 흐름을 재현한다.

### 화면 구조

```mermaid
flowchart TB
    Desktop[Desktop Viewport] --> Frame[MobileFrame 중앙 정렬 어두운 BG]
    Frame --> Chat[ChatWindow Polar Beige 그라데이션 BG]
    Chat --> Header[ChatHeader 멘토 3인 아바타 + 이름]
    Chat --> Scroll[Scrollable Message List]
    Chat --> Input[AskAnythingInput sticky bottom]
    Scroll --> UserBubble[User Bubble 우측 Ice Azure]
    Scroll --> WillBubble[William Bubble 좌측 Azure Night + 아바타]
    Scroll --> MayaBubble[Maya Bubble 좌측 Rose Terracotta + 아바타]
    Scroll --> CodyBubble[Cody Bubble 좌측 Polar Rose + 아바타]
```

### 메시지 흐름 · fake orchestrator

```mermaid
sequenceDiagram
    participant U as User
    participant I as AskAnythingInput
    participant O as fakeOrchestrator
    participant S as scenarios.json
    participant L as MessageList

    U->>I: 쿼리 입력 + Enter
    I->>L: 우측 User Bubble 즉시 push
    I->>O: dispatch(query)
    O->>S: matchScenario(query)
    S-->>O: ordered messages[William, Maya, Cody]
    loop 각 멘토 응답
        O->>L: TypingIndicator(agent) 표시
        Note over O: setTimeout(1.2~2.5s)
        O->>L: TypingIndicator 제거 + Bubble push
    end
```

### 핵심 구현 디테일

- **`fakeOrchestrator`** — 쿼리 키워드 기반 라우팅, [Mainplan.md](Mainplan.md) Fake Orchestrator 규칙을 그대로 따름:
  - 전략 키워드 → <span style="color:#4065F8">**William 단독**</span>
  - 스토리텔링 / 감정 키워드 → <span style="color:#B85C4F">**Maya 단독**</span>
  - 리서치 / AI workflow 키워드 → <span style="color:#9747FF">**Cody 단독**</span>
  - 그 외 / 복합 → 3명 모두 (랜덤 순서 + 1.2~2.5s 간격)
- **`MessageBubble`** — variant에 따라 그라데이션·정렬·아바타 표시 결정. 좌측 정렬일 때 아바타(40px 원형)를 버블 좌측에 고정.
- **`TypingIndicator`** — 좌측 정렬 · 해당 멘토 아바타 + 3점 애니메이션 (Framer Motion). 점에 멘토 그라데이션을 그대로 적용.
- **인트로 시퀀스** — 페이지 로드 직후 Cody의 mock 뉴스 메시지를 자동 push (`/mock/intro.json`).
- **자동 스크롤** — 새 메시지가 push되면 리스트 하단으로 smooth scroll.

### 검증 시나리오 · Phase 1 완료 기준

| # | 시나리오 | 기대 결과 |
|---|---|---|
| 1 | 페이지 로드 | Cody 인트로 메시지 자동 등장 (Polar Rose 버블 + Cody 아바타) |
| 2 | `"전략적으로 어떻게 접근해야 할까?"` 입력 | 우측 Ice Azure 버블 → 1초 후 William 타이핑 → Azure Night 버블 |
| 3 | `"스토리가 약한 것 같아요"` 입력 | Maya 단독 응답 (Rose Terracotta) |
| 4 | `"포트폴리오 전반에 대해 피드백 주세요"` 입력 | 3명 모두 순차 응답 (랜덤 순서) |
| 5 | 데스크탑 / 모바일 뷰포트 전환 | 데스크탑 중앙 프레임 · 모바일 풀스크린 |

---

## MVP 단계에서 절대 하지 말 것

<span style="color:#FF105C">**다음은 MVP에서 금지:**</span>

- vector DB
- LangGraph
- real multi-agent orchestration
- websocket realtime
- distributed agents
- overengineering

---

## 핵심 개발 철학

가장 중요한 것은 <span style="color:#9747FF">**"기술적으로 완벽한 AI"**</span>가 아니라 <span style="color:#B85C4F">**"실제 UX 멘토 팀과 대화하는 느낌"**</span>이다.

따라서 기술 복잡도보다 **감정적인 UX**와 **believable mentor interaction**을 최우선으로 구현한다.
