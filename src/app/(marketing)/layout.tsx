import { getMarketingLayoutData } from "@/lib/cms";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getMarketingLayoutData();

  return (
    <>
      <Header header={data.header} siteSettings={data.siteSettings} />
      <main>{children}</main>
      <Footer
        footer={data.footer}
        productCategories={data.productCategories}
        siteSettings={data.siteSettings}
      />
      <WhatsAppFab siteSettings={data.siteSettings} />
    </>
  );
}
