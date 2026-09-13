import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import CalculatorForm from "../../components/CalculatorForm";
import ResultCard from "../../components/ResultCard";
import Link from "next/link";
import { calculateLovePercentage, getInterpretation } from "../../utils/calculations";
import { useLanguage } from "../../contexts/LanguageContext";
import { soulmateContent } from "../../utils/toolsContent";

export default function SoulmateCalculator() {
  const [result, setResult] = useState(null);
  const { lang } = useLanguage();
  const t = soulmateContent[lang];

  function handleCalculate({ name1, name2, dob1, dob2 }) {
    const score = calculateLovePercentage(name1, name2, dob1, dob2);
    const interpretation = getInterpretation(score);
    setResult({ name1, name2, score, ...interpretation });
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
        title="Soulmate Calculator by Name – Fun Soulmate Compatibility Test"
        description="Discover a fun soulmate-style compatibility score using two names. Free, instant, and optionally includes date of birth for a deeper result."
        path="/tools/soulmate-calculator"
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
            <CalculatorForm onCalculate={handleCalculate} buttonLabel={t.buttonLabel} />
          ) : (
            <ResultCard
              name1={result.name1}
              name2={result.name2}
              score={result.score}
              label={result.label}
              description={result.text}
              toolLabel="Soulmate Calculator"
              onReset={() => setResult(null)}
            />
          )}
        </div>
      </section>

      <section className="container-page prose-content max-w-3xl mx-auto pb-16">
        <h2>{t.h2_1}</h2>
        <p>{t.p1}</p>
        <p>
          {t.p2Pre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.p2Link}</Link>
          {t.p2Post}
        </p>

        <h2>{t.h2_2}</h2>
        <p>{t.p3}</p>
        <h3>{t.h3_1}</h3>
        <p>{t.p4}</p>

        <h2>{t.h2_3}</h2>
        <p>{t.p5}</p>

        <h2>{t.h2_4}</h2>
        <p>
          {t.p6Pre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.p6Link}</Link>{" "}
          {t.p6Post}
        </p>

        <h2>{t.h2_5}</h2>
        <p>{t.p7}</p>

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
