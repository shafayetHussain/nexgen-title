// =========================================================
// FILE: app/services/commercial-title/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Title Services",
  description:
    "Commercial title services across the USA for business properties and complex real estate transactions.",
  alternates: {
    canonical: "/services/commercial-title",
  },
  openGraph: {
    title: "Commercial Title Services | Nexgen Title Inc.",
    description:
      "Commercial title services across the USA for business properties and complex real estate transactions.",
    url: "/services/commercial-title",
    images: ["/nextgen-logo.jpeg"],
  },
};

export default function CommercialTitlePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Commercial Title Services</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Professional Title Solutions for Business Transactions</h1>
        <p className="mt-6 leading-8 text-white/75">
          Nexgen Title Inc. supports commercial transactions with a professional, detail-oriented approach tailored for more complex property needs.
        </p>
        <ul className="mt-10 list-disc space-y-4 pl-5 text-white/75">
          <li>Title support for commercial properties</li>
          <li>Coordinated service for complex deals</li>
          <li>A polished experience from review to closing</li>
        </ul>
      </div>
    </main>
  );
}
