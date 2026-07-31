import type { Metadata } from "next";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, ChevronRight, Clock, Tag } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { getPayloadBlogPostBySlug, getPayloadBlogListing } from "@/lib/cms";
import { getCanonicalUrl } from "@/lib/site-url";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPayloadBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    alternates: {
      canonical: getCanonicalUrl(post.seo?.canonicalUrl, `/blog/${slug}`),
    },
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: [{ url: post.seo?.ogImage || post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = await getPayloadBlogPostBySlug(slug);
  if (!post) notFound();

  // Related posts: Payload listing first, then static
  const payloadListing = await getPayloadBlogListing();
  const related = payloadListing
    .filter((item) => item.href !== `/blog/${slug}`)
    .slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative page-hero-spacing pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink-950/70 via-ink-950/60 to-ink-950/90" />
        </div>

        <div className="relative container-page pb-16 md:pb-24">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="mb-10" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white/80 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li>
                  <Link href="/blog" className="hover:text-white/80 transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li className="text-white/80 line-clamp-1">{post.title}</li>
              </ol>
            </nav>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                <Tag className="h-3 w-3" aria-hidden="true" />
                {post.category}
              </span>
              <span className="text-white/50 text-sm">{post.date}</span>
              <span className="flex items-center gap-1 text-white/50 text-sm">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-display-xl font-display font-medium text-white max-w-3xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-body-lg text-white/70 max-w-2xl leading-relaxed">
              {post.excerpt}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-background">
        <div className="container-page py-16 md:py-24">
          <div className="mx-auto max-w-2xl xl:max-w-none xl:grid xl:grid-cols-[1fr_320px] xl:gap-16">

            {/* Main content */}
            <article className="rich-text">
              <RichText data={post.lexicalContent} disableContainer />

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-border">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-body-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden xl:block">
              <div className="sticky top-28 space-y-8">
                {/* CTA card */}
                <div className="rounded-2xl bg-ink-950 p-6">
                  <p className="text-overline text-accent mb-3">Free consultation</p>
                  <h3 className="text-heading-xl font-display font-medium text-paper mb-3">
                    Ready to go solar?
                  </h3>
                  <p className="text-body-sm text-paper/60 leading-relaxed mb-6">
                    Our team will assess your site and send you a free proposal — usually within 24 hours.
                  </p>
                  <Button variant="accent" size="md" className="w-full" asChild>
                    <Link href="/quote">Get a Free Quote</Link>
                  </Button>
                </div>

                {/* Related posts */}
                <div>
                  <p className="text-overline text-ink-muted mb-4">More articles</p>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="group flex gap-3 items-start"
                      >
                        <div className="relative h-14 w-14 shrink-0 rounded-xl overflow-hidden bg-surface">
                          <Image
                            src={r.image}
                            alt={r.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="56px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-body-sm font-medium text-ink leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                            {r.title}
                          </p>
                          <p className="mt-1 text-body-sm text-ink-muted">{r.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts — mobile/tablet */}
      <section className="bg-surface py-16 xl:hidden">
        <div className="container-page">
          <p className="text-overline text-primary mb-8">More articles</p>
          <Stagger className="grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <StaggerItem key={r.href}>
                <Link
                  href={r.href}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-body-sm text-ink-muted mb-2">{r.category} · {r.date}</p>
                    <h3 className="text-heading-lg font-semibold text-ink leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-body-sm font-semibold text-primary">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA — mobile/tablet */}
      <section className="bg-ink-950 section-padding xl:hidden">
        <div className="container-page text-center">
          <p className="text-overline text-accent mb-4">Free consultation</p>
          <h2 className="text-display-lg font-display font-medium text-paper mb-4">
            Ready to go solar?
          </h2>
          <p className="text-body-lg text-paper/60 max-w-md mx-auto mb-8">
            Get a free site assessment and proposal from our team — usually within 24 hours.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Full-width CTA — desktop */}
      <section className="hidden xl:block bg-ink-950 section-padding">
        <div className="container-page">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center gap-8">
            <FadeIn>
              <p className="text-overline text-accent mb-4">Ready to go solar?</p>
              <h2 className="text-display-lg font-display font-medium text-paper">
                Turn knowledge into action
              </h2>
              <p className="mt-4 text-body-lg text-paper/70 leading-relaxed max-w-md">
                Use what you&apos;ve learned to make a confident decision. Our team is ready to answer your specific questions and put together a free proposal.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button variant="outline-light" size="lg" asChild>
                  <Link href="/contact">Ask a question</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
