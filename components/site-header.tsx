import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Prestations", href: "#prestations" },
  { label: "L'institut", href: "#apropos" },
  { label: "Avis", href: "#avis" },
  { label: "Reservation", href: "#reservation" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(253,249,247,0.82)] backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <a href="#accueil" className="min-w-0">
            <p className="font-display text-[1.85rem] leading-none text-ink">
              Ashanti Beauty
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.36em] text-ink/[0.45]">
              Institut de beaute a Balma
            </p>
          </a>

          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/[0.66] transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.bookingHref}
            className="rounded-full border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-ink"
          >
            Reserver
          </a>
        </div>
      </div>
    </header>
  );
}
