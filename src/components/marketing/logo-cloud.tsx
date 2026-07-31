import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { getPayloadBrands, type BrandLogoData } from "@/lib/cms";

function LogoSet({ brands, ariaHidden = false }: { brands: BrandLogoData[]; ariaHidden?: boolean }) {
  return (
    <>
      {brands.map((brand) => (
        brand.website ? (
          <a
            key={brand.name}
            href={brand.website}
            target="_blank"
            rel="noreferrer"
            aria-hidden={ariaHidden || undefined}
            tabIndex={ariaHidden ? -1 : undefined}
            className="shrink-0 opacity-90 transition-[filter,opacity] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:grayscale md:opacity-50 md:hover:grayscale-0 md:hover:opacity-100"
          >
            <Image
              src={brand.logoUrl}
              alt={ariaHidden ? "" : brand.name}
              width={140}
              height={48}
              className="h-8 w-auto object-contain md:h-10"
            />
          </a>
        ) : (
          <div
            key={brand.name}
            aria-hidden={ariaHidden || undefined}
            className="shrink-0 opacity-90 transition-[filter,opacity] duration-500 md:grayscale md:opacity-50"
          >
            <Image
              src={brand.logoUrl}
              alt={ariaHidden ? "" : brand.name}
              width={140}
              height={48}
              className="h-8 w-auto object-contain md:h-10"
            />
          </div>
        )
      ))}
    </>
  );
}

export async function LogoCloud() {
  const brands = await getPayloadBrands();

  if (brands.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-background border-y border-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm font-medium tracking-wide uppercase text-ink-muted/70 mb-8">
            Trusted brands we supply &amp; install
          </p>
        </FadeIn>
      </div>

      {/* Marquee container */}
      <div className="relative" style={{ touchAction: "pan-y" }}>
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent md:w-32" />

        {/* Scrolling track — 3x sets for seamless loop */}
        <div
          className="flex w-max animate-marquee items-center gap-14 md:gap-20 lg:gap-24 py-2"
          style={{ "--marquee-duration": "35s" } as React.CSSProperties}
        >
          <LogoSet brands={brands} />
          <LogoSet brands={brands} ariaHidden />
          <LogoSet brands={brands} ariaHidden />
        </div>
      </div>
    </section>
  );
}
