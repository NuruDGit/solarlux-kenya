import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { getPayloadProjects, type PayloadProjectHighlight } from "@/lib/cms";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: "Projects",
  description:
    "See recent Solarlux Kenya installations across homes, businesses, and hospitality properties, with real project context and system outcomes.",
};

export default async function ProjectsPage() {
  const projects: PayloadProjectHighlight[] = await getPayloadProjects();

  return (
    <main>
      <section className="relative overflow-hidden bg-ink-950 page-hero-spacing pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="container-page relative z-10">
          <FadeIn>
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white/80 transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-white/80">Projects</li>
              </ol>
            </nav>
            <p className="mb-4 text-overline text-accent">Our work</p>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h1 className="max-w-2xl text-display-lg font-display font-medium text-paper">
                  Real installations built for Kenyan roofs, budgets, and power realities
                </h1>
                <p className="mt-6 max-w-xl text-body-lg leading-relaxed text-paper/70">
                  These projects show the kind of work Solarlux delivers across residential,
                  commercial, and hospitality environments. Each one starts with site context,
                  not a one-size-fits-all package.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button variant="accent" size="lg" asChild>
                    <Link href="/quote">Get a Free Quote</Link>
                  </Button>
                  <Button variant="outline-light" size="lg" asChild>
                    <Link href="/contact">Talk to the team</Link>
                  </Button>
                </div>
              </div>

              <FadeIn delay={0.2}>
                <div className="rounded-4xl bg-ink-900/80 ring-1 ring-paper/10 p-2">
                  <div className="rounded-3xl overflow-hidden aspect-4/3 relative">
                    <Image
                      src="/projects/project-11.03.28.jpg"
                      alt="Solar technician installing panels on a rooftop"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-ink-950/60 via-transparent pointer-events-none" />
                  </div>
                </div>
              </FadeIn>
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
                Explore recent residential, commercial, and hospitality installations, each
                showing the system focus and practical outcome.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.08}>
                <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                  <div className="relative aspect-16/10 overflow-hidden bg-surface">
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
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        {project.title}
                      </Link>
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
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      View project details
                    </Link>
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
                If you already know the kind of property or system you want, the fastest way is a
                quote request. If not, contact the team and we&apos;ll help you scope the right system.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/quote">Start your quote</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/products">Browse products</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
