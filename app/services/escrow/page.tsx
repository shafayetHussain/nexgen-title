// =========================================================
// FILE: app/services/escrow/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escrow Services | Nexgen Title Inc.",
  description: "Secure escrow services in Warren, MI with professional transaction support.",
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
        <div className="mt-10 space-y-4 text-white/75">
          <p>• Secure document and transaction support</p>
          <p>• Neutral handling across all parties</p>
          <p>• Reliable communication from start to finish</p>
        </div>
      </div>
    </main>
  );
}
