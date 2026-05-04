// =========================================================
// FILE: components/Services.tsx
// =========================================================
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ServiceIcon = "home" | "building" | "shield" | "signature";

const services = [
  {
    title: "Residential Title Services",
    href: "/services/residential-title",
    icon: "home" as ServiceIcon,
    description:
      "Reliable title support for homebuyers, sellers, agents, and lenders with accuracy and clear communication.",
  },
  {
    title: "Commercial Title Services",
    href: "/services/commercial-title",
    icon: "building" as ServiceIcon,
    description:
      "Professional title solutions for business properties, investments, and more complex real estate transactions.",
  },
  {
    title: "Escrow Services",
    href: "/services/escrow",
    icon: "shield" as ServiceIcon,
    description:
      "Secure and neutral escrow handling designed to protect every party in the transaction.",
  },
  {
    title: "Closing Services",
    href: "/services/closing",
    icon: "signature" as ServiceIcon,
    description:
      "Streamlined coordination from document preparation to final closing, with a polished client experience.",
  },
];

function ServiceIcon({ icon }: { icon: ServiceIcon }) {
  const commonProps = {
    "aria-hidden": true,
    className: "h-6 w-6 text-[#d4af37]",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  if (icon === "home") {
    return (
      <svg {...commonProps}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V20h13v-9.5" />
        <path d="M9.5 20v-6h5v6" />
      </svg>
    );
  }

  if (icon === "building") {
    return (
      <svg {...commonProps}>
        <path d="M5 20V6.5A1.5 1.5 0 0 1 6.5 5h8A1.5 1.5 0 0 1 16 6.5V20" />
        <path d="M16 10h2.5A1.5 1.5 0 0 1 20 11.5V20" />
        <path d="M8.5 9h4" />
        <path d="M8.5 12.5h4" />
        <path d="M8.5 16h4" />
        <path d="M3.5 20h17" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg {...commonProps}>
        <path d="M12 21s7-3.5 7-10V6l-7-3-7 3v5c0 6.5 7 10 7 10Z" />
        <path d="m9.5 12 1.7 1.7 3.6-4" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 19h16" />
      <path d="M5 15.5c2.4-3 4.2-3 5.4 0 .7 1.8 2.1 1.6 3.2-.3l.8-1.4c.8-1.4 2.2-1.5 3.1-.2" />
      <path d="M7 6h10" />
      <path d="M7 9.5h7" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">Our Services</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Title Solutions for Every Transaction</h2>
        <p className="mt-4 text-white/70">
          We provide professional title, escrow, and closing support with a service experience that feels both dependable and refined.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-[24px] border border-white/10 bg-white/5 p-8 transition hover:border-[#d4af37]/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 ring-1 ring-[#d4af37]/30 transition group-hover:scale-105 group-hover:bg-[#d4af37]/20 group-hover:ring-[#d4af37]/60">
              <ServiceIcon icon={service.icon} />
            </div>
            <h3 className="font-serif text-2xl">{service.title}</h3>
            <p className="mt-4 leading-8 text-white/70">{service.description}</p>
            <Link
              href={service.href}
              className="mt-6 inline-flex items-center text-sm font-semibold text-[#d4af37] transition group-hover:translate-x-1"
            >
              Learn More <span aria-hidden="true" className="ml-2">-&gt;</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
