"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";

const brands = [
  { name: "JA Solar", src: "/brands/JA_Solar_Logo.svg.png", width: 140, height: 40 },
  { name: "Longi", src: "/brands/longi_logos.png", width: 100, height: 32 },
  { name: "MUST", src: "/brands/must_logos.png", width: 110, height: 36 },
  { name: "Seven SS Stars", src: "/brands/seven-ss-star-logo.png", width: 140, height: 32 },
  { name: "SRNE", src: "/brands/srne_logos.png", width: 100, height: 32 },
  { name: "Renergy", src: "/brands/R-energy_logo.svg", width: 120, height: 36 },
];

function LogoSet({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <>
      {brands.map((brand) => (
        <div
          key={brand.name}
          aria-hidden={ariaHidden || undefined}
          className="shrink-0 grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
        >
          <Image
            src={brand.src}
            alt={ariaHidden ? "" : brand.name}
            width={brand.width}
            height={brand.height}
            className="h-8 w-auto object-contain md:h-10"
          />
        </div>
      ))}
    </>
  );
}

export function LogoCloud() {
  return (
    <section className="py-10 md:py-14 bg-background border-y border-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm font-medium tracking-wide uppercase text-ink-muted/70 mb-8">
            Trusted brands we supply &amp; install
          </p>
        </FadeIn>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade masks on left & right edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent md:w-32" />

        {/* Scrolling track — 3x sets for perfectly seamless loop */}
        <div
          className="flex w-max animate-marquee items-center gap-14 md:gap-20 lg:gap-24 py-2"
          style={{ "--marquee-duration": "35s" } as React.CSSProperties}
        >
          <LogoSet />
          <LogoSet ariaHidden />
          <LogoSet ariaHidden />
        </div>
      </div>
    </section>
  );
}
