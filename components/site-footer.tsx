import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Locale = "fr" | "en";

export function SiteFooter({ locale = "fr" }: { locale?: Locale }) {
  const hours =
    locale === "fr"
      ? siteConfig.hours
      : [
          { day: "Tuesday", value: "12pm - 6pm" },
          { day: "Wednesday - Saturday", value: "10am - 7pm" },
          { day: "Sunday", value: "10am - 6pm" }
        ];

  return (
    <footer className="border-t border-black/[0.06] bg-[#f8f1ee]">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr_0.9fr]">
        <div>
          <p className="font-display text-4xl leading-none">Ashanti Beauty</p>
          <p className="mt-4 max-w-md text-sm">
            {locale === "fr"
              ? "Un institut de beauté à Balma imaginé comme une parenthèse douce, élégante et parfaitement maîtrisée."
              : "A beauty studio in Balma designed as a soft, elegant and carefully crafted pause."}
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
            {locale === "fr" ? "Horaires" : "Opening hours"}
          </p>
          <div className="mt-5 space-y-3 text-sm text-ink/[0.72]">
            {hours.map((slot) => (
              <p key={slot.day}>
                {slot.day} : {slot.value}
              </p>
            ))}
            <a href="#" className="block hover:text-ink">
              {locale === "fr" ? "Mentions légales" : "Legal notice"}
            </a>
            <a href="#" className="block hover:text-ink">
              {locale === "fr" ? "Politique de confidentialité" : "Privacy policy"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
