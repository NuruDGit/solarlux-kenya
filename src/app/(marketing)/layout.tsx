import { Fraunces, Geist } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import "../globals.css";
import { getMarketingLayoutData } from "@/lib/cms";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";

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

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getMarketingLayoutData();

  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="min-h-screen bg-background font-body text-ink antialiased">
        <OrganizationJsonLd />
        <Header header={data.header} siteSettings={data.siteSettings} />
        {children}
        <Footer
          footer={data.footer}
          productCategories={data.productCategories}
          siteSettings={data.siteSettings}
        />
        <WhatsAppFab siteSettings={data.siteSettings} />
      </body>
    </html>
  );
}
