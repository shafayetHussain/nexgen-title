"use client";

import Image from "next/image";
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
        <div className="mx-auto flex max-w-xl items-center justify-center gap-4 rounded-full border border-[#d4af37]/25 bg-black/40 px-5 py-3 shadow-[0_0_36px_rgba(212,175,55,0.12)] backdrop-blur">
          <div className="relative h-12 w-36 shrink-0 overflow-hidden rounded-md border border-[#d4af37]/30 bg-black sm:w-44">
            <Image
              src="/nextgen-logo.jpeg"
              alt="Nexgen Title Inc. logo"
              fill
              sizes="(min-width: 640px) 176px, 144px"
              className="object-contain px-3 py-2"
              priority
            />
          </div>
          <div className="hidden h-8 w-px bg-[#d4af37]/25 sm:block" />
          <p className="hidden text-left text-xs uppercase tracking-[0.35em] text-[#d4af37] sm:block">
            Nationwide Closings
          </p>
        </div>

        <h1 className="mx-auto mt-7 max-w-5xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
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
