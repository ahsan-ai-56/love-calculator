import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Disclaimer() {
  return (
    <Layout>
      <Seo
        title="Disclaimer – Love Calculator by Name"
        description="Important disclaimer about the entertainment-only nature of Love Calculator by Name results."
        path="/disclaimer"
      />
      <section className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">Disclaimer</h1>

        <p>
          All results produced by Love Calculator by Name, including but not limited to the Love
          Calculator, FLAMES Calculator, Soulmate Calculator, Marriage Compatibility Calculator,
          Friendship Calculator, and Crush Calculator, are generated using numerology-style
          formulas for entertainment purposes only.
        </p>

        <h2>Not a Scientific Measurement</h2>
        <p>
          None of the results on this site are scientifically validated measurements of
          romantic compatibility, friendship, or marriage success. They should not be relied
          upon to make real-life decisions about relationships.
        </p>

        <h2>No Guarantees</h2>
        <p>
          A high score does not guarantee compatibility, and a low score does not indicate
          incompatibility. Real relationships depend on communication, trust, shared values, and
          effort — none of which can be measured by an online calculator.
        </p>

        <h2>Use at Your Own Discretion</h2>
        <p>
          By using this site, you acknowledge that all results are for fun and entertainment
          only, and that Love Calculator by Name is not responsible for any decisions made based
          on these results.
        </p>
      </section>
    </Layout>
  );
}
