"use client";

import { motion } from "framer-motion";
import SmoothScrollLink from "@/components/SmoothScrollLink";

export default function BrandIntro() {
  return (
    <section className="relative isolate min-h-[calc(100svh-89px)] overflow-hidden border-b border-[#d4af37]/55 bg-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_28%),radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.22),transparent_34%),linear-gradient(180deg,#020202_0%,#070707_56%,#030303_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.11),transparent_66%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto flex min-h-[calc(100svh-89px)] w-full max-w-none flex-col items-center justify-center px-2 pb-6 pt-4 text-center sm:px-3 lg:px-4"
      >
        <div className="mx-auto flex flex-col items-center text-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 92 72"
            className="h-16 w-24 drop-shadow-[0_0_16px_rgba(212,175,55,0.32)] sm:h-20 sm:w-28 xl:h-24 xl:w-32"
          >
            <path d="M10 58V34L47 8v50H36V29L22 39v19H10Z" fill="#f0c642" />
            <path d="M54 13 66 22v36H54V13Z" fill="#e0b431" />
            <path d="M72 27 82 34v24H72V27Z" fill="#c99822" />
            <path d="M88 39v19h-4V36l4 3Z" fill="#f0c642" />
          </svg>

          <p className="font-serif text-4xl leading-none tracking-[0.035em] text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)] sm:text-5xl lg:text-6xl xl:text-7xl">
            NEXGEN TITLE
          </p>

          <div className="mt-3 flex w-72 items-center justify-center gap-4 sm:w-96">
            <span className="h-px flex-1 bg-[#d4af37]" />
            <span className="font-serif text-base uppercase tracking-[0.42em] text-[#d4af37] sm:text-lg">
              INC.
            </span>
            <span className="h-px flex-1 bg-[#d4af37]" />
          </div>
        </div>

        <h1 className="mx-auto mt-8 max-w-[92rem] font-serif text-4xl leading-[1.16] text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)] sm:text-[2.8rem] lg:text-[4.2rem] xl:text-[4.9rem]">
          <span className="block">Trusted Title &amp; Escrow Services</span>
          <span className="block">Across the USA</span>
        </h1>
        <div className="mx-auto mt-8 h-px w-64 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_18px_4px_rgba(212,175,55,0.32)]" />
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/76 sm:text-base">
          Secure, modern, and responsive title support for residential and commercial transactions nationwide.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <SmoothScrollLink
            hash="#contact"
            className="rounded-[3px] bg-gradient-to-b from-[#f0c642] to-[#c99822] px-7 py-3 text-center text-sm font-semibold text-black shadow-[0_0_18px_rgba(212,175,55,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(212,175,55,0.3)]"
          >
            Order Title
          </SmoothScrollLink>
          <SmoothScrollLink
            hash="#services"
            className="rounded-[3px] border border-[#d4af37]/70 px-7 py-3 text-center text-sm font-semibold text-[#e9c75b] transition hover:-translate-y-0.5 hover:bg-[#d4af37]/10 hover:text-white"
          >
            Explore Services
          </SmoothScrollLink>
        </div>
      </motion.div>
    </section>
  );
}
