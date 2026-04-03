// =========================================================
// FILE: lib/schema.ts
// =========================================================
// Structured data for local business SEO.
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nexgen Title Inc.",
  areaServed: "Warren, MI",
  email: "info@nexgentitle.com",
  address: {
    "@type": "PostalAddress",
  streetAddress: "30500 Van Dyke Ave Ste 310",
  addressLocality: "Warren",
  addressRegion: "MI",
  postalCode: "48093",
  addressCountry: "US",
  },
  description:
    "Trusted residential and commercial title, escrow, and closing services in Warren, MI.",
};

// Structured FAQ schema for SEO-rich results.
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a title company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A title company helps verify property ownership, identify issues that could affect the transaction, coordinate escrow, and support the closing process.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need title services for both residential and commercial transactions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Title services are important for both residential and commercial transactions to help protect ownership interests and support a smoother closing.",
      },
    },
  ],
};