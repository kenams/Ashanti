import { CalendarDays, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-full border border-white/70 bg-ink p-2 shadow-card">
        <a
          href={siteConfig.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink"
        >
          <Phone className="h-4 w-4" />
          Appeler
        </a>
        <a
          href={siteConfig.bookingHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rose px-4 py-3 text-sm font-semibold text-ink"
        >
          <CalendarDays className="h-4 w-4" />
          Réserver
        </a>
      </div>
    </div>
  );
}
