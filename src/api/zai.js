const ZAI_API_KEY = process.env.ZAI_API_KEY;
const ZAI_API_URL = "https://api.z.ai/api/paas/v4/chat/completions";

export async function chatCompletion(messages, options = {}) {
  if (!ZAI_API_KEY) {
    throw new Error("ZAI_API_KEY not configured. Check your .env file.");
  }

  const response = await fetch(ZAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ZAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "glm-5.2",
      messages,
      stream: options.stream ?? false,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(
      `Z.ai API error ${response.status}: ${errorBody || response.statusText}`,
    );
  }

  return response.json();
}

export async function chatCompletionStream(messages, onChunk) {
  if (!ZAI_API_KEY) {
    throw new Error("ZAI_API_KEY not configured. Check your .env file.");
  }

  const response = await fetch(ZAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ZAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "glm-5.2",
      messages,
      stream: true,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(
      `Z.ai API error ${response.status}: ${errorBody || response.statusText}`,
    );
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.startsWith("data: ")) continue;
      const data = trimmed.slice(6);
      if (data === "[DONE]") return;
      try {
        const parsed = JSON.parse(data);
        const content = parsed.choices?.[0]?.delta?.content || "";
        if (content) onChunk(content);
      } catch {
        // skip malformed chunk
      }
    }
  }
}
