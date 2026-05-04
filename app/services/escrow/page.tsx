// =========================================================
// FILE: app/services/escrow/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escrow Services",
  description: "Secure escrow services across the USA with professional transaction support.",
  alternates: {
    canonical: "/services/escrow",
  },
  openGraph: {
    title: "Escrow Services | Nexgen Title Inc.",
    description: "Secure escrow services across the USA with professional transaction support.",
    url: "/services/escrow",
    images: ["/nextgen-logo.jpeg"],
  },
};

export default function EscrowPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Escrow Services</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Secure and Neutral Escrow Handling</h1>
        <p className="mt-6 leading-8 text-white/75">
          Our escrow services are built to protect each stage of the transaction through accurate handling, professionalism, and dependable coordination.
        </p>
        <ul className="mt-10 list-disc space-y-4 pl-5 text-white/75">
          <li>Secure document and transaction support</li>
          <li>Neutral handling across all parties</li>
          <li>Reliable communication from start to finish</li>
        </ul>
      </div>
    </main>
  );
}
