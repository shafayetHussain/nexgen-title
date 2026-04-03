export default function WhyChooseUs() {
  const points = [
    "Secure handling for every transaction",
    "Accurate title review and support",
    "Responsive communication",
    "Professional service with attention to detail",
  ];

  return (
    <section id="about" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Why Choose Us</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Trustworthy Service with a Refined Experience
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-[#111216] p-6 text-white/80">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}