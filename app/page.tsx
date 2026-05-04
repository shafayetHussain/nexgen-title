// =========================================================
// FILE: app/page.tsx
// =========================================================
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { localBusinessSchema, faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white">
      {/* Structured data helps search engines understand the business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <ServiceArea />
      <FAQ />
      <CTASection />
    </main>
  );
}
