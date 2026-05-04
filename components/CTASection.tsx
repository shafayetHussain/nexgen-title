"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="rounded-[32px] border border-[#d4af37]/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(255,255,255,0.04))] p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
              Get Started
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Ready to Start Your Order?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/75">
              Work with Nexgen Title Inc. for secure, professional, and efficient
              title services across the United States.
            </p>
            <div className="mt-8 space-y-4 text-white/75">
              <p>
                <span className="font-semibold text-white">Address:</span>{" "}
                30500 Van Dyke Ave, Ste 310, Warren, MI 48093
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                info@nexgentitle.com
              </p>
              <p>
                <span className="font-semibold text-white">Coverage:</span>{" "}
                Residential and commercial transactions across all 50 states.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
