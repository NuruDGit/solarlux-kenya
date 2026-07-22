import { z } from "zod";

export const quoteSchema = z.object({
  email: z.string().trim().max(254).email("Please enter a valid email address"),
  interest: z.array(z.string()).min(1, "Please select at least one option").max(10),
  location: z.string().trim().min(2, "Please enter your location").max(120),
  message: z.string().trim().max(2000, "Please keep additional details under 2,000 characters").optional(),
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(9, "Please enter a valid phone number").max(30),
});

export const contactLeadSchema = z.object({
  email: z.string().trim().max(254).email("Please enter a valid email address"),
  message: z.string().trim().min(5, "Please add a short message").max(2000),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(9, "Please enter a valid phone number").max(30),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
export type ContactLeadFormData = z.infer<typeof contactLeadSchema>;
