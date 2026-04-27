import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Prestations", href: "#prestations" },
  { label: "L'institut", href: "#apropos" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Avis", href: "#avis" },
  { label: "Reservation", href: "#reservation" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f8d3e7]/45 bg-[linear-gradient(180deg,rgba(239,172,210,0.88),rgba(239,172,210,0.58))] text-white shadow-[0_22px_70px_rgba(91,41,68,0.18)] backdrop-blur-2xl">
      <div className="container-shell">
        <div className="flex min-h-24 items-center justify-between gap-4">
          <a href="#accueil" className="min-w-0" aria-label="Ashanti Beauty - Accueil">
            <img
              src={siteConfig.logoWhite}
              alt="Ashanti Beauty"
              className="h-16 w-auto max-w-[300px] object-contain drop-shadow-[0_5px_22px_rgba(91,41,68,0.22)] sm:h-20"
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white/82 drop-shadow-sm transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.bookingHref}
            className="rounded-full border border-white/50 bg-white/92 px-5 py-3 text-sm font-semibold text-[#5b2944] shadow-[0_12px_30px_rgba(91,41,68,0.16)] transition hover:bg-white hover:text-[#3e1d30]"
          >
            Reserver
          </a>
        </div>
      </div>
    </header>
  );
}
