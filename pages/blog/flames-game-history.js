import Link from "next/link";
import Layout from "../../components/Layout";
import Seo, { SITE_URL } from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { flamesHistoryBlogContent } from "../../utils/blogContent";
import { blogPosts } from "../../utils/blogPosts";

const meta = blogPosts.find((p) => p.slug === "flames-game-history");

export default function FlamesHistory() {
  const { lang } = useLanguage();
  const t = flamesHistoryBlogContent[lang];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    image: `${SITE_URL}${meta.image}`,
    datePublished: meta.date,
    author: { "@type": "Organization", name: "Love Calculator by Name" },
    publisher: { "@type": "Organization", name: "Love Calculator by Name" },
    mainEntityOfPage: `${SITE_URL}/blog/flames-game-history`,
  };

  return (
    <Layout>
      <Seo
        title="The History of the FLAMES Game — Where Did It Come From?"
        description="Long before online calculators, FLAMES was a paper-and-pen game passed between friends. Here's where it came from and how it works."
        path="/blog/flames-game-history"
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
          <Link href="/tools/flames-calculator" className="text-rose-600 underline">{t.p1Link}</Link>
          {t.p1Post}
        </p>

        <h2>{t.h2_1}</h2>
        <p>{t.p2}</p>

        <h2>{t.h2_2}</h2>
        <p>{t.p3}</p>

        <h2>{t.h2_3}</h2>
        <p>
          {t.p4Pre}{" "}
          <Link href="/tools/flames-calculator" className="text-rose-600 underline">{t.p4Link}</Link>{" "}
          {t.p4Post}
        </p>

        <h2>{t.h2_4}</h2>
        <p>{t.p5}</p>

        {t.h2_5 && (<><h2>{t.h2_5}</h2><p>{t.p6}</p></>)}
        {t.h2_6 && (<><h2>{t.h2_6}</h2><p>{t.p7}</p></>)}
        {t.h2_7 && (<><h2>{t.h2_7}</h2><p>{t.p8}</p></>)}
        {t.h2_8 && (<><h2>{t.h2_8}</h2><p>{t.p9}</p></>)}

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
