import type { APIRoute } from "astro";
import aiKnowledge from "../../data/ai-knowledge.txt?raw";

export const prerender = false;

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = "openrouter/free";
const TIMEOUT_MS = 15000;
const MAX_MESSAGES = 10;
const MAX_CONTENT_LENGTH = 800;

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const allowedRoles = new Set<ChatMessage["role"]>(["user", "assistant"]);

const SYSTEM_MESSAGE: ChatMessage = {
  role: "system",
  content: aiKnowledge.trim().slice(0, MAX_CONTENT_LENGTH)
};

function jsonResponse(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
}

function sanitizeMessages(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];

  const sanitized: ChatMessage[] = [];
  for (const item of input) {
    if (!item || typeof item !== "object") continue;

    const role = (item as { role?: string }).role;
    const content = (item as { content?: string }).content;
    if (!role || !allowedRoles.has(role as ChatMessage["role"])) continue;
    if (typeof content !== "string") continue;

    const trimmed = content.trim();
    if (!trimmed) continue;

    sanitized.push({
      role: role as ChatMessage["role"],
      content: trimmed.slice(0, MAX_CONTENT_LENGTH)
    });
  }

  return sanitized.slice(-MAX_MESSAGES);
}

async function safeJson(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey =
    import.meta.env.OPENROUTER_API_KEY || import.meta.env.IA_API_KEY;

  if (!apiKey) {
    return jsonResponse({ error: "Missing API key" }, 500);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const incomingMessages = sanitizeMessages(
    (body as { messages?: unknown })?.messages
  );
  if (!incomingMessages.length) {
    return jsonResponse({ error: "No messages provided" }, 400);
  }

  const messages: ChatMessage[] = [SYSTEM_MESSAGE, ...incomingMessages];

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const upstream = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer":
          request.headers.get("origin") ||
          request.headers.get("referer") ||
          "http://localhost",
        "X-Title": "Portfolio AI"
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages
      }),
      signal: controller.signal
    });

    if (!upstream.ok) {
      const errBody = await safeJson(upstream);
      const message =
        errBody?.error?.message ||
        errBody?.message ||
        `Upstream error (${upstream.status})`;
      return jsonResponse({ error: message }, upstream.status);
    }

    const data = await upstream.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content || typeof content !== "string") {
      return jsonResponse({ error: "Empty response" }, 502);
    }

    return jsonResponse({ message: content });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return jsonResponse({ error: "Upstream timeout" }, 504);
    }

    return jsonResponse({ error: "Upstream request failed" }, 502);
  } finally {
    clearTimeout(timeoutId);
  }
};
