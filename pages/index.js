import { useState } from "react";
import Layout from "../components/Layout";
import Seo, { SITE_URL } from "../components/Seo";
import CalculatorForm from "../components/CalculatorForm";
import ResultCard from "../components/ResultCard";
import ToolCard from "../components/ToolCard";
import Link from "next/link";
import { calculateLovePercentage, getInterpretation } from "../utils/calculations";
import { useLanguage } from "../contexts/LanguageContext";
import { homeContent, faqContent } from "../utils/homeContent";
import { uiContent } from "../utils/uiContent";

export default function Home() {
  const [result, setResult] = useState(null);
  const { lang } = useLanguage();
  const t = homeContent[lang];
  const FAQS = faqContent[lang];
  const ui = uiContent[lang];

  function handleCalculate({ name1, name2, dob1, dob2 }) {
    const score = calculateLovePercentage(name1, name2, dob1, dob2);
    const interpretation = getInterpretation(score);
    setResult({ name1, name2, score, ...interpretation });
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Love Calculator by Name",
    url: SITE_URL,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "A free love calculator by name that generates a fun, numerology-style compatibility percentage for two names.",
  };

  return (
    <Layout>
      <Seo
        title="Love Calculator by Name – Check Your Love Compatibility Percentage"
        description="Enter two names to calculate a fun love compatibility percentage. Add dates of birth for a name-and-DOB based result. 100% free, no signup."
        path="/"
        schema={[webAppSchema, faqSchema]}
      />

      {/* 1. Hero Section */}
      <section className="container-page pt-12 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight">
            {t.h1}
          </h1>
          <p className="text-gray-500 mt-4 text-base md:text-lg">{t.tagline}</p>
        </div>

        <div className="max-w-xl mx-auto">
          {!result ? (
            <CalculatorForm
              onCalculate={handleCalculate}
              name1Label={t.name1Label}
              name2Label={t.name2Label}
              buttonLabel={t.calculateBtn}
            />
          ) : (
            <ResultCard
              name1={result.name1}
              name2={result.name2}
              score={result.score}
              label={result.label}
              description={result.text}
              toolLabel="Love Calculator"
              onReset={() => setResult(null)}
            />
          )}
          <p className="text-center text-xs text-gray-400 mt-4">{t.trustLine}</p>
        </div>
      </section>

      {/* Long-form SEO / GEO / AEO content */}
      <section className="container-page prose-content max-w-3xl mx-auto pb-16">

        {/* 2. Quick Answer */}
        <h2>{t.section2Title}</h2>
        <p>{t.section2p1}</p>
        <p>{t.section2p2}</p>

        {/* 3. Score meaning */}
        <h2>{t.section3Title}</h2>
        <table className="w-full text-sm border border-rose-100 rounded-soft overflow-hidden my-4">
          <thead className="bg-rose-50">
            <tr>
              <th className="text-left p-3 font-semibold">{t.scoreTableHeaders[0]}</th>
              <th className="text-left p-3 font-semibold">{t.scoreTableHeaders[1]}</th>
            </tr>
          </thead>
          <tbody>
            {t.scoreRows.map((row) => (
              <tr key={row[0]} className="border-t border-rose-100">
                <td className="p-3">{row[0]}</td>
                <td className="p-3">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{t.section3p}</p>

        {/* 4. How it works */}
        <h2>{t.section4Title}</h2>
        <p>{t.section4p1}</p>

        <h3>{t.section4h3a}</h3>
        <p>{t.section4p2}</p>

        <h3>{t.section4h3b}</h3>
        <p>{t.section4p3}</p>

        <h3>{t.section4h3c}</h3>
        <p>{t.section4p4}</p>
        <p>
          {lang === "en" ? (
            <>
              Curious about the numbers behind numerology? Read more in our{" "}
              <Link href="/blog/what-is-numerology" className="text-rose-600 underline">
                guide to numerology
              </Link>{" "}
              or jump straight into the{" "}
              <Link href="/tools/soulmate-calculator" className="text-rose-600 underline">
                Soulmate Calculator
              </Link>
              .
            </>
          ) : (
            <>
              न्यूमेरोलॉजी के पीछे के नंबरों के बारे में जानना है? हमारी{" "}
              <Link href="/blog/what-is-numerology" className="text-rose-600 underline">
                न्यूमेरोलॉजी गाइड
              </Link>{" "}
              पढ़ें या सीधे{" "}
              <Link href="/tools/soulmate-calculator" className="text-rose-600 underline">
                सोलमेट कैलकुलेटर
              </Link>{" "}
              आज़माएं।
            </>
          )}
        </p>

        {/* 5. Name and DOB */}
        <h2>{t.section5Title}</h2>
        <p>{t.section5p1}</p>
        <ol className="list-decimal pl-5 space-y-1 mb-4">
          {t.section5Steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>{t.section5p2}</p>

        {/* 6. vs Compatibility Test */}
        <h2>{t.section6Title}</h2>
        <p>{t.section6p1}</p>
        <p>{t.section6p2}</p>
        <p>{t.section6p3}</p>
        <h3>{t.section6h3}</h3>
        <p>{t.section6p4}</p>

        {/* 7. How numerology calculates */}
        <h2>{t.section7Title}</h2>
        <p>{t.section7p1}</p>
        <h3>{t.section7h3a}</h3>
        <p>{t.section7p2}</p>
        <h3>{t.section7h3b}</h3>
        <p>{t.section7p3}</p>
        <h3>{t.section7h3c}</h3>
        <p>{t.section7p4}</p>
        <h3>{t.section7h3d}</h3>
        <p>{t.section7p5}</p>

        {/* 8. Order of names */}
        <h2>{t.section8Title}</h2>
        <p>{t.section8p}</p>

        {/* 9. Data privacy */}
        <h2>{t.section9Title}</h2>
        <p>
          {t.section9p1}{" "}
          {lang === "en" ? (
            <Link href="/privacy-policy" className="text-rose-600 underline">privacy policy</Link>
          ) : (
            <Link href="/privacy-policy" className="text-rose-600 underline">प्राइवेसी पॉलिसी</Link>
          )}
        </p>
        <p>
          {t.section9p2}{" "}
          {lang === "en" ? (
            <Link href="/privacy-policy" className="text-rose-600 underline">Privacy Policy</Link>
          ) : (
            <Link href="/privacy-policy" className="text-rose-600 underline">प्राइवेसी पॉलिसी</Link>
          )}
        </p>

        {/* 10. Marriage compatibility */}
        <h2>{t.section10Title}</h2>
        <p>{t.section10p1}</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          {t.section10List.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{t.section10p2}</p>

        {/* 11. vs FLAMES */}
        <h2>{t.section11Title}</h2>
        <p>{t.section11p}</p>

        {/* 13. Mobile / app intent */}
        <h2>{t.section13Title}</h2>
        <p>{t.section13p}</p>

        {/* 14. Fun use cases */}
        <h2>{t.section14Title}</h2>
        <p>{t.section14p}</p>

      </section>

      {/* 12. Explore more tools */}
      <section className="bg-mist py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center text-ink mb-2">
            {t.exploreTitle}
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            {t.exploreSub}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            <ToolCard
              emoji="🔥"
              name={ui.toolNames.flames}
              description={ui.toolDescriptions.flames}
              href="/tools/flames-calculator"
            />
            <ToolCard
              emoji="💕"
              name={ui.toolNames.soulmate}
              description={ui.toolDescriptions.soulmate}
              href="/tools/soulmate-calculator"
            />
            <ToolCard
              emoji="💍"
              name={ui.toolNames.marriage}
              description={ui.toolDescriptions.marriage}
              href="/tools/marriage-compatibility"
            />
            <ToolCard
              emoji="🤝"
              name={ui.toolNames.friendship}
              description={ui.toolDescriptions.friendship}
              href="/tools/friendship-calculator"
            />
            <ToolCard
              emoji="💘"
              name={ui.toolNames.crush}
              description={ui.toolDescriptions.crush}
              href="/tools/crush-calculator"
            />
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="container-page py-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-8 text-center">
          {t.faqTitle}
        </h2>
        <div className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q} className="border-b border-rose-100 pb-5">
              <h3 className="font-semibold text-ink mb-1.5">{f.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 16. Final CTA */}
      <section className="bg-rose-600 py-14">
        <div className="container-page text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3">
            {t.ctaTitle}
          </h2>
          <p className="text-rose-100 max-w-xl mx-auto mb-6">
            {t.ctaP}
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-block bg-white text-rose-600 font-medium px-6 py-3 rounded-soft hover:bg-rose-50 transition-colors"
          >
            {t.ctaBtn}
          </a>
        </div>
      </section>
    </Layout>
  );
}
