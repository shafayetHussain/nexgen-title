// =========================================================
// FILE: components/Navbar.tsx
// =========================================================
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo and brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#d4af37]/40 bg-black md:h-12 md:w-12">
            <Image
              src="/nextgen-logo.jpeg"
              alt="Nexgen Title Inc. logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <p className="font-serif text-lg tracking-wide text-white sm:text-xl">
              Nexgen Title Inc.
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] sm:text-xs">
              Not Your Old-School Title Company
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm text-white/80 transition hover:text-[#d4af37]">
            About
          </Link>
          <Link href="#services" className="text-sm text-white/80 transition hover:text-[#d4af37]">
            Services
          </Link>
          <Link href="#faq" className="text-sm text-white/80 transition hover:text-[#d4af37]">
            FAQ
          </Link>
          <Link href="#contact" className="text-sm text-white/80 transition hover:text-[#d4af37]">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden rounded-md bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e3bf4a] md:inline-block"
        >
          Order Title
        </Link>

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
              <Link href="#about" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#d4af37]">
                About
              </Link>
              <Link href="#services" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#d4af37]">
                Services
              </Link>
              <Link href="#faq" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#d4af37]">
                FAQ
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#d4af37]">
                Contact
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block rounded-md bg-[#d4af37] px-4 py-3 text-center font-semibold text-black"
              >
                Order Title
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
