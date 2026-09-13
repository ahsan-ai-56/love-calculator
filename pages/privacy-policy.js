import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Seo
        title="Privacy Policy – Love Calculator by Name"
        description="Read our privacy policy to understand how Love Calculator by Name handles the information you enter."
        path="/privacy-policy"
      />
      <section className="container-page prose-content max-w-3xl mx-auto py-16">
        <h1 className="font-display text-3xl font-semibold mb-6">Privacy Policy</h1>
        <p>Last updated: 2026</p>

        <h2>What Information We Collect</h2>
        <p>
          Our calculators ask for names and, optionally, dates of birth. These fields are used
          only to generate your compatibility result. We do not require an account, email
          address, or phone number to use any calculator on this site.
        </p>

        <h2>How the Calculation Works</h2>
        <p>
          The core compatibility calculation runs directly in your browser. If a personalized
          AI-generated note appears alongside your result, the names and score are sent
          securely to our server so that note can be generated, and are not stored
          permanently after the request completes.
        </p>

        <h2>Cookies and Analytics</h2>
        <p>
          We may use standard analytics tools (such as Google Analytics) to understand overall
          site traffic and improve the experience. These tools may use cookies. You can control
          cookie preferences through your browser settings.
        </p>

        <h2>Advertising</h2>
        <p>
          This site may display advertising (such as Google AdSense) to keep the calculators
          free. Advertising partners may use cookies to show relevant ads based on your visit to
          this and other websites.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our AI-generated notes are produced using a third-party AI service. Requests to this
          service include the names and score you submit, solely to generate a short message.
        </p>

        <h2>Your Choices</h2>
        <p>
          You are never required to enter real or identifying information. Feel free to use
          nicknames or first names only.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please reach out through our{" "}
          <a href="/contact" className="text-rose-600 underline">Contact page</a>.
        </p>
      </section>
    </Layout>
  );
}
