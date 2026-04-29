import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Instagram,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Star
} from "lucide-react";
import { HeroVideo } from "@/components/hero-video";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import {
  galleryImages,
  instagramGallery,
  partners,
  reviewStats,
  reviews,
  services,
  siteConfig,
  storyHighlights
} from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: siteConfig.name,
  image: "https://ashanti-beauty.fr/brand/ashanti-lounge.jpeg",
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Esplanade André Michaux",
    postalCode: "31130",
    addressLocality: "Balma",
    addressCountry: "FR"
  },
  openingHours: ["Tu 12:00-18:00", "We-Sa 10:00-19:00", "Su 10:00-18:00"],
  priceRange: "EUR",
  url: "https://ashanti-beauty.fr",
  sameAs: [siteConfig.instagramHref, siteConfig.planityUrl]
};

function BookingButton({
  className = "",
  variant = "dark"
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const tone =
    variant === "light"
      ? "bg-white text-ink hover:bg-[#f7d9e8]"
      : "bg-ink text-white hover:bg-[#34242d]";

  return (
    <a
      href={siteConfig.bookingHref}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${tone} ${className}`}
    >
      Réserver
      <CalendarDays className="h-4 w-4" />
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main id="accueil">
        <section className="relative min-h-[92svh] overflow-hidden bg-ink text-white">
          <HeroVideo />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,9,0.82)_0%,rgba(10,8,9,0.58)_46%,rgba(10,8,9,0.30)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,9,0.18)_0%,transparent_38%,rgba(10,8,9,0.30)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fff8fb] to-transparent" />

          <div className="container-shell relative flex min-h-[92svh] items-end pb-14 pt-32 sm:pb-16 lg:pb-16">
            <Reveal className="w-full max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.36)]">
                Institut de beauté premium à Balma
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[0.92] text-white drop-shadow-[0_12px_38px_rgba(0,0,0,0.28)] sm:text-7xl lg:text-[6.9rem] xl:text-[7.4rem]">
                Ashanti Beauty
              </h1>
              <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.42)] sm:text-lg">
                Pour votre première visite, bénéficiez de -20% sur votre prestation de bienvenue.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <BookingButton variant="light" />
                <a
                  href="#histoire"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/20 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/30"
                >
                  Découvrir l'institut
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="histoire" className="section-space bg-[#fff8fb]">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <div className="relative overflow-hidden rounded-lg border border-black/[0.06] bg-white shadow-soft">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  width={1400}
                  height={1800}
                  sizes="(min-width: 1024px) 28vw, 50vw"
                  className="h-full min-h-[360px] w-full object-cover"
                  priority
                />
              </div>
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-lg border border-black/[0.06] bg-white shadow-soft">
                  <Image
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    width={1400}
                    height={1000}
                    sizes="(min-width: 1024px) 34vw, 50vw"
                    className="h-[260px] w-full object-cover"
                  />
                </div>
                <div className="rounded-lg bg-ink p-7 text-white shadow-soft">
                  <Sparkles className="h-5 w-5 text-[#f7d9e8]" />
                  <p className="mt-7 font-display text-3xl leading-none text-white">
                    Une expérience beauté calme, experte et parfaitement soignée.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="section-kicker">Notre histoire</span>
              <h2 className="mt-5 max-w-3xl text-5xl leading-[0.95] sm:text-7xl">
                Un institut pensé comme une adresse premium à Balma.
              </h2>
              <p className="mt-7 max-w-2xl text-base sm:text-lg">
                Ashanti Beauty réunit beauté du regard, ongles, esthétique et massage dans un univers doux, précis et haut de gamme. Chaque détail est pensé pour créer une expérience fluide : accueil, hygiène, confort, expertise et résultat.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {storyHighlights.map((item) => (
                  <div key={item.title} className="rounded-lg border border-black/[0.06] bg-white p-5 shadow-[0_10px_28px_rgba(23,18,20,0.05)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{item.title}</p>
                    <p className="mt-3 text-sm leading-6">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="prestations" className="section-space bg-white">
          <div className="container-shell">
            <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <span className="section-kicker">Nos prestations</span>
                <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                  Cinq pôles pour une prise en charge claire.
                </h2>
              </div>
              <p className="max-w-2xl text-base sm:text-lg">
                La carte est structurée par univers pour guider rapidement vers la bonne prestation et faciliter la réservation sur Planity.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-black/[0.06] bg-black/[0.06] lg:grid-cols-5">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 50}
                  className="group flex min-h-[340px] flex-col bg-[#fffafc] p-6 transition duration-300 hover:bg-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-8 text-4xl leading-none">{service.title}</h3>
                  <p className="mt-6 text-sm leading-7">{service.description}</p>
                  <BookingButton className="mt-auto w-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="partenaires" className="section-space bg-[#f8f1ee]">
          <div className="container-shell">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="section-kicker">Nos partenaires</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                Des marques choisies pour la qualité du résultat.
              </h2>
            </Reveal>

            <Reveal delay={120} className="mt-12 grid gap-px overflow-hidden rounded-lg border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner} className="flex h-28 items-center justify-center bg-white px-6 text-center font-display text-3xl text-ink/70">
                  {partner}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="instagram" className="section-space bg-white">
          <div className="container-shell">
            <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="section-kicker">Instagram / Univers visuel</span>
                <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                  L'univers Ashanti en images.
                </h2>
              </div>
              <a
                href={siteConfig.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white px-6 text-sm font-semibold text-ink transition hover:bg-[#fff4fa]"
              >
                <Instagram className="h-4 w-4" />
                Voir Instagram
                <ExternalLink className="h-4 w-4" />
              </a>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {instagramGallery.map((image, index) => (
                <Reveal key={image.src} delay={index * 60} className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-ink">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">{image.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="avis" className="section-space bg-[#fff8fb]">
          <div className="container-shell">
            <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <span className="section-kicker">Avis clients</span>
                <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                  La confiance, visible dès la première visite.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {reviewStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-black/[0.06] bg-white p-5 shadow-[0_10px_28px_rgba(23,18,20,0.05)]">
                    <p className="font-display text-4xl leading-none text-ink">{stat.value}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <Reveal key={`${review.name}-${index}`} delay={index * 70} className="rounded-lg border border-black/[0.06] bg-white p-7 shadow-soft">
                  <div className="mb-5 flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-ink/20" />
                  <p className="mt-5 text-base">"{review.quote}"</p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-ink/50">
                    {review.name}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="adresse" className="section-space bg-white">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <span className="section-kicker">Adresse</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                Venir à l'institut.
              </h2>
              <div className="mt-8 space-y-5">
                <a href={siteConfig.mapsHref} target="_blank" rel="noreferrer" className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/50">Adresse</p>
                    <p className="mt-1 font-semibold text-ink">{siteConfig.address}</p>
                  </div>
                </a>
                <a href={siteConfig.phoneHref} className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/50">Téléphone</p>
                    <p className="mt-1 font-semibold text-ink">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/50">Horaires</p>
                    <div className="mt-1 space-y-1 text-sm text-ink/70">
                      {siteConfig.hours.map((slot) => (
                        <p key={slot.day}>{slot.day} : {slot.value}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <BookingButton />
                <a
                  href={siteConfig.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white px-6 text-sm font-semibold text-ink transition hover:bg-[#fff4fa]"
                >
                  Itinéraire
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="overflow-hidden rounded-lg border border-black/[0.06] bg-white shadow-soft">
              <iframe
                title="Google Maps - Ashanti Beauty Balma"
                src={siteConfig.mapsEmbed}
                loading="lazy"
                className="h-[420px] w-full lg:h-full lg:min-h-[560px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
