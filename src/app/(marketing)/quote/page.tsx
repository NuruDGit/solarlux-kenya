import type { Metadata } from "next";

import QuoteForm from "./quote-form";

export const metadata: Metadata = {
  title: "Get a Free Solar Quote",
  description:
    "Request a tailored solar quote from Solarlux Kenya for your home, business, or hospitality property.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Get a Free Solar Quote | Solarlux Kenya",
    description:
      "Tell us what you need and receive a tailored solar recommendation from our Kenya-based team.",
  },
};

export default function QuotePage() {
  return <QuoteForm />;
}
