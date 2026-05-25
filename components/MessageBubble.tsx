"use client";

import { motion } from "framer-motion";
import { agents } from "@/lib/agents";
import { gradients } from "@/lib/tokens";
import type { AgentId, ChatMessage, MessageVariant } from "@/lib/types";
import { AgentAvatar } from "@/components/AgentAvatar";
import { FormattedMessageContent } from "@/components/FormattedMessageContent";

type MessageBubbleProps = {
  message: ChatMessage;
};

const bubbleGradients: Record<MessageVariant, string> = {
  user: gradients.violetAzure,
  news: gradients.violetAuburn,
  william: gradients.azureNight,
  maya: gradients.terracottaAbyssal,
  cody: gradients.violetAuburn,
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.variant === "user";
  const agentId = isUser || message.variant === "news" ? null : (message.variant as AgentId);
  const agent = agentId ? agents[agentId] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className={`flex w-full items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {agent ? <AgentAvatar agent={agent} /> : null}
      <div className={`flex max-w-[76%] flex-col ${isUser ? "items-end" : "items-start"}`}>
        {isUser ? (
          <p className="mb-1 px-1 text-[11px] font-semibold tracking-[0.08em] text-ink/55 uppercase">
            Me
          </p>
        ) : null}
        {!isUser && agent ? (
          <p className="mb-1 px-1 text-[11px] font-semibold tracking-[0.08em] text-ink/55 uppercase">
            {agent.name}
          </p>
        ) : null}
        <div
          style={{ background: bubbleGradients[message.variant] }}
          className={`rounded-2xl px-4 py-3 text-[15px] leading-relaxed text-white ${
            isUser ? "rounded-br-[5px]" : "rounded-bl-[5px]"
          }`}
        >
          <FormattedMessageContent content={message.content} isUser={isUser} />
        </div>
      </div>
    </motion.div>
  );
}
