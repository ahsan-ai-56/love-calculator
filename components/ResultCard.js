import { useRef, useState } from "react";
import AIInsight from "./AIInsight";
import { SITE_URL } from "./Seo";

export default function ResultCard({
  name1,
  name2,
  score,
  label,
  description,
  toolLabel = "Love Calculator",
  onReset,
}) {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const shareText = `${name1} & ${name2} scored ${score}% on the ${toolLabel}! Check yours: ${SITE_URL}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  async function handleDownload() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
      });
      const link = document.createElement("a");
      link.download = `${toolLabel.replace(/\s+/g, "-").toLowerCase()}-result.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (e) {
      // Fail silently in the UI; downloading is a nice-to-have, not core function
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="bg-white border border-rose-100 rounded-soft shadow-sm p-6 md:p-8">
      {/* This inner block is what gets captured for the downloadable image,
          so the branding/URL is always baked into the shared image. */}
      <div ref={cardRef} className="bg-white p-6 rounded-soft">
        <p className="text-xs uppercase tracking-wide text-rose-600 font-semibold text-center mb-4">
          love-calculatorname.com
        </p>

        <div className="flex items-center justify-center gap-3 text-lg font-medium text-ink mb-2">
          <span>{name1}</span>
          <span aria-hidden="true" className="text-rose-500">❤</span>
          <span>{name2}</span>
        </div>

        <p className="font-display text-5xl md:text-6xl font-semibold text-rose-600 text-center my-4">
          {score}%
        </p>

        <p className="text-center font-semibold text-ink mb-1">{label}</p>
        <p className="text-center text-sm text-gray-500 mb-4">{description}</p>

        <AIInsight name1={name1} name2={name2} score={score} toolLabel={toolLabel} />
      </div>

      <p className="text-xs text-gray-400 text-center mt-5 leading-relaxed">
        This result is generated for entertainment purposes only and does not constitute
        professional relationship advice or a scientifically validated measurement.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-5">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-soft bg-[#25D366] text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Share on WhatsApp
        </a>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="px-5 py-2.5 rounded-soft border border-rose-300 text-rose-600 text-sm font-medium hover:bg-rose-50 transition-colors disabled:opacity-50"
        >
          {downloading ? "Preparing…" : "Download Result"}
        </button>
        {onReset && (
          <button
            onClick={onReset}
            className="px-5 py-2.5 rounded-soft text-sm font-medium text-gray-500 hover:text-ink transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
