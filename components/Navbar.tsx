// =========================================================
// FILE: components/Navbar.tsx
// =========================================================
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScrollLink from "@/components/SmoothScrollLink";

export default function Navbar() {
  // Track mobile menu open state.
  const [isOpen, setIsOpen] = useState(false);

  // Track whether user has scrolled so we can slightly change navbar style.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-black/80 backdrop-blur-xl"
          : "border-white/5 bg-black/60 backdrop-blur-md"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-5 lg:px-6">
        {/* Logo and brand */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative h-14 w-44 shrink-0 overflow-hidden rounded-lg border border-[#d4af37]/40 bg-black shadow-[0_0_24px_rgba(212,175,55,0.16)] sm:h-16 sm:w-52">
            <Image
              src="/nextgen-logo.jpeg"
              alt="Nexgen Title Inc. logo"
              fill
              sizes="(min-width: 640px) 208px, 176px"
              className="object-contain px-3 py-2"
              priority
            />
          </div>
          <div className="hidden lg:block">
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37]">
              Not Your Old-School Title Company
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <SmoothScrollLink hash="#about" className="text-sm text-white/80 transition hover:text-[#d4af37]">
            About
          </SmoothScrollLink>
          <SmoothScrollLink hash="#services" className="text-sm text-white/80 transition hover:text-[#d4af37]">
            Services
          </SmoothScrollLink>
          <SmoothScrollLink hash="#faq" className="text-sm text-white/80 transition hover:text-[#d4af37]">
            FAQ
          </SmoothScrollLink>
          <SmoothScrollLink hash="#contact" className="text-sm text-white/80 transition hover:text-[#d4af37]">
            Contact
          </SmoothScrollLink>
        </nav>

        {/* Desktop CTA */}
        <SmoothScrollLink
          hash="#contact"
          className="hidden rounded-md bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e3bf4a] md:inline-block"
        >
          Order Title
        </SmoothScrollLink>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md border border-white/10 px-3 py-2 text-sm md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </div>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#111216] md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
              <SmoothScrollLink hash="#about" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#d4af37]">
                About
              </SmoothScrollLink>
              <SmoothScrollLink hash="#services" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#d4af37]">
                Services
              </SmoothScrollLink>
              <SmoothScrollLink hash="#faq" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#d4af37]">
                FAQ
              </SmoothScrollLink>
              <SmoothScrollLink hash="#contact" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#d4af37]">
                Contact
              </SmoothScrollLink>
              <SmoothScrollLink
                hash="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block rounded-md bg-[#d4af37] px-4 py-3 text-center font-semibold text-black"
              >
                Order Title
              </SmoothScrollLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
