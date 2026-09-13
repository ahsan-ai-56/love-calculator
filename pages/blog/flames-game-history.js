import Link from "next/link";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { flamesHistoryBlogContent } from "../../utils/blogContent";

export default function FlamesHistory() {
  const { lang } = useLanguage();
  const t = flamesHistoryBlogContent[lang];

  return (
    <Layout>
      <Seo
        title="The History of the FLAMES Game — Where Did It Come From?"
        description="Long before online calculators, FLAMES was a paper-and-pen game passed between friends. Here's where it came from and how it works."
        path="/blog/flames-game-history"
      />
      <article className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">{t.title}</h1>

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
