import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function formatWhatsAppHref(phone: string, message?: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const base = `https://wa.me/${cleaned}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
