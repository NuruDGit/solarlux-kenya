import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "How Solarlux Kenya handles personal information submitted through the website, including quote and contact enquiries.",
};

const sections = [
  {
    title: "What we collect",
    body:
      "When you contact Solarlux through the website, we may collect your name, phone number, email address, location, project details, and any information you include in your message. We collect only the information needed to respond to your enquiry, prepare a quote, or support an active customer relationship.",
  },
  {
    title: "How we use your information",
    body:
      "We use submitted information to respond to enquiries, prepare quotations, assess project fit, schedule follow-up conversations, and maintain internal records relating to customer requests. We do not collect information for unrelated marketing purposes without a clear operational reason.",
  },
  {
    title: "When we share it",
    body:
      "We may share relevant information internally with the Solarlux team members involved in sales, design, installation, or support. We may also share the minimum information necessary with service providers that help us run the website or manage legitimate business operations. We do not sell customer data.",
  },
  {
    title: "How long we keep it",
    body:
      "We retain enquiry and project information only for as long as it remains useful for business communication, quotation follow-up, installation planning, after-sales support, legal compliance, or record-keeping. If data is no longer needed for those purposes, it should be removed from active systems in the ordinary course of operations.",
  },
  {
    title: "Your choices",
    body:
      "You may ask us to update or correct your contact details, or to stop using your information for follow-up where no active project or legal obligation requires retention. Requests can be sent using the contact details below.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-surface page-hero-spacing pb-12 md:pb-20">
        <div className="container-page">
          <FadeIn>
            <p className="mb-4 text-overline text-primary">Legal</p>
            <h1 className="max-w-3xl text-display-xl font-display font-medium text-ink">
              Privacy policy
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-ink-muted">
              This page explains how Solarlux Kenya handles information submitted through the
              website, how we use it, and the choices available to you.
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

              <section>
                <h2 className="text-heading-xl font-semibold font-body text-ink">Contact about privacy</h2>
                <p className="mt-4 max-w-[65ch] text-body leading-relaxed text-ink-muted">
                  For questions about information submitted through this website, contact Solarlux
                  Kenya by email at {CONTACT.email} or by phone at {CONTACT.phone1}.
                </p>
              </section>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="secondary" asChild>
                <Link href="/terms">Read terms of service</Link>
              </Button>
              <Button variant="primary" asChild>
                <Link href="/contact">Contact Solarlux</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
