import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Star
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { galleryImages, partners, reviews, services, siteConfig, strengths } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: siteConfig.name,
  image: "https://ashanti-beauty.fr/brand/ashanti-lounge.jpeg",
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Esplanade Andre Michaux",
    postalCode: "31130",
    addressLocality: "Balma",
    addressCountry: "FR"
  },
  openingHours: ["Tu 12:00-18:00", "We-Sa 10:00-19:00", "Su 10:00-18:00"],
  priceRange: "EUR",
  url: "https://ashanti-beauty.fr"
};

function BookingPanel() {
  if (siteConfig.planityEmbedUrl) {
    return (
      <div className="overflow-hidden rounded-[34px] border border-black/[0.06] bg-white shadow-soft">
        <iframe
          title="Reservation Planity - Ashanti Beauty"
          src={siteConfig.planityEmbedUrl}
          className="h-[720px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="soft-panel p-8 sm:p-10">
      <p className="section-kicker">Reservation</p>
      <h3 className="mt-5 text-3xl sm:text-4xl">Planity pourra etre integre directement ici.</h3>
      <p className="mt-4 max-w-2xl text-base sm:text-lg">
        La section est prete pour accueillir le module de reservation final. En attendant, les boutons guident vers le
        contact et gardent le parcours fluide.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href={siteConfig.phoneHref}
          className="rounded-[28px] border border-black/[0.08] bg-white p-6 transition hover:-translate-y-1 hover:shadow-card"
        >
          <Phone className="h-5 w-5 text-gold" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-ink/45">Telephone</p>
          <p className="mt-2 text-lg font-semibold text-ink">{siteConfig.phoneDisplay}</p>
        </a>
        <a
          href={siteConfig.instagramHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-[28px] border border-black/[0.08] bg-white p-6 transition hover:-translate-y-1 hover:shadow-card"
        >
          <Instagram className="h-5 w-5 text-gold" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-ink/45">Instagram</p>
          <p className="mt-2 text-lg font-semibold text-ink">{siteConfig.instagramHandle}</p>
        </a>
      </div>
    </div>
  );
}

function PartnerMarquee() {
  const loop = [...partners, ...partners];

  return (
    <div className="overflow-hidden border-y border-black/[0.06] bg-white py-6" id="partenaires">
      <div className="marquee-track flex w-max items-center gap-4">
        {loop.map((partner, index) => (
          <div
            key={`${partner}-${index}`}
            className="flex h-20 min-w-[190px] items-center justify-center rounded-full border border-black/[0.07] bg-[#fff8fb] px-8 font-display text-2xl text-ink/65 shadow-[0_12px_30px_rgba(23,18,20,0.04)]"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
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
        <section className="relative min-h-screen overflow-hidden bg-ink text-white">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={siteConfig.videoPoster}
          >
            <source src={siteConfig.videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,9,11,0.86)_0%,rgba(12,9,11,0.54)_38%,rgba(12,9,11,0.12)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fff8fb] to-transparent" />

          <div className="container-shell relative flex min-h-screen items-end pb-14 pt-32 sm:pb-20">
            <Reveal className="max-w-4xl">
              <img
                src={siteConfig.logoWhite}
                alt="Ashanti Beauty"
                className="mb-8 h-auto w-[220px] object-contain sm:w-[320px]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/70">
                Institut de beaute premium a Balma
              </p>
              <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[0.84] text-white sm:text-8xl lg:text-[8.5rem]">
                Beauty with a soft luxury ritual.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-xl">
                Un univers feminin, epure et signature pour sublimer le regard, les ongles, la peau et le bien-etre
                avec precision.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={siteConfig.bookingHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition hover:bg-[#f7d9e8]"
                >
                  Reserver maintenant <CalendarDays className="h-4 w-4" />
                </a>
                <a
                  href="#prestations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Decouvrir l'univers <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {strengths.map((item) => (
                  <div key={item} className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/86 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container-shell -mt-8 pb-16">
          <Reveal className="relative z-10 grid gap-4 rounded-[34px] border border-black/[0.06] bg-white/[0.92] p-5 shadow-soft backdrop-blur sm:grid-cols-2 xl:grid-cols-4 xl:p-7">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-gold" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">Adresse</p>
                <p className="mt-1 text-sm font-semibold text-ink">{siteConfig.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 text-gold" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">Horaires</p>
                <p className="mt-1 text-sm font-semibold text-ink">Mercredi au samedi, 10h - 19h</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Instagram className="mt-1 h-5 w-5 text-gold" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">Instagram</p>
                <p className="mt-1 text-sm font-semibold text-ink">{siteConfig.instagramHandle}</p>
              </div>
            </div>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Appeler l'institut
            </a>
          </Reveal>
        </section>

        <section id="prestations" className="section-space pt-8">
          <div className="container-shell">
            <Reveal className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <span className="section-kicker">Prestations</span>
                <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                  Une carte courte, experte et tres lisible.
                </h2>
              </div>
              <p className="max-w-2xl text-base sm:text-lg">
                Le parcours met l'accent sur les gestes signature : regard, ongles, peau, massages et rituels corps.
                L'interface reste plus minimaliste pour laisser respirer les visuels.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[34px] border border-black/[0.06] bg-black/[0.06] shadow-soft lg:grid-cols-5">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 60} className="group bg-white p-7 transition duration-500 hover:bg-[#fff4fa] lg:min-h-[360px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/35">0{index + 1}</p>
                  <h3 className="mt-10 text-4xl leading-none">{service.title}</h3>
                  <p className="mt-6 text-sm leading-7">{service.description}</p>
                  <a
                    href={siteConfig.bookingHref}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3"
                  >
                    Reserver <ArrowRight className="h-4 w-4" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="apropos" className="section-space overflow-hidden">
          <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <Reveal className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="overflow-hidden rounded-[38px] border border-black/[0.06] bg-white shadow-soft">
                <Image
                  src="/brand/ashanti-reception.jpeg"
                  alt="Accueil Ashanti Beauty"
                  width={2048}
                  height={1152}
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[38px] border border-black/[0.06] bg-white shadow-soft">
                  <Image
                    src="/brand/ashanti-cabines.jpeg"
                    alt="Cabines Ashanti Beauty"
                    width={2048}
                    height={1152}
                    className="h-[260px] w-full object-cover"
                  />
                </div>
                <div className="rounded-[38px] border border-black/[0.06] bg-ink p-8 text-white shadow-soft">
                  <Sparkles className="h-6 w-6 text-[#f7d9e8]" />
                  <p className="mt-8 font-display text-4xl leading-none text-white">Minimaliste, doux, precis.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="section-kicker">L'institut</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                Une identite plus forte, moins standard, plus memorable.
              </h2>
              <p className="mt-7 max-w-2xl text-base sm:text-lg">
                La direction artistique rapproche le site d'un univers editorial : video immersive, logo visible,
                grands titres, espaces plus calmes et details premium.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-black/[0.06] bg-white/75 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">Signature</p>
                  <p className="mt-3 text-sm">Un langage visuel rose, noir, creme et or discret, coherent avec le logo.</p>
                </div>
                <div className="rounded-[28px] border border-black/[0.06] bg-white/75 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">Experience</p>
                  <p className="mt-3 text-sm">Un site plus impactant des l'arrivee, tout en restant fluide et lisible.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <PartnerMarquee />

        <section className="section-space">
          <div className="container-shell">
            <Reveal className="max-w-3xl">
              <span className="section-kicker">Galerie</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                Des images reelles pour mieux se projeter.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {galleryImages.slice(0, 3).map((image, index) => (
                <Reveal
                  key={image.src}
                  delay={index * 80}
                  className="group relative overflow-hidden rounded-[36px] border border-black/[0.06] bg-white shadow-soft"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={2048}
                    height={1152}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">{image.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="avis" className="section-space bg-white/55">
          <div className="container-shell">
            <Reveal className="max-w-2xl">
              <span className="section-kicker">Avis clientes</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                Une adresse premium, douce et recommandable.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {reviews.map((review) => (
                <Reveal key={review.name} delay={80} className="soft-panel h-full p-7 transition duration-500 hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-5 flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-ink/[0.18]" />
                  <p className="mt-4 text-base">"{review.quote}"</p>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
                    {review.name}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="reservation" className="section-space">
          <div className="container-shell grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <span className="section-kicker">Reservation</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                Une prise de rendez-vous simple et elegante.
              </h2>
              <p className="mt-6 max-w-xl text-base sm:text-lg">
                Cette zone est prete pour l'integration Planity finale. Le rendu garde une intention premium meme en
                mode preview.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <BookingPanel />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-space pt-8">
          <div className="container-shell">
            <Reveal className="max-w-3xl">
              <span className="section-kicker">Contact</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                Venir, appeler ou demander un rendez-vous.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
              <Reveal className="space-y-5">
                <div className="soft-panel p-7 transition duration-500 hover:shadow-card">
                  <div className="space-y-5">
                    <a href={siteConfig.phoneHref} className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">Telephone</p>
                        <p className="mt-1 font-semibold text-ink">{siteConfig.phoneDisplay}</p>
                      </div>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">Email</p>
                        <p className="mt-1 font-semibold text-ink">{siteConfig.email}</p>
                      </div>
                    </a>
                    <a href={siteConfig.mapsHref} target="_blank" rel="noreferrer" className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">Adresse</p>
                        <p className="mt-1 font-semibold text-ink">{siteConfig.address}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[34px] border border-black/[0.06] bg-white shadow-soft transition duration-500 hover:shadow-card">
                  <iframe
                    title="Google Maps - Ashanti Beauty Balma"
                    src={siteConfig.mapsEmbed}
                    loading="lazy"
                    className="h-[320px] w-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal className="space-y-6" delay={120}>
                <ContactForm />
                <div className="soft-panel flex flex-wrap items-center gap-4 p-6 transition duration-500 hover:shadow-card">
                  <div className="flex min-w-[220px] flex-1 items-center gap-3">
                    <Star className="h-5 w-5 text-gold" />
                    <p className="text-sm">
                      Premiere visite ? Profitez de l'offre de bienvenue a <span className="font-semibold text-ink">-20%</span>.
                    </p>
                  </div>
                  <a href={siteConfig.bookingHref} className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
                    Reserver maintenant
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
