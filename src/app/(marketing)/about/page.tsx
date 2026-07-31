import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { getAboutPageData, getPayloadTeamMembers } from "@/lib/cms";
import { STATS } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us",
  description:
    "Over 8 years powering Kenyan homes, businesses, and hotels with premium solar energy solutions. Learn about our mission, values, and the team behind Solarlux Kenya.",
};

const whyChooseUs = [
  "Competitive prices without compromising quality",
  "Expert technicians at every stage of your project",
  "After-sales service and ongoing maintenance",
  "Safety-first installations following industry best practices",
  "24/7 customer support — always available",
  "Personalized solutions tailored to your needs and budget",
  "Exclusive partnerships with top global solar manufacturers",
];

export default async function AboutPage() {
  const [about, teamMembers] = await Promise.all([
    getAboutPageData(),
    getPayloadTeamMembers(),
  ]);

  return (
    <main>
      {/* ── Hero — Split layout: text left, double-bezel image right ── */}
      <section className="relative page-hero-spacing pb-20 md:pb-28 bg-ink-950 overflow-hidden">
        {/* Ambient glow — brand blue radial, right side */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 75% 50%, #1d5aa6 0%, transparent 70%)",
          }}
        />

        <div className="container-page relative z-10">
          {/* Breadcrumb */}
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
              <li className="text-white/80">About</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Story + inline stats */}
            <FadeIn>
              <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[11px] uppercase tracking-[0.12em] font-semibold text-accent mb-6">
                Our Story
              </span>
              <h1 className="text-display-xl font-display font-medium text-paper max-w-xl">
                {about.heroTitle}
              </h1>
              <p className="mt-6 max-w-lg text-body-lg text-paper/65 leading-relaxed">
                {about.heroBody}
              </p>

              {/* Stats inline — replaces separate strip below */}
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 border-t border-paper/10 pt-10">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-display-md font-display font-semibold text-accent tabular-nums">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-paper/50 uppercase tracking-wide leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: Double-bezel image */}
            <FadeIn delay={0.2}>
              <div className="rounded-4xl bg-ink-900/80 ring-1 ring-paper/10 p-2">
                <div className="rounded-3xl overflow-hidden aspect-4/3 relative">
                  <Image
                    src="/about-team.png"
                    alt="Solarlux Kenya team and solar installation"
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
        </div>
      </section>

      {/* ── Mission & Vision — Two rows: text left, image right ── */}
      <section className="section-padding bg-background">
        <div className="container-page flex flex-col gap-20 md:gap-28">

          {/* Mission row */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Our Mission</p>
              <h2 className="text-display-lg font-display font-medium">
                More than a product — a solar experience
              </h2>
              <p className="mt-5 text-body text-ink-muted leading-relaxed">
                {about.mission}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-4xl bg-surface ring-1 ring-border p-2">
                <div className="rounded-3xl overflow-hidden aspect-4/3 relative">
                  <Image
                    src="/solutions/residential-solar.jpg"
                    alt="Solarlux Kenya solar installation — residential project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-border" />

          {/* Vision row */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Our Vision</p>
              <h2 className="text-display-lg font-display font-medium">
                A Kenya powered by the sun
              </h2>
              <p className="mt-5 text-body text-ink-muted leading-relaxed">
                {about.vision}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-4xl bg-surface ring-1 ring-border p-2">
                <div className="rounded-3xl overflow-hidden aspect-4/3 relative">
                  <Image
                    src="/solutions/commercial-solar.png"
                    alt="Solarlux Kenya — solar powering Kenyan communities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ── Values — Asymmetric bento grid ── */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">What We Stand For</p>
            <h2 className="text-display-lg font-display font-medium max-w-xl text-balance">
              Our core values guide everything we do
            </h2>
          </FadeIn>

          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured first value — spans 2 cols, primary bg */}
            <StaggerItem className="lg:col-span-2 rounded-2xl bg-primary p-8 md:p-10 flex flex-col justify-between min-h-50">
              <div>
                <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-paper/40 mb-4 block">
                  01
                </span>
                <h3 className="text-display-md font-display font-medium text-paper">
                  {about.values[0].title}
                </h3>
                <p className="mt-3 text-body text-paper/65 leading-relaxed max-w-lg">
                  {about.values[0].description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-paper/10 border border-paper/20" />
                <div className="h-px flex-1 bg-paper/10" />
              </div>
            </StaggerItem>

            {/* Remaining values: standard cards */}
            {about.values.slice(1).map((value, i) => (
              <StaggerItem
                key={value.title}
                className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-3"
              >
                <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-ink-muted">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div className="h-px w-8 bg-primary/30 rounded-full" />
                <h3 className="text-heading-xl font-semibold font-body">
                  {value.title}
                </h3>
                <p className="text-body text-ink-muted leading-relaxed">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {teamMembers.length > 0 ? (
        <section className="section-padding bg-background">
          <div className="container-page">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Our Team</p>
              <h2 className="text-display-lg font-display font-medium max-w-2xl text-balance">
                {about.teamSectionTitle}
              </h2>
              <p className="mt-5 text-body-lg text-ink-muted leading-relaxed max-w-2xl">
                {about.teamSectionBody}
              </p>
            </FadeIn>

            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <StaggerItem
                  key={member.name}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="relative aspect-4/3 bg-surface">
                    {member.photoUrl ? (
                      <Image
                        src={member.photoUrl}
                        alt={`${member.name}, ${member.role}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-display-lg font-display text-primary/40">
                        {member.name
                          .split(" ")
                          .slice(0, 2)
                          .map((part) => part.charAt(0))
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-heading-xl font-semibold">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
                    {member.bio ? (
                      <p className="mt-4 text-body text-ink-muted leading-relaxed">{member.bio}</p>
                    ) : null}
                    {member.linkedinUrl ? (
                      <Link
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        LinkedIn profile
                      </Link>
                    ) : null}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

      {/* ── Why Choose Us — Sticky image + numbered list ── */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Left: double-bezel image, sticky on desktop */}
            <FadeIn className="lg:sticky lg:top-28">
              <div className="rounded-4xl bg-surface ring-1 ring-border p-2">
                <div className="rounded-3xl overflow-hidden aspect-3/4 relative">
                  <Image
                    src="/projects/project-11.03.27.jpg"
                    alt="Solarlux Kenya installation team at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ink-950/50 via-transparent pointer-events-none" />
                </div>
              </div>
            </FadeIn>

            {/* Right: numbered checklist */}
            <FadeIn delay={0.15}>
              <p className="text-overline text-primary mb-4">Why Choose Us</p>
              <h2 className="text-display-lg font-display font-medium">
                The Solarlux difference
              </h2>
              <p className="mt-5 text-body-lg text-ink-muted leading-relaxed">
                We&apos;ve been in the Kenyan solar market for over 8 years. We
                know what works, what doesn&apos;t, and how to build systems that
                last 25+ years.
              </p>

              <ol className="mt-10 divide-y divide-border">
                {whyChooseUs.map((item, i) => (
                  <li key={item} className="flex items-start gap-5 py-4">
                    <span className="font-mono text-sm font-semibold text-primary/40 tabular-nums shrink-0 mt-0.5 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-body text-ink leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Promise / CTA — Dark with ambient radial glow ── */}
      <section className="section-padding bg-ink-950 relative overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 65%, #1d5aa6 0%, transparent 65%)",
          }}
        />

        <div className="container-page relative z-10 text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[11px] uppercase tracking-[0.12em] font-semibold text-accent mb-6">
              Our Promise
            </span>
            <h2 className="text-display-lg font-display font-medium text-paper mx-auto max-w-3xl text-balance">
              &ldquo;More than just a product — knowledge, support, and a
              meaningful solar experience.&rdquo;
            </h2>
            <p className="mt-6 text-body-lg text-paper/55 max-w-xl mx-auto leading-relaxed">
              We provide comprehensive solar solutions for homes, businesses, and
              hotels. Our experienced team is with you from the first
              consultation through years of reliable operation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link href="/projects">See Our Projects</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
