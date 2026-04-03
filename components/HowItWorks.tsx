// =========================================================
// FILE: components/HowItWorks.tsx
// =========================================================
const steps = [
  {
    step: "01",
    title: "Submit Your Order",
    text: "Start your title request quickly and easily with a simple first step.",
  },
  {
    step: "02",
    title: "We Review and Prepare",
    text: "Our team handles title research, escrow coordination, and document preparation.",
  },
  {
    step: "03",
    title: "Close with Confidence",
    text: "Move forward with a secure, smooth, and professionally managed closing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">How It Works</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">A Simple Path to Closing</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((item) => (
          <div key={item.step} className="rounded-[24px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#d4af37]">{item.step}</p>
            <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
            <p className="mt-4 leading-8 text-white/70">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
