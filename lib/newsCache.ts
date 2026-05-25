import type { NewsApiResponse } from "@/lib/types";

let cachedNews: NewsApiResponse | null = null;

export function getNewsDayKey(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function getCachedNews(dayKey: string) {
  return cachedNews?.dayKey === dayKey ? cachedNews : null;
}

export function setCachedNews(payload: NewsApiResponse) {
  cachedNews = payload;
}
