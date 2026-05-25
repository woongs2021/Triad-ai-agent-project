import Link from "next/link";
import { PhaseCard } from "@/components/PhaseCard";
import { phases, processOverview, upcomingPhases } from "@/lib/siteContent";

export default function ProcessPage() {
  return (
    <section>
      <p className="text-[12px] font-bold tracking-[0.18em] text-[#4065F8] uppercase">
        AI dev process
      </p>
      <h1 className="mt-5 text-[40px] leading-[1.02] font-semibold tracking-[-0.06em] text-[#001C33]">
        {processOverview.title}
      </h1>
      <p className="mt-6 text-[16px] leading-relaxed text-[#001C33]/70">{processOverview.description}</p>
      <ul className="mt-6 space-y-2 text-[14px] leading-relaxed text-[#001C33]/68">
        {processOverview.principles.map((principle) => (
          <li key={principle} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9747FF]/70" />
            <span>{principle}</span>
          </li>
        ))}
      </ul>
      <div className="mt-9 grid gap-5">
        {phases.map((phase) => (
          <PhaseCard key={phase.phase} {...phase} />
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-[#001C33]">다음 단계</h2>
        <div className="mt-4 grid gap-4">
          {upcomingPhases.map((phase) => (
            <PhaseCard key={phase.phase} {...phase} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-5 text-[14px] font-bold">
        <Link href="/intro" className="text-[#771B0E] transition hover:text-[#4065F8]">
          프로젝트 소개 보기
        </Link>
        <a
          href="https://github.com/woongs2021/Triad-ai-agent-project/blob/main/Mainplan.md"
          target="_blank"
          rel="noreferrer"
          className="text-[#001C33]/65 transition hover:text-[#001C33]"
        >
          Mainplan.md
        </a>
      </div>
    </section>
  );
}
