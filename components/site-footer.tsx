import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-3xl">Ashanti Beauty</p>
          <p className="mt-4 max-w-md text-sm">
            Institut de beauté premium à Balma dédié aux soins beauté, au bien-être et à une expérience douce, élégante et soignée.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/55">
            Coordonnées
          </p>
          <div className="mt-4 space-y-3 text-sm text-ink/75">
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-ink">
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-ink">
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a
              href="https://maps.google.com/?q=5%20Esplanade%20Andr%C3%A9%20Michaux%2C%2031130%20Balma"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-ink"
            >
              <MapPin className="h-4 w-4" />
              {siteConfig.address}
            </a>
            <a href={siteConfig.instagramHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-ink">
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/55">
            Informations
          </p>
          <div className="mt-4 space-y-3 text-sm text-ink/75">
            {siteConfig.hours.map((slot) => (
              <p key={slot.day}>
                {slot.day} : {slot.value}
              </p>
            ))}
            <a href="#" className="block hover:text-ink">
              Mentions légales
            </a>
            <a href="#" className="block hover:text-ink">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
