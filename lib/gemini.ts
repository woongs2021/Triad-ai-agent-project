import { GoogleGenAI } from "@google/genai";

type StreamGeminiOptions = {
  system: string;
  user: string;
  signal?: AbortSignal;
};

export async function* streamGemini({ system, user, signal }: StreamGeminiOptions) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const stream = await ai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `${system}\n\nUser message:\n${user}`,
          },
        ],
      },
    ],
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
    },
  });

  for await (const chunk of stream) {
    if (signal?.aborted) {
      return;
    }

    if (chunk.text) {
      yield chunk.text;
    }
  }
}
