import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function About() {
  return (
    <Layout>
      <Seo
        title="About Us – Love Calculator by Name"
        description="Learn about Love Calculator by Name, a free collection of fun, numerology-style compatibility calculators."
        path="/about"
      />
      <section className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">About Love Calculator by Name</h1>
        <p>
          Love Calculator by Name is a free collection of fun, numerology-style compatibility
          tools, including our main Love Calculator, FLAMES Calculator, Soulmate Calculator,
          Marriage Compatibility Calculator, Friendship Calculator, and Crush Calculator.
        </p>
        <p>
          We built this site for one simple reason: everyone loves a quick, fun way to check
          compatibility with a crush, partner, friend, or sibling. Every tool here is free, runs
          instantly, and is designed with a clean, easy-to-use interface that works well on any
          device.
        </p>
        <h2>Our Approach</h2>
        <p>
          We believe in being upfront about what these tools are — fun, numerology-style
          calculators for entertainment, not scientifically validated relationship tests. You'll
          find that honesty reflected throughout our content, including our FAQs and our{" "}
          <a href="/disclaimer" className="text-rose-600 underline">Disclaimer</a> page.
        </p>
        <h2>Get in Touch</h2>
        <p>
          Have feedback, a tool idea, or a question? Visit our{" "}
          <a href="/contact" className="text-rose-600 underline">Contact page</a>.
        </p>
      </section>
    </Layout>
  );
}
