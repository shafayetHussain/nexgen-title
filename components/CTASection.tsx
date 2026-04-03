// =========================================================
// FILE: components/CTASection.tsx
// =========================================================
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="rounded-[32px] border border-[#d4af37]/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(255,255,255,0.04))] p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Get Started</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Ready to Start Your Order?</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/75">
              Work with Nexgen Title Inc. for secure, professional, and efficient title services in Warren, MI.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#111216] p-8">
            <div className="space-y-4 text-white/75">
              <p><span className="font-semibold text-white">Location:</span> Warren, MI</p>
              <p><span className="font-semibold text-white">Email:</span> info@nexgentitle.com</p>
              <p><span className="font-semibold text-white">Primary CTA:</span> Order Title</p>
            </div>

            <Link
              href="mailto:info@nexgentitle.com"
              className="mt-8 inline-block rounded-md bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e3bf4a]"
            >
              Contact Nexgen Title
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}