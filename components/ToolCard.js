import Link from "next/link";

export default function ToolCard({ emoji, name, description, href }) {
  return (
    <Link
      href={href}
      className="block bg-white border border-rose-100 rounded-soft p-6 hover:border-rose-300 hover:shadow-md transition-all"
    >
      <span className="text-3xl" aria-hidden="true">{emoji}</span>
      <p className="font-display text-lg font-semibold text-ink mt-3 mb-1">{name}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </Link>
  );
}
