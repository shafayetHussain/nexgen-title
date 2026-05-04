"use client";

import { motion } from "framer-motion";
import SmoothScrollLink from "@/components/SmoothScrollLink";

export default function BrandIntro() {
  return (
    <section className="relative overflow-hidden border-b border-[#d4af37]/20 bg-[#050506]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_58%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8"
      >
        <p className="text-xs uppercase tracking-[0.42em] text-[#d4af37] sm:text-sm">
          Nexgen Title Inc.
        </p>
        <h1 className="mx-auto mt-5 max-w-5xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Trusted Title &amp; Escrow Services Across the USA
        </h1>
        <div className="mx-auto mt-6 h-px max-w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70">
          Secure, modern, and responsive title support for residential and commercial transactions nationwide.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <SmoothScrollLink
            hash="#contact"
            className="rounded-md bg-[#d4af37] px-6 py-3 text-center text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#e3bf4a] hover:shadow-lg hover:shadow-[#d4af37]/20"
          >
            Order Title
          </SmoothScrollLink>
          <SmoothScrollLink
            hash="#services"
            className="rounded-md border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            Explore Services
          </SmoothScrollLink>
        </div>
      </motion.div>
    </section>
  );
}
