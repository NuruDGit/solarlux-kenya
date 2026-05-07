"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CONTACT } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <Button
      variant="ghost"
      size="icon"
      layered={false}
      sunrise={false}
      className="fixed right-6 bottom-6 z-80 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-xl active:translate-y-0 lg:hidden"
      asChild
    >
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </Button>
  );
}
