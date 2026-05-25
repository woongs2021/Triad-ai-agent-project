import { PhaseCard } from "@/components/PhaseCard";
import { phases } from "@/lib/siteContent";

export default function ProcessPage() {
  return (
    <section>
      <p className="text-[12px] font-bold tracking-[0.18em] text-[#4065F8] uppercase">
        AI dev process
      </p>
      <h1 className="mt-5 text-[40px] leading-[1.02] font-semibold tracking-[-0.06em] text-[#001C33]">
        Harness engineering, phase by phase.
      </h1>
      <p className="mt-6 text-[16px] leading-relaxed text-[#001C33]/70">
        이 프로젝트는 먼저 believable chat experience를 유지하고, 그 위에 실제 모델 호출,
        Cody의 뉴스 피드, 배포 가능한 웹 셸을 단계적으로 얹는 방식으로 성장합니다.
      </p>
      <div className="mt-9 grid gap-5">
        {phases.map((phase) => (
          <PhaseCard key={phase.phase} {...phase} />
        ))}
      </div>
    </section>
  );
}
