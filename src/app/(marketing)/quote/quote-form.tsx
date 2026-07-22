"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { formatPhoneHref, formatWhatsAppHref, cn } from "@/lib/utils";
import { quoteSchema, type QuoteFormData } from "@/lib/form-schemas";
import { CONTACT, STATS } from "@/lib/constants";

const interests = [
  { value: "solar-panels", label: "Solar Panels" },
  { value: "battery", label: "Battery Storage" },
  { value: "inverter", label: "Inverter / Hybrid System" },
  { value: "water-heater", label: "Solar Water Heater" },
  { value: "water-pump", label: "Solar Water Pump" },
  { value: "full-kit", label: "Complete Solar Kit" },
  { value: "maintenance", label: "Maintenance / Repair" },
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { interest: [] },
  });

  const selectedInterests = useWatch({ control, name: "interest" }) ?? [];

  const toggleInterest = (value: string) => {
    const current = selectedInterests;
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue("interest", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/forms/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        setSubmitError(payload?.error ?? "Unable to submit your request right now.");
        return;
      }

      reset({
        email: "",
        interest: [],
        location: "",
        message: "",
        name: "",
        phone: "",
      });
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Unable to submit your request right now. Please check your connection and try again.",
      );
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-20 bg-surface">
        <div className="container-page text-center py-24">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-success" aria-hidden="true" />
            </div>
            <h1 className="text-display-lg font-display font-medium">
              Quote request received!
            </h1>
            <p className="mt-4 text-body-lg text-ink-muted max-w-lg mx-auto leading-relaxed">
              Thank you. Our team will review your requirements and get back to
              you within 24 hours with a tailored solar proposal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={formatWhatsAppHref(
                  CONTACT.whatsapp,
                  "Hi! I just submitted a quote request on your website. Looking forward to hearing from you."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-body font-semibold text-white"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Follow up on WhatsApp
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-4 text-body font-medium text-ink hover:bg-muted transition-colors duration-fast"
              >
                Back to Home
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="page-hero-spacing pb-12 bg-ink-950">
        <div className="container-page">
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
                <li className="text-white/80">Get a Quote</li>
              </ol>
            </nav>
            <p className="text-overline text-accent mb-4">Free, No Obligation</p>
            <h1 className="text-display-xl font-display font-medium text-paper max-w-2xl">
              Get your free solar quote in under 24 hours
            </h1>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl leading-relaxed">
              Tell us about your property and energy needs. We&apos;ll design a
              custom solar system with transparent pricing — no surprises.
            </p>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-heading-xl font-semibold font-display text-accent">
                    {stat.value}
                  </span>
                  <span className="text-body-sm text-paper/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                  <h2 className="text-heading-xl font-semibold font-body mb-8">
                    Your solar quote request
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="space-y-6">
                      {submitError ? (
                        <div role="alert" className="rounded-lg border border-danger/20 bg-danger/5 px-4 py-3 text-body-sm text-danger">
                          {submitError}
                        </div>
                      ) : null}

                      {/* Name + Phone */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-1.5 block text-body-sm font-medium text-ink"
                          >
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            maxLength={100}
                            placeholder="e.g. John Kamau"
                            {...register("name")}
                            className={cn(
                              "w-full rounded-lg border bg-background px-4 py-3 text-body text-ink",
                              "placeholder:text-ink-muted",
                              "transition-colors duration-fast",
                              "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                              errors.name
                                ? "border-danger focus:border-danger focus:ring-danger/20"
                                : "border-border"
                            )}
                          />
                          {errors.name && (
                            <p role="alert" className="mt-1.5 text-body-sm text-danger">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-1.5 block text-body-sm font-medium text-ink"
                          >
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            maxLength={30}
                            placeholder="e.g. 0712 345 678"
                            {...register("phone")}
                            className={cn(
                              "w-full rounded-lg border bg-background px-4 py-3 text-body text-ink",
                              "placeholder:text-ink-muted",
                              "transition-colors duration-fast",
                              "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                              errors.phone
                                ? "border-danger focus:border-danger focus:ring-danger/20"
                                : "border-border"
                            )}
                          />
                          {errors.phone && (
                            <p role="alert" className="mt-1.5 text-body-sm text-danger">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email + Location */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-body-sm font-medium text-ink"
                          >
                            Email Address <span className="text-danger">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            maxLength={254}
                            placeholder="you@example.com"
                            {...register("email")}
                            className={cn(
                              "w-full rounded-lg border bg-background px-4 py-3 text-body text-ink",
                              "placeholder:text-ink-muted",
                              "transition-colors duration-fast",
                              "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                              errors.email
                                ? "border-danger focus:border-danger focus:ring-danger/20"
                                : "border-border"
                            )}
                          />
                          {errors.email && (
                            <p role="alert" className="mt-1.5 text-body-sm text-danger">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="location"
                            className="mb-1.5 block text-body-sm font-medium text-ink"
                          >
                            Your Location <span className="text-danger">*</span>
                          </label>
                          <input
                            id="location"
                            type="text"
                            autoComplete="address-level2"
                            maxLength={120}
                            placeholder="e.g. Nairobi, Mombasa, Nakuru"
                            {...register("location")}
                            className={cn(
                              "w-full rounded-lg border bg-background px-4 py-3 text-body text-ink",
                              "placeholder:text-ink-muted",
                              "transition-colors duration-fast",
                              "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                              errors.location
                                ? "border-danger focus:border-danger focus:ring-danger/20"
                                : "border-border"
                            )}
                          />
                          {errors.location && (
                            <p role="alert" className="mt-1.5 text-body-sm text-danger">
                              {errors.location.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Interest */}
                      <div>
                        <p className="mb-3 text-body-sm font-medium text-ink">
                          I&apos;m interested in{" "}
                          <span className="text-danger">*</span>
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {interests.map((item) => (
                            <button
                              key={item.value}
                              type="button"
                              aria-pressed={selectedInterests.includes(item.value)}
                              onClick={() => toggleInterest(item.value)}
                              className={cn(
                                "rounded-full border px-4 py-2 text-body-sm font-medium transition-colors duration-fast",
                                selectedInterests.includes(item.value)
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border text-ink hover:border-primary/50"
                              )}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                        {errors.interest && (
                          <p role="alert" className="mt-1.5 text-body-sm text-danger">
                            {errors.interest.message}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-body-sm font-medium text-ink"
                        >
                          Additional Details{" "}
                          <span className="text-ink-muted">(optional)</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          maxLength={2000}
                          placeholder="Tell us more about your project — roof size, current backup system, specific goals..."
                          {...register("message")}
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-body text-ink placeholder:text-ink-muted transition-colors duration-fast focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? "Sending…" : "Submit Quote Request"}
                      </Button>

                      <p className="text-center text-body-sm text-ink-muted">
                        No obligation. We&apos;ll respond within 24 hours.
                      </p>
                    </div>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl bg-ink-950 p-8 text-paper">
                  <h3 className="text-heading-xl font-semibold font-body text-paper mb-6">
                    Prefer to talk?
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={formatPhoneHref(CONTACT.phone1)}
                      className="flex items-center gap-3 text-body text-paper/80 hover:text-accent transition-colors duration-fast"
                    >
                      <Phone className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                      {CONTACT.phone1}
                    </a>
                    <a
                      href={formatPhoneHref(CONTACT.phone2)}
                      className="flex items-center gap-3 text-body text-paper/80 hover:text-accent transition-colors duration-fast"
                    >
                      <Phone className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                      {CONTACT.phone2}
                    </a>
                    <a
                      href={formatWhatsAppHref(
                        CONTACT.whatsapp,
                        "Hi! I'd like to discuss a solar quote."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-body font-semibold text-white mt-4"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      Chat on WhatsApp
                    </a>
                  </div>
                  <p className="mt-6 text-body-sm text-paper/50">
                    {CONTACT.hours}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-heading-md font-semibold font-body mb-4">
                    What happens next?
                  </h3>
                  <ol className="space-y-4">
                    {[
                      "We review your requirements within 24 hours",
                      "Our engineer calls you to clarify details",
                      "You receive a detailed, itemized quote",
                      "We schedule a free site assessment",
                      "Installation at your convenience",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        <span className="text-body-sm text-ink-muted">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
