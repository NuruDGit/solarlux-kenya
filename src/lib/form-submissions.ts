import { getPayload } from "payload";

import config from "@payload-config";
import type { ContactLeadFormData, QuoteFormData } from "@/lib/form-schemas";

async function resolvePayload() {
  return getPayload({ config });
}

export async function submitQuoteRequest(data: QuoteFormData) {
  const payload = await resolvePayload();

  return payload.create({
    collection: "quote-requests",
    data: {
      email: data.email,
      fullName: data.name,
      interests: data.interest,
      location: data.location,
      message: data.message,
      monthlyBillRange: data.monthlyBill,
      phone: data.phone,
      propertyType: data.propertyType,
      source: "website-quote-page",
    },
  });
}

export async function submitContactLead(data: ContactLeadFormData) {
  const payload = await resolvePayload();

  return payload.create({
    collection: "contact-submissions",
    data: {
      email: data.email,
      fullName: data.name,
      message: data.message,
      phone: data.phone,
      subject: "Homepage CTA consultation request",
    },
  });
}