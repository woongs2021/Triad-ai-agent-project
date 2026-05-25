import { MentorCard } from "@/components/MentorCard";
import { mentors } from "@/lib/siteContent";

export default function MentorsPage() {
  return (
    <section>
      <p className="text-[12px] font-bold tracking-[0.18em] text-[#4065F8] uppercase">AI Mentors</p>
      <h1 className="mt-5 text-[40px] leading-[1.02] font-semibold tracking-[-0.06em] text-[#001C33]">
        Three voices, one UX review room.
      </h1>
      <p className="mt-6 text-[16px] leading-relaxed text-[#001C33]/70">
        각 멘토는 서로 다른 역할과 critique style을 갖고 있습니다. 세 명이 함께 전략,
        storytelling, 리서치 근거, AI workflow 실행 관점을 나누어 다룹니다.
      </p>
      <div className="mt-9 grid gap-5">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
      </div>
    </section>
  );
}
