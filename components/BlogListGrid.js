import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function BlogListGrid({ posts }) {
  const { lang } = useLanguage();

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="flex flex-col sm:flex-row gap-5 border border-rose-100 rounded-soft overflow-hidden hover:border-rose-300 hover:shadow-md transition-all"
        >
          <img
            src={post.image}
            alt={post[lang].title}
            className="w-full sm:w-56 h-40 sm:h-auto object-cover flex-shrink-0"
          />
          <div className="p-5 sm:pr-6">
            <h2 className="font-display text-xl font-semibold text-ink mb-2">
              {post[lang].title}
            </h2>
            <p className="text-sm text-gray-500">{post[lang].excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function BlogPagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2 mt-10 flex-wrap">
      {pages.map((p) => {
        const isActive = p === currentPage;
        const href = p === 1 ? "/blog" : `/blog/page/${p}`;
        return (
          <Link
            key={p}
            href={href}
            className={
              isActive
                ? "px-4 py-2 rounded-soft bg-rose-600 text-white text-sm font-medium"
                : "px-4 py-2 rounded-soft border border-rose-200 text-sm font-medium text-rose-600 hover:bg-rose-50"
            }
          >
            {p}
          </Link>
        );
      })}
    </div>
  );
}
