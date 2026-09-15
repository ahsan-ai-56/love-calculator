import Link from "next/link";
import Layout from "../../components/Layout";
import Seo, { SITE_URL } from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { numerologyBlogContent } from "../../utils/blogContent";
import { blogPosts } from "../../utils/blogPosts";

const meta = blogPosts.find((p) => p.slug === "what-is-numerology");

export default function WhatIsNumerology() {
  const { lang } = useLanguage();
  const t = numerologyBlogContent[lang];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    image: `${SITE_URL}${meta.image}`,
    datePublished: meta.date,
    author: { "@type": "Organization", name: "Love Calculator by Name" },
    publisher: { "@type": "Organization", name: "Love Calculator by Name" },
    mainEntityOfPage: `${SITE_URL}/blog/what-is-numerology`,
  };

  return (
    <Layout>
      <Seo
        title="What Is Numerology? A Simple Guide for Beginners"
        description="Curious how numerology turns names into numbers? Here's an easy, honest breakdown of the concept behind tools like our love calculator."
        path="/blog/what-is-numerology"
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
          <Link href="/" className="text-rose-600 underline">{t.p1Link}</Link>{" "}
          {t.p1Post}
        </p>

        <h2>{t.h2_1}</h2>
        <p>{t.p2}</p>

        <h2>{t.h2_2}</h2>
        <p>{t.p3}</p>

        {t.letterTableRows && (
          <table className="w-full text-sm border border-gold-200 rounded-soft overflow-hidden my-4">
            <caption className="text-left text-xs text-gold-600 font-semibold mb-2 caption-top">
              {t.letterTableTitle}
            </caption>
            <thead className="bg-gold-50">
              <tr>
                <th className="text-left p-3 font-semibold">{t.letterTableHeaders[0]}</th>
                <th className="text-left p-3 font-semibold">{t.letterTableHeaders[1]}</th>
              </tr>
            </thead>
            <tbody>
              {t.letterTableRows.map((row) => (
                <tr key={row[0]} className="border-t border-gold-100">
                  <td className="p-3 font-medium">{row[0]}</td>
                  <td className="p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <p>{t.p4}</p>

        <h2>{t.h2_3}</h2>
        <p>
          {t.p5Pre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.p5Link}</Link>{" "}
          {t.p5Post}
        </p>

        <h2>{t.h2_4}</h2>
        <p>{t.p6}</p>

        <h2>{t.h2_5}</h2>
        <p>
          {t.p7Pre}{" "}
          <Link href="/tools/soulmate-calculator" className="text-rose-600 underline">{t.p7Link1}</Link>{" "}
          {t.p7Mid}{" "}
          <Link href="/tools/flames-calculator" className="text-rose-600 underline">{t.p7Link2}</Link>{" "}
          {t.p7Post}
        </p>

        {t.h2_6 && (
          <>
            <h2>{t.h2_6}</h2>
            <p>{t.p8}</p>
            <p>{t.p9}</p>
          </>
        )}

        {t.h2_7 && (
          <>
            <h2>{t.h2_7}</h2>
            <p>{t.p10}</p>
          </>
        )}

        {t.h2_8 && (
          <>
            <h2>{t.h2_8}</h2>
            <p>{t.p11}</p>
          </>
        )}

        {t.h2_9 && (
          <>
            <h2>{t.h2_9}</h2>
            <p>{t.p12}</p>
          </>
        )}

        {t.h2_10 && (
          <>
            <h2>{t.h2_10}</h2>
            <p>{t.p13}</p>
            <p>{t.p14}</p>
          </>
        )}

        {t.h2_11 && (
          <>
            <h2>{t.h2_11}</h2>
            <p>{t.p15}</p>
          </>
        )}

        <p className="mt-8">
          {t.ctaPre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.ctaLink}</Link>{" "}
          {t.ctaPost}
        </p>
      </article>
    </Layout>
  );
}
