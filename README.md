# Love Calculator by Name

A free, Next.js-based collection of fun, numerology-style compatibility calculators:
Love Calculator (home), FLAMES, Soulmate, Marriage Compatibility, Friendship, and Crush.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Copy the environment example file and add your Groq API key (free tier at
   https://console.groq.com):
   ```
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` and paste your key.

3. Run the dev server:
   ```
   npm run dev
   ```
   Open http://localhost:3000

4. Build for production:
   ```
   npm run build
   npm start
   ```

## Notes

- The core compatibility calculation is 100% client-side and never depends on any API —
  it always works, even if the AI note fails.
- The Groq API key is only ever used server-side, inside `pages/api/generate-message.js`.
  It is never exposed to the browser.
- If the Groq API is down, slow, or misconfigured, the "AI insight" line automatically
  falls back to a pre-written line — the page never breaks.
- Before deploying, update `NEXT_PUBLIC_SITE_URL` in `.env.local` to your live domain, and
  update the domain references inside `public/sitemap.xml` and `public/robots.txt` if it
  changes from love-calculatorname.com.
- Recommended host: Vercel (free tier works well for this project).

## Project Structure

```
components/   Layout, Navbar, Footer, CalculatorForm, ResultCard, AIInsight, ToolCard, Seo
pages/        index.js (home), tools/*, blog/*, api/generate-message.js, legal pages
utils/        calculations.js (all scoring logic, symmetrical + deterministic)
styles/       globals.css (Tailwind + design tokens)
public/       robots.txt, sitemap.xml
```

## Language Toggle

The entire site now has a working English/Hindi toggle (top-right of the navbar, also in
the mobile menu), remembered across visits via localStorage:

- Homepage (full ~3000-word content, FAQs, CTA, FAQ schema)
- All 6 tool pages (Love, FLAMES, Soulmate, Marriage, Friendship, Crush) — each with full
  ~1500-word content and FAQs
- All 4 blog posts
- Navbar, footer, and blog listing page labels

Translation dictionaries live in `utils/homeContent.js`, `utils/toolsContent.js`,
`utils/blogContent.js`, and `utils/uiContent.js` — each page imports the matching
dictionary and reads `dictionary[lang]`.
