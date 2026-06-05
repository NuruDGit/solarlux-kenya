"use client";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import type { SiteSettingsData } from "@/lib/cms";
import { formatWhatsAppHref } from "@/lib/utils";
import { useReducedMotion } from "motion/react";

interface WhatsAppFabProps {
  siteSettings: SiteSettingsData;
}

export function WhatsAppFab({ siteSettings }: WhatsAppFabProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed right-6 bottom-6 z-80 flex flex-col items-end gap-2">
      <a
        href={formatWhatsAppHref(
          siteSettings.whatsAppNumber,
          siteSettings.defaultWhatsAppMessage,
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center gap-3"
      >
        {/* Pill label — visible on desktop */}
        <span className="hidden sm:flex items-center rounded-full bg-ink-950/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white shadow-lg opacity-0 translate-x-2 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-x-0 select-none pointer-events-none">
          Chat on WhatsApp
        </span>

        {/* Button container with pulse rings */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          {/* Pulse ring 1 */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366]"
            style={shouldReduceMotion ? {} : {
              animation: "whatsapp-pulse 2s ease-out infinite",
            }}
          />
          {/* Pulse ring 2 — offset by 1s */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366]"
            style={shouldReduceMotion ? {} : {
              animation: "whatsapp-pulse 2s ease-out 1s infinite",
            }}
          />

          {/* Button face */}
          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] active:translate-y-0">
            <WhatsAppIcon className="h-8 w-8 text-white" />
          </span>
        </div>
      </a>
    </div>
  );
}
