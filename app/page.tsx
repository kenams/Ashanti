"use client";

import Image from "next/image";
import { useState } from "react";
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

type Locale = "fr" | "en";

const pageCopy = {
  fr: {
    bookingTitle: "Réservation",
    bookingHeading: "Planity pourra être intégré directement ici.",
    bookingText:
      "La section est prête pour accueillir le module de réservation final. En attendant, les boutons guident vers le contact et gardent le parcours fluide.",
    phone: "Téléphone",
    heroKicker: "Institut de beauté premium à Balma",
    heroBaseline: "Regard, ongles, peau et bien-être dans un univers doux et précis.",
    bookNow: "Réserver maintenant",
    discover: "Découvrir l'univers",
    address: "Adresse",
    hours: "Horaires",
    openingShort: "Mercredi au samedi, 10h - 19h",
    callStudio: "Appeler l'institut",
    servicesKicker: "Prestations",
    servicesTitle: "Une carte courte, experte et très lisible.",
    servicesText:
      "Le parcours met l'accent sur les gestes signature : regard, ongles, peau, massages et rituels corps. L'interface reste minimaliste pour laisser respirer les visuels.",
    studioKicker: "L'institut",
    studioBadge: "Minimaliste, doux, précis.",
    studioTitle: "Une identité plus forte, moins standard, plus mémorable.",
    studioText:
      "La direction artistique rapproche le site d'un univers éditorial : vidéo immersive, logo visible, grands titres, espaces plus calmes et détails premium.",
    signature: "Signature",
    signatureText: "Un langage visuel rose, noir, crème et or discret, cohérent avec le logo.",
    experience: "Expérience",
    experienceText: "Un site plus impactant dès l'arrivée, tout en restant fluide et lisible.",
    galleryKicker: "Galerie",
    galleryTitle: "Des images réelles pour mieux se projeter.",
    reviewsKicker: "Avis clientes",
    reviewsTitle: "Une adresse premium, douce et recommandable.",
    bookingSectionTitle: "Une prise de rendez-vous simple et élégante.",
    bookingSectionText:
      "Cette zone est prête pour l'intégration Planity finale. Le rendu garde une intention premium même en mode preview.",
    contactKicker: "Contact",
    contactTitle: "Venir, appeler ou demander un rendez-vous.",
    firstVisit: "Première visite ? Profitez de l'offre de bienvenue à",
    reserve: "Réserver"
  },
  en: {
    bookingTitle: "Booking",
    bookingHeading: "Planity can be integrated directly here.",
    bookingText:
      "This section is ready for the final booking module. Until then, the buttons keep the journey smooth and guide visitors to contact.",
    phone: "Phone",
    heroKicker: "Premium beauty studio in Balma",
    heroBaseline: "Brows, nails, skin and wellness in a soft, precise universe.",
    bookNow: "Book now",
    discover: "Discover the universe",
    address: "Address",
    hours: "Opening hours",
    openingShort: "Wednesday to Saturday, 10am - 7pm",
    callStudio: "Call the studio",
    servicesKicker: "Services",
    servicesTitle: "A short, expert and easy-to-read menu.",
    servicesText:
      "The journey focuses on signature gestures: brows, nails, skin, massages and body rituals. The interface stays minimal so the visuals can breathe.",
    studioKicker: "The studio",
    studioBadge: "Minimal, soft, precise.",
    studioTitle: "A stronger, more memorable identity.",
    studioText:
      "The art direction moves the website closer to an editorial universe: immersive video, visible branding, large titles, calmer spaces and premium details.",
    signature: "Signature",
    signatureText: "A visual language of pink, black, cream and subtle gold, consistent with the logo.",
    experience: "Experience",
    experienceText: "A more impactful website from the first screen, while staying fluid and readable.",
    galleryKicker: "Gallery",
    galleryTitle: "Real images to make the final vision tangible.",
    reviewsKicker: "Client reviews",
    reviewsTitle: "A premium, soft and recommendable address.",
    bookingSectionTitle: "Simple and elegant appointment booking.",
    bookingSectionText:
      "This area is ready for the final Planity integration. The preview keeps a premium intention even before the final booking module.",
    contactKicker: "Contact",
    contactTitle: "Visit, call or request an appointment.",
    firstVisit: "First visit? Enjoy a welcome offer of",
    reserve: "Book"
  }
};

