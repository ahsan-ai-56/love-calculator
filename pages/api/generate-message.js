// Server-side only. The Groq API key never reaches the browser.
// This route is intentionally "best effort": if it fails, times out,
// or the key is missing, it returns a clear failure so the frontend
// can fall back to a pre-written line instead of breaking the page.

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const TIMEOUT_MS = 6000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ ok: false, error: "AI not configured" });
  }

  const { name1, name2, score, toolLabel } = req.body || {};
  if (!name1 || !name2 || typeof score !== "number") {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  const prompt = `Write 2 short, playful, warm sentences (max 40 words total) about a fun ${
    toolLabel || "love compatibility"
  } result of ${score}% between "${name1}" and "${name2}". Keep it light-hearted and clearly entertainment-only. No emojis, no markdown.`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 80,
        temperature: 0.9,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return res.status(200).json({ ok: false, error: "AI request failed" });
    }

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content?.trim();

    if (!text) {
      return res.status(200).json({ ok: false, error: "Empty AI response" });
    }

    return res.status(200).json({ ok: true, text });
  } catch (err) {
    clearTimeout(timeout);
    return res.status(200).json({ ok: false, error: "AI request error" });
  }
}
