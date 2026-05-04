// =========================================================
// FILE: app/contact/page.tsx
// =========================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nationwide Title Services",
  description:
    "Contact Nexgen Title Inc. for title, escrow, and closing services across the USA.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Nexgen Title Inc. | Nationwide Title Services",
    description:
      "Contact Nexgen Title Inc. for title, escrow, and closing services across the USA.",
    url: "/contact",
    images: ["/nextgen-logo.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Contact</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Start Your Order with Nexgen Title Inc.</h1>
        <p className="mt-6 max-w-3xl leading-8 text-white/75">
          Reach out to our team for trusted residential title, commercial title, escrow, and closing services across all 50 states.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-serif text-2xl">Contact Details</h2>
            <div className="mt-6 space-y-4 text-white/75">
              <p><span className="font-semibold text-white">Business:</span> Nexgen Title Inc.</p>
              <p><span className="font-semibold text-white">Address:</span> 30500 Van Dyke Ave, Ste 310, Warren, MI 48093</p>
              <p><span className="font-semibold text-white">Email:</span> info@nexgentitle.com</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-serif text-2xl">Why Contact Us</h2>
            <ul className="mt-6 list-disc space-y-4 pl-5 text-white/75">
              <li>Residential title services</li>
              <li>Commercial title services</li>
              <li>Escrow support</li>
              <li>Closing coordination</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
