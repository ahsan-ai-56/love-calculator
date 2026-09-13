import Link from "next/link";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { funThingsBlogContent } from "../../utils/blogContent";

export default function FunThingsCrushName() {
  const { lang } = useLanguage();
  const t = funThingsBlogContent[lang];

  return (
    <Layout>
      <Seo
        title="10 Fun Things to Do With Your Crush's Name (Besides a Love Calculator)"
        description="Beyond running a love calculator, here are other lighthearted, low-pressure ways to have fun with a crush's name."
        path="/blog/fun-things-to-do-with-your-crush-name"
      />
      <article className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">{t.title}</h1>

        <p>
          {t.p1Pre}{" "}
          <Link href="/tools/crush-calculator" className="text-rose-600 underline">{t.p1Link}</Link>{" "}
          {t.p1Post}
        </p>

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
          </div>
        ))}

        <p className="mt-8">
          {t.ctaPre}{" "}
          <Link href="/tools/crush-calculator" className="text-rose-600 underline">{t.ctaLink}</Link>{" "}
          {t.ctaPost}
        </p>
      </article>
    </Layout>
  );
}
