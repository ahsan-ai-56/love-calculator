import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import BlogListGrid, { BlogPagination } from "../../components/BlogListGrid";
import { useLanguage } from "../../contexts/LanguageContext";
import { uiContent } from "../../utils/uiContent";
import { getPostsForPage, getTotalPages } from "../../utils/blogPosts";

export default function BlogIndex() {
  const { lang } = useLanguage();
  const t = uiContent[lang];
  const posts = getPostsForPage(1);
  const totalPages = getTotalPages();

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

        <BlogListGrid posts={posts} />
        <BlogPagination currentPage={1} totalPages={totalPages} />
      </section>
    </Layout>
  );
}
