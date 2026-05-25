"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ScrollMetrics = {
  thumbTop: number;
  thumbHeight: number;
  hasScrollableContent: boolean;
};

const emptyMetrics: ScrollMetrics = {
  thumbTop: 0,
  thumbHeight: 0,
  hasScrollableContent: false,
};

function measureScrollMetrics(element: HTMLElement): ScrollMetrics {
  const { clientHeight, scrollHeight, scrollTop } = element;
  const hasScrollableContent = scrollHeight > clientHeight + 1;

  if (!hasScrollableContent) {
    return emptyMetrics;
  }

  const ratio = clientHeight / scrollHeight;
  const thumbHeight = Math.max(24, clientHeight * ratio);
  const maxScrollTop = scrollHeight - clientHeight;
  const maxThumbTop = clientHeight - thumbHeight;
  const thumbTop = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * maxThumbTop : 0;

  return {
    thumbTop,
    thumbHeight,
    hasScrollableContent: true,
  };
}

export function useScrollActivity(timeoutMs = 700) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [metrics, setMetrics] = useState<ScrollMetrics>(emptyMetrics);
  const timeoutRef = useRef<number | null>(null);
  const scrollElementRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const updateMetrics = useCallback(() => {
    const element = scrollElementRef.current;

    if (!element) {
      setMetrics(emptyMetrics);
      return;
    }

    setMetrics(measureScrollMetrics(element));
  }, []);

  const disconnectObserver = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = null;
  }, []);

  const connectScrollElement = useCallback(
    (element: HTMLElement | null) => {
      if (scrollElementRef.current === element) {
        return;
      }

      disconnectObserver();
      scrollElementRef.current = element;

      if (!element) {
        setMetrics(emptyMetrics);
        return;
      }

      updateMetrics();

      observerRef.current = new ResizeObserver(() => {
        updateMetrics();
      });

      observerRef.current.observe(element);

      if (element.firstElementChild instanceof HTMLElement) {
        observerRef.current.observe(element.firstElementChild);
      }
    },
    [disconnectObserver, updateMetrics],
  );

  useEffect(() => {
    return () => {
      disconnectObserver();

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [disconnectObserver]);

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLElement>) => {
      scrollElementRef.current = event.currentTarget;
      setMetrics(measureScrollMetrics(event.currentTarget));
      setIsScrolling(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
        timeoutRef.current = null;
      }, timeoutMs);
    },
    [timeoutMs],
  );

  return {
    isScrolling,
    onScroll: handleScroll,
    scrollRef: connectScrollElement,
    refreshMetrics: updateMetrics,
    thumbStyle: {
      height: `${metrics.thumbHeight}px`,
      transform: `translateY(${metrics.thumbTop}px)`,
    },
    hasScrollableContent: metrics.hasScrollableContent,
  };
}
