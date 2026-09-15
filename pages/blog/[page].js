import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";
import BlogListGrid, { BlogPagination } from "../../../components/BlogListGrid";
import { useLanguage } from "../../../contexts/LanguageContext";
import { uiContent } from "../../../utils/uiContent";
import { getPostsForPage, getTotalPages, POSTS_PER_PAGE, blogPosts } from "../../../utils/blogPosts";

export default function BlogPage({ pageNumber, posts }) {
  const { lang } = useLanguage();
  const t = uiContent[lang];
  const totalPages = getTotalPages();

  return (
    <Layout>
      <Seo
        title={`Blog – Page ${pageNumber} – Love Calculator by Name`}
        description="Fun, honest reads about numerology, compatibility, and the games behind our love calculators."
        path={`/blog/page/${pageNumber}`}
      />
      <section className="container-page max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-2">{t.blogTitle}</h1>
        <p className="text-gray-500 mb-10">{t.blogSub}</p>

        <BlogListGrid posts={posts} />
        <BlogPagination currentPage={pageNumber} totalPages={totalPages} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
  // Page 1 lives at /blog, so only generate paths for page 2 onward.
  const paths = Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    params: { page: String(i + 2) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const pageNumber = parseInt(params.page, 10);
  const posts = getPostsForPage(pageNumber);
  return { props: { pageNumber, posts } };
}
