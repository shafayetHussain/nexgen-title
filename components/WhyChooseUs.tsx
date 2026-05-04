"use client";

import { motion } from "framer-motion";
import SmoothScrollLink from "@/components/SmoothScrollLink";

export default function WhyChooseUs() {
  const points = [
    "Secure handling for every transaction",
    "Accurate title review and support",
    "Responsive communication",
    "Professional service with attention to detail",
  ];

  return (
    <section id="about" className="scroll-mt-28 border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Why Choose Us</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Nationwide Reach with a Refined Closing Experience
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-white/70">
            Nexgen Title Inc. supports buyers, sellers, agents, lenders, and businesses with responsive title service across the country.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SmoothScrollLink
              hash="#services"
              className="rounded-md border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              View Services
            </SmoothScrollLink>
            <SmoothScrollLink
              hash="#contact"
              className="rounded-md bg-[#d4af37] px-5 py-3 text-center text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#e3bf4a]"
            >
              Order Title
            </SmoothScrollLink>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-[#111216] p-6 text-white/80 transition hover:border-[#d4af37]/40"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
