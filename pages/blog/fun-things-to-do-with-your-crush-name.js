import Link from "next/link";
import Layout from "../../components/Layout";
import Seo, { SITE_URL } from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { funThingsBlogContent } from "../../utils/blogContent";
import { blogPosts } from "../../utils/blogPosts";

const meta = blogPosts.find((p) => p.slug === "fun-things-to-do-with-your-crush-name");

export default function FunThingsCrushName() {
  const { lang } = useLanguage();
  const t = funThingsBlogContent[lang];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    image: `${SITE_URL}${meta.image}`,
    datePublished: meta.date,
    author: { "@type": "Organization", name: "Love Calculator by Name" },
    publisher: { "@type": "Organization", name: "Love Calculator by Name" },
    mainEntityOfPage: `${SITE_URL}/blog/fun-things-to-do-with-your-crush-name`,
  };

  return (
    <Layout>
      <Seo
        title="10 Fun Things to Do With Your Crush's Name (Besides a Love Calculator)"
        description="Beyond running a love calculator, here are other lighthearted, low-pressure ways to have fun with a crush's name."
        path="/blog/fun-things-to-do-with-your-crush-name"
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
          <Link href="/tools/crush-calculator" className="text-rose-600 underline">{t.p1Link}</Link>{" "}
          {t.p1Post}
        </p>

        {t.introH2 && (
          <>
            <h2>{t.introH2}</h2>
            <p>{t.introP}</p>
          </>
        )}

        {t.summaryTableRows && (
          <table className="w-full text-sm border border-gold-200 rounded-soft overflow-hidden my-4">
            <caption className="text-left text-xs text-gold-600 font-semibold mb-2 caption-top">
              {t.summaryTableTitle}
            </caption>
            <thead className="bg-gold-50">
              <tr>
                <th className="text-left p-3 font-semibold">{t.summaryTableHeaders[0]}</th>
                <th className="text-left p-3 font-semibold">{t.summaryTableHeaders[1]}</th>
              </tr>
            </thead>
            <tbody>
              {t.summaryTableRows.map((row) => (
                <tr key={row[0]} className="border-t border-gold-100">
                  <td className="p-3 font-medium">{row[0]}</td>
                  <td className="p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {t.items.map((item) => (
          <div key={item.h}>
            <h2>{item.h}</h2>
            <p>
              {item.pPre}{" "}
              {item.link && (
                <>
                  <Link href={item.href} className="text-rose-600 underline">{item.link}</Link>{" "}
                </>
              )}
              {item.pPost}
            </p>
            {item.pExtra && <p>{item.pExtra}</p>}
          </div>
        ))}

        {t.closingH2 && (
          <>
            <h2>{t.closingH2}</h2>
            <p>{t.closingP}</p>
          </>
        )}

        <p className="mt-8">
          {t.ctaPre}{" "}
          <Link href="/tools/crush-calculator" className="text-rose-600 underline">{t.ctaLink}</Link>{" "}
          {t.ctaPost}
        </p>
      </article>
    </Layout>
  );
}
