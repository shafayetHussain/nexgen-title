
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
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Service Area</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Proudly Serving All 50 States</h2>
              <p className="mt-6 max-w-3xl leading-8 text-white/70">
                From local residential closings to multi-state commercial transactions, Nexgen Title Inc. delivers dependable title, escrow, and closing support nationwide.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["50 States", "Residential", "Commercial"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-[#08080a] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_62%)]" />
              <svg
                aria-label="Stylized United States service map"
                viewBox="0 0 620 330"
                className="relative h-full min-h-64 w-full text-[#d4af37]"
                fill="none"
              >
                <path
                  d="M66 166c32-47 77-72 137-77 51-4 80 14 121 1 46-15 88-15 130 6 42 22 76 53 104 93-33 19-76 25-128 19-46-5-85 17-129 23-45 6-89-5-134-4-45 1-77-19-101-61Z"
                  className="fill-[#d4af37]/10 stroke-[#d4af37]/55"
                  strokeWidth="2"
                />
                <path
                  d="M105 152c41-20 76-29 107-27 38 3 62 22 101 16 45-8 76-20 119-3 31 13 57 34 80 62"
                  className="stroke-[#d4af37]/35"
                  strokeWidth="2"
                  strokeDasharray="7 10"
                />
                {[
                  [150, 146],
                  [247, 132],
                  [350, 145],
                  [454, 170],
                  [282, 214],
                ].map(([cx, cy]) => (
                  <g key={`${cx}-${cy}`}>
                    <circle cx={cx} cy={cy} r="8" className="fill-[#d4af37]" />
                    <circle cx={cx} cy={cy} r="20" className="stroke-[#d4af37]/30" strokeWidth="2" />
                  </g>
                ))}
                <path
                  d="M494 246c26 8 46 22 61 43"
                  className="stroke-[#d4af37]/45"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M131 259c-21 5-38 16-52 32"
                  className="stroke-[#d4af37]/45"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
