// =========================================================
// FILE: app/services/closing/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Closing Services | Nexgen Title Inc.",
  description: "Closing services in Warren, MI with smooth coordination and a professional client experience.",
};

export default function ClosingPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Closing Services</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Smooth Closings with Confident Coordination</h1>
        <p className="mt-6 leading-8 text-white/75">
          Nexgen Title Inc. helps streamline the closing process with responsive coordination, document support, and a refined client experience.
        </p>
        <div className="mt-10 space-y-4 text-white/75">
          <p>• Closing coordination support</p>
          <p>• Clear preparation and communication</p>
          <p>• Professional service through final signing</p>
        </div>
      </div>
    </main>
  );
}
