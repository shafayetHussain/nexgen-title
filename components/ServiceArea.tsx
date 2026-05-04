
"use client";

import { motion } from "framer-motion";

// =========================================================
// FILE: components/ServiceArea.tsx
// =========================================================
export default function ServiceArea() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Service Area</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Proudly Serving All 50 States</h2>
          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            From local residential closings to multi-state commercial transactions, Nexgen Title Inc. delivers dependable title, escrow, and closing support nationwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
