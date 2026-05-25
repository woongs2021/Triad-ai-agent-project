type PhaseCardProps = {
  phase: string;
  title: string;
  status: string;
  summary: string;
  highlights?: readonly string[];
  href?: string;
};

export function PhaseCard({ phase, title, status, summary, highlights, href }: PhaseCardProps) {
  return (
    <article className="rounded-[28px] bg-canvas/70 p-5 shadow-sm shadow-[#001C33]/5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[12px] font-bold tracking-[0.16em] text-[#4065F8] uppercase">{phase}</p>
          <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-[#001C33]">{title}</h2>
        </div>
        <span className="shrink-0 rounded-full bg-[#001C33]/6 px-3 py-1 text-[11px] font-bold text-[#001C33]/55">
          {status}
        </span>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[#001C33]/70">{summary}</p>
      {highlights && highlights.length > 0 ? (
        <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-[#001C33]/68">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4065F8]/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex text-[13px] font-bold text-[#771B0E] transition hover:text-[#4065F8]"
        >
          단계 계획 보기
        </a>
      ) : null}
    </article>
  );
}
