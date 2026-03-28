import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";
import { ButtonCta } from "./ButtonCta";

type Props = { dict: Dictionary; locale: string };

/** Imagen principal del cliente en `public/hero.jpeg`. */
const HERO_IMAGE = "/hero.jpeg";

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
];

const heroAlt: Record<string, string> = {
  en: "Control Garage — garage door service truck and home in Orlando, FL",
  es: "Control Garage — servicio de puertas de garaje en Orlando, FL",
};

export function Hero({ dict, locale }: Props) {
  const alt = heroAlt[locale] ?? heroAlt.en;

  return (
    <section
      className="relative min-h-[min(88vh,840px)] overflow-hidden bg-brand-blue md:min-h-[min(80vh,780px)] lg:min-h-[min(85vh,820px)]"
      aria-labelledby="hero-heading"
    >
      <Image
        src={HERO_IMAGE}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-blue/[0.96] via-brand-blue/80 to-brand-blue/35 md:via-brand-blue/75 md:to-brand-blue/30"
        aria-hidden
      />
      {/* z-30: el texto siempre por encima de las tarjetas (z-10) si se solapan en tablet */}
      <div className="relative z-30 mx-auto flex max-w-7xl flex-col justify-center px-4 pb-44 pt-14 sm:px-6 sm:pb-52 sm:pt-16 md:pb-60 lg:px-8 lg:pb-60 lg:pt-24 xl:pb-40">
        <h1
          id="hero-heading"
          className="max-w-3xl text-[1.625rem] font-extrabold leading-[1.15] tracking-tight text-white min-[380px]:text-3xl sm:text-4xl lg:text-5xl"
        >
          {dict.hero.h1}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base md:text-lg">
          {dict.hero.sub}
        </p>
        <div className="mt-7 flex max-w-2xl flex-col gap-4 md:mt-8 lg:max-w-none lg:flex-row lg:flex-wrap lg:items-center">
          <ButtonCta href="#services" className="w-full shrink-0 sm:w-auto">
            {dict.hero.cta}
          </ButtonCta>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <div className="flex min-w-0 items-center gap-2">
              <span className="shrink-0 rounded border border-sky-400/45 bg-sky-500/20 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-sky-100">
                EN
              </span>
              <a
                href={`tel:${SITE.phones.en.tel.replace(/\s/g, "")}`}
                className="min-w-0 truncate text-sm font-bold tracking-wide text-white underline-offset-4 hover:text-sky-100 hover:underline sm:truncate-none sm:text-base"
              >
                {SITE.phones.en.display}
              </a>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <span className="shrink-0 rounded border border-brand-gold-light/55 bg-brand-gold/25 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-gold-light">
                ES
              </span>
              <a
                href={`tel:${SITE.phones.es.tel.replace(/\s/g, "")}`}
                className="min-w-0 truncate text-sm font-bold tracking-wide text-white underline-offset-4 hover:text-brand-gold-light hover:underline sm:truncate-none sm:text-base"
              >
                {SITE.phones.es.display}
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 flex max-w-2xl flex-wrap items-center gap-2 text-xs text-white/85 sm:mt-8 sm:text-sm lg:max-w-none">
          <span className="inline-flex text-brand-gold-light" aria-hidden>
            {"★★★★★"}
          </span>
          <span>{dict.hero.ratingLine}</span>
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 translate-y-[82%] px-4 sm:translate-y-[76%] sm:px-6 md:translate-y-[72%] lg:translate-y-[64%] lg:px-8 xl:translate-y-[58%] 2xl:translate-y-1/2">
        <div className="pointer-events-auto mx-auto grid w-full max-w-[min(100%,20rem)] grid-cols-1 gap-3 sm:max-w-[min(100%,36rem)] sm:grid-cols-2 sm:gap-3 md:max-w-[min(100%,40rem)] lg:max-w-4xl lg:gap-4 xl:max-w-5xl xl:grid-cols-3 2xl:max-w-6xl">
          {CARD_IMAGES.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[5/4] overflow-hidden rounded-xl border-2 border-white shadow-lg ring-1 ring-black/5 sm:aspect-video md:rounded-2xl lg:aspect-[4/3] xl:border-4 xl:shadow-2xl"
            >
              <Image
                src={src}
                alt={
                  i === 0
                    ? "Residential driveway and vehicle — Control Garage Orlando"
                    : i === 1
                      ? "Technicians servicing garage door tracks"
                      : "Garage door panel and hardware detail"
                }
                fill
                className="object-cover"
                sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
