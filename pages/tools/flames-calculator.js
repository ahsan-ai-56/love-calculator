import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import CalculatorForm from "../../components/CalculatorForm";
import ResultCard from "../../components/ResultCard";
import Link from "next/link";
import { calculateFlames } from "../../utils/calculations";
import { useLanguage } from "../../contexts/LanguageContext";
import { flamesContent } from "../../utils/toolsContent";

export default function FlamesCalculator() {
  const [result, setResult] = useState(null);
  const { lang } = useLanguage();
  const t = flamesContent[lang];

  function handleCalculate({ name1, name2 }) {
    const flamesResult = calculateFlames(name1, name2);
    setResult({ name1, name2, ...flamesResult });
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <Seo
        title="FLAMES Calculator by Name – Friends, Love, Marriage & More"
        description="Play the classic FLAMES calculator with two names and find out if you're Friends, Lovers, Affectionate, Married, Enemies, or Siblings. Free and instant."
        path="/tools/flames-calculator"
        schema={faqSchema}
      />

      <section className="container-page pt-12 pb-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
            {t.title}
          </h1>
          <p className="text-gray-500 mt-4">{t.tagline}</p>
        </div>

        <div className="max-w-xl mx-auto">
          {!result ? (
            <CalculatorForm
              onCalculate={handleCalculate}
              showDob={false}
              showRelationshipType={false}
              buttonLabel={t.buttonLabel}
            />
          ) : (
            <ResultCard
              name1={result.name1}
              name2={result.name2}
              score={result.letter}
              label={result.label}
              description={result.text}
              toolLabel="FLAMES Calculator"
              onReset={() => setResult(null)}
            />
          )}
        </div>
      </section>

      <section className="container-page prose-content max-w-3xl mx-auto pb-16">
        <h2>{t.h2_1}</h2>
        <p>{t.p1}</p>
        <p>
          {t.p2linkPre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.p2linkText}</Link>{" "}
          {t.p2linkPost}
        </p>

        <h2>{t.h2_2}</h2>
        <p>{t.p3}</p>
        <h3>{t.h3_1}</h3>
        <p>{t.p4}</p>
        <h3>{t.h3_2}</h3>
        <p>{t.p5}</p>
        <h3>{t.h3_3}</h3>
        <p>{t.p6}</p>

        <h2>{t.h2_3}</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          {t.list.map((item) => (
            <li key={item[0]}><strong>{item[0]}</strong> — {item[1]}</li>
          ))}
        </ul>
        <p>{t.p7}</p>

        <h2>{t.h2_4}</h2>
        <p>{t.p8}</p>

        <h2>{t.faqTitle}</h2>
        <div className="space-y-6 mt-4">
          {t.faqs.map((f) => (
            <div key={f.q} className="border-b border-rose-100 pb-4">
              <h3 className="font-semibold text-ink mb-1.5">{f.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
