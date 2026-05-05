
"use client";

import { motion } from "framer-motion";

// =========================================================
// FILE: components/ServiceArea.tsx
// =========================================================
export default function ServiceArea() {
  return (
    <section className="border-y border-[#d4af37]/20 bg-[#0b0b0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[28px] border border-[#d4af37]/25 bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(255,255,255,0.03))] shadow-2xl shadow-black/20"
        >
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Service Area</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Proudly Serving All 50 States</h2>
              <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/70">
                From local residential closings to multi-state commercial transactions, Nexgen Title Inc. delivers dependable title, escrow, and closing support nationwide.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["All 50 States", "Local Expertise", "Multi-State Orders"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold text-white/80">
                    {item}
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
