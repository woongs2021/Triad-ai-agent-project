# Woong Design System

> AI 시대의 제품을 위한 범용 디자인 정책. 강의용 디자인 시스템의 토큰을 베이스로, AI-native 제품 설계 원칙을 더했다.

## Overview

Woong Design은 *학습지의 정서*를 디지털 제품에 옮긴 디자인 정책이다. 베이스는 따뜻한 오프-화이트 (`{colors.canvas}` — #FCFCFF)와 짙은 잉크 (`{colors.ink}` — #010102) 위에서 작동한다 — 시중 SaaS의 차가운 그레이-슬레이트 톤과 의도적으로 거리를 둔다. 디스플레이 활자는 **Samsung Sharp Sans**를 weight 300으로 깔고, 한국어 본문은 **Pretendard** weight 400으로 호흡을 맞춘다.

브랜드의 전압은 두 갈래로 흐른다. **쿨 톤(Cool tone)** — Kinetic Azure 코랄과 Phantom Night 네이비 — 은 *도구적 화면*에 쓰인다: 평가, 분석, 데이터, 코드, 에디터, 결과 리포트. **웜 톤(Warm tone)** — Terracotta Red와 Soft Nude Beige — 은 *대화적 화면*에 쓰인다: 코칭, 안내, 회고, 축하, 사람 사이의 메시지.

이 두 팔레트는 한 페이지 안에서 섞이지 않는다. <span style="color:#4065F8">**"지금 화면이 도구인가"**</span> · <span style="color:#B85C4F">**"대화인가"**</span> 라는 단순한 질문이 곧 톤 결정의 기준이 된다.

시스템에는 네 개의 기본 표면 모드가 있다:
1. **Canvas** (`{colors.canvas}` — #FCFCFF) — 본문의 기본 바닥
2. **Soft surface** — Polar Dew (#A1D0F6) 또는 Soft Nude Beige (#EEDCD6) — 카드, 빈 상태, 섹션 분리
3. **Primary block** — Kinetic Azure (#4065F8) 또는 Terracotta Red (#B85C4F) — 풀블리드 CTA, 결과 발표 모먼트
4. **Deep surface** — Phantom Night (#001C33) — 코드 / 결과 / 에디터 같은 도구 표면

쿨↔웜 페어링과 Canvas↔Deep 대비가 페이지의 페이싱 리듬이다.

**Key Characteristics**
- 따뜻한 오프-화이트 캔버스 (`{colors.canvas}` — #FCFCFF) 위에 짙은 잉크 텍스트 (`{colors.ink}` — #010102). 순백이 아닌 미세한 푸른 기.
- 두 톤 시스템 — Cool tone은 **도구·평가·데이터**, Warm tone은 **대화·코칭·축하**. 한 페이지 안에서 섞지 않는다.
- 디스플레이 헤드라인은 Samsung Sharp Sans weight **300 (light)**. weight 700은 *임팩트 모먼트*에만.
- 한국어 본문은 Pretendard weight 400 (regular). 700 bold는 *밑줄 친 핵심 문장* 빈도로만.
- <span style="color:#FF105C">**이모지 없음. 일러스트 없음. 그라디언트 없음.**</span> 시각 표현은 활자·색면·여백 셋으로만.
- 코너 라운드는 단계적: `{rounded.tile}` 28px, `{rounded.frame}` 24px, `{rounded.tag}` 5px, `{rounded.pill}` 999px.
- 섹션 간격 `{spacing.section}` 80px — 강의 자료의 챕터 호흡.

---

## Colors

### Brand & Accent

#### Cool tone — 도구 / 평가 / 데이터 화면
사용자가 *결과를 받아보거나*, *데이터를 다루거나*, *시스템과 협상하는* 화면에 쓴다.

- **Kinetic Azure** (`{colors.cool-primary}` — #4065F8) — Cool 톤의 시그니처. 분석 시작 CTA, 차트의 메인 바, 진행 표시줄. 가장 자주 쓰이는 액션 색.
- **Polar Dew** (`{colors.cool-soft}` — #A1D0F6) — 부드러운 배경 카드. 모듈 카드, 빈 상태, 부가 정보 영역.
- **Iron Navy** (`{colors.cool-mid}` — #16427C) — 헤더 바, 강조 텍스트. Primary와 Deep 사이의 중간 무게.
- **Phantom Night** (`{colors.cool-deep}` — #001C33) — 결과 화면, 코드 에디터, 도구적 표면의 대표.
- **Luminous Ice** (`{colors.cool-tint}` — #CAF7FF) — 인라인 형광펜 톤. 점수 변화·중요 문장 *밑줄* 효과.
- **Mystic Violet** (`{colors.cool-accent}` — #9747FF) — 매우 절제된 보조색. AI 추천·생성된 콘텐츠 표시 한 곳에만.
- **Silver Moss** (`{colors.cool-mute}` — #A8BFC1) — 비활성, 차분한 배경. 60% 투명도로 자주 쓰임.

#### Warm tone — 대화 / 코칭 / 축하 화면
사용자가 *사람의 목소리를 듣거나*, *감정을 다루거나*, *축하받는* 화면에 쓴다.

- **Terracotta Red** (`{colors.warm-primary}` — #B85C4F) — Warm 톤의 시그니처. 코칭 CTA, 매칭 강조, 합격 발표.
- **Dusty Rose** (`{colors.warm-soft}` — #C8847D) — 부드러운 강조. 카드 헤드라인 배경, '나' 말풍선.
- **Soft Nude Beige** (`{colors.warm-tint}` — #EEDCD6) — 따뜻한 카드 표면. 프로필 카드, 응원 메시지, 회고 노트.
- **Hard Nude Beige** (`{colors.warm-mute}` — #A38E85) — 비활성·보조 텍스트. Warm 컨텍스트의 muted.
- **Deep Cocoa Brown** (`{colors.warm-mid}` — #754039) — 중간 무게의 강조. 인용·격언 카드의 텍스트.
- **Auburn Flare** (`{colors.warm-accent}` — #8C3124) — Warm primary의 active 상태.
- **Abyssal Red** (`{colors.warm-deep}` — #771B0E) — 가장 진한 톤. 중대한 알림.

### Surface & Text

| Token | Value | Use |
|---|---|---|
| **Canvas** (`{colors.canvas}`) | #FCFCFF | 모든 페이지의 기본 바닥. 라이트 모드 floor. |
| **Canvas dark** (`{colors.canvas-dark}`) | #010102 | 다크 모드의 바닥. 도구 / 에디터 모드. |
| **Ink** (`{colors.ink}`) | #010102 | 헤드라인·본문 기본 색. |
| **On dark** (`{colors.on-dark}`) | #FCFCFF | 다크 표면 위 텍스트. |
| **Stroke** (`{colors.stroke}`) | rgba(1,1,2,0.4) | 카드 외곽선·디바이더. |
| **Stroke dark** (`{colors.stroke-dark}`) | rgba(252,252,255,0.4) | 다크 모드 외곽선. |
| **Muted ink** (`{colors.muted}`) | rgba(1,1,2,0.6) | 캡션, 메타, 설명. |
| **Muted soft** (`{colors.muted-soft}`) | rgba(1,1,2,0.4) | 페이지 번호, 사이드 노트. |

### Semantic

- **Warning** (`{colors.warning}` — #FF105C) — 마감 임박, 시스템 한도 임박. 가장 *시끄러운* 색.
- **Success** — 완료 / 성공은 톤별 primary 자체로 처리 (Cool: #4065F8, Warm: #B85C4F). 일반적인 초록색을 쓰지 않는다 — 브랜드의 의도.
- **Info** — 정보는 Cool primary (#4065F8). 별도 색을 두지 않는다.
- **AI-generated content** — Mystic Violet (#9747FF)의 *얇은 보더 / 작은 점*으로만 표시. 풀블리드 배경 금지.

### Gradients

그라데이션은 베이스 시스템의 *플랫 색면* 원칙에 대한 **예외**다. 일반 페이지 배경·본문 카드에는 쓰지 않는다. 표지·시즌 캠페인·합격 발표·온보딩 같은 *모먼트* 에만 등장시킨다. 모든 그라데이션은 **−45°(우상 → 좌하)** 로 통일되어 있다.

네 그룹으로 분류한다 — 톤 분리가 명확한 두 그룹(쿨/웜 톤온톤)과 보색 충돌 없이 묶은 두 그룹(혼합 강/약).

#### Cool ramps (`{gradient.cool.*}`) — 도구·평가·데이터 화면
쿨톤 안에서 끝점만 이동하는 톤온톤 그라데이션. 톤이 분리되는 화면에 사용.

| Token | From → To | L 변화 | Use |
|---|---|---|---|
| `{gradient.cool.ice-azure}` | Luminous Ice #CAF7FF → Kinetic Azure #4065F8 | 90 → 61 | 데이터 카드 헤더, 분석 시작 배너 |
| `{gradient.cool.polar-iron}` | Polar Dew #A1D0F6 → Iron Navy #16427C | 80 → 29 | 학습 모듈 표지, 새벽 톤의 챕터 오프너 |
| `{gradient.cool.azure-night}` | Kinetic Azure #4065F8 → Phantom Night #001C33 | 61 → 10 | 코드 / 결과 풀블리드, 도구적 히어로 |
| `{gradient.cool.violet-azure}` | Mystic Violet #9747FF → Kinetic Azure #4065F8 | 64 → 61 | AI 생성 콘텐츠 헤더, *electric* 모먼트 |
| `{gradient.cool.moss-phantom}` | Silver Moss #A8BFC1 → Phantom Night #001C33 | 70 → 10 | 차분한 도입부, 빈 상태의 큰 배경 |

#### Warm ramps (`{gradient.warm.*}`) — 코칭·축하·회고 화면
웜톤 안에서 끝점만 이동하는 톤온톤 그라데이션.

| Token | From → To | L 변화 | Use |
|---|---|---|---|
| `{gradient.warm.beige-rose}` | Soft Beige #EEDCD6 → Dusty Rose #C8847D | 88 → 64 | 코칭 카드 표지, 환영 배너 |
| `{gradient.warm.rose-terracotta}` | Dusty Rose #C8847D → Terracotta Red #B85C4F | 64 → 52 | 멘토 매칭, 따뜻한 CTA 배경 |
| `{gradient.warm.terracotta-cocoa}` | Terracotta Red #B85C4F → Cocoa Brown #754039 | 52 → 34 | *저녁 노을* 톤. 회고 시트, 시즌 마감 |
| `{gradient.warm.sand-auburn}` | Hard Beige #A38E85 → Auburn Flare #8C3124 | 58 → 35 | 차분한 알림, 깊이 있는 코칭 카드 |
| `{gradient.warm.terracotta-abyssal}` | Terracotta Red #B85C4F → Abyssal Red #771B0E | 52 → 26 | **합격 발표 풀블리드**, 가장 큰 축하 모먼트 |

#### Mixed · Strong (`{gradient.mixed.strong.*}`) — 큰 소리 자리
Cool × Warm 혼합. 두 끝 모두 채도가 높거나 깊고, **비슷한 무게끼리** 묶었다 — Kinetic Azure × Terracotta Red 같은 정면 보색 충돌은 피한다.

| Token | From → To | 무게 | Use |
|---|---|---|---|
| `{gradient.mixed.strong.violet-terracotta}` | Mystic Violet #9747FF → Terracotta Red #B85C4F | sat × sat | 키노트 시그니처 슬라이드, 시즌 캠페인 표지 |
| `{gradient.mixed.strong.iron-cocoa}` | Iron Navy #16427C → Cocoa Brown #754039 | muted dark | 챕터 디바이더, 무게감 있는 풀블리드 |
| `{gradient.mixed.strong.night-abyssal}` | Phantom Night #001C33 → Abyssal Red #771B0E | 가장 깊음 | 종료 / 결과 발표 배경 |
| `{gradient.mixed.strong.violet-auburn}` | Mystic Violet #9747FF → Auburn Flare #8C3124 | sat → dark | AI 생성 + 사람 콘텐츠 혼합 모먼트 |

#### Mixed · Soft (`{gradient.mixed.soft.*}`) — 조용한 자리
Cool × Warm 혼합. 두 끝 모두 연한 톤 — 부드러운 톤 블렌드.

| Token | From → To | 무게 | Use |
|---|---|---|---|
| `{gradient.mixed.soft.ice-beige}` | Luminous Ice #CAF7FF → Soft Beige #EEDCD6 | 가장 옅음 | 온보딩 배경, 빈 상태, 회고 노트 |
| `{gradient.mixed.soft.polar-rose}` | Polar Dew #A1D0F6 → Dusty Rose #C8847D | light × light | 표지 부드러운 톤, 환영 페이지 |
| `{gradient.mixed.soft.moss-beige}` | Silver Moss #A8BFC1 → Hard Beige #A38E85 | 저채도 뉴트럴 | 차분한 정보 배너, 정책 페이지 |
| `{gradient.mixed.soft.polar-beige}` | Polar Dew #A1D0F6 → Soft Beige #EEDCD6 | 가장 부드러움 | 첫 인상 표지, 빈 워크스페이스 |

#### Gradient 사용 규칙
- **모든 그라데이션은 −45°.** 다른 각도(0°, 90°, 135°)는 사용 금지.
- **한 페이지에 두 그룹 이상 섞지 않는다.** Cool ramp + Warm ramp 동시 사용 금지. Mixed Strong + Mixed Soft 동시 사용 금지.
- **카드·버튼·작은 컴포넌트에 쓰지 않는다.** 그라데이션의 자리는 *풀블리드 배경* 또는 *큰 헤더 배너* 뿐.
- **텍스트가 위에 올라가면 명도 차이를 확인한다.** Cool ramps의 *azure-night* / *moss-phantom* 위에서는 흰 글자, *ice-azure* / *beige-rose* 위에서는 짙은 글자.
- **그라데이션 위에 또 그라데이션을 겹치지 않는다.** 그라데이션 위 카드는 항상 플랫 색면.
- **AI 생성 콘텐츠를 위한 자리**는 `{gradient.cool.violet-azure}` 또는 `{gradient.mixed.strong.violet-auburn}` 둘 중 하나로 통일한다 — Mystic Violet이 들어간 ramp는 *AI의 흔적*을 의미한다.

---

## Typography

### Font Family

- **Samsung Sharp Sans** — 모든 영문 디스플레이 헤드라인, 큰 숫자, 라벨. weight **300 (Light)** 이 기본. weight 500 (Medium)은 카드 타이틀, weight 700 (Bold)은 페이지 당 한 번의 임팩트 모먼트.
- **Pretendard Variable** — 모든 한국어 본문·헤드라인. weight **400 (Regular)** 이 기본. weight 700은 한 문장 강조에만.
- **Inter** *Medium* — 12px UI 라벨 전용.
- **JetBrains Mono** — 코드·데이터·*프롬프트* 출력. AI 시대의 시스템에서 mono는 본문의 한 축이다.

폴백 스택은 다음을 따른다:
- Display: `"Samsung Sharp Sans", "Pretendard Variable", system-ui, sans-serif`
- Body: `"Pretendard Variable", "Pretendard", "Samsung Sharp Sans", system-ui, sans-serif`
- Label: `"Inter", "Pretendard Variable", system-ui, sans-serif`
- Mono: `"JetBrains Mono", "SF Mono", Consolas, monospace`

### Hierarchy

#### Display (Samsung Sharp Sans Light · 영문)

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-h1}` | 128px | 300 | 0.95 | -0.01em | 표지·온보딩 1차 |
| `{typography.display-h2}` | 100px | 300 | 0.96 | -0.01em | 섹션 오프너 |
| `{typography.display-h3}` | 80px | 300 | 1.0 | -0.005em | 결과·점수 큰 숫자 |
| `{typography.display-h4}` | 64px | 300 | 1.05 | 0 | 페이지 메인 제목 |
| `{typography.display-h5}` | 58px | 300 | 1.1 | 0 | 카드 헤드라인 |
| `{typography.display-impact}` | 200px | 700 | 0.85 | -0.02em | 임팩트 모먼트 *전용*. 페이지 당 1회. |

#### Korean Heading (Pretendard · 한국어)

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.kr-h1}` | 110px | 400 | 1.05 | 표지의 한국어 메인 |
| `{typography.kr-h2}` | 86px | 400 | 1.1 | 섹션 오프너 한국어 |
| `{typography.kr-h3}` | 78px | 400 | 1.15 | 페이지 한국어 제목 |
| `{typography.kr-h4}` | 68px | 400 | 1.2 | 카드 한국어 헤드 |
| `{typography.kr-h5}` | 58px | 500 | 1.25 | 모듈 / 카드 제목 |
| `{typography.kr-h6}` | 44px | 500 | 1.3 | 부제목, 섹션 라벨 |

#### Body & Labels

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.subtitle}` | 48px | 400 | 1.2 | 표지 한국어 부제 |
| `{typography.subtitle-sm}` | 40px | 400 | 1.25 | 섹션 부제 |
| `{typography.lead}` | 32px | 400 | 1.35 | 챕터 도입부 리드 문장 |
| `{typography.body}` | 24px | 400 | 1.5 | 본문 기본 |
| `{typography.body-sm}` | 20px | 400 | 1.55 | 카드 내부 본문 |
| `{typography.meta}` | 18px | 400 | 1.5 | 보조 텍스트, 설명 |
| `{typography.caption}` | 14px | 500 | 1.4 | 캡션, 페이지 푸터 |
| `{typography.label}` | 12px | 500 | 1 | UI 라벨 — Inter Medium · 1.5px 트래킹 |
| `{typography.mono}` | 14px | 400 | 1.5 | 코드, 프롬프트, 데이터 출력 |

### Principles

**Light가 기본, Bold는 사건이다.** 디스플레이는 weight 300으로 깔린다. 차분한 무게는 light에서 나온다. weight 700은 *완주*, *축하* 같은 페이지 당 한 번의 모먼트에만.

**한국어와 영문의 더블 라인이 시그니처다.** 영문 Sharp Sans Light로 *명사*를, 한국어 Pretendard Regular로 *문장*을 잇는다.

```
INTERVIEW                ← Sharp Sans Light 128px
실전처럼 연습하는 모의 면접  ← Pretendard Regular 48px
```

**Mono는 AI 시대의 두 번째 본문이다.** 프롬프트·생성된 코드·시스템 출력은 mono로 분리한다 — 사람의 글과 기계의 글을 활자로 구분한다. 이는 단순한 장식이 아니라 *출처를 시각적으로 가르는* 정책이다 (Karpathy의 *Software 3.0* 관점: 프롬프트는 코드다 → 코드는 mono다).

**Negative tracking은 디스플레이의 호흡이다.** 80px 이상 헤드라인은 -0.01em 이상의 음수 트래킹.

**Bold body는 한 문장만.** 한 문단에서 `<strong>`은 한 번만.

### Note on Font Substitutes

Samsung Sharp Sans Regular / Medium / Bold (400 / 500 / 700)는 번들되어 있으나 **Light (300) weight 파일이 없다**. 현재 weight 300 요청은 브라우저가 400 파일로 폴백한다 — Sharp Sans Light .otf 파일이 추가되어야 *학구적 가벼움*이 살아난다.

---

## Layout

### Spacing System
- **Base unit:** 2px.
- **Tokens:**
  `{spacing.xs}` 8px ·
  `{spacing.sm}` 10px ·
  `{spacing.md}` 14px ·
  `{spacing.lg}` 24px ·
  `{spacing.xl}` 32px ·
  `{spacing.2xl}` 48px ·
  `{spacing.section}` 80px ·
  `{spacing.bleed}` 56px.
- **Section 간격:** `{spacing.section}` (80px) — 챕터 호흡.
- **카드 내부 패딩:** `{spacing.xl}` (32px).
- **풀블리드 CTA:** `{spacing.2xl}` (48px) 내부 패딩.

### Grid & Container
- **데스크톱 max-width:** 1280px (학습 자료의 *교과서 폭*).
- **모바일 우선의 단일 컬럼**, 데스크톱에서 12-column 그리드.
- **데이터 화면(좌6/우6):** 좌측 본문 / 우측 사이드패널.
- **AI 코파일럿 레이아웃(좌7/우5):** 좌측 작업물 / 우측 AI 코멘트 사이드바. 좌측이 항상 우선.

### Whitespace Philosophy

여백은 *읽기의 속도*다. 카드 사이 24px, 카드-섹션 사이 48px, 섹션-섹션 사이 80px. 모든 간격이 활자의 줄간격과 비례한다.

**한 화면에 한 가지 일.** 사이드바·툴바·플로팅 버튼을 동시에 띄우지 않는다.

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | 그림자 없음, 외곽선 없음 | 본문 섹션, 풀블리드, 결과 발표 |
| Hairline | 1px `{colors.stroke}` | 카드, 입력, 디바이더 |
| Soft surface | `{colors.cool-soft}` 또는 `{colors.warm-tint}` | 콘텐츠 카드 |
| Deep surface | `{colors.cool-deep}` 또는 `{colors.warm-deep}` | 결과·코드·에디터 |
| Drop shadow | **사용하지 않음** | — |

**색면 우선, 그림자 없음.** 깊이는 그림자가 아니라 *표면 색의 단계*에서 나온다. Canvas → Soft surface → Card 라는 *세 단계의 표면*이 깊이의 어휘.

### Decorative Depth
- **밑줄 형광펜 효과:** Cool 톤에서는 Luminous Ice (#CAF7FF), Warm 톤에서는 Dusty Rose (#C8847D)를 50% 알파로. AI가 강조한 텍스트, 키워드 하이라이트에 사용.
- **언더스코어 텍스트 패턴:** `프로젝트_2026_v2` 같은 메타 정보는 `_` 구분자를 그대로 노출.
- **번호 매김:** 큰 숫자로 단독 배치 (Sharp Sans Light 200px+). 아이콘 대신 *숫자가 시각 요소*.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | 인라인 태그, 인풋 내부 칩 |
| `{rounded.tag}` | 5px | 콘텐츠 그룹 컨테이너 |
| `{rounded.sm}` | 8px | 작은 버튼, 드롭다운 아이템 |
| `{rounded.md}` | 12px | 입력 필드, 일반 버튼 |
| `{rounded.lg}` | 16px | 콘텐츠 카드 |
| `{rounded.frame}` | 24px | 큰 컨테이너, 모달, 슬라이드 프레임 |
| `{rounded.tile}` | 28px | 모듈 카드 — 시그니처 라운드 |
| `{rounded.pill}` | 999px | 상태 핀 |
| `{rounded.full}` | 50% | 아바타 |

**28px tile radius**는 시스템의 시각적 시그니처다.

### Photography & Illustrations
- **사진 사용 금지** — 인물 표현은 모노톤 처리된 작은 원형 아바타 (40px)로만.
- **일러스트 사용 금지** — 빈 상태·온보딩에 큰 활자와 색면을 사용한다.
- **차트는 활자 미니멀 스타일** — 단색 면 + 큰 숫자 라벨. 격자·그라디언트 없음.
- **AI 의인화 금지** — 로봇·말풍선 캐릭터·아바타 사용 금지. AI는 *목소리*이지 *얼굴*이 아니다.

---

## Designing for AI-Native Products

> 안드레 카파시 (Andrej Karpathy)가 2024–2025년 사이 정리한 **Software 3.0** 관점을 디자인 정책으로 옮긴 섹션. 이 시스템은 *AI를 기능으로 끼워 넣는 제품* 이 아니라 *AI를 기본 소재로 짓는 제품* 을 위한 가이드를 제공한다.

### 1. 프롬프트는 1급 객체다 (Software 3.0)

카파시는 *English is the new programming language* 라고 말했다. 프롬프트가 곧 코드다. 디자인은 이 사실을 시각적으로 받아들여야 한다.

- **프롬프트는 mono 활자로 분리한다.** `{typography.mono}` (JetBrains Mono 14px)를 사용해 사람의 문장과 기계로 향하는 문장을 구분한다.
- **프롬프트는 항상 *보이게* 한다.** "AI가 알아서 했다" 라고 숨기지 않는다. 결과 카드의 하단에 *Used prompt* 디스클로저를 둔다 — 접혀 있을 수 있지만 *없지는 않아야* 한다.
- **프롬프트는 *편집 가능해야* 한다.** 같은 자리에서 프롬프트를 손보고 *재생성* 할 수 있어야 한다. 한 번의 결과로 끝내지 않는다.
- **시스템 프롬프트와 사용자 프롬프트는 시각적으로 다르다.** 시스템 프롬프트는 Mystic Violet (`#9747FF`) 8px 좌측 보더로 표시, 사용자 프롬프트는 보더 없음.

### 2. 자율성 슬라이더 (The Autonomy Slider)

카파시는 *모든 AI 인터페이스는 자율성의 슬라이더 위에서 작동해야 한다* 고 했다 — 사용자가 *AI에게 얼마나 맡길지* 를 매 순간 조절할 수 있어야 한다는 뜻이다.

- **버튼이 아니라 슬라이더.** "AI에게 맡기기" 같은 *이진 결정*을 강제하지 않는다. 항상 세 단계 이상의 옵션을 제시한다:
  - **Suggest** — 제안만. 적용은 사용자가.
  - **Draft** — AI가 초안을 작성, 사용자가 검토 후 확정.
  - **Autopilot** — AI가 실행. 사용자는 사후에 검토.
- **세 단계는 색으로 표시한다:** Suggest → Polar Dew, Draft → Kinetic Azure, Autopilot → Phantom Night. 자율성이 깊어질수록 톤이 깊어진다.
- **현재 자율성 모드를 화면 어딘가에 *항상* 표시한다.** 사용자가 자기도 모르게 *Autopilot* 상태에 있는 일은 없어야 한다 — 우측 상단의 작은 `{badge-pill}` 로.

### 3. 생성과 검증의 분리 (Generation vs Verification)

카파시는 *AI 시대의 디자인은 생성 흐름이 아니라 **검증 흐름**을 설계하는 일* 이라고 말했다. 생성은 빠르지만 검증은 사람이 해야 한다.

- **생성 결과는 *검증 가능한 단위* 로 나눈다.** 한 덩어리의 텍스트가 아니라, 문단·문장·표현 단위로 토글이 붙어야 한다.
- **검증의 시각 단서를 강하게.**
  - 신뢰도 높음 → 본문 그대로
  - 불확실 → `{colors.cool-tint}` 형광펜 + 좌측 ⓘ 표시
  - 위험·환각 가능성 → `{colors.warning}` 점선 밑줄
- **빠른 수락 / 빠른 거절** — 한 키스트로크로 처리 가능해야 한다. `Tab` = accept, `Esc` = reject, `Cmd+E` = edit.
- **Diff는 기본 UI다.** AI가 본문을 고쳤다면, 고친 전후를 *항상 diff로* 보여준다. Diff 없는 자동 수정은 금지.

### 4. AI는 *유능하지만 불안정한 신입* 이다 (Jagged Intelligence)

카파시는 LLM을 *유능한 신입 인턴* 에 비유했다. 어떤 일은 놀랍게 잘 하고, 어떤 일은 어이없게 못 한다. UI는 이 사실을 *감춰서는 안 된다*.

- **불확실성을 노출한다.** 점수, 신뢰도, 출처 — AI가 *얼마나 확신하는지* 를 숫자나 색으로 표시한다.
- **출처를 *클릭 가능* 하게.** "이 코멘트는 어디서 왔는가" — 마우스오버 시 근거 텍스트가 뜨도록.
- **모든 AI 액션은 *되돌릴 수 있어야* 한다.** Undo가 없는 AI 액션은 금지. *Autopilot* 모드의 액션도 30초 안에 취소 가능해야 한다.
- **AI의 *실패* 도 시각적으로 정의한다.** "결과를 생성할 수 없어요" 가 아니라 *왜 실패했는지* 를 한 줄로. 시스템의 한계가 노출되어야 사용자가 신뢰한다.

### 5. 컨텍스트는 통화다 (Context as Currency)

LLM은 컨텍스트 윈도우 안에서만 작동한다. 사용자가 *지금 AI에게 무엇이 보이는지* 를 알아야 한다.

- **컨텍스트 박스를 항상 보여준다.** 우측 사이드바에 *현재 AI가 보고 있는 자료* 의 리스트를 노출. 사용자는 항목을 *추가 / 제거* 할 수 있어야 한다.
- **컨텍스트는 토큰 단위로 시각화한다.** 진행 막대로 *얼마나 찼는지* 를 보여준다 — 사용자는 *공간이 한정되어 있음* 을 시각적으로 안다.
- **사용자의 *개인 컨텍스트* 와 *세션 컨텍스트* 는 다르게 표시한다.** 영구 컨텍스트는 `{rounded.pill}` 핀, 세션 컨텍스트는 `{rounded.tag}` 사각 라벨.
- **컨텍스트 누락이 결과의 한계를 만든 경우, *그 사실을 결과 카드에 적는다*.** "관련 자료 3개가 추가되지 않아 일반 지식으로만 답했어요" 같은 한 줄.

### 6. 데모와 제품의 간극 (Demo-to-Product Gap)

카파시는 *유려한 데모는 종종 brittle한 제품을 가린다* 고 경고했다. UI는 *데모적 마법* 보다 *제품적 정직함* 을 택해야 한다.

- **로딩 애니메이션에 의존하지 않는다.** "생각 중..." 으로 시간을 끄는 대신, *진짜 부분 결과* 를 스트리밍으로 보여준다.
- **버튼 한 번에 *모든 게 해결되는* UI는 의심한다.** 그런 UI는 데모에서만 작동한다. 단계별 확인 흐름이 *덜 매끄러워 보여도 더 정직하다*.
- **AI의 *비용* 을 숨기지 않는다.** 호출 횟수·소요 시간·토큰 사용량을 작은 캡션으로 노출. 사용자가 *시스템을 이해할 권리* 가 있다.
- **"마법" 이라는 단어를 카피에서 금지.** 대신 *어떻게 작동하는지* 를 짧게 설명한다.

### 7. AI의 *결과물* 은 시각적으로 표시된다

사람이 쓴 것과 AI가 쓴 것을 구별할 수 있어야 한다 — 사용자가 *판단의 책임을 분배* 할 수 있도록.

- **AI 생성 콘텐츠는 Mystic Violet (`#9747FF`)의 좌측 2px 보더로 표시한다.** 풀블리드 보라색 배경은 금지 — 단지 *작은 흔적*.
- **AI 아바타를 만들지 않는다.** 대신 작은 글자 라벨 `AI` 또는 모델 이름을 mono 활자로 표시.
- **Mixed content** — 사람과 AI가 함께 쓴 콘텐츠는 *AI가 쓴 부분만* Mystic Violet 밑줄로. 단락 전체를 칠하지 않는다.

### 8. 새로운 컴포넌트들

AI-native 제품에만 등장하는 컴포넌트들. 이들은 기존 SaaS 어휘에 없다.

- **`{component.prompt-pad}`** — 프롬프트 입력 영역. Canvas 배경, mono 활자, 24px padding, `{rounded.frame}` 라운드. 우측 하단에 모델 선택자와 *Run* 버튼.
- **`{component.context-rail}`** — 우측 사이드바에 고정. 현재 컨텍스트 자료 리스트 + 토큰 사용량 막대 + *Add to context* 버튼.
- **`{component.confidence-meter}`** — 0–100 사이의 신뢰도 인디케이터. `{progress-bar}` 와 시각적으로 동일하지만 라벨이 "Confidence" 로 명시.
- **`{component.autonomy-slider}`** — 3단계 토글. Suggest / Draft / Autopilot. 현재 모드에 따라 우측의 액션 버튼 색이 바뀐다.
- **`{component.diff-block}`** — Before / After 두 패널. 좌측 `{colors.warm-tint}`, 우측 `{colors.cool-soft}`. 변경된 단어는 굵게.
- **`{component.thinking-trace}`** — AI의 *생각 과정* 을 접힌 상태로 표시. 클릭하면 펼쳐지는 작은 모노타입 박스. 카파시의 *show the working* 원칙.

---

## Components

### Top Navigation

**`top-nav`** — 80px 높이, Canvas 배경, 1px hairline 하단 보더. 좌측 워드마크 (Sharp Sans Light 24px), 중앙 메인 메뉴, 우측 알림 핀 + 프로필 아바타. 메뉴 아이템은 `{typography.label}` Medium 1.5px tracking, 대문자.

**`top-nav-deep`** — 도구 / 작업 모드에서 다크 표면으로 전환. `{colors.cool-deep}` 배경.

### Page Title Bar

**`page-title-bar`** — 80px 풀블리드 바. 좌측 라벨 + 우측 페이지 번호. 내부 패딩 26px × 63px. 세 변형:
- **`.azure`** — Cool primary 위 흰색 (도구·평가 컨텍스트)
- **`.peach`** — Soft Nude Beige 위 ink (대화·코칭 컨텍스트)
- **`.deep`** — Phantom Night 위 흰색 (결과·완료 컨텍스트)

### Buttons

**`button-primary-cool`** / **`button-primary-warm`** — 톤별 시그니처 CTA. 배경 톤 primary, 텍스트 흰색, `{typography.label}` Medium uppercase, 패딩 14px × 24px, 높이 44px, `{rounded.md}`.

**`button-secondary`** — Canvas 배경 + 1px ink hairline. 톤과 무관한 *중성 액션*.

**`button-ghost`** — 배경 없음. 톤 컨텍스트의 mid 컬러 텍스트.

**`button-ai`** — *Mystic Violet (#9747FF)* 1px 보더 + Canvas 배경. AI 생성 / AI 호출 액션 전용. "Generate", "Re-roll" 등.

### Cards & Containers

**`module-card`** — 콘텐츠 모듈. Canvas + 1px hairline, `{rounded.tile}` (28px), 패딩 `{spacing.xl}`.

**`module-card-active`** — 진행 중. Cool soft 배경으로 전환. 라운드·패딩·외곽선 동일.

**`coaching-card`** — 대화 / 코멘트 카드. Soft Nude Beige 배경, `{rounded.tile}`. 좌측에 40px 원형 아바타, 우측에 이름 + 한 줄 코멘트. 외곽선 없음.

**`result-card-deep`** — 결과 / 분석. Phantom Night 배경, 흰색 텍스트, `{rounded.frame}` (24px), 패딩 48px. 큰 숫자 점수 + 항목별 막대.

**`celebration-card`** — 완주 발표. Terracotta Red 풀블리드, 흰색, `{rounded.frame}`, 패딩 64px. `{typography.display-impact}` 200px Bold.

**`code-window`** — 코드 / 데이터 뷰. Phantom Night 배경, 라인 넘버, JetBrains Mono 14px.

**`prompt-pad`** — *AI 입력 영역*. Canvas + 1px hairline, `{rounded.frame}`, 패딩 24px. 본문은 mono. 우하단에 모델 선택 + Run 버튼.

**`context-rail`** — *AI 컨텍스트 사이드바*. 우측 고정, Canvas 배경 + 좌측 1px hairline. 상단에 토큰 막대, 중간에 자료 리스트 (`{rounded.tag}` 라벨), 하단에 *Add to context* 버튼.

**`stat-tile`** — 통계 타일. Canvas 또는 Cool soft, `{rounded.tile}`. 숫자 Sharp Sans Light 100~128px.

### Inputs & Forms

**`text-input`** — 단일 라인 입력. Canvas, `{typography.body-sm}`, `{rounded.md}`, 패딩 14px × 18px, 높이 48px, 1px hairline.

**`text-input-focused`** — 외곽선이 톤별 primary로 + 3px primary-15% 글로우.

**`textarea`** — 큰 입력 영역. Canvas + 1px hairline, `{rounded.lg}`, 패딩 32px. 우하단 글자 수 카운터.

**`select`** — 드롭다운. text-input + 우측 chevron.

**`progress-bar`** — 진도 / 진행. 배경 stroke 0.2 알파, 진행 면 톤별 primary. 높이 6px, `{rounded.pill}`.

**`confidence-meter`** — `progress-bar` 의 변형. 라벨이 `Confidence` 또는 `신뢰도`로 명시되고, 60% 이하면 막대 색이 `{colors.warning}`으로.

### Tags / Badges

**`badge-pill`** — Canvas + 1px hairline, `{typography.label}` 12px, `{rounded.pill}`, 패딩 6px × 14px.

**`badge-cool`** / **`badge-warm`** — 톤 primary 배경, 흰색 텍스트.

**`badge-warning`** — Warning 배경, 흰색.

**`badge-ai`** — Mystic Violet 1px 보더 + Canvas. 라벨 텍스트가 mono. "GPT-5", "Claude 4.5" 등 모델 이름.

**`badge-status-dot`** — 8px 원형 점 + 라벨. 진행 중 / 완료 / 대기.

### CTA / Footer

**`cta-band-cool`** / **`cta-band-warm`** / **`cta-band-deep`** — 풀블리드 액션. 톤 primary 배경, `{rounded.frame}`, 패딩 64px. CTA는 흰색 배경 / 톤 primary 텍스트의 inverted button.

**`footer`** — Phantom Night 다크 푸터. 70% 알파 텍스트. 4컬럼 데스크톱 / 1컬럼 모바일. 절대 라이트로 인버트하지 않는다.

---

## Do's and Don'ts

### Do
- **모든 페이지를 Canvas (#FCFCFF)로 시작한다.** 순백은 다른 SaaS가 쓴다. 미세한 따뜻함이 시그니처.
- <span style="color:#4065F8">**컨텍스트로 톤을 결정한다.**</span> *지금 이 화면이 도구인가, 대화인가* 가 색을 결정한다.
- **헤드라인은 Sharp Sans Light + Pretendard Regular의 더블 라인.**
- **weight 700은 페이지 당 한 번.** 디스플레이를 굵게 하면 *학습지가 광고지가 된다*.
- **카드 라운드는 `{rounded.tile}` 28px이 기본.**
- **여백은 줄간격과 비례한다.** 24 / 48 / 80.
- <span style="color:#9747FF">**AI 액션은 *항상 자율성 슬라이더* 위에 있다.**</span> 이진 결정 금지.
- <span style="color:#9747FF">**프롬프트를 *보이게* 한다.**</span> mono 활자로, 접혀 있더라도 *없지는 않게*.
- <span style="color:#9747FF">**모든 AI 결과는 *되돌릴 수 있다*.**</span> Undo가 없는 AI 액션은 금지.
- **불확실성을 노출한다.** Confidence, 출처, 한계를 작은 활자로.
- **그라데이션은 모먼트 전용.** 표지·시즌·합격 발표 같은 *큰 화면*에만, 모두 −45°로 통일.

### Don't
- <span style="color:#FF105C">**이모지·일러스트·그라디언트를 쓰지 않는다.**</span> 시각 표현은 활자·색면·여백 셋으로만. *(그라데이션은 별도 토큰화된 모먼트 전용으로만 허용.)*
- <span style="color:#FF105C">**Cool과 Warm을 한 페이지에 섞지 않는다.**</span> 한 페이지는 한 톤. 그라데이션도 마찬가지 — 한 페이지에 두 그룹 이상 섞지 않는다.
- **디스플레이 헤드라인을 weight 500 이상으로 키우지 않는다.**
- **그림자를 넣지 않는다.** 깊이는 표면 색의 단계에서.
- **순백 #FFFFFF 또는 순흑 #000000을 쓰지 않는다.**
- <span style="color:#FF105C">**AI를 *의인화* 하지 않는다.**</span> 아바타·로봇·말풍선 캐릭터 금지.
- **Bold 한국어 본문을 두 문장 이상 쓰지 않는다.**
- <span style="color:#FF105C">**"마법" 이라는 단어를 카피에서 쓰지 않는다.**</span> AI는 시스템이지 마법이 아니다.
- <span style="color:#FF105C">**로딩 스피너로 시간을 끌지 않는다.**</span> 부분 결과를 스트리밍으로 노출한다.
- <span style="color:#9747FF">**AI 액션을 사용자 동의 없이 *자동 실행* 하지 않는다.**</span> Autopilot 모드도 명시적 활성화가 필요.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | 햄버거 네비; 디스플레이 128→56px; 그리드 1-up; AI 코파일럿은 *작업물 / AI* 탭 전환 |
| Tablet | 768–1024px | 상단 네비 압축; 그리드 2-up; 좌우 분할 유지 |
| Desktop | 1024–1440px | 전체 메뉴; 그리드 3-up; 코파일럿 좌우 동시 노출 |
| Wide | > 1440px | 외곽 여백 증가; max-width 1280px 고정 |

### Touch Targets
- 버튼 최소 44 × 44px.
- progress-bar 자체 높이는 6px이지만 탭 영역은 상하 16px 패딩으로 확장.
- 모듈 카드 전체가 탭 가능.

### Collapsing Strategy
- 상단 네비는 < 768px에서 햄버거 → 풀스크린 Canvas 시트.
- 좌우 분할 화면은 모바일에서 세로 스택 또는 탭 전환.
- AI 코파일럿 (`context-rail` + `prompt-pad`)은 모바일에서 *하단 드로워* 로 전환.
- 모듈 그리드는 컬럼 수만 줄인다. 카드 크기는 유지.

### Type Scaling
- 디스플레이 헤드라인은 데스크톱 100% → 태블릿 75% → 모바일 50%.
- 한국어 본문 (24px)은 모바일에서도 유지. 16px로 줄이지 않는다.
- 라벨 (12px)은 모바일에서 13px로 *오히려 키운다*.
- Mono (코드·프롬프트)는 모바일에서도 14px 유지.

### Image Behavior
- 모노톤 아바타는 모든 브레이크포인트에서 원형 유지.
- 차트는 모바일에서 세로형으로 회전.
- 코드 윈도우는 가로 스크롤 허용 — 줄바꿈 금지.

---

## Iteration Guide

1. **컴포넌트 하나에 집중한다.** YAML 키로 참조 (`{component.module-card}`, `{component.prompt-pad}`).
2. 변형 (`-active`, `-deep`, `-cool`, `-warm`, `-ai`)은 `components:` 내 별도 엔트리로.
3. **`{token.refs}`만 사용한다.** 인라인 hex 금지.
4. Hover는 문서화하지 않는다. Default와 Active/Pressed만.
5. **디스플레이는 Sharp Sans Light, 본문은 Pretendard Regular, AI는 mono.** 이 분담은 깨지 않는다.
6. **Cool과 Warm 두 톤이 시스템의 척추다.** 세 번째 톤을 추가하지 않는다.
7. 강조의 우선순위: *큰 활자* → *색면* → *bold* → *밑줄 형광펜*. 그림자·글로우는 절대 사용하지 않는다.
8. **컨텐츠 → 톤 매핑을 먼저 결정한다.** 새 페이지를 그리기 전에 *이건 도구인가, 대화인가* 부터.
9. **AI 기능은 자율성 슬라이더 위에서.** 새 AI 기능을 추가할 때 *Suggest / Draft / Autopilot* 세 모드를 모두 정의한다.
10. **프롬프트와 컨텍스트는 1급 시민이다.** 새 화면을 만들 때 *프롬프트가 어디 보이는지*, *컨텍스트가 어디 있는지* 부터 잡는다.

---

## Known Gaps

- **Samsung Sharp Sans Light (300) 파일이 없다.** 현재 weight 300 요청은 400 파일로 폴백한다.
- **차트 컴포넌트가 미정의.** *큰 숫자 + 단색 면* 원칙은 정해졌으나 실제 차트 라이브러리 스타일링이 미완성.
- **음성·영상 인터페이스 가이드 부재.** AI 음성 대화 / 영상 생성 / 실시간 캡처 UI의 톤 미정.
- **알림 / 토스트 시스템이 미정의.** AI 작업 완료 알림 양식 별도 정의 필요.
- **소셜 / SSO 로그인 버튼 (Google / Kakao / Naver) 의 톤 통합** 미해결.
- **인쇄용 (PDF) 템플릿이 미정의.** 활자 스케일·여백·페이지 번호 양식 별도 정의 필요.
- **다국어 (영문·일문) 본문 가이드 미정의.**
- **다크 모드의 Canvas 톤 (#010102) 위에서 톤 primary 의 채도 보정** 검증 필요.
- **AI 모델 표시 정책 미정.** 같은 화면에 여러 모델이 등장할 때의 라벨링 / 색 구분 규칙 부재.
- ***Thinking trace* (AI의 생각 과정 노출) 의 길이 정책 미정.** 항상 접힘인지, 토큰 수 임계점이 있는지 등.

---

## Appendix · References

이 정책은 다음 원칙을 종합한다:

- 베이스 디자인 시스템: 강의용 Design System (이 프로젝트의 `colors_and_type.css`, `README.md` 참조)
- AI-native 인터페이스 원칙: Andrej Karpathy, *Software Is Changing (Again)* — 2025년 6월 YC AI Startup School 강연. *Software 3.0*, *autonomy slider*, *demo-to-product gap*, *generation vs verification* 개념의 출처.
- 학습지의 활자 정서: 한국 교과서·문제집 활자 호흡에서 차용.

Karpathy의 원문 강연은 공개되어 있으나, 이 문서의 원칙 매핑은 이 디자인 시스템 컨텍스트에서의 *해석* 이다 — 원문에 *Mystic Violet 좌측 보더* 같은 시각 구현은 없다.
