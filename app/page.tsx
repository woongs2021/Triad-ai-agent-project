import Link from "next/link";

export default function Home() {
  return (
    <section>
      <p className="text-[12px] font-bold tracking-[0.18em] text-[#4065F8] uppercase">
        AI-native UX mentor room
      </p>
      <h1 className="mt-5 max-w-xl text-[44px] leading-[0.98] font-semibold tracking-[-0.07em] text-[#001C33]">
        Three UX mentors in one living chat.
      </h1>
      <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#001C33]/70">
        Triad AI UX Mentor는 William, Maya, Cody가 작은 UX 전문가 팀처럼 응답하는
        모바일 우선 프로토타입입니다. 오른쪽 채팅창에서 바로 테스트하거나, 프로젝트가
        어떻게 구성되어 있는지 살펴볼 수 있습니다.
      </p>
      <div className="mt-8 flex flex-wrap gap-5 text-[14px] font-bold">
        <Link href="/intro" className="text-[#771B0E] transition hover:text-[#4065F8]">
          전체 소개 보기
        </Link>
        <Link href="/mentors" className="text-[#001C33]/70 transition hover:text-[#001C33]">
          멘토 보기
        </Link>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {["전략", "스토리텔링", "리서치"].map((item) => (
          <div key={item} className="rounded-2xl bg-canvas/65 p-4 text-[13px] font-semibold text-[#001C33]/65">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
