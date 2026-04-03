// =========================================================
// FILE: app/services/commercial-title/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Title Services | Nexgen Title Inc.",
  description:
    "Commercial title services in Warren, MI for business properties and complex real estate transactions.",
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
        <div className="mt-10 space-y-4 text-white/75">
          <p>• Title support for commercial properties</p>
          <p>• Coordinated service for complex deals</p>
          <p>• A polished experience from review to closing</p>
        </div>
      </div>
    </main>
  );
}