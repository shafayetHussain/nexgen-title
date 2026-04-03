// =========================================================
// FILE: components/FAQ.tsx
// =========================================================
const faqs = [
  {
    q: "What does a title company do?",
    a: "A title company helps verify property ownership, identify issues that could affect the transaction, coordinate escrow, and support the closing process.",
  },
  {
    q: "Do I need title services for both residential and commercial transactions?",
    a: "Yes. Title services are important for both residential and commercial transactions to help protect ownership interests and support a smoother closing.",
  },
  {
    q: "What is escrow in real estate?",
    a: "Escrow is a neutral process where documents and funds are handled securely until all terms of the transaction are met.",
  },
  {
    q: "How do I start an order with Nexgen Title Inc.?",
    a: "You can begin by contacting our team or using the Order Title call-to-action on the website.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">FAQ</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Questions Clients Commonly Ask</h2>
      </div>

      <div className="mt-12 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <summary className="cursor-pointer list-none font-medium text-white">{faq.q}</summary>
            <p className="mt-4 leading-8 text-white/70">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
