import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, BookOpen, Tag } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import type { BlogPostCardData } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Solar Blog & Insights | Solarlux Kenya",
  description:
    "Expert solar guides, product comparisons, installation tips, and industry news for Kenyan homeowners, businesses, and hospitality operators.",
  openGraph: {
    title: "Solar Blog & Insights | Solarlux Kenya",
    description:
      "Practical solar advice — sizing your system, comparing batteries, understanding warranties, and making the most of solar energy in Kenya.",
  },
};

const posts: BlogPostCardData[] = [
  {
    title: "How to Choose the Right Solar Panel Size for Your Home",
    excerpt:
      "A practical guide to calculating your energy needs and selecting the perfect panel wattage for Kenyan households.",
    image: "/projects/project-11.03.21.jpg",
    category: "Guides",
    date: "March 12, 2026",
    href: "/blog/choose-right-solar-panel-size",
  },
  {
    title: "Understanding Solar Battery Storage: LiFePO4 vs Lead Acid",
    excerpt:
      "Compare battery technologies, lifespans, and costs to find the best energy storage for your solar system.",
    image: "/projects/project-11.03.20.jpg",
    category: "Technology",
    date: "February 28, 2026",
    href: "/blog/lifepo4-vs-lead-acid-batteries",
  },
  {
    title: "5 Signs Your Business Should Switch to Solar Energy",
    excerpt:
      "Rising electricity bills and unreliable grid power are pushing Kenyan businesses to go solar. Here's what you need to know.",
    image: "/projects/project-11.03.36.jpg",
    category: "Business",
    date: "January 15, 2026",
    href: "/blog/5-signs-your-business-should-switch-to-solar",
  },
  {
    title: "What Is a Hybrid Inverter and Do You Need One?",
    excerpt:
      "Hybrid inverters are becoming the default choice for new installations. We break down exactly what they do and when they make sense for your budget.",
    image: "/projects/project-11.03.21.jpg",
    category: "Technology",
    date: "December 20, 2025",
    href: "/blog/what-is-a-hybrid-inverter",
  },
  {
    title: "Solar for Hotels & Lodges: The Complete Kenya Guide",
    excerpt:
      "Hospitality operators across Kenya are cutting operating costs with solar. This guide covers system sizing, ROI, and real-world examples.",
    image: "/projects/project-11.03.36.jpg",
    category: "Industry",
    date: "November 8, 2025",
    href: "/blog/solar-for-hotels-lodges-kenya",
  },
  {
    title: "Understanding the 25-Year Solar Panel Warranty",
    excerpt:
      "Most manufacturers offer 25-year performance warranties — but what exactly do they cover? What's the difference between product and performance guarantees?",
    image: "/projects/project-11.03.20.jpg",
    category: "Guides",
    date: "October 3, 2025",
    href: "/blog/understanding-25-year-solar-warranty",
  },
];

const categories = ["All", "Guides", "Technology", "Business", "Industry"];

const featuredPost = posts[0];
const remainingPosts = posts.slice(1);

export default function BlogPage() {
  return (
    <main>
      {/* Hero — dark editorial masthead */}
      <section className="relative bg-ink-950 page-hero-spacing pb-20 md:pb-28 overflow-hidden">
        {/* Subtle background image with heavy overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink-950/60 via-ink-950/80 to-ink-950" />
        </div>

        <div className="relative container-page">
          <FadeIn>
            <nav className="mb-10" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/40">
                <li>
                  <Link href="/" className="hover:text-white/70 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-white/70">Blog</li>
              </ol>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-accent" aria-hidden="true" />
              <p className="text-overline text-accent tracking-widest">Solar Insights &amp; Guides</p>
            </div>

            <h1 className="text-display-xl font-display font-medium text-white max-w-3xl leading-tight">
              Practical solar knowledge —{" "}
              <span className="text-brand-yellow-400">built for Kenya</span>
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-white/60 leading-relaxed">
              Expert advice on choosing, sizing, installing, and maintaining solar systems. From
              first-time buyers to large commercial operators.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-background pt-16 md:pt-24">
        <div className="container-page">
          <FadeIn>
            <Link
              href={featuredPost.href}
              className="group grid lg:grid-cols-[1.1fr_0.9fr] gap-8 rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-video lg:aspect-auto lg:min-h-96 overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-950/30 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1 text-xs font-medium text-ink">
                    <Tag className="h-3 w-3" aria-hidden="true" />
                    {featuredPost.category}
                  </span>
                  <span className="text-body-sm text-ink-muted">{featuredPost.date}</span>
                </div>
                <h2 className="text-display-md font-display font-medium text-ink group-hover:text-primary transition-colors duration-200">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-body font-semibold text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-page">
          {/* Category filter pills */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`rounded-full px-4 py-2 text-body-sm font-medium border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    cat === "All"
                      ? "bg-primary text-white border-primary"
                      : "bg-surface text-ink border-border hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <StaggerItem key={post.title}>
                <Link
                  href={post.href}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-950/20 to-transparent" />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center rounded-full bg-surface border border-border px-3 py-1 text-xs font-medium text-ink">
                        {post.category}
                      </span>
                      <span className="text-body-sm text-ink-muted">{post.date}</span>
                    </div>

                    <h3 className="text-heading-xl font-semibold font-body text-ink leading-snug group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="mt-3 flex-1 text-body text-ink-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-1.5 text-body-sm font-semibold text-primary">
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

      {/* CTA */}
      <section className="section-padding bg-ink-950">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeIn>
              <p className="text-overline text-accent mb-4">Ready to go solar?</p>
              <h2 className="text-display-lg font-display font-medium text-paper">
                Turn knowledge into action
              </h2>
              <p className="mt-4 text-body-lg text-paper/70 leading-relaxed max-w-md">
                Use what you&apos;ve learned to make a confident decision. Our team is ready to
                answer your specific questions and put together a free proposal.
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
