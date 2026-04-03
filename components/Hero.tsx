// =========================================================
// FILE: components/Hero.tsx
// =========================================================
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(212,175,55,0.08),_transparent_28%)]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col justify-center"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            Warren, Michigan Title Company
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Trusted Title &amp; Escrow Services in Warren, MI
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Nexgen Title Inc. provides secure, accurate, and professional title services for residential and commercial transactions, with an experience designed to make every closing smooth and confident.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-md bg-[#d4af37] px-6 py-3 text-center text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e3bf4a]"
            >
              Order Title
            </Link>
            <Link
              href="#services"
              className="rounded-md border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Residential & Commercial", "Secure Transactions", "Local Service in Warren, MI"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80 backdrop-blur-sm">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="rounded-[28px] border border-[#d4af37]/20 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
            <div className="rounded-[24px] border border-white/10 bg-[#111216] p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
                    Nexgen Standard
                  </p>
                  <h2 className="mt-2 font-serif text-2xl">Precision for Every Closing</h2>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#d4af37]">24/7</p>
                  <p className="text-sm text-white/60">Responsive support</p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {[
                  "Trusted service in Warren, MI",
                  "Secure and accurate title support",
                  "Professional communication from start to finish",
                  "Modern service with an elevated client experience",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d4af37]" />
                    <p className="text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}