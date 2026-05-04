// =========================================================
// FILE: app/layout.tsx
// =========================================================
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const siteUrl = "https://nexgentitleinc.com";
const title = "Nexgen Title Inc. | Trusted Title & Escrow Services Across the USA";
const description =
  "Nexgen Title Inc. provides trusted residential and commercial title services, escrow services, and closing support across all 50 U.S. states.";

// Global metadata used across the site.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Nexgen Title Inc.",
  title: {
    default: title,
    template: "%s | Nexgen Title Inc.",
  },
  description,
  keywords: [
    "title company in Warren MI",
    "title services across the USA",
    "escrow services across the USA",
    "closing services across the USA",
    "residential title services",
    "commercial title services",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description:
      "Trusted residential and commercial title, escrow, and closing services across the USA.",
    url: "/",
    siteName: "Nexgen Title Inc.",
    images: [
      {
        url: "/nextgen-logo.jpeg",
        width: 1600,
        height: 400,
        alt: "Nexgen Title Inc. logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/nextgen-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
