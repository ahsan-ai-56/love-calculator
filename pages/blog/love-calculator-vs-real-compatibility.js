import Link from "next/link";
import Layout from "../../components/Layout";
import Seo, { SITE_URL } from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { compatibilityBlogContent } from "../../utils/blogContent";
import { blogPosts } from "../../utils/blogPosts";

const meta = blogPosts.find((p) => p.slug === "love-calculator-vs-real-compatibility");

export default function LoveCalculatorVsReal() {
  const { lang } = useLanguage();
  const t = compatibilityBlogContent[lang];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    image: `${SITE_URL}${meta.image}`,
    datePublished: meta.date,
    author: { "@type": "Organization", name: "Love Calculator by Name" },
    publisher: { "@type": "Organization", name: "Love Calculator by Name" },
    mainEntityOfPage: `${SITE_URL}/blog/love-calculator-vs-real-compatibility`,
  };

  return (
    <Layout>
      <Seo
        title="Love Calculator vs Real Compatibility: What's the Difference?"
        description="A fun percentage is not the same as real compatibility. Here's what actually matters in a relationship, beyond any online score."
        path="/blog/love-calculator-vs-real-compatibility"
        schema={schema}
      />
      <article className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">{t.title}</h1>

        <img
          src={meta.image}
          alt={t.title}
          className="w-full rounded-soft mb-8 border border-rose-100"
        />

        <p>
          {t.p1Pre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.p1Link}</Link>
          {t.p1Post}
        </p>

        <h2>{t.h2_1}</h2>
        <p>{t.p2}</p>

        {t.measureTableRows && (
          <table className="w-full text-sm border border-gold-200 rounded-soft overflow-hidden my-4">
            <caption className="text-left text-xs text-gold-600 font-semibold mb-2 caption-top">
              {t.measureTableTitle}
            </caption>
            <thead className="bg-gold-50">
              <tr>
                <th className="text-left p-3 font-semibold">{t.measureTableHeaders[0]}</th>
                <th className="text-left p-3 font-semibold">{t.measureTableHeaders[1]}</th>
              </tr>
            </thead>
            <tbody>
              {t.measureTableRows.map((row) => (
                <tr key={row[0]} className="border-t border-gold-100">
                  <td className="p-3">{row[0]}</td>
                  <td className="p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

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

        {t.h2_5 && (<><h2>{t.h2_5}</h2><p>{t.p7}</p></>)}
        {t.h2_6 && (<><h2>{t.h2_6}</h2><p>{t.p8}</p></>)}
        {t.h2_7 && (<><h2>{t.h2_7}</h2><p>{t.p9}</p></>)}
        {t.h2_8 && (<><h2>{t.h2_8}</h2><p>{t.p10}</p></>)}

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
