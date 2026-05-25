"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollActivity(timeoutMs = 700) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function handleScroll(event: React.UIEvent<HTMLElement>) {
    const element = event.currentTarget;
    const { clientHeight, scrollHeight, scrollTop } = element;
    const hasScrollableContent = scrollHeight > clientHeight;

    if (hasScrollableContent) {
      const ratio = clientHeight / scrollHeight;
      const nextThumbHeight = Math.max(24, clientHeight * ratio);
      const maxScrollTop = scrollHeight - clientHeight;
      const maxThumbTop = clientHeight - nextThumbHeight;
      const nextThumbTop = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * maxThumbTop : 0;

      setThumbHeight(nextThumbHeight);
      setThumbTop(nextThumbTop);
    }

    setIsScrolling(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsScrolling(false);
      timeoutRef.current = null;
    }, timeoutMs);
  }

  return {
    isScrolling,
    onScroll: handleScroll,
    thumbStyle: {
      height: `${thumbHeight}px`,
      transform: `translateY(${thumbTop}px)`,
    },
    hasScrollableContent: thumbHeight > 0,
  };
}
