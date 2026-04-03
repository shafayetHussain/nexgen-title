import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 text-sm text-white/65 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-xl text-white">Nexgen Title Inc.</p>
          <p className="mt-3 max-w-xs leading-7">
            Trusted title, escrow, and closing services in Warren, MI with a
            polished and professional client experience.
          </p>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Contact
          </p>
          <ul className="mt-4 space-y-2">
            <li>30500 Van Dyke Ave, Ste 310</li>
            <li>Warren, MI 48093</li>
            <li>info@nexgentitle.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}