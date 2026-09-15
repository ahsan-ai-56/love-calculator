// Central list of every blog post on the site. To add a new post later:
//   1. Create pages/blog/your-new-slug.js (copy an existing blog page as a template)
//   2. Add its content to utils/blogContent.js
//   3. Add one entry here with the same slug
// Pagination is automatic: once this array passes POSTS_PER_PAGE (10) entries,
// /blog shows page 1 (newest 10) and /blog/page/2 automatically appears with the rest.

export const POSTS_PER_PAGE = 10;

export const blogPosts = [
  {
    slug: "what-is-numerology",
    image: "/what-is-numerology.jpg",
    date: "2026-01-10",
    en: {
      title: "What Is Numerology? A Simple Guide for Beginners",
      excerpt: "Curious how numerology turns names into numbers? Here's an easy, honest breakdown of the concept behind tools like our love calculator.",
    },
    hi: {
      title: "न्यूमेरोलॉजी क्या है? शुरुआती लोगों के लिए एक आसान गाइड",
      excerpt: "जानना चाहते हैं न्यूमेरोलॉजी नामों को नंबरों में कैसे बदलती है? यहां एक आसान, ईमानदार व्याख्या है।",
    },
  },
  {
    slug: "love-calculator-vs-real-compatibility",
    image: "/love-calculator-vs-real-compatibility.jpg",
    date: "2026-01-14",
    en: {
      title: "Love Calculator vs Real Compatibility: What's the Difference?",
      excerpt: "A fun percentage is not the same as real compatibility. Here's what actually matters in a relationship, beyond any online score.",
    },
    hi: {
      title: "लव कैलकुलेटर बनाम असली कम्पैटिबिलिटी: क्या फर्क है?",
      excerpt: "एक मज़ेदार प्रतिशत असली कम्पैटिबिलिटी जैसा नहीं है। जानें रिश्ते में असल में क्या मायने रखता है।",
    },
  },
  {
    slug: "flames-game-history",
    image: "/flames-game-history.jpg",
    date: "2026-01-18",
    en: {
      title: "The History of the FLAMES Game — Where Did It Come From?",
      excerpt: "Long before online calculators, FLAMES was a paper-and-pen game passed between friends. Here's where it came from and how it works.",
    },
    hi: {
      title: "FLAMES गेम का इतिहास — यह कहां से आया?",
      excerpt: "ऑनलाइन कैलकुलेटर से बहुत पहले, FLAMES एक पेन-पेपर वाला खेल था। जानें यह कहां से आया।",
    },
  },
  {
    slug: "fun-things-to-do-with-your-crush-name",
    image: "/fun-things-to-do-with-your-crush-name.jpg",
    date: "2026-01-22",
    en: {
      title: "10 Fun Things to Do With Your Crush's Name (Besides a Love Calculator)",
      excerpt: "Beyond running a love calculator, here are other lighthearted, low-pressure ways to have fun with a crush's name.",
    },
    hi: {
      title: "आपके क्रश के नाम के साथ करने के लिए 10 मज़ेदार चीज़ें",
      excerpt: "लव कैलकुलेटर के अलावा, यहां क्रश के नाम के साथ मज़े करने के और तरीके हैं।",
    },
  },
];

export function getPostsForPage(pageNumber) {
  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  return blogPosts.slice(start, start + POSTS_PER_PAGE);
}

export function getTotalPages() {
  return Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
}
