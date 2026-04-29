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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#151113]/45 text-white backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <a href="#accueil" className="flex min-w-0 items-center" aria-label="Ashanti Beauty - Accueil">
            <img
              src={siteConfig.logoWhite}
              alt="Ashanti Beauty"
              className="h-10 w-auto max-w-[170px] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.24)] sm:h-12"
            />
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/78 transition hover:text-white"
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
