import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#151113] text-white">
      <div className="container-shell py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <img
              src={siteConfig.logoWhite}
              alt="Ashanti Beauty"
              className="h-auto w-[190px] object-contain"
            />
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 transition hover:text-white">
                <Phone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <MapPin className="h-4 w-4" />
                {siteConfig.address}
              </a>
              <a
                href={siteConfig.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/50">
            © Ashanti Beauty
          </p>
        </div>
      </div>
    </footer>
  );
}
