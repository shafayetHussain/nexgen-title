// =========================================================
// FILE: app/layout.tsx
// =========================================================
import type { Metadata } from "next";
import "./globals.css";

// Global metadata used across the site.
export const metadata: Metadata = {
  title: "Nexgen Title Inc. | Trusted Title & Escrow Services in Warren, MI",
  description:
    "Nexgen Title Inc. provides trusted residential and commercial title services, escrow services, and closing support in Warren, MI.",
  keywords: [
    "title company in Warren MI",
    "title services in Warren MI",
    "escrow services in Warren MI",
    "closing services in Warren MI",
    "residential title services",
    "commercial title services",
  ],
  openGraph: {
    title: "Nexgen Title Inc. | Trusted Title & Escrow Services in Warren, MI",
    description:
      "Trusted residential and commercial title, escrow, and closing services in Warren, MI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
