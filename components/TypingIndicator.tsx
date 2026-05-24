"use client";

import { motion } from "framer-motion";
import { agents } from "@/lib/agents";
import { gradients } from "@/lib/tokens";
import type { AgentId } from "@/lib/types";
import { AgentAvatar } from "@/components/AgentAvatar";

type TypingIndicatorProps = {
  agentId: AgentId;
};

export function TypingIndicator({ agentId }: TypingIndicatorProps) {
  const agent = agents[agentId];
  const typingGradient = {
    william: gradients.azureNight,
    maya: gradients.terracottaAbyssal,
    cody: gradients.violetAuburn,
  }[agentId];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="flex items-end gap-2"
    >
      <AgentAvatar agent={agent} />
      <div
        style={{ background: typingGradient }}
        className="rounded-2xl rounded-bl-[5px] px-4 py-3"
      >
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{ opacity: [0.35, 1, 0.35], y: [0, -3, 0] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: dot * 0.12,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
