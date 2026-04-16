"use client";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CONTACT } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-80 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 lg:hidden"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
