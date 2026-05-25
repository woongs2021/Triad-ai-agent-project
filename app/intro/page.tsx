import Link from "next/link";

export default function IntroPage() {
  return (
    <section>
      <p className="text-[12px] font-bold tracking-[0.18em] text-[#4065F8] uppercase">Project intro</p>
      <h1 className="mt-5 text-[40px] leading-[1.02] font-semibold tracking-[-0.06em] text-[#001C33]">
        A believable AI UX mentor team, not a generic chatbot.
      </h1>
      <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-[#001C33]/72">
        <p>
          Triad AI UX Mentor는 AI-native UX 멘토링 경험을 위한 lightweight MVP입니다.
          우선순위는 기술적 복잡도가 아니라, 작고 사려 깊은 UX 멘토 팀이 실시간으로
          함께 있는 듯한 감각을 만드는 것입니다.
        </p>
        <p>
          William은 전략과 product reasoning을 담당하고, Maya는 감정적 명확성과
          storytelling을 강화하며, Cody는 리서치, 사용성 근거, AI workflow 운영 관점으로
          대화를 grounded하게 만듭니다.
        </p>
        <p>
          이 제품은 모바일 우선 메신저 인터페이스, 단계적으로 등장하는 응답,
          typing indicator, 색상과 persona 매핑을 통해 그룹 채팅형 멘토링 경험을 만듭니다.
        </p>
      </div>
      <div className="mt-10 grid gap-4">
        {[
          ["Core UX", "모바일 우선 채팅, 멘토 아바타, 부드러운 단계별 응답, believable realtime interaction을 중심으로 구성합니다."],
          ["AI layer", "Gemini 2.5 Flash가 멘토 응답을 생성하고, mock fallback이 프로토타입의 안정성을 유지합니다."],
          ["Daily signal", "Cody는 RSS 기반 UX/AI 뉴스 브리프를 공유하며, 같은 날 캐시와 fallback 컨텐츠를 함께 사용합니다."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-[28px] bg-canvas/70 p-5 shadow-sm shadow-[#001C33]/5">
            <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-[#001C33]">{title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[#001C33]/68">{body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-5 text-[14px] font-bold">
        <Link href="/process" className="text-[#771B0E] transition hover:text-[#4065F8]">
          개발 과정 보기
        </Link>
        <a
          href="https://github.com/woongs2021/Triad-ai-agent-project/blob/main/Mainplan.md"
          className="text-[#001C33]/65 transition hover:text-[#001C33]"
        >
          Mainplan.md
        </a>
      </div>
    </section>
  );
}
