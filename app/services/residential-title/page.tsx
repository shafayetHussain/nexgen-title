// =========================================================
// FILE: app/services/residential-title/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Title Services | Nexgen Title Inc.",
  description:
    "Residential title services in Warren, MI for buyers, sellers, agents, and lenders.",
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
        <div className="mt-10 space-y-4 text-white/75">
          <p>• Title review and transaction support</p>
          <p>• Clear communication throughout the process</p>
          <p>• Dependable service for smoother closings</p>
        </div>
      </div>
    </main>
  );
}