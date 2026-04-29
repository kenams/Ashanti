import { CalendarDays } from "lucide-react";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Histoire", href: "#histoire" },
  { label: "Prestations", href: "#prestations" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Instagram", href: "#instagram" },
  { label: "Avis", href: "#avis" },
  { label: "Adresse", href: "#adresse" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#151113]/75 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex min-h-[82px] items-center justify-between gap-4">
          <a
            href="#accueil"
            className="relative h-12 w-[150px] shrink-0 overflow-hidden sm:h-14 sm:w-[190px]"
            aria-label="Ashanti Beauty - Accueil"
          >
            <img
              src={siteConfig.logoWhite}
              alt="Ashanti Beauty"
              className="absolute left-1/2 top-1/2 h-[182px] w-[182px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)] sm:h-[230px] sm:w-[230px]"
            />
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.bookingHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-[#f7d9e8] sm:px-5"
          >
            <CalendarDays className="h-4 w-4" />
            Réserver
          </a>
        </div>
      </div>
    </header>
  );
}
