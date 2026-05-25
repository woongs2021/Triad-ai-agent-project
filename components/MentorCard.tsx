import Image from "next/image";

type MentorCardProps = {
  name: string;
  role: string;
  avatarSrc: string;
  accent: string;
  summary: string;
  priorities: readonly string[];
};

export function MentorCard({ name, role, avatarSrc, accent, summary, priorities }: MentorCardProps) {
  return (
    <article className="rounded-[28px] bg-canvas/70 p-5 shadow-sm shadow-[#001C33]/5">
      <div className="flex items-center gap-4">
        <Image
          src={avatarSrc}
          alt={`${name} profile`}
          width={64}
          height={64}
          className="rounded-full border border-white/70 object-cover"
        />
        <div>
          <p className="text-[12px] font-bold tracking-[0.16em] text-[#001C33]/45 uppercase">{role}</p>
          <h2 className="mt-1 text-[28px] font-semibold tracking-[-0.05em]" style={{ color: accent }}>
            {name}
          </h2>
        </div>
      </div>
      <p className="mt-5 text-[15px] leading-relaxed text-[#001C33]/72">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {priorities.map((priority) => (
          <span
            key={priority}
            className="rounded-full bg-[#001C33]/6 px-3 py-1 text-[12px] font-semibold text-[#001C33]/65"
          >
            {priority}
          </span>
        ))}
      </div>
    </article>
  );
}
