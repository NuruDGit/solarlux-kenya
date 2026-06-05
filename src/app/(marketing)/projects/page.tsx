import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, SunMedium } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "See recent Solarlux Kenya installations across homes, businesses, and hospitality properties, with real project context and system outcomes.",
};

const projectHighlights = [
  {
    title: "Rooftop solar for a family home",
    location: "Kamakis, Nairobi County",
    sector: "Residential",
    image: "/projects/project-11.03.28.jpg",
    summary:
      "A clean rooftop installation built to reduce monthly electricity costs and keep essential loads running during unreliable grid periods.",
    system: "Hybrid rooftop system with battery backup",
    outcome: "Lower bills, cleaner backup, quieter evenings",
  },
  {
    title: "Daytime energy relief for a trading business",
    location: "Industrial Area, Nairobi",
    sector: "Commercial",
    image: "/projects/project-11.03.30.jpg",
    summary:
      "A business-focused solar setup sized around daytime demand, helping the client reduce utility pressure without interrupting operations.",
    system: "Commercial daytime solar array",
    outcome: "Reduced daytime grid dependence",
  },
  {
    title: "Hospitality power support near the coast",
    location: "Watamu, Kilifi County",
    sector: "Hospitality",
    image: "/projects/project-11.03.37.jpg",
    summary:
      "A guest-facing property upgrade designed for quieter operation, lower running costs, and better resilience during high-demand periods.",
    system: "Solar plus storage for hotel operations",
    outcome: "Better guest comfort and lower fuel reliance",
  },
  {
    title: "Scaled residential upgrade for growing demand",
    location: "Nakuru",
    sector: "Residential",
    image: "/projects/project-11.03.24.jpg",
    summary:
      "A larger home installation planned for a family adding appliances and looking for a more stable long-term power setup.",
    system: "Expanded rooftop array with inverter upgrade",
    outcome: "Headroom for future household growth",
  },
];

const deliveryPoints = [
  "Designed around actual site conditions and load patterns",
  "Installed with genuine equipment and clean finishing",
  "Built for homes, businesses, and hospitality properties",
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 page-hero-spacing pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="container-page relative z-10">
          <FadeIn>
            <p className="mb-4 text-overline text-accent">Our work</p>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h1 className="max-w-3xl text-display-xl font-display font-medium text-paper">
                  Real installations built for Kenyan roofs, budgets, and power realities
                </h1>
                <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-paper/70">
                  These projects show the kind of work Solarlux delivers across residential,
                  commercial, and hospitality environments. Each one starts with site context,
                  not a one-size-fits-all package.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(29,90,166,0.45)]">
                <p className="text-body-sm text-paper/60">What clients usually need</p>
                <ul className="mt-5 space-y-4">
                  {deliveryPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-body text-paper/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="accent" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link href="/contact">Talk to the team</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-overline text-primary">Selected projects</p>
                <h2 className="max-w-2xl text-display-lg font-display font-medium">
                  A practical view of what Solarlux is already delivering
                </h2>
              </div>
              <p className="max-w-md text-body text-ink-muted">
                This is a project gallery page for now, with recent examples grouped by use case.
                Dedicated case-study pages can be layered in later without changing the route.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projectHighlights.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.08}>
                <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ink-950/45 to-transparent" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-body-sm text-ink-muted">
                      <span className="inline-flex rounded-full bg-brand-blue-50 px-3 py-1 text-primary">
                        {project.sector}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {project.location}
                      </span>
                    </div>
                    <h3 className="mt-4 text-heading-xl font-semibold font-body text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-body leading-relaxed text-ink-muted">
                      {project.summary}
                    </p>
                    <dl className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
                      <div>
                        <dt className="text-body-sm font-medium text-ink">System focus</dt>
                        <dd className="mt-1 text-body-sm leading-relaxed text-ink-muted">
                          {project.system}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-body-sm font-medium text-ink">Outcome</dt>
                        <dd className="mt-1 text-body-sm leading-relaxed text-ink-muted">
                          {project.outcome}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeIn>
              <p className="mb-4 text-overline text-primary">Next step</p>
              <h2 className="text-display-md font-display font-medium">
                Planning a similar installation?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-[64ch] text-body-lg leading-relaxed text-ink-muted">
                If you already know the kind of property or system you want, the fastest route is a
                quote request. If not, contact the team and we&apos;ll help you scope the right system.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/quote">
                    Start your quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/products">Browse products</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}