import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service",
  description:
    "The terms that govern use of the Solarlux Kenya website, quote requests, and informational content.",
};

const sections = [
  {
    title: "Website use",
    body:
      "The Solarlux Kenya website is provided for general information, service discovery, and customer enquiry purposes. You may use the site to learn about products and services, request quotations, or contact the business. You should not misuse the website, attempt to interfere with its operation, or submit misleading information through forms.",
  },
  {
    title: "Quotes and project discussions",
    body:
      "Any estimate, consultation, or quote requested through the website is an initial business communication, not a binding final contract. Final scope, pricing, equipment availability, timelines, and installation commitments depend on project review, technical assessment, and direct confirmation with Solarlux.",
  },
  {
    title: "Content accuracy",
    body:
      "We aim to keep information on products, services, and project examples accurate and useful. Even so, published information may change over time, including product specifications, stock position, manufacturer terms, pricing context, and service availability. Clients should confirm important commercial details directly with the team before making decisions.",
  },
  {
    title: "Third-party links and services",
    body:
      "The website may include links to third-party services such as maps, messaging platforms, or social networks. Solarlux is not responsible for the policies, availability, or operation of third-party platforms outside its control.",
  },
  {
    title: "Intellectual property",
    body:
      "Website copy, branding, imagery, and design elements published by Solarlux remain the property of Solarlux Kenya or its licensors unless otherwise stated. You may not reproduce or republish site materials for commercial use without permission.",
  },
  {
    title: "Changes to these terms",
    body:
      "Solarlux may update these terms as the website and business processes evolve. Continued use of the site after updates means you accept the revised version then in force.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <section className="bg-ink-950 page-hero-spacing pb-12 md:pb-20">
        <div className="container-page">
          <FadeIn>
            <p className="mb-4 text-overline text-accent">Legal</p>
            <h1 className="max-w-3xl text-display-xl font-display font-medium text-paper">
              Terms of service
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-paper/70">
              These terms explain the basis on which the website is provided and how enquiries,
              quotes, and published information should be understood.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container-page max-w-4xl">
          <FadeIn>
            <article className="space-y-10 rounded-3xl border border-border bg-card p-8 md:p-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-heading-xl font-semibold font-body text-ink">{section.title}</h2>
                  <p className="mt-4 max-w-[65ch] text-body leading-relaxed text-ink-muted">
                    {section.body}
                  </p>
                </section>
              ))}
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="secondary" asChild>
                <Link href="/privacy">Read privacy policy</Link>
              </Button>
              <Button variant="primary" asChild>
                <Link href="/quote">Request a quote</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
