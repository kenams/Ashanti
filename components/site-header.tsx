import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Prestations", href: "#prestations" },
  { label: "Avis", href: "#avis" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#accueil" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-rose/70 bg-blush text-lg font-semibold text-ink">
              A
            </div>
            <div>
              <p className="font-display text-2xl leading-none">Ashanti Beauty</p>
              <p className="text-xs uppercase tracking-[0.28em] text-ink/55">
                Institut de beauté à Balma
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/75 transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.bookingHref}
            className="rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink/90 sm:px-5"
          >
            Réserver maintenant
          </a>
        </div>

        <nav className="-mx-1 mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
