import { getHomePageData, getMarketingLayoutData } from "@/lib/cms";
import { Hero } from "@/components/marketing/hero";
import { HeroBento } from "@/components/marketing/hero-bento";
import { ValueProps } from "@/components/marketing/value-props";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { WhoWeAre } from "@/components/marketing/who-we-are";
import { SolutionsOverview } from "@/components/marketing/solutions-overview";
import { FeaturedProducts } from "@/components/marketing/featured-products";
import { ProjectShowcase } from "@/components/marketing/project-showcase";
import { TestimonialSlider } from "@/components/marketing/testimonial-slider";
import { FAQSection } from "@/components/marketing/faq-section";
import { BlogSection } from "@/components/marketing/blog-section";
import { CtaForm } from "@/components/marketing/cta-form";

export default async function HomePage() {
  const [homePageData, marketingLayoutData] = await Promise.all([
    getHomePageData(),
    getMarketingLayoutData(),
  ]);

  return (
    <>
      <Hero hero={homePageData.hero} stats={marketingLayoutData.siteSettings.stats} />
      <LogoCloud />
      <HeroBento />
      <ValueProps />
      <WhoWeAre />
      <SolutionsOverview />
      <FeaturedProducts />
      <ProjectShowcase />
      <TestimonialSlider testimonials={homePageData.testimonials} />
      <FAQSection />
      <CtaForm />
      <BlogSection posts={homePageData.blogPosts} />
    </>
  );
}
