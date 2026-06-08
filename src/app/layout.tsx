import type { Metadata } from "next";

// Root layout is intentionally a pass-through.
// <html> and <body> are owned by each route group:
//   - (marketing)/layout.tsx  — marketing site
//   - (payload)/layout.tsx    — Payload admin (via @payloadcms/next/layouts RootLayout)
// This avoids the double-html conflict when both are active under the same Next.js app.

export const metadata: Metadata = {
  title: {
    default: "Solarlux Kenya — Powering a Sustainable Future",
    template: "%s | Solarlux Kenya",
  },
  description:
    "Kenya's trusted solar energy provider — 8+ years powering homes, businesses, and hotels with premium solar solutions. Get a free quote today.",
  metadataBase: new URL("https://solarluxkenya.co.ke"),
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
  icons: {
    icon: "/brand/solarlux-icon.svg",
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
  return children;
}
