import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Terms() {
  return (
    <Layout>
      <Seo
        title="Terms of Service – Love Calculator by Name"
        description="Terms of service for using Love Calculator by Name and its related tools."
        path="/terms"
      />
      <section className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">Terms of Service</h1>
        <p>Last updated: 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>
          By using this website, you agree to these terms. If you do not agree, please do not
          use the site.
        </p>

        <h2>Entertainment Purpose Only</h2>
        <p>
          All calculators on this site — including the Love Calculator, FLAMES Calculator,
          Soulmate Calculator, Marriage Compatibility Calculator, Friendship Calculator, and
          Crush Calculator — are provided strictly for entertainment purposes. Results are not
          scientifically validated and should not be used to make real-life relationship
          decisions.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          Nothing on this site constitutes professional relationship, psychological, or legal
          advice of any kind.
        </p>

        <h2>Free to Use</h2>
        <p>
          This site is free to use. We may display advertising to support the cost of running
          the site.
        </p>

        <h2>Acceptable Use</h2>
        <p>
          You agree not to misuse the site, attempt to disrupt its operation, or use it to
          harass or harm others.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after changes
          means you accept the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent through our{" "}
          <a href="/contact" className="text-rose-600 underline">Contact page</a>.
        </p>
      </section>
    </Layout>
  );
}
