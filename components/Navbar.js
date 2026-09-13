import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { uiContent } from "../utils/uiContent";

function getTools(t) {
  return [
    { name: t.toolNames.love, href: "/", emoji: "❤️" },
    { name: t.toolNames.flames, href: "/tools/flames-calculator", emoji: "🔥" },
    { name: t.toolNames.soulmate, href: "/tools/soulmate-calculator", emoji: "💕" },
    { name: t.toolNames.marriage, href: "/tools/marriage-compatibility", emoji: "💍" },
    { name: t.toolNames.friendship, href: "/tools/friendship-calculator", emoji: "🤝" },
    { name: t.toolNames.crush, href: "/tools/crush-calculator", emoji: "💘" },
  ];
}

export default function Navbar() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = uiContent[lang];
  const tools = getTools(t);

  return (
    <header className="border-b border-rose-100 bg-white sticky top-0 z-50">
      <nav className="container-page flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl font-semibold text-ink">
          Love <span className="text-gold-600">Calculator</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">{t.home}</Link>

          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              className="hover:text-rose-600 transition-colors flex items-center gap-1"
              aria-expanded={toolsOpen}
              onClick={() => setToolsOpen((v) => !v)}
            >
              {t.calculators}
              <span aria-hidden="true">▾</span>
            </button>
            {toolsOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-white border border-rose-100 rounded-soft shadow-lg py-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-rose-50 transition-colors"
                    >
                      <span aria-hidden="true">{tool.emoji}</span>
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-rose-600 transition-colors">{t.blog}</Link>
          <Link href="/about" className="hover:text-rose-600 transition-colors">{t.about}</Link>

          <button
            onClick={toggleLang}
            className="border border-rose-200 rounded-soft px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
            aria-label="Toggle language between English and Hindi"
          >
            {lang === "en" ? "हिंदी" : "English"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="border border-rose-200 rounded-soft px-2.5 py-1 text-xs font-semibold text-rose-600"
            aria-label="Toggle language between English and Hindi"
          >
            {lang === "en" ? "हिंदी" : "EN"}
          </button>
          <button
            className="text-2xl"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-rose-100 bg-white px-5 py-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" onClick={() => setMobileOpen(false)}>{t.home}</Link>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-2">{t.calculators}</p>
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} onClick={() => setMobileOpen(false)}>
              {tool.emoji} {tool.name}
            </Link>
          ))}
          <Link href="/blog" onClick={() => setMobileOpen(false)}>{t.blog}</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>{t.about}</Link>
        </div>
      )}
    </header>
  );
}

export { getTools };
