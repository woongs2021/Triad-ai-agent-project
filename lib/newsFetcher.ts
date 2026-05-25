import Parser from "rss-parser";
import type { NewsCategory, NewsItem } from "@/lib/types";

type FeedSource = {
  name: string;
  url: string;
  category: NewsCategory;
};

type RssItem = {
  guid?: string;
  link?: string;
  title?: string;
  isoDate?: string;
  pubDate?: string;
  contentSnippet?: string;
  content?: string;
  summary?: string;
};

const feedSources: FeedSource[] = [
  {
    name: "UX Collective",
    url: "https://uxdesign.cc/feed",
    category: "UX",
  },
  {
    name: "Smashing Magazine",
    url: "https://www.smashingmagazine.com/feed/",
    category: "UX",
  },
  {
    name: "Nielsen Norman Group",
    url: "https://www.nngroup.com/feed/rss/",
    category: "UX",
  },
  {
    name: "Google Research Blog",
    url: "https://research.google/blog/rss/",
    category: "AI",
  },
];

const parser = new Parser<unknown, RssItem>({
  timeout: 5000,
  headers: {
    "User-Agent": "TriadAIUXMentor/1.0 (+https://github.com/woongs2021/Triad-ai-agent-project)",
  },
});

function withTimeout<T>(promise: Promise<T>, ms: number, label: string) {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
    }),
  ]);
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trimEnd()}...`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function hashString(value: string) {
  return [...value].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 0);
}

function getItemDate(item: RssItem) {
  const candidate = item.isoDate ?? item.pubDate;
  const parsedDate = candidate ? new Date(candidate) : new Date();

  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
}

function createFallbackComment(category: NewsCategory) {
  if (category === "AI") {
    return "오늘 뉴스에서 볼 지점은 AI 기능 자체보다 사용자가 결과를 검증할 수 있는 흐름이에요. Cody 관점에서는 속도보다 evidence와 checkpoint가 제품 신뢰도를 만듭니다.";
  }

  if (category === "Design Ops") {
    return "이 흐름은 디자인 팀이 반복 가능한 운영 체계를 어떻게 만들지와 연결돼요. 좋은 시스템은 산출물을 늘리는 것보다 판단 기준을 팀 안에 남깁니다.";
  }

  return "이 뉴스는 UX가 화면 완성도보다 판단 구조와 사용자 이해로 이동하고 있다는 신호로 볼 수 있어요. 작게라도 어떤 evidence가 결정을 바꿨는지 추적하는 습관이 중요합니다.";
}

function normalizeItem(source: FeedSource, item: RssItem): NewsItem | null {
  const title = stripHtml(item.title ?? "");

  if (!title) {
    return null;
  }

  const rawSummary = item.contentSnippet ?? item.summary ?? item.content ?? "";
  const summary = truncate(stripHtml(rawSummary), 220);
  const url = item.link ?? item.guid;
  const publishedAt = getItemDate(item).toISOString();

  return {
    id: `${slugify(source.name)}:${slugify(item.guid ?? url ?? title)}`,
    publishedAt,
    category: source.category,
    title,
    summary: summary || "RSS feed did not include a summary for this item.",
    source: source.name,
    url,
    fallbackComment: createFallbackComment(source.category),
  };
}

async function fetchSource(source: FeedSource) {
  const feed = await withTimeout(parser.parseURL(source.url), 6000, source.name);

  return feed.items
    .map((item) => normalizeItem(source, item))
    .filter((item): item is NewsItem => Boolean(item));
}

export async function collectTodayNews(dayKey: string) {
  const results = await Promise.allSettled(feedSources.map((source) => fetchSource(source)));
  const items = results
    .filter((result): result is PromiseFulfilledResult<NewsItem[]> => result.status === "fulfilled")
    .flatMap((result) => result.value)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 10);

  if (items.length === 0) {
    throw new Error("No RSS news items were available.");
  }

  return items[hashString(dayKey) % items.length];
}
