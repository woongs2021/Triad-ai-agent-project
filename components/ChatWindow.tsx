"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import intro from "@/mock/intro.json";
import { agents } from "@/lib/agents";
import { createMessageId, getScenarioReplies } from "@/lib/fakeOrchestrator";
import type { AgentId, ChatMessage } from "@/lib/types";
import { AskAnythingInput } from "@/components/AskAnythingInput";
import { ChatHeader } from "@/components/ChatHeader";
import { MessageBubble } from "@/components/MessageBubble";
import { TypingIndicator } from "@/components/TypingIndicator";

type IntroMessage = {
  agent: AgentId;
  content: string;
};

const typedIntro = intro as IntroMessage;

function createAgentMessage(agentId: AgentId, content: string): ChatMessage {
  const agent = agents[agentId];

  return {
    id: createMessageId(agentId),
    variant: agentId,
    author: agent.name,
    content,
    createdAt: Date.now(),
  };
}

function createUserMessage(content: string): ChatMessage {
  return {
    id: createMessageId("user"),
    variant: "user",
    author: "You",
    content,
    createdAt: Date.now(),
  };
}

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typingAgent, setTypingAgent] = useState<AgentId | null>(null);
  const [isResponding, setIsResponding] = useState(false);
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const activeTurnRef = useRef<string | null>(null);

  useEffect(() => {
    const introTimeout = window.setTimeout(() => {
      setMessages([createAgentMessage(typedIntro.agent, typedIntro.content)]);
    }, 550);

    return () => window.clearTimeout(introTimeout);
  }, []);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typingAgent]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, []);

  function clearPendingReplies() {
    timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
    timeoutsRef.current = [];
  }

  function scheduleAgentReplies(query: string, turnId: string) {
    const replies = getScenarioReplies(query);
    let accumulatedDelay = 700;

    replies.forEach((reply, index) => {
      const typingDelay = accumulatedDelay;
      const responseDelay = accumulatedDelay + 1100 + index * 180;

      const typingTimeout = window.setTimeout(() => {
        if (activeTurnRef.current !== turnId) {
          return;
        }

        setTypingAgent(reply.agent);
      }, typingDelay);

      const responseTimeout = window.setTimeout(() => {
        if (activeTurnRef.current !== turnId) {
          return;
        }

        setTypingAgent(null);
        setMessages((currentMessages) => [
          ...currentMessages,
          createAgentMessage(reply.agent, reply.content),
        ]);

        if (index === replies.length - 1) {
          setIsResponding(false);
          activeTurnRef.current = null;
        }
      }, responseDelay);

      timeoutsRef.current.push(typingTimeout, responseTimeout);
      accumulatedDelay = responseDelay + 520;
    });
  }

  function handleSubmit(query: string) {
    if (isResponding || activeTurnRef.current) {
      return;
    }

    clearPendingReplies();
    const turnId = createMessageId("turn");
    activeTurnRef.current = turnId;
    setIsResponding(true);
    setMessages((currentMessages) => [...currentMessages, createUserMessage(query)]);
    scheduleAgentReplies(query, turnId);
  }

  function handleReset() {
    clearPendingReplies();
    activeTurnRef.current = null;
    setTypingAgent(null);
    setIsResponding(false);
    setMessages([createAgentMessage(typedIntro.agent, typedIntro.content)]);
  }

  return (
    <section className="bg-gradient-polar-beige relative h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-4 pt-4">
        <div className="pointer-events-auto">
          <ChatHeader />
        </div>
      </div>

      <div className="scrollbar-hidden h-full overflow-y-auto px-4 pb-32 pt-32">
        <div className="flex min-h-full flex-col justify-end gap-4">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {typingAgent ? (
              <TypingIndicator key={`typing-${typingAgent}`} agentId={typingAgent} />
            ) : null}
          </AnimatePresence>
          <div ref={scrollAnchorRef} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 pb-3">
        <div className="pointer-events-auto">
          <AskAnythingInput
            onSubmit={handleSubmit}
            onReset={handleReset}
            disabled={isResponding || Boolean(typingAgent)}
          />
        </div>
      </div>
    </section>
  );
}
