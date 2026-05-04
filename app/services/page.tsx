// =========================================================
// FILE: app/services/page.tsx
// =========================================================
import type { Metadata } from "next";
import Link from "next/link";
import { serviceSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Title Services Across the USA",
  description:
    "Explore residential title, commercial title, escrow, and closing services from Nexgen Title Inc. across the USA.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Title Services Across the USA | Nexgen Title Inc.",
    description:
      "Explore residential title, commercial title, escrow, and closing services from Nexgen Title Inc. across the USA.",
    url: "/services",
    images: ["/nextgen-logo.jpeg"],
  },
};

const services = [
  {
    title: "Residential Title Services",
    href: "/services/residential-title",
    description: "Reliable title support for homebuyers, sellers, agents, and lenders.",
  },
  {
    title: "Commercial Title Services",
    href: "/services/commercial-title",
    description: "Professional title solutions for business properties and complex transactions.",
  },
  {
    title: "Escrow Services",
    href: "/services/escrow",
    description: "Secure and neutral escrow handling designed to protect each step of the deal.",
  },
  {
    title: "Closing Services",
    href: "/services/closing",
    description: "Smooth closing coordination from document preparation to final signatures.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-4 py-20 text-white sm:px-6 lg:px-8">
      {serviceSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Services</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Title Solutions for Every Transaction</h1>
        <p className="mt-6 max-w-3xl leading-8 text-white/75">
          Nexgen Title Inc. provides trusted title and escrow support for residential and commercial transactions across all 50 states.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="font-serif text-2xl">{service.title}</h2>
              <p className="mt-4 leading-8 text-white/75">{service.description}</p>
              <Link href={service.href} className="mt-6 inline-block font-semibold text-[#d4af37]">
                View Service
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
