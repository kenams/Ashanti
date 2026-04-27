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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[linear-gradient(180deg,rgba(10,7,9,0.82),rgba(10,7,9,0.42))] text-white backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex min-h-24 items-center justify-between gap-4">
          <a href="#accueil" className="min-w-0" aria-label="Ashanti Beauty - Accueil">
            <img
              src={siteConfig.logoWhite}
              alt="Ashanti Beauty"
              className="h-16 w-auto max-w-[290px] rounded-full border border-white/24 bg-[#efacd2]/28 px-7 py-3 object-contain shadow-[0_18px_46px_rgba(239,172,210,0.22)] backdrop-blur-md sm:h-20 sm:px-9"
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.bookingHref}
            className="rounded-full border border-white/30 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-transparent hover:text-white"
          >
            Reserver
          </a>
        </div>
      </div>
    </header>
  );
}
