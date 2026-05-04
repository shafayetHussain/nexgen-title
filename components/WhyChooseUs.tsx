"use client";

import { motion } from "framer-motion";
import SmoothScrollLink from "@/components/SmoothScrollLink";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Secure Handling",
      text: "Protected workflows and careful transaction support from order to closing.",
      stat: "01",
    },
    {
      title: "Accurate Review",
      text: "Clear title review and preparation built around dependable communication.",
      stat: "02",
    },
    {
      title: "Responsive Team",
      text: "Modern service for agents, lenders, buyers, sellers, and businesses.",
      stat: "03",
    },
    {
      title: "Nationwide Support",
      text: "Residential and commercial title service across all 50 states.",
      stat: "04",
    },
  ];

  return (
    <section id="about" className="scroll-mt-28 border-y border-[#d4af37]/20 bg-[#050506]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] border border-[#d4af37]/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(255,255,255,0.03))] p-8 shadow-2xl shadow-black/20 sm:p-10"
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

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[#d4af37]/18 bg-[#111216] p-6 text-white/80 shadow-xl shadow-black/10 transition hover:border-[#d4af37]/50 hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-sm font-bold text-[#d4af37] transition group-hover:bg-[#d4af37]/20">
                  {item.stat}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/35 to-transparent" />
              </div>
              <h3 className="font-serif text-2xl text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
