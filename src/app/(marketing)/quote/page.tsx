"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { formatPhoneHref, formatWhatsAppHref, cn } from "@/lib/utils";
import { CONTACT, STATS } from "@/lib/constants";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(9, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(2, "Please enter your location"),
  propertyType: z.enum(["home", "business", "hotel", "other"], {
    required_error: "Please select a property type",
  }),
  monthlyBill: z.enum(["under5k", "5k-15k", "15k-30k", "over30k", "unsure"], {
    required_error: "Please select your monthly bill range",
  }),
  interest: z.array(z.string()).min(1, "Please select at least one option"),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const propertyTypes = [
  { value: "home", label: "Home / Residential" },
  { value: "business", label: "Business / Commercial" },
  { value: "hotel", label: "Hotel / Hospitality" },
  { value: "other", label: "Other" },
];

const billRanges = [
  { value: "under5k", label: "Under KES 5,000" },
  { value: "5k-15k", label: "KES 5,000 – 15,000" },
  { value: "15k-30k", label: "KES 15,000 – 30,000" },
  { value: "over30k", label: "Over KES 30,000" },
  { value: "unsure", label: "Not sure" },
];

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

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { interest: [] },
  });

  const selectedInterests = watch("interest") ?? [];

  const toggleInterest = (value: string) => {
    const current = selectedInterests;
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue("interest", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: QuoteFormData) => {
    // In production this would POST to /api/quote
    await new Promise((r) => setTimeout(r, 800));
    console.log("Quote submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20 bg-surface">
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
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 bg-ink-950">
        <div className="container-page">
          <FadeIn>
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
                            <p className="mt-1.5 text-body-sm text-danger">
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
                            <p className="mt-1.5 text-body-sm text-danger">
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
                            <p className="mt-1.5 text-body-sm text-danger">
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
                            <p className="mt-1.5 text-body-sm text-danger">
                              {errors.location.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Property type */}
                      <div>
                        <p className="mb-3 text-body-sm font-medium text-ink">
                          Property Type <span className="text-danger">*</span>
                        </p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                          {propertyTypes.map((type) => (
                            <label
                              key={type.value}
                              className={cn(
                                "flex cursor-pointer items-center justify-center rounded-lg border px-4 py-3 text-body-sm font-medium text-center transition-colors duration-fast",
                                watch("propertyType") === type.value
                                  ? "border-primary bg-brand-blue-50 text-primary"
                                  : "border-border text-ink hover:border-primary/50"
                              )}
                            >
                              <input
                                type="radio"
                                value={type.value}
                                {...register("propertyType")}
                                className="sr-only"
                              />
                              {type.label}
                            </label>
                          ))}
                        </div>
                        {errors.propertyType && (
                          <p className="mt-1.5 text-body-sm text-danger">
                            {errors.propertyType.message}
                          </p>
                        )}
                      </div>

                      {/* Monthly bill */}
                      <div>
                        <p className="mb-3 text-body-sm font-medium text-ink">
                          Current Monthly Electricity Bill{" "}
                          <span className="text-danger">*</span>
                        </p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                          {billRanges.map((range) => (
                            <label
                              key={range.value}
                              className={cn(
                                "flex cursor-pointer items-center justify-center rounded-lg border px-3 py-3 text-body-sm font-medium text-center transition-colors duration-fast",
                                watch("monthlyBill") === range.value
                                  ? "border-primary bg-brand-blue-50 text-primary"
                                  : "border-border text-ink hover:border-primary/50"
                              )}
                            >
                              <input
                                type="radio"
                                value={range.value}
                                {...register("monthlyBill")}
                                className="sr-only"
                              />
                              {range.label}
                            </label>
                          ))}
                        </div>
                        {errors.monthlyBill && (
                          <p className="mt-1.5 text-body-sm text-danger">
                            {errors.monthlyBill.message}
                          </p>
                        )}
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
                          <p className="mt-1.5 text-body-sm text-danger">
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
                  <h3 className="text-heading-xl font-semibold font-body mb-6">
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
    </>
  );
}
