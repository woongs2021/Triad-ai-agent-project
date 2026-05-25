# Phase 4 · Web Shell Layout and Vercel Deployment 계획표

## 목표

Phase 1-3의 모바일 채팅 프로토타입을 그대로 유지하면서, 외부 방문자가 프로젝트 소개와 멘토 구성, 개발 과정을 함께 볼 수 있는 반응형 웹사이트 셸을 만든다.

핵심 목표:

- 메인 화면에서 현재 모바일 채팅창을 즉시 테스트 가능하게 배치
- 데스크탑: 좌측 프로젝트 설명, 우측 모바일 채팅 프레임
- 모바일: 채팅 풀스크린, 프로젝트 정보는 햄버거 플로팅 메뉴로 접근
- 메뉴: Project intro, AI Mentors, AI dev process
- Woong Design 기반의 연한 배경, 진한 텍스트 버튼, 단순한 타이포그래피
- Vercel 배포 가능한 Next.js App Router 구조

## 작업 브랜치

- `Project-dev-fourth-step`

## 라우트

| 경로 | 역할 |
|---|---|
| `/` | 메인: 짧은 프로젝트 설명 + 채팅 테스트 |
| `/intro` | README 기반 프로젝트 소개 |
| `/mentors` | William, Maya, Cody 소개 |
| `/process` | Phase 1-4 개발 과정 요약과 plan 링크 |

## 구현 체크리스트

| 항목 | 내용 |
|---|---|
| Site shell | `SiteShell`, `SiteHeader`, `MobileMenuOverlay`, `HamburgerButton` 구현 |
| Routes | `/`, `/intro`, `/mentors`, `/process` 페이지 구성 |
| Persistent chat | `ChatWindow`를 shell 안에 두어 라우트 이동 시 유지 |
| Responsive | 데스크탑 2-column, 모바일 채팅 풀스크린 |
| Animation | `framer-motion`으로 컨텐츠 전환/모바일 메뉴 애니메이션 |
| Content | README, Agent md, plans 기반 컨텐츠 정리 |
| Docs | README/Mainplan에 Phase 4와 Vercel 배포 안내 추가 |
| Verification | typecheck/build 및 모바일/데스크탑 수동 확인 |

## Vercel 배포 메모

- GitHub 저장소를 Vercel 프로젝트에 연결
- Vercel 환경변수에 `GEMINI_API_KEY` 등록
- `.env.local`은 GitHub에 커밋하지 않음
- 기본 빌드 명령은 `next build`

## Phase 4에서 하지 않는 것

- 인증/사용자 계정
- 다국어
- CMS
- Analytics
- 새로운 AI 기능 추가
