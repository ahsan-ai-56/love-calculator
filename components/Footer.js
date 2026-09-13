import Link from "next/link";
import { getTools } from "./Navbar";
import { useLanguage } from "../contexts/LanguageContext";
import { uiContent } from "../utils/uiContent";

export default function Footer() {
  const { lang } = useLanguage();
  const t = uiContent[lang];
  const tools = getTools(t);

  return (
    <footer className="bg-mist border-t border-rose-100 mt-20">
      <div className="container-page py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-lg font-semibold text-ink mb-2">
            love<span className="text-rose-600">.</span>calculator
          </p>
          <p className="text-gray-500 leading-relaxed">{t.footerTagline}</p>
        </div>

        <div>
          <p className="font-semibold text-ink mb-3">{t.calculators}</p>
          <ul className="space-y-2">
            {tools.map((tool) => (
              <li key={tool.href}>
                <Link href={tool.href} className="text-gray-500 hover:text-rose-600 transition-colors">
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink mb-3">{t.company}</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-500 hover:text-rose-600 transition-colors">{t.about}</Link></li>
            <li><Link href="/contact" className="text-gray-500 hover:text-rose-600 transition-colors">{t.contact}</Link></li>
            <li><Link href="/blog" className="text-gray-500 hover:text-rose-600 transition-colors">{t.blog}</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink mb-3">{t.legal}</p>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy" className="text-gray-500 hover:text-rose-600 transition-colors">{t.privacyPolicy}</Link></li>
            <li><Link href="/terms" className="text-gray-500 hover:text-rose-600 transition-colors">{t.terms}</Link></li>
            <li><Link href="/disclaimer" className="text-gray-500 hover:text-rose-600 transition-colors">{t.disclaimer}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rose-100 py-5">
        <p className="container-page text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Love Calculator by Name. {t.footerCopyright}
        </p>
      </div>
    </footer>
  );
}
