import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="Contact Us – Love Calculator by Name"
        description="Get in touch with the Love Calculator by Name team."
        path="/contact"
      />
      <section className="container-page max-w-2xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="text-gray-500 mb-8">
          Have a question, feedback, or a tool idea? Email us and we'll get back to you.
        </p>
        <div className="bg-white border border-rose-100 rounded-soft p-6">
          <p className="text-sm text-gray-500 mb-1">Email</p>
          <a
            href="mailto:hello@love-calculatorname.com"
            className="text-rose-600 font-medium text-lg"
          >
            hello@love-calculatorname.com
          </a>
        </div>
      </section>
    </Layout>
  );
}
