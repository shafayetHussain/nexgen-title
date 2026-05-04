// =========================================================
// FILE: lib/schema.ts
// =========================================================
// Structured data for local business SEO.
const baseUrl = "https://nexgentitleinc.com";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${baseUrl}/#business`,
  name: "Nexgen Title Inc.",
  url: baseUrl,
  logo: `${baseUrl}/nextgen-logo.jpeg`,
  image: `${baseUrl}/nextgen-logo.jpeg`,
  areaServed: "United States",
  email: "info@nexgentitle.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30500 Van Dyke Ave Ste 310",
    addressLocality: "Warren",
    addressRegion: "MI",
    postalCode: "48093",
    addressCountry: "US",
  },
  description:
    "Trusted residential and commercial title, escrow, and closing services across all 50 U.S. states.",
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Title Services",
    serviceType: "Residential title services",
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: "United States",
    url: `${baseUrl}/services/residential-title`,
    description:
      "Residential title services across the USA for buyers, sellers, agents, and lenders.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Title Services",
    serviceType: "Commercial title services",
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: "United States",
    url: `${baseUrl}/services/commercial-title`,
    description:
      "Commercial title services across the USA for business properties and complex real estate transactions.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Escrow Services",
    serviceType: "Escrow services",
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: "United States",
    url: `${baseUrl}/services/escrow`,
    description:
      "Secure escrow services across the USA with professional transaction support.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Closing Services",
    serviceType: "Closing services",
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: "United States",
    url: `${baseUrl}/services/closing`,
    description:
      "Closing services across the USA with smooth coordination and a professional client experience.",
  },
];

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
    {
      "@type": "Question",
      name: "What is escrow in real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escrow is a neutral process where documents and funds are handled securely until all terms of the transaction are met.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start an order with Nexgen Title Inc.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can begin by contacting our team or using the Order Title call-to-action on the website.",
      },
    },
  ],
};
