import Head from "next/head";

const SITE_NAME = "Love Calculator by Name";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://love-calculatorname.com";

export default function Seo({
  title,
  description,
  path = "/",
  schema = null,
}) {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="cXCELYEa8kCkOH8ed-OsDMPdR-yjrI65mWnR5R9jYH4" />

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}

export { SITE_URL, SITE_NAME };
