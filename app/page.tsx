import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { reviews, services, siteConfig, strengths } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: siteConfig.name,
  image: "https://ashanti-beauty.fr/hero-placeholder.svg",
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
  priceRange: "€€",
  url: "https://ashanti-beauty.fr"
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main id="accueil">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="container-shell relative section-space grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="animate-fade-up">
              <span className="section-kicker">Institut de beauté à Balma</span>
              <h1 className="max-w-3xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                L’adresse beauté chic, douce et raffinée pour prendre soin de vous.
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg">
                Ashanti Beauty vous accueille à Balma dans un univers premium pensé pour les soins beauté,
                l’onglerie, le soin visage, le massage et la mise en valeur du regard.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteConfig.bookingHref}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/90"
                >
                  Réserver maintenant <CalendarDays className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/20"
                >
                  Nous contacter <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 inline-flex max-w-xl flex-col rounded-[28px] border border-rose/60 bg-white/85 p-5 shadow-card sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/55">
                    Offre de bienvenue
                  </p>
                  <p className="mt-2 font-display text-3xl leading-none sm:text-4xl">-20% OFF</p>
                </div>
                <p className="mt-3 text-sm text-ink/70 sm:mt-0 sm:max-w-xs">
                  Profitez de notre offre de bienvenue lors de votre première visite à l’institut.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {strengths.map((item) => (
                  <div key={item} className="glass-panel flex items-center gap-3 px-4 py-4">
                    <ShieldCheck className="h-5 w-5 text-gold" />
                    <span className="text-sm font-semibold text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up [animation-delay:120ms]">
              <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white p-4 shadow-soft">
                <div className="absolute right-6 top-6 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/60 shadow">
                  Soins beauté premium
                </div>
                <Image
                  src="/hero-placeholder.svg"
                  alt="Visuel d’ambiance premium pour Ashanti Beauty"
                  width={900}
                  height={1040}
                  className="h-auto w-full rounded-[28px] object-cover"
                  priority
                />
                <div className="absolute bottom-8 left-8 rounded-[26px] border border-white/80 bg-white/90 p-5 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/55">
                    Ashanti Beauty
                  </p>
                  <p className="mt-2 font-display text-3xl leading-none">Beauté, bien-être, élégance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-6">
          <div className="glass-panel grid gap-4 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:px-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gold" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-ink/55">Adresse</p>
                <p className="text-sm font-semibold text-ink">Balma, 5 Esplanade André Michaux</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-gold" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-ink/55">Horaires</p>
                <p className="text-sm font-semibold text-ink">Mercredi à samedi, 10h - 19h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-gold" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-ink/55">Spécialités</p>
                <p className="text-sm font-semibold text-ink">Ongles, soin visage, massage, regard</p>
              </div>
            </div>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Appeler maintenant
            </a>
          </div>
        </section>

        <section id="prestations" className="section-space">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Prestations"
              title="Des soins beauté pensés pour une expérience élégante et complète."
              description="Découvrez nos prestations phares dans notre institut de beauté à Balma : ongles, soin visage, massage, épilation et beauté du regard, dans une atmosphère chic et rassurante."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              ))}

              <article className="relative overflow-hidden rounded-[30px] bg-ink p-8 text-white shadow-card md:col-span-2 xl:col-span-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,200,208,0.22),transparent_30%)]" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/60">Première visite</p>
                  <h3 className="mt-4 font-display text-4xl leading-none">-20% sur votre rendez-vous découverte</h3>
                  <p className="mt-4 text-sm text-white/75">
                    Une offre pensée pour découvrir Ashanti Beauty dans les meilleures conditions.
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink"
                  >
                    Réserver maintenant <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="avis" className="section-space bg-white/60">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Avis clientes"
              title="Une expérience qui inspire confiance dès la première visite."
              description="Quelques retours de clientes séduites par l’atmosphère, le professionnalisme et la qualité des soins proposés chez Ashanti Beauty."
              align="center"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reviews.map((review) => (
                <ReviewCard key={review.name} name={review.name} quote={review.quote} />
              ))}
            </div>
          </div>
        </section>

        <section id="apropos" className="section-space">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative">
              <div className="absolute -left-4 top-10 hidden h-28 w-28 rounded-full bg-rose/40 blur-3xl sm:block" />
              <Image
                src="/about-placeholder.svg"
                alt="Ambiance de l'institut Ashanti Beauty"
                width={900}
                height={760}
                className="relative h-auto w-full rounded-[34px] border border-white/70 bg-white p-3 shadow-soft"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="À propos"
                title="Un institut accueillant, professionnel et dédié à votre mise en valeur."
                description="Ashanti Beauty est un cocon beauté à Balma imaginé pour celles qui recherchent une expérience soignée, féminine et premium. Chaque rendez-vous est pensé avec attention pour allier bien-être, précision du geste et sens du détail."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="glass-panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/50">Philosophie</p>
                  <p className="mt-3 text-sm">
                    Offrir des soins beauté raffinés dans un cadre serein, propre et chaleureux.
                  </p>
                </div>
                <div className="glass-panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/50">Promesse</p>
                  <p className="mt-3 text-sm">
                    Une prise en charge personnalisée pour révéler votre éclat en toute confiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-space bg-white/60">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Contact"
              title="Réservez votre moment beauté chez Ashanti Beauty."
              description="Retrouvez facilement toutes les informations utiles pour nous joindre, venir à l’institut ou préparer votre première visite à Balma."
            />

            <div className="mt-10 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-6">
                <div className="glass-panel p-7">
                  <div className="space-y-5">
                    <a href={siteConfig.phoneHref} className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-ink/50">Téléphone</p>
                        <p className="mt-1 font-semibold text-ink">{siteConfig.phoneDisplay}</p>
                      </div>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-ink/50">Email</p>
                        <p className="mt-1 font-semibold text-ink">{siteConfig.email}</p>
                      </div>
                    </a>
                    <a
                      href="https://maps.google.com/?q=5%20Esplanade%20Andr%C3%A9%20Michaux%2C%2031130%20Balma"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-4"
                    >
                      <MapPin className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-ink/50">Adresse</p>
                        <p className="mt-1 font-semibold text-ink">{siteConfig.address}</p>
                      </div>
                    </a>
                    <a href={siteConfig.instagramHref} target="_blank" rel="noreferrer" className="flex items-start gap-4">
                      <Instagram className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-ink/50">Instagram</p>
                        <p className="mt-1 font-semibold text-ink">@ashanti.beauty</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="glass-panel p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/50">Horaires</p>
                  <div className="mt-5 space-y-3">
                    {siteConfig.hours.map((slot) => (
                      <div key={slot.day} className="flex items-center justify-between gap-4 border-b border-ink/10 pb-3 last:border-none last:pb-0">
                        <span className="text-sm font-medium text-ink/65">{slot.day}</span>
                        <span className="text-sm font-semibold text-ink">{slot.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="glass-panel p-5 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/50">QR réservation</p>
                    <Image
                      src="/qr-booking-placeholder.svg"
                      alt="Emplacement QR code de réservation"
                      width={240}
                      height={240}
                      className="mx-auto mt-4 h-36 w-36 rounded-2xl"
                    />
                    <p className="mt-3 text-xs text-ink/55">Remplacez ce placeholder par le vrai QR code de réservation.</p>
                  </div>
                  <div className="glass-panel p-5 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/50">QR Instagram</p>
                    <Image
                      src="/qr-instagram-placeholder.svg"
                      alt="Emplacement QR code Instagram"
                      width={240}
                      height={240}
                      className="mx-auto mt-4 h-36 w-36 rounded-2xl"
                    />
                    <p className="mt-3 text-xs text-ink/55">Ajoutez ici le QR code du compte Instagram officiel.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <ContactForm />

                <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-soft">
                  <iframe
                    title="Google Maps - Ashanti Beauty Balma"
                    src={siteConfig.mapsEmbed}
                    loading="lazy"
                    className="h-[360px] w-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="glass-panel flex flex-wrap items-center gap-4 p-6">
                  <div className="flex min-w-[180px] flex-1 items-center gap-3">
                    <Star className="h-5 w-5 text-gold" />
                    <p className="text-sm">
                      Première visite ? Pensez à mentionner l’offre de bienvenue à <span className="font-semibold text-ink">-20%</span>.
                    </p>
                  </div>
                  <a
                    href={siteConfig.bookingHref}
                    className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
                  >
                    Réserver maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
