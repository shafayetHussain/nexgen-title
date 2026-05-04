// =========================================================
// FILE: components/Services.tsx
// =========================================================
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Title Services",
    href: "/services/residential-title",
    description:
      "Reliable title support for homebuyers, sellers, agents, and lenders with accuracy and clear communication.",
  },
  {
    title: "Commercial Title Services",
    href: "/services/commercial-title",
    description:
      "Professional title solutions for business properties, investments, and more complex real estate transactions.",
  },
  {
    title: "Escrow Services",
    href: "/services/escrow",
    description:
      "Secure and neutral escrow handling designed to protect every party in the transaction.",
  },
  {
    title: "Closing Services",
    href: "/services/closing",
    description:
      "Streamlined coordination from document preparation to final closing, with a polished client experience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Our Services</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Title Solutions for Every Transaction</h2>
        <p className="mt-4 text-white/70">
          We provide professional title, escrow, and closing support with a service experience that feels both dependable and refined.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-[24px] border border-white/10 bg-white/5 p-8 transition hover:border-[#d4af37]/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20"
          >
            <div className="mb-6 h-12 w-12 rounded-full bg-[#d4af37]/10 ring-1 ring-[#d4af37]/30 transition group-hover:bg-[#d4af37]/20 group-hover:ring-[#d4af37]/60" />
            <h3 className="font-serif text-2xl">{service.title}</h3>
            <p className="mt-4 leading-8 text-white/70">{service.description}</p>
            <Link
              href={service.href}
              className="mt-6 inline-flex items-center text-sm font-semibold text-[#d4af37] transition group-hover:translate-x-1"
            >
              Learn More <span aria-hidden="true" className="ml-2">-&gt;</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
