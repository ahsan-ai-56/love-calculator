import { useEffect, useState } from "react";

const FALLBACK_LINES = [
  "Every strong connection is built on real conversations, not just a number — but this is a fun place to start!",
  "Whatever the score says, the best compatibility is built through communication and time spent together.",
  "Numbers are fun to look at, but the real story is written by how two people treat each other.",
  "This result is just for fun — the real magic happens in how you show up for each other.",
  "A high or low score can't measure trust, laughter, or care — those are built, not calculated.",
];

export default function AIInsight({ name1, name2, score, toolLabel }) {
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setText(null);

    async function fetchInsight() {
      try {
        const res = await fetch("/api/generate-message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name1, name2, score, toolLabel }),
        });
        const data = await res.json();

        if (cancelled) return;

        if (data.ok && data.text) {
          setText(data.text);
        } else {
          setText(FALLBACK_LINES[Math.floor(Math.random() * FALLBACK_LINES.length)]);
        }
      } catch {
        if (!cancelled) {
          setText(FALLBACK_LINES[Math.floor(Math.random() * FALLBACK_LINES.length)]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (name1 && name2) fetchInsight();

    return () => {
      cancelled = true;
    };
  }, [name1, name2, score, toolLabel]);

  if (loading) {
    return (
      <p className="text-sm text-gray-400 italic animate-pulse">
        Generating your personalized note…
      </p>
    );
  }

  return <p className="text-sm text-gray-600 italic leading-relaxed">{text}</p>;
}
