import Link from "next/link";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { compatibilityBlogContent } from "../../utils/blogContent";

export default function LoveCalculatorVsReal() {
  const { lang } = useLanguage();
  const t = compatibilityBlogContent[lang];

  return (
    <Layout>
      <Seo
        title="Love Calculator vs Real Compatibility: What's the Difference?"
        description="A fun percentage is not the same as real compatibility. Here's what actually matters in a relationship, beyond any online score."
        path="/blog/love-calculator-vs-real-compatibility"
      />
      <article className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">{t.title}</h1>

        <p>
          {t.p1Pre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.p1Link}</Link>
          {t.p1Post}
        </p>

        <h2>{t.h2_1}</h2>
        <p>{t.p2}</p>

        <h2>{t.h2_2}</h2>
        <p>{t.p3}</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          {t.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{t.p4}</p>

        <h2>{t.h2_3}</h2>
        <p>
          {t.p5Pre}{" "}
          <Link href="/tools/crush-calculator" className="text-rose-600 underline">{t.p5Link}</Link>{" "}
          {t.p5Post}
        </p>

        <h2>{t.h2_4}</h2>
        <p>{t.p6}</p>

        <p className="mt-8">
          {t.ctaPre}{" "}
          <Link href="/tools/flames-calculator" className="text-rose-600 underline">{t.ctaLink1}</Link>{" "}
          {t.ctaMid}{" "}
          <Link href="/" className="text-rose-600 underline">{t.ctaLink2}</Link>
          {t.ctaPost}
        </p>
      </article>
    </Layout>
  );
}
