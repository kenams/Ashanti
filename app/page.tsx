import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Play,
  Quote,
  Star
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { reviews, services, siteConfig, strengths } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: siteConfig.name,
  image: "https://ashanti-beauty.fr/hero-video-poster.svg",
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
      <p className="section-kicker">Reservation integree</p>
      <h3 className="mt-5 text-3xl sm:text-4xl">Planity peut etre integre directement dans cette section.</h3>
      <p className="mt-4 max-w-2xl text-base sm:text-lg">
        La structure est deja prete pour afficher l'agenda Planity sur le site.
        Il suffira de remplacer l'URL d'integration dans <code className="rounded bg-black/[0.05] px-2 py-1 text-sm">lib/site.ts</code>.
      </p>
      <div className="mt-8 rounded-[28px] border border-dashed border-black/[0.12] bg-[#fbf5f2] p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
              A brancher
            </p>
            <p className="mt-3 text-sm">
              <code className="rounded bg-white px-2 py-1 text-[13px]">planityEmbedUrl</code>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
              CTA deja prevu
            </p>
            <p className="mt-3 text-sm">Boutons Reserver visibles sur mobile et desktop.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={siteConfig.planityUrl || "#contact"}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white"
        >
          Reserver maintenant <CalendarDays className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink"
        >
          Nous contacter <ArrowRight className="h-4 w-4" />
        </a>
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
        <section className="container-shell section-space pb-10">
          <div className="grid items-start gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-14">
            <Reveal className="pt-4 sm:pt-8">
              <span className="section-kicker">Institut de beaute a Balma</span>
              <h1 className="mt-6 max-w-3xl text-5xl leading-[0.94] sm:text-6xl xl:text-7xl">
                Une parenthese beaute pensee avec douceur, precision et elegance.
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg">
                Ashanti Beauty vous accueille a Balma dans un univers feminin, epure et premium,
                ou chaque rendez-vous est pense pour allier bien-etre, qualite du geste et sensation de confort.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.bookingHref}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white"
                >
                  Reserver maintenant <CalendarDays className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink"
                >
                  Nous contacter <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex max-w-md items-center justify-between rounded-[28px] border border-black/[0.06] bg-white/90 px-5 py-5 shadow-soft">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-ink/[0.45]">
                    Offre de bienvenue
                  </p>
                  <p className="mt-2 font-display text-4xl leading-none">-20%</p>
                </div>
                <p className="max-w-[210px] text-sm">
                  Profitez de notre offre de bienvenue lors de votre premiere visite.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-black/[0.06] bg-white/[0.72] px-4 py-4 text-sm font-semibold text-ink shadow-[0_10px_24px_rgba(23,18,20,0.04)] transition duration-500 hover:-translate-y-1 hover:shadow-card"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative" delay={120}>
              <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-rose/[0.45] blur-3xl lg:block" />
              <div className="floating-soft relative overflow-hidden rounded-[36px] border border-black/[0.06] bg-[#efe5e2] shadow-soft">
                {siteConfig.videoSrc ? (
                  <video
                    className="aspect-[4/5] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={siteConfig.videoPoster}
                  >
                    <source src={siteConfig.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <div className="aspect-[4/5] overflow-hidden">
                    <Image
                      src="/hero-beauty-portrait.png"
                      alt="Portrait editorial premium pour Ashanti Beauty"
                      width={1024}
                      height={1536}
                      className="hero-loop-media h-full w-full object-cover"
                      priority
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/[0.05]" />
                <div className="absolute left-6 top-6 rounded-full bg-white/[0.88] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.60] backdrop-blur">
                  Direction artistique demo
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div className="rounded-[26px] bg-white/[0.88] px-5 py-4 shadow-card backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-ink/50">
                      Ashanti Beauty
                    </p>
                    <p className="mt-2 font-display text-3xl leading-none">
                      Minimaliste. Feminin. Premium.
                    </p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/24 text-white backdrop-blur">
                    <Play className="ml-1 h-5 w-5" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink/[0.52]">
                Hero de demonstration anime, prevu pour etre remplace par votre video finale.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-shell pb-8">
          <Reveal className="grid gap-4 rounded-[34px] border border-black/[0.06] bg-white/[0.76] p-5 shadow-soft sm:grid-cols-2 xl:grid-cols-4 xl:p-7">
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

        <section id="prestations" className="section-space">
          <div className="container-shell">
            <Reveal className="max-w-3xl">
              <span className="section-kicker">Prestations</span>
              <h2 className="mt-5 text-4xl sm:text-5xl">
                Des prestations expertes pour sublimer le regard, les ongles, la peau et le bien-etre.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 70}
                  className="soft-panel grid gap-6 p-7 transition duration-500 hover:-translate-y-1 hover:shadow-card sm:grid-cols-[90px_1fr] sm:items-start sm:p-9"
                >
                  <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-black/[0.06] bg-[#f7efec] font-display text-3xl text-ink">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-[2.15rem]">{service.title}</h3>
                    <p className="mt-4 max-w-xl text-base">{service.description}</p>
                    <a
                      href={siteConfig.bookingHref}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                    >
                      Prendre rendez-vous <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 overflow-hidden rounded-[36px] border border-black/[0.06] bg-white shadow-soft" delay={120}>
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <Image
                  src="/salon-interior-premium.png"
                  alt="Cabine de soin premium Ashanti Beauty"
                  width={1024}
                  height={1536}
                  className="h-full w-full object-cover"
                />
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <span className="section-kicker">Univers Ashanti</span>
                  <h3 className="mt-5 text-3xl sm:text-4xl">
                    Un cadre doux, contemporain et raffine, imagine pour une experience haut de gamme.
                  </h3>
                  <p className="mt-5 max-w-xl text-base">
                    Tout est pense pour installer une sensation immediate de calme, de soin et d'elegance.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="apropos" className="section-space pt-4">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <Reveal className="overflow-hidden rounded-[36px] border border-black/[0.06] bg-white shadow-soft">
              <Image
                src="/salon-interior-premium.png"
                alt="Ambiance premium Ashanti Beauty"
                width={1024}
                height={1536}
                className="h-auto w-full object-cover"
              />
            </Reveal>

            <Reveal delay={120}>
              <span className="section-kicker">L'institut</span>
              <h2 className="mt-5 text-4xl sm:text-5xl">
                Un lieu pense pour ralentir, se recentrer et se sentir pleinement bien.
              </h2>
              <p className="mt-6 max-w-2xl text-base sm:text-lg">
                Ashanti Beauty accueille chaque cliente dans une atmosphere epuree, rassurante et feminine.
                L'experience y est volontairement fluide : un accueil attentif, des soins realises avec exigence
                et un environnement qui laisse toute sa place au bien-etre.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-black/[0.06] bg-white/75 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
                    Notre approche
                  </p>
                  <p className="mt-3 text-sm">
                    Une beaute soignee, elegante et contemporaine, toujours guidee par le sens du detail.
                  </p>
                </div>
                <div className="rounded-[28px] border border-black/[0.06] bg-white/75 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
                    Notre promesse
                  </p>
                  <p className="mt-3 text-sm">
                    Une experience fluide, un resultat impeccable et une sensation premium du debut a la fin.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="avis" className="section-space">
          <div className="container-shell">
            <Reveal className="max-w-2xl">
              <span className="section-kicker">Avis clientes</span>
              <h2 className="mt-5 text-4xl sm:text-5xl">
                Une adresse que l'on recommande pour la qualite du soin, l'accueil et l'atmosphere.
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

        <section id="reservation" className="section-space bg-white/50">
          <div className="container-shell grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <span className="section-kicker">Reservation</span>
              <h2 className="mt-5 text-4xl sm:text-5xl">
                Une prise de rendez-vous simple, rapide et naturellement integree au parcours.
              </h2>
              <p className="mt-6 max-w-xl text-base sm:text-lg">
                Cette section est preparee pour accueillir une integration Planity directe, avec un affichage fluide
                sur mobile comme sur desktop.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-[28px] border border-black/[0.06] bg-white px-6 py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
                    Parcours attendu
                  </p>
                  <p className="mt-3 text-sm">
                    Une decouverte inspiree, puis une reservation simple et immediate sans quitter le site.
                  </p>
                </div>
                <div className="rounded-[28px] border border-black/[0.06] bg-white px-6 py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
                    Action restante
                  </p>
                  <p className="mt-3 text-sm">
                    Integrer le vrai lien ou module Planity des reception de vos acces.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <BookingPanel />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-space">
          <div className="container-shell">
            <Reveal className="max-w-3xl">
              <span className="section-kicker">Contact</span>
              <h2 className="mt-5 text-4xl sm:text-5xl">
                Toutes les informations utiles pour venir a l'institut, appeler ou prendre contact rapidement.
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
                    <a href={siteConfig.instagramHref} target="_blank" rel="noreferrer" className="flex items-start gap-4">
                      <Instagram className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-ink/[0.45]">Instagram</p>
                        <p className="mt-1 font-semibold text-ink">{siteConfig.instagramHandle}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <a
                  href={siteConfig.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="soft-panel flex items-center gap-4 p-5 transition duration-500 hover:-translate-y-1 hover:shadow-card"
                >
                  <Image
                    src="/instagram-profile.jpg"
                    alt="Profil Instagram Ashanti Beauty"
                    width={84}
                    height={84}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
                      Instagram
                    </p>
                    <p className="mt-2 font-semibold text-ink">{siteConfig.instagramHandle}</p>
                    <p className="mt-1 text-sm text-ink/[0.62]">
                      Retrouvez l'univers Ashanti Beauty sur Instagram.
                    </p>
                  </div>
                </a>

                <div className="soft-panel p-7 transition duration-500 hover:shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/[0.45]">
                    Horaires
                  </p>
                  <div className="mt-5 space-y-3">
                    {siteConfig.hours.map((slot) => (
                      <div
                        key={slot.day}
                        className="flex items-center justify-between gap-4 border-b border-black/[0.06] pb-3 last:border-none last:pb-0"
                      >
                        <span className="text-sm font-medium text-ink/[0.62]">{slot.day}</span>
                        <span className="text-sm font-semibold text-ink">{slot.value}</span>
                      </div>
                    ))}
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
                  <a
                    href={siteConfig.bookingHref}
                    className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
                  >
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
