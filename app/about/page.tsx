// =========================================================
// FILE: app/about/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nexgen Title Inc. | Warren, MI Title Company",
  description:
    "Learn about Nexgen Title Inc., a trusted title company in Warren, MI providing professional residential, commercial, escrow, and closing services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">About Us</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Trusted Title Service with a Refined Approach</h1>
        <p className="mt-6 max-w-3xl leading-8 text-white/75">
          Nexgen Title Inc. serves Warren, MI with dependable residential and commercial title services, escrow support, and closing coordination. Our approach combines professionalism, responsive communication, and a polished client experience.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Residential and commercial expertise",
            "Secure, accurate transaction support",
            "Local service rooted in Warren, MI",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              {item}
            </div>
          ))}
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-serif text-2xl">Our Mission</h2>
            <p className="mt-4 leading-8 text-white/75">
              To deliver secure, efficient, and professional title solutions that help buyers, sellers, agents, lenders, and businesses move through each transaction with confidence.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-serif text-2xl">Why Clients Choose Us</h2>
            <p className="mt-4 leading-8 text-white/75">
              Clients choose Nexgen Title Inc. for trusted guidance, careful attention to detail, and service that feels both dependable and elevated.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
