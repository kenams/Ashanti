import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#f8f1ee]">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr_0.9fr]">
        <div>
          <p className="font-display text-4xl leading-none">Ashanti Beauty</p>
          <p className="mt-4 max-w-md text-sm">
            Un institut de beaute a Balma pense comme une parenthese douce, elegante et parfaitement maitrisee.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
            Contact
          </p>
          <div className="mt-5 space-y-3 text-sm text-ink/[0.72]">
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-ink">
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-ink">
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-ink"
            >
              <MapPin className="h-4 w-4" />
              {siteConfig.address}
            </a>
            <a
              href={siteConfig.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-ink"
            >
              <Instagram className="h-4 w-4" />
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
            Horaires
          </p>
          <div className="mt-5 space-y-3 text-sm text-ink/[0.72]">
            {siteConfig.hours.map((slot) => (
              <p key={slot.day}>
                {slot.day} : {slot.value}
              </p>
            ))}
            <a href="#" className="block hover:text-ink">
              Mentions legales
            </a>
            <a href="#" className="block hover:text-ink">
              Politique de confidentialite
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
