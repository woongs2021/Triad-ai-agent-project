"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import intro from "@/mock/intro.json";
import { agents } from "@/lib/agents";
import { streamMentors } from "@/lib/chatClient";
import { createMessageId, getMockReplies } from "@/lib/fakeOrchestrator";
import type { AgentId, ChatMessage, NewsApiResponse, NewsItem, ScenarioReply } from "@/lib/types";
import { AskAnythingInput } from "@/components/AskAnythingInput";
import { ChatHeader } from "@/components/ChatHeader";
import { MessageBubble } from "@/components/MessageBubble";
import { NewsCard } from "@/components/NewsCard";
import { TypingIndicator } from "@/components/TypingIndicator";

type IntroMessage = {
  agent: AgentId;
  content: string;
};

const typedIntro = intro as IntroMessage;
const minimumTypingMs = 350;

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

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

function createNewsMessage(news: NewsItem): ChatMessage {
  return {
    id: createMessageId("news"),
    variant: "news",
    author: "Cody",
    content: news.title,
    createdAt: Date.now(),
    payload: news,
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

async function fetchIntroNews(signal: AbortSignal): Promise<NewsApiResponse> {
  const response = await fetch("/api/news", {
    method: "GET",
    signal,
  });

  if (!response.ok) {
    throw new Error("Intro news request failed.");
  }

  return (await response.json()) as NewsApiResponse;
}

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typingAgent, setTypingAgent] = useState<AgentId | null>(null);
  const [isResponding, setIsResponding] = useState(false);
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const activeTurnRef = useRef<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const introAbortRef = useRef<AbortController | null>(null);
  const introSequenceRef = useRef<string | null>(null);
  const typingStartedAtRef = useRef(0);

  useEffect(() => {
    void loadIntroNews();

    return () => {
      introAbortRef.current?.abort();
      introSequenceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typingAgent]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
      abortRef.current?.abort();
      introAbortRef.current?.abort();
    };
  }, []);

  function clearPendingReplies() {
    timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
    timeoutsRef.current = [];
  }

  function clearIntroSequence() {
    introAbortRef.current?.abort();
    introAbortRef.current = null;
    introSequenceRef.current = null;
  }

  function showFallbackIntro(sequenceId: string) {
    if (introSequenceRef.current !== sequenceId) {
      return;
    }

    setTypingAgent(null);
    setMessages([createAgentMessage(typedIntro.agent, typedIntro.content)]);
  }

  async function loadIntroNews() {
    const sequenceId = createMessageId("intro");
    const abortController = new AbortController();

    introSequenceRef.current = sequenceId;
    introAbortRef.current = abortController;
    typingStartedAtRef.current = Date.now();
    setMessages([]);
    setTypingAgent("cody");

    try {
      const payload = await fetchIntroNews(abortController.signal);
      await wait(650);

      if (abortController.signal.aborted || introSequenceRef.current !== sequenceId) {
        return;
      }

      setTypingAgent(null);
      setMessages([createAgentMessage("cody", payload.comment)]);
      await wait(420);

      if (abortController.signal.aborted || introSequenceRef.current !== sequenceId) {
        return;
      }

      setMessages((currentMessages) => [...currentMessages, createNewsMessage(payload.news)]);
    } catch {
      if (abortController.signal.aborted) {
        return;
      }

      await wait(550);
      showFallbackIntro(sequenceId);
    } finally {
      if (introSequenceRef.current === sequenceId) {
        introAbortRef.current = null;
      }
    }
  }

  function finishTurn(turnId: string) {
    if (activeTurnRef.current !== turnId) {
      return;
    }

    setTypingAgent(null);
    setIsResponding(false);
    activeTurnRef.current = null;
    abortRef.current = null;
  }

  function addAgentMessage(reply: ScenarioReply) {
    setMessages((currentMessages) => [
      ...currentMessages,
      createAgentMessage(reply.agent, reply.content),
    ]);
  }

  function scheduleMockReplies(query: string, turnId: string) {
    const replies = getMockReplies(query);
    let accumulatedDelay = 700;

    if (replies.length === 0) {
      finishTurn(turnId);
      return;
    }

    replies.forEach((reply, index) => {
      const typingDelay = accumulatedDelay;
      const responseDelay = accumulatedDelay + 1100 + index * 180;

      const typingTimeout = window.setTimeout(() => {
        if (activeTurnRef.current !== turnId) {
          return;
        }

        typingStartedAtRef.current = Date.now();
        setTypingAgent(reply.agent);
      }, typingDelay);

      const responseTimeout = window.setTimeout(() => {
        if (activeTurnRef.current !== turnId) {
          return;
        }

        setTypingAgent(null);
        addAgentMessage(reply);

        if (index === replies.length - 1) {
          finishTurn(turnId);
        }
      }, responseDelay);

      timeoutsRef.current.push(typingTimeout, responseTimeout);
      accumulatedDelay = responseDelay + 520;
    });
  }

  async function showStreamedMessage(reply: ScenarioReply, turnId: string) {
    const elapsedTypingMs = Date.now() - typingStartedAtRef.current;
    const remainingTypingMs = Math.max(0, minimumTypingMs - elapsedTypingMs);

    if (remainingTypingMs > 0) {
      await wait(remainingTypingMs);
    }

    if (activeTurnRef.current !== turnId) {
      return;
    }

    setTypingAgent(null);
    addAgentMessage(reply);
  }

  async function streamAgentReplies(query: string, turnId: string) {
    const abortController = new AbortController();
    abortRef.current = abortController;
    let shouldFallback = false;
    let messageCount = 0;

    try {
      await streamMentors(query, {
        signal: abortController.signal,
        onStart: (agent) => {
          if (activeTurnRef.current !== turnId) {
            return;
          }

          typingStartedAtRef.current = Date.now();
          setTypingAgent(agent);
        },
        onMessage: async (reply) => {
          messageCount += 1;
          await showStreamedMessage(reply, turnId);
        },
        onError: () => {
          shouldFallback = true;
        },
        onDone: () => undefined,
      });

      if (abortController.signal.aborted || activeTurnRef.current !== turnId) {
        return;
      }

      if (shouldFallback && messageCount === 0) {
        setTypingAgent(null);
        scheduleMockReplies(query, turnId);
        return;
      }

      finishTurn(turnId);
    } catch {
      if (abortController.signal.aborted || activeTurnRef.current !== turnId) {
        return;
      }

      setTypingAgent(null);
      scheduleMockReplies(query, turnId);
    }
  }

  function handleSubmit(query: string) {
    if (isResponding || activeTurnRef.current) {
      return;
    }

    clearPendingReplies();
    abortRef.current?.abort();
    clearIntroSequence();
    const turnId = createMessageId("turn");
    activeTurnRef.current = turnId;
    setIsResponding(true);
    setMessages((currentMessages) => [...currentMessages, createUserMessage(query)]);
    void streamAgentReplies(query, turnId);
  }

  function handleReset() {
    clearPendingReplies();
    abortRef.current?.abort();
    abortRef.current = null;
    clearIntroSequence();
    activeTurnRef.current = null;
    setTypingAgent(null);
    setIsResponding(false);
    void loadIntroNews();
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
            {messages.map((message) =>
              message.variant === "news" && message.payload ? (
                <NewsCard key={message.id} news={message.payload} />
              ) : (
                <MessageBubble key={message.id} message={message} />
              ),
            )}
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
