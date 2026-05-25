"use client";

import { motion } from "framer-motion";
import { agents } from "@/lib/agents";
import type { NewsItem } from "@/lib/types";
import { AgentAvatar } from "@/components/AgentAvatar";

type NewsCardProps = {
  news: NewsItem;
};

export function NewsCard({ news }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="flex w-full items-end justify-start gap-2"
    >
      <AgentAvatar agent={agents.cody} />
      <article className="max-w-[82%] overflow-hidden rounded-2xl rounded-bl-[5px] border border-ai-accent/30 bg-canvas/95 p-4 text-ink shadow-lg shadow-ink/10 backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="rounded-full bg-ai-accent/10 px-2 py-1 text-[10px] font-bold tracking-[0.12em] text-ai-accent uppercase">
              {news.category}
            </span>
            <span className="truncate text-[11px] font-semibold text-ink/50">{news.source}</span>
          </div>
          {news.url ? (
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${news.title} 원문 열기`}
              className="shrink-0 rounded-full border border-ink/10 px-2 py-1 text-[11px] font-bold text-ink/55 transition hover:border-ai-accent/40 hover:text-ai-accent"
            >
              open
            </a>
          ) : null}
        </div>
        <h3 className="text-[15px] leading-snug font-bold tracking-[-0.02em] text-ink">{news.title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/68">{news.summary}</p>
      </article>
    </motion.div>
  );
}
