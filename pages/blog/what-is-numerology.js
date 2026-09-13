import Link from "next/link";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { numerologyBlogContent } from "../../utils/blogContent";

export default function WhatIsNumerology() {
  const { lang } = useLanguage();
  const t = numerologyBlogContent[lang];

  return (
    <Layout>
      <Seo
        title="What Is Numerology? A Simple Guide for Beginners"
        description="Curious how numerology turns names into numbers? Here's an easy, honest breakdown of the concept behind tools like our love calculator."
        path="/blog/what-is-numerology"
      />
      <article className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">{t.title}</h1>

        <p>
          {t.p1Pre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.p1Link}</Link>{" "}
          {t.p1Post}
        </p>

        <h2>{t.h2_1}</h2>
        <p>{t.p2}</p>

        <h2>{t.h2_2}</h2>
        <p>{t.p3}</p>
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

        <p className="mt-8">
          {t.ctaPre}{" "}
          <Link href="/" className="text-rose-600 underline">{t.ctaLink}</Link>{" "}
          {t.ctaPost}
        </p>
      </article>
    </Layout>
  );
}
