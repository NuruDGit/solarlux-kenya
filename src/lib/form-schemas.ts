import { z } from "zod";

export const quoteSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  interest: z.array(z.string()).min(1, "Please select at least one option"),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().optional(),
  monthlyBill: z.enum(["under5k", "5k-15k", "15k-30k", "over30k", "unsure"], {
    required_error: "Please select your monthly bill range",
  }),
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(9, "Please enter a valid phone number"),
  propertyType: z.enum(["home", "business", "hotel", "other"], {
    required_error: "Please select a property type",
  }),
});

export const contactLeadSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Please add a short message"),
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(9, "Please enter a valid phone number"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
export type ContactLeadFormData = z.infer<typeof contactLeadSchema>;