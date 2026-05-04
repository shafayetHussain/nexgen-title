"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="rounded-[24px] border border-white/10 bg-[#111216] p-6 shadow-2xl shadow-black/20 sm:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/10 p-6"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
              Thank You
            </p>
            <h3 className="mt-3 font-serif text-2xl text-white">
              Your title request has been received.
            </h3>
            <p className="mt-4 leading-7 text-white/75">
              The Nexgen Title team will review your details and follow up with
              the next steps.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="text-sm font-semibold text-white">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Residential Title Services</option>
                <option>Commercial Title Services</option>
                <option>Escrow Services</option>
                <option>Closing Services</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full resize-none rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25"
                placeholder="Tell us about your transaction."
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#e3bf4a] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
            >
              Submit Title Request
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
