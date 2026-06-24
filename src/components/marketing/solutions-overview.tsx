"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Home, Hotel } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { AnimatedLayerButton } from "@/components/ui/button";

const solutions = [
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Power your home with clean, affordable solar energy. Reduce your electricity bills by up to 80% with a system designed for your household.",
    image: "/solutions/residential-solar-kenyan.jpg",
    href: "/solutions/residential",
    stat: "80%",
    statLabel: "avg. bill reduction",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Slash operational costs and boost your sustainability credentials. Large-scale solar systems for offices, factories, and retail.",
    image: "/solutions/commercial-solar.png",
    href: "/solutions/commercial",
    stat: "2–4 yrs",
    statLabel: "ROI payback period",
  },
  {
    icon: Hotel,
    title: "Hospitality Solar",
    description:
      "Keep your hotel running smoothly with reliable solar power. Water heating, lighting, and full backup for uninterrupted guest experiences.",
    image: "/solutions/hospitality-solar.png",
    href: "/solutions/hospitality",
    stat: "24/7",
    statLabel: "reliable power supply",
  },
];

export function SolutionsOverview() {
  const featured = solutions[0];
  const FeaturedIcon = featured.icon;

  return (
    <section className="bg-surface py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <span className="mb-4 inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
              Solutions
            </span>
            <h2 className="max-w-xl text-display-lg font-display font-medium">
              Solar solutions tailored{" "}
              <span className="text-ink-muted">to your needs</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="hidden lg:block">
            <AnimatedLayerButton variant="accent" size="md" asChild>
              <Link href="/solutions">Explore All Solutions</Link>
            </AnimatedLayerButton>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-10 md:mt-14">
          <Link
            href={featured.href}
            className="group relative grid overflow-hidden rounded-2xl bg-primary transition-shadow duration-300 hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative aspect-4/3 overflow-hidden lg:aspect-auto lg:min-h-96">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 text-accent">
                <FeaturedIcon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-2xl font-display font-medium leading-tight text-white md:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                {featured.description}
              </p>

              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-display font-semibold text-accent md:text-4xl">
                    {featured.stat}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                    {featured.statLabel}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-[background-color,color] duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {solutions.slice(1).map((solution, index) => (
            <FadeIn key={solution.title} delay={0.15 + index * 0.05}>
              <Link
                href={solution.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-primary transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink-950/50 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-accent">
                    <solution.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 text-xl font-display font-medium leading-tight text-white md:text-2xl">
                    {solution.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                    {solution.description}
                  </p>

                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-display font-semibold text-accent md:text-3xl">
                        {solution.stat}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                        {solution.statLabel}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-[background-color,color] duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10 flex justify-start md:mt-12 lg:hidden">
          <AnimatedLayerButton variant="accent" size="md" asChild>
            <Link href="/solutions">Explore All Solutions</Link>
          </AnimatedLayerButton>
        </FadeIn>
      </div>
    </section>
  );
}