import type { Metadata } from "next";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { ArrowLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/motion/fade-in";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { getPayloadProjectBySlug } from "@/lib/cms";
import { getCanonicalUrl } from "@/lib/site-url";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPayloadProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.seo?.metaTitle || project.title,
    description: project.seo?.metaDescription || project.summary,
    alternates: {
      canonical: getCanonicalUrl(project.seo?.canonicalUrl, `/projects/${slug}`),
    },
    openGraph: {
      title: project.seo?.metaTitle || project.title,
      description: project.seo?.metaDescription || project.summary,
      images: [{ url: project.seo?.ogImage || project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getPayloadProjectBySlug(slug);
  if (!project) notFound();

  const completionDate = project.completedDate
    ? new Intl.DateTimeFormat("en-KE", {
        month: "long",
        year: "numeric",
      }).format(new Date(project.completedDate))
    : null;

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: project.title, href: `/projects/${project.slug}` },
        ]}
      />

      <section className="relative overflow-hidden bg-ink-950 page-hero-spacing pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink-950/70 via-ink-950/75 to-ink-950" />
        </div>

        <div className="container-page relative z-10">
          <FadeIn>
            <nav className="mb-10" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-paper/50">
                <li><Link href="/" className="hover:text-paper">Home</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li><Link href="/projects" className="hover:text-paper">Projects</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li className="text-paper/80">{project.title}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 text-sm text-paper/70">
              <span className="rounded-full border border-paper/20 bg-paper/10 px-3 py-1">
                {project.sector}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {project.location}{project.county ? `, ${project.county}` : ""}
              </span>
            </div>
            <h1 className="mt-6 max-w-3xl text-display-xl font-display font-medium text-paper">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-paper/70">
              {project.summary}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <FadeIn className="lg:col-span-2">
              <div className="space-y-12">
                {project.challenge ? (
                  <div>
                    <p className="text-overline text-primary mb-4">The Challenge</p>
                    <div className="rich-text"><RichText data={project.challenge} disableContainer /></div>
                  </div>
                ) : null}
                {project.solution ? (
                  <div>
                    <p className="text-overline text-primary mb-4">Our Solution</p>
                    <div className="rich-text"><RichText data={project.solution} disableContainer /></div>
                  </div>
                ) : null}
                {project.outcomeContent ? (
                  <div>
                    <p className="text-overline text-primary mb-4">The Outcome</p>
                    <div className="rich-text"><RichText data={project.outcomeContent} disableContainer /></div>
                  </div>
                ) : null}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <dl className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                {project.system ? (
                  <div className="border-b border-border pb-5">
                    <dt className="text-body-sm text-ink-muted">System size</dt>
                    <dd className="mt-1 font-semibold text-ink">{project.system}</dd>
                  </div>
                ) : null}
                {project.estimatedSavings ? (
                  <div className="border-b border-border py-5">
                    <dt className="text-body-sm text-ink-muted">Estimated savings</dt>
                    <dd className="mt-1 font-semibold text-ink">{project.estimatedSavings}</dd>
                  </div>
                ) : null}
                {completionDate ? (
                  <div className="border-b border-border py-5">
                    <dt className="text-body-sm text-ink-muted">Completed</dt>
                    <dd className="mt-1 font-semibold text-ink">{completionDate}</dd>
                  </div>
                ) : null}
                {project.clientName ? (
                  <div className="pt-5">
                    <dt className="text-body-sm text-ink-muted">Client</dt>
                    <dd className="mt-1 font-semibold text-ink">{project.clientName}</dd>
                  </div>
                ) : null}
                {project.productsUsed.length ? (
                  <div className="border-t border-border pt-5 mt-5">
                    <dt className="text-body-sm text-ink-muted">Products used</dt>
                    <dd className="mt-2 text-sm font-semibold leading-relaxed text-ink">
                      {project.productsUsed.join(", ")}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </FadeIn>
          </div>

          {project.testimonial ? (
            <FadeIn className="mt-16">
              <figure className="mx-auto max-w-3xl rounded-2xl bg-primary p-8 text-center shadow-md md:p-10">
                <blockquote className="text-heading-xl font-display leading-relaxed text-paper">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-paper/70">
                  {project.testimonial.author}
                </figcaption>
              </figure>
            </FadeIn>
          ) : null}
        </div>
      </section>

      {project.gallery.length ? (
        <section className="section-padding bg-surface">
          <div className="container-page">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Project Gallery</p>
              <h2 className="text-display-md font-display font-medium">Installation highlights</h2>
            </FadeIn>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((item, index) => (
                <FadeIn key={`${item.image}-${index}`} delay={index * 0.05}>
                  <figure>
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src={item.image}
                        alt={item.caption || `${project.title} project image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {item.caption ? (
                      <figcaption className="mt-3 text-body-sm text-ink-muted">{item.caption}</figcaption>
                    ) : null}
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-ink-950">
        <div className="container-page text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-display-md font-display font-medium text-paper">
              Planning a similar solar project?
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="accent" size="lg" asChild><Link href="/quote">Get a Free Quote</Link></Button>
              <Button variant="outline-light" size="lg" asChild><Link href="/projects"><ArrowLeft className="h-4 w-4" /> All Projects</Link></Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
