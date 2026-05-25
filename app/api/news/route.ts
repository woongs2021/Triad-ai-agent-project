import fallbackNews from "@/mock/news.json";
import { streamGemini } from "@/lib/gemini";
import { getCachedNews, getNewsDayKey, setCachedNews } from "@/lib/newsCache";
import { collectTodayNews } from "@/lib/newsFetcher";
import { buildCodyNewsCommentPrompt } from "@/lib/newsPrompts";
import type { NewsApiResponse, NewsItem } from "@/lib/types";

export const runtime = "nodejs";

const typedFallbackNews = fallbackNews as NewsItem[];

function hashString(value: string) {
  return [...value].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 0);
}

function pickFallbackNews(dayKey: string) {
  if (typedFallbackNews.length === 0) {
    throw new Error("Fallback news pool is empty.");
  }

  return typedFallbackNews[hashString(dayKey) % typedFallbackNews.length];
}

async function createCodyComment(news: NewsItem, signal: AbortSignal) {
  let comment = "";

  for await (const chunk of streamGemini({
    system: buildCodyNewsCommentPrompt(news),
    user: "오늘 앱 인트로로 공유할 Cody의 짧은 뉴스 코멘트를 작성해줘.",
    signal,
  })) {
    comment += chunk;
  }

  return comment.trim();
}

export async function GET(request: Request) {
  const dayKey = getNewsDayKey();
  const cachedPayload = getCachedNews(dayKey);

  if (cachedPayload) {
    return Response.json(cachedPayload, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  let source: NewsApiResponse["source"] = "rss";
  let commentSource: NewsApiResponse["commentSource"] = "gemini";
  let news: NewsItem;

  try {
    news = await collectTodayNews(dayKey);
  } catch {
    source = "fallback";
    news = pickFallbackNews(dayKey);
  }

  let comment = news.fallbackComment;

  try {
    comment = await createCodyComment(news, request.signal);
  } catch {
    commentSource = "fallback";
  }

  if (!comment) {
    comment = news.fallbackComment;
    commentSource = "fallback";
  }

  const payload: NewsApiResponse = {
    news,
    comment,
    source,
    commentSource,
    dayKey,
  };

  setCachedNews(payload);

  return Response.json(payload, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
