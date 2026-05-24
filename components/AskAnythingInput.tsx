"use client";

import { FormEvent, KeyboardEvent, useState } from "react";

type AskAnythingInputProps = {
  onSubmit: (query: string) => void;
  onReset: () => void;
  disabled?: boolean;
};

export function AskAnythingInput({ onSubmit, onReset, disabled = false }: AskAnythingInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = value.trim();

    if (!query || disabled) {
      return;
    }

    onSubmit(query);
    setValue("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="flex min-h-[60px] items-center gap-2 rounded-[24px] border border-white/45 bg-canvas/65 px-3 py-2 backdrop-blur-xl">
        <button
          type="button"
          onClick={onReset}
          aria-label="대화 전체 리프레시"
          title="대화 전체 리프레시"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition hover:border-ink/30 hover:text-ink focus:outline-none focus:ring-2 focus:ring-cool-primary/25"
        >
          <RefreshIcon />
        </button>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Ask anything"
          disabled={disabled}
          className="h-9 max-h-28 min-h-9 flex-1 resize-none bg-transparent py-[6px] text-[16px] leading-6 text-ink placeholder:text-ink/40 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          aria-label="메시지 보내기"
          title="메시지 보내기"
          className="bg-gradient-ice-azure flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition disabled:cursor-not-allowed disabled:opacity-35"
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );
}

function RefreshIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 1-15.3 6.4" />
      <path d="M3 12A9 9 0 0 1 18.3 5.6" />
      <path d="M18 2v4h-4" />
      <path d="M6 22v-4h4" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}
