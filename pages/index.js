import Link from "next/link";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { useLanguage } from "../../contexts/LanguageContext";
import { uiContent } from "../../utils/uiContent";

export default function BlogIndex() {
  const { lang } = useLanguage();
  const t = uiContent[lang];

  return (
    <Layout>
      <Seo
        title="Blog – Love Calculator by Name"
        description="Fun, honest reads about numerology, compatibility, and the games behind our love calculators."
        path="/blog"
      />
      <section className="container-page max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-2">{t.blogTitle}</h1>
        <p className="text-gray-500 mb-10">{t.blogSub}</p>
        <div className="space-y-8">
          {t.blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-rose-100 rounded-soft p-6 hover:border-rose-300 hover:shadow-md transition-all"
            >
              <h2 className="font-display text-xl font-semibold text-ink mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
