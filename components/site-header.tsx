"use client";

import { siteConfig } from "@/lib/site";

type Locale = "fr" | "en";

const navItems = {
  fr: [
    { label: "Prestations", href: "#prestations" },
    { label: "L'institut", href: "#apropos" },
    { label: "Partenaires", href: "#partenaires" },
    { label: "Avis", href: "#avis" },
    { label: "Réservation", href: "#reservation" },
    { label: "Contact", href: "#contact" }
  ],
  en: [
    { label: "Services", href: "#prestations" },
    { label: "Studio", href: "#apropos" },
    { label: "Partners", href: "#partenaires" },
    { label: "Reviews", href: "#avis" },
    { label: "Booking", href: "#reservation" },
    { label: "Contact", href: "#contact" }
  ]
};

export function SiteHeader({
  locale,
  onLocaleChange
}: {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-[linear-gradient(180deg,rgba(20,13,17,0.34),rgba(20,13,17,0.16))] text-white shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-md">
      <div className="container-shell">
        <div className="flex min-h-24 items-center justify-between gap-4">
          <a href="#accueil" className="min-w-0" aria-label="Ashanti Beauty - Accueil">
            <img
              src={siteConfig.logoWhite}
              alt="Ashanti Beauty"
              className="h-16 w-auto max-w-[300px] object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.34)] sm:h-20"
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {navItems[locale].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white/86 drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)] transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.bookingHref}
            className="rounded-full border border-white/40 bg-white/16 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] backdrop-blur-md transition hover:bg-white hover:text-[#5b2944]"
          >
            {locale === "fr" ? "Réserver" : "Book"}
          </a>

          <div className="flex items-center rounded-full border border-white/25 bg-white/10 p-1 text-xs font-bold text-white backdrop-blur-md">
            {(["fr", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onLocaleChange(item)}
                className={`rounded-full px-3 py-2 uppercase tracking-[0.16em] transition ${
                  locale === item ? "bg-white text-[#5b2944]" : "text-white/72 hover:text-white"
                }`}
                aria-pressed={locale === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
