// =========================================================
// FILE: components/Footer.tsx
// =========================================================
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 text-sm text-white/65 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-xl text-white">Nexgen Title Inc.</p>
          <p className="mt-3 max-w-xs leading-7">
            Trusted title, escrow, and closing services in Warren, MI with a polished and professional client experience.
          </p>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Services</p>
          <ul className="mt-4 space-y-2">
            <li>Residential Title Services</li>
            <li>Commercial Title Services</li>
            <li>Escrow Services</li>
            <li>Closing Services</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Contact</p>
          <ul className="mt-4 space-y-2">
            <li>Warren, MI</li>
            <li>info@nexgentitle.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
