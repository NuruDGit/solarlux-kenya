import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Solarlux Kenya — Powering a Sustainable Future",
    template: "%s | Solarlux Kenya",
  },
  description:
    "Kenya's trusted solar energy provider — 8+ years powering homes, businesses, and hotels with premium solar solutions. Get a free quote today.",
  metadataBase: new URL("https://solarluxkenya.com"),
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Solarlux Kenya",
    title: "Solarlux Kenya — Powering a Sustainable Future",
    description:
      "Kenya's trusted solar energy provider — 8+ years powering homes, businesses, and hotels with premium solar solutions.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="min-h-screen bg-background font-body text-ink antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