const localizedServices = {
  fr: services,
  en: [
    {
      title: "Brows",
      description:
        "Brow lift, reshaping, henna tint, ombre shading and light brows to define the eyes with precision."
    },
    {
      title: "Lashes",
      description:
        "From classic lash extensions to mega Russian volume, with lash lifts for a tailor-made result."
    },
    {
      title: "Nails",
      description:
        "Russian manicure, gel nails, American tips, semi-permanent polish and nail art with a clean, elegant finish."
    },
    {
      title: "Skin & Body",
      description:
        "Facials, body care, lymphatic drainage, shiatsu, pedicure and waxing for a complete beauty experience."
    },
    {
      title: "Massages",
      description:
        "Californian, Balinese, hot stone, deep tissue or prenatal massages to release tension and restore balance."
    }
  ]
};

const localizedReviews = {
  fr: reviews,
  en: [
    { name: "Camille R.", quote: "A very elegant place, with delicate service and a true sense of quality from arrival." },
    { name: "Sarah M.", quote: "The facial was perfect. The place is beautiful, calm, and the result was visible immediately." },
    { name: "Ines D.", quote: "You feel gently taken care of. Everything is clean, refined and thoughtfully designed." },
    { name: "Julie T.", quote: "I loved the atmosphere and the attention to detail. A true premium address in Balma." }
  ]
};

const localizedStrengths = {
  fr: strengths,
  en: ["Quality", "Hygiene", "Personalised care"]
};

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

