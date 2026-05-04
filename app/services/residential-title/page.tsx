// =========================================================
// FILE: app/services/residential-title/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Title Services",
  description:
    "Residential title services across the USA for buyers, sellers, agents, and lenders.",
  alternates: {
    canonical: "/services/residential-title",
  },
  openGraph: {
    title: "Residential Title Services | Nexgen Title Inc.",
    description:
      "Residential title services across the USA for buyers, sellers, agents, and lenders.",
    url: "/services/residential-title",
    images: ["/nextgen-logo.jpeg"],
  },
};

export default function ResidentialTitlePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Residential Title Services</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Confident Title Support for Home Transactions</h1>
        <p className="mt-6 leading-8 text-white/75">
          We provide residential title services designed to support buyers, sellers, real estate agents, and lenders with accuracy, responsiveness, and professionalism.
        </p>
        <ul className="mt-10 list-disc space-y-4 pl-5 text-white/75">
          <li>Title review and transaction support</li>
          <li>Clear communication throughout the process</li>
          <li>Dependable service for smoother closings</li>
        </ul>
      </div>
    </main>
  );
}
