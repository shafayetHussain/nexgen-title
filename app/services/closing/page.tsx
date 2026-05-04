// =========================================================
// FILE: app/services/closing/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Closing Services",
  description: "Closing services across the USA with smooth coordination and a professional client experience.",
  alternates: {
    canonical: "/services/closing",
  },
  openGraph: {
    title: "Closing Services | Nexgen Title Inc.",
    description: "Closing services across the USA with smooth coordination and a professional client experience.",
    url: "/services/closing",
    images: ["/nextgen-logo.jpeg"],
  },
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
        <ul className="mt-10 list-disc space-y-4 pl-5 text-white/75">
          <li>Closing coordination support</li>
          <li>Clear preparation and communication</li>
          <li>Professional service through final signing</li>
        </ul>
      </div>
    </main>
  );
}
