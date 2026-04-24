import { CalendarDays, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-black/[0.08] bg-white/95 p-2 shadow-card backdrop-blur">
        <a
          href={siteConfig.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-black/[0.08] px-4 py-3 text-sm font-semibold text-ink"
        >
          <Phone className="h-4 w-4" />
          Appeler
        </a>
        <a
          href={siteConfig.bookingHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white"
        >
          <CalendarDays className="h-4 w-4" />
          Reserver
        </a>
      </div>
    </div>
  );
}