function BookingPanel({ locale }: { locale: Locale }) {
  const content = pageCopy[locale];

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
      <p className="section-kicker">{content.bookingTitle}</p>
      <h3 className="mt-5 text-3xl sm:text-4xl">{content.bookingHeading}</h3>
      <p className="mt-4 max-w-2xl text-base sm:text-lg">
        {content.bookingText}
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href={siteConfig.phoneHref}
          className="rounded-[28px] border border-black/[0.08] bg-white p-6 transition hover:-translate-y-1 hover:shadow-card"
        >
          <Phone className="h-5 w-5 text-gold" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-ink/45">{content.phone}</p>
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
  const [locale, setLocale] = useState<Locale>("fr");
  const content = pageCopy[locale];
  const activeServices = localizedServices[locale];
  const activeReviews = localizedReviews[locale];
  const activeStrengths = localizedStrengths[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader locale={locale} onLocaleChange={setLocale} />

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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,9,11,0.70)_0%,rgba(12,9,11,0.42)_42%,rgba(12,9,11,0.10)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_36%_54%,rgba(0,0,0,0.24),transparent_50%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fff8fb] to-transparent" />

          <div className="container-shell relative flex min-h-screen items-end pb-14 pt-32 sm:pb-20">
            <Reveal className="w-full max-w-6xl">
              <img
                src={siteConfig.logoWhite}
                alt="Ashanti Beauty"
                className="mb-8 h-auto w-[230px] object-contain drop-shadow-[0_8px_36px_rgba(255,255,255,0.24)] sm:w-[320px]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/70">
                {content.heroKicker}
              </p>
              <h1 className="mt-8 flex max-w-5xl flex-col font-display text-7xl font-medium leading-[0.82] text-white drop-shadow-[0_14px_44px_rgba(0,0,0,0.36)] sm:text-9xl lg:text-[10rem]">
                <span className="hero-word-primary block">Ashanti</span>
                <span className="hero-word-secondary block self-end pr-2 sm:pr-10">Beauty</span>
              </h1>
              <p className="mt-8 max-w-2xl rounded-full border border-white/18 bg-black/28 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-6">
                {content.heroBaseline}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={siteConfig.bookingHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition hover:bg-[#f7d9e8]"
                >
                  {content.bookNow} <CalendarDays className="h-4 w-4" />
                </a>
                <a
                  href="#prestations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  {content.discover} <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {activeStrengths.map((item) => (
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
                <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">{content.address}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{siteConfig.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 text-gold" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">{content.hours}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{content.openingShort}</p>
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
              {content.callStudio}
            </a>
          </Reveal>
        </section>

        <section id="prestations" className="section-space pt-8">
          <div className="container-shell">
            <Reveal className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <span className="section-kicker">{content.servicesKicker}</span>
                <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                  {content.servicesTitle}
                </h2>
              </div>
              <p className="max-w-2xl text-base sm:text-lg">
                {content.servicesText}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[34px] border border-black/[0.06] bg-black/[0.06] shadow-soft lg:grid-cols-5">
              {activeServices.map((service, index) => (
                <Reveal key={service.title} delay={index * 60} className="group bg-white p-7 transition duration-500 hover:bg-[#fff4fa] lg:min-h-[360px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/35">0{index + 1}</p>
                  <h3 className="mt-10 text-4xl leading-none">{service.title}</h3>
                  <p className="mt-6 text-sm leading-7">{service.description}</p>
                  <a
                    href={siteConfig.bookingHref}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3"
                  >
                    {content.reserve} <ArrowRight className="h-4 w-4" />
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
                  <p className="mt-8 font-display text-4xl leading-none text-white">{content.studioBadge}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="section-kicker">{content.studioKicker}</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                {content.studioTitle}
              </h2>
              <p className="mt-7 max-w-2xl text-base sm:text-lg">
                {content.studioText}
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-black/[0.06] bg-white/75 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">{content.signature}</p>
                  <p className="mt-3 text-sm">{content.signatureText}</p>
                </div>
                <div className="rounded-[28px] border border-black/[0.06] bg-white/75 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">{content.experience}</p>
                  <p className="mt-3 text-sm">{content.experienceText}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <PartnerMarquee />

        <section className="section-space">
          <div className="container-shell">
            <Reveal className="max-w-3xl">
              <span className="section-kicker">{content.galleryKicker}</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                {content.galleryTitle}
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
              <span className="section-kicker">{content.reviewsKicker}</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                {content.reviewsTitle}
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {activeReviews.map((review) => (
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
              <span className="section-kicker">{content.bookingTitle}</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                {content.bookingSectionTitle}
              </h2>
              <p className="mt-6 max-w-xl text-base sm:text-lg">
                {content.bookingSectionText}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <BookingPanel locale={locale} />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-space pt-8">
          <div className="container-shell">
            <Reveal className="max-w-3xl">
              <span className="section-kicker">{content.contactKicker}</span>
              <h2 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
                {content.contactTitle}
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
              <Reveal className="space-y-5">
                <div className="soft-panel p-7 transition duration-500 hover:shadow-card">
                  <div className="space-y-5">
                    <a href={siteConfig.phoneHref} className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">{content.phone}</p>
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
                        <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">{content.address}</p>
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
                <ContactForm locale={locale} />
                <div className="soft-panel flex flex-wrap items-center gap-4 p-6 transition duration-500 hover:shadow-card">
                  <div className="flex min-w-[220px] flex-1 items-center gap-3">
                    <Star className="h-5 w-5 text-gold" />
                    <p className="text-sm">
                      {content.firstVisit} <span className="font-semibold text-ink">-20%</span>.
                    </p>
                  </div>
                  <a href={siteConfig.bookingHref} className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
                    {content.bookNow}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
      <StickyMobileCTA locale={locale} />
    </>
  );
}
