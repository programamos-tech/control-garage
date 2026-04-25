import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";
import { ButtonCta } from "./ButtonCta";
import { GoogleMapStar } from "./GoogleMapStars";

type Props = { dict: Dictionary; locale: string };

/** Imagen principal en `public/CHI-garage-door-collection.jpg`. */
const HERO_IMAGE = "/CHI-garage-door-collection.jpg";

/** Hero vertical móvil (`public/hero-mobile-portrait.png`, export del diseño vertical). */
const HERO_IMAGE_MOBILE = "/hero-mobile-portrait.png";

const heroAlt: Record<string, string> = {
  en: "CHI garage door collection — Control Garage FL, Orlando area",
  es: "Colección de puertas CHI — Control Garage FL, zona Orlando",
};

const heroAltMobile: Record<string, string> = {
  en: "Modern home with wood garage door — Control Garage FL, Orlando area",
  es: "Vivienda moderna con puerta de garaje de madera — Control Garage FL, zona Orlando",
};

const reviewCardClass =
  "inline-flex w-fit max-w-[min(100%,20rem)] flex-col rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 text-left shadow-none backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.14] sm:px-4 sm:py-3";

export function Hero({ dict, locale }: Props) {
  const alt = heroAlt[locale] ?? heroAlt.en;
  const altMobile = heroAltMobile[locale] ?? heroAltMobile.en;

  return (
    <section
      className="relative z-10 min-h-[min(88vh,840px)] overflow-hidden bg-brand-blue md:min-h-[min(80vh,780px)] lg:min-h-[min(85vh,820px)]"
      aria-labelledby="hero-heading"
    >
      <Image
        src={HERO_IMAGE_MOBILE}
        alt={altMobile}
        fill
        priority
        className="object-cover object-center md:hidden"
        sizes="100vw"
        quality={75}
      />
      <Image
        src={HERO_IMAGE}
        alt={alt}
        fill
        className="hidden object-cover object-bottom md:block"
        sizes="100vw"
        quality={90}
      />
      {/* Degradado azulado: más denso a la izquierda para legibilidad del titular */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-blue/68 from-[5%] via-brand-blue/38 via-[50%] to-transparent to-[88%]"
        aria-hidden
      />
      <div className="relative z-30 mx-auto flex max-w-7xl flex-col px-4 pb-12 pt-14 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-16 lg:pt-24">
        <h1
          id="hero-heading"
          className="max-w-3xl whitespace-pre-line text-[1.625rem] font-extrabold leading-[1.15] tracking-tight text-white [text-shadow:0_2px_34px_rgba(0,0,0,0.72),0_1px_3px_rgba(0,0,0,0.58),0_0_48px_rgba(12,39,72,0.42)] min-[380px]:text-3xl sm:text-4xl lg:text-5xl"
        >
          {dict.hero.h1}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white [text-shadow:0_2px_26px_rgba(0,0,0,0.62),0_1px_2px_rgba(0,0,0,0.5)] sm:mt-6 sm:text-base md:text-lg">
          {dict.hero.sub}
        </p>
        <div className="mt-7 flex flex-col gap-4 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:items-center min-[400px]:gap-4 sm:mt-8 sm:gap-5 md:gap-6">
          <ButtonCta
            href="#services"
            variant="solid"
            className="w-full shrink-0 min-[400px]:w-auto"
          >
            {dict.hero.cta}
          </ButtonCta>
          <div className="flex min-w-0 flex-row flex-wrap items-center gap-x-2.5 gap-y-2 sm:gap-x-3 md:gap-x-4">
            <a
              href={`tel:${SITE.phones.en.tel.replace(/\s/g, "")}`}
              className="inline-flex items-baseline gap-2.5 text-lg font-extrabold tabular-nums leading-none text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] transition hover:text-brand-gold-light sm:text-2xl md:text-[1.65rem]"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 sm:text-sm">EN</span>
              <span>{SITE.phones.en.display}</span>
            </a>
            <a
              href={`tel:${SITE.phones.es.tel.replace(/\s/g, "")}`}
              className="inline-flex items-baseline gap-2.5 text-lg font-extrabold tabular-nums leading-none text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] transition hover:text-brand-gold-light sm:text-2xl md:text-[1.65rem]"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 sm:text-sm">ES</span>
              <span>{SITE.phones.es.display}</span>
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-row flex-wrap items-start gap-3 self-start sm:mt-5 sm:gap-4">
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={reviewCardClass}
            aria-label={dict.hero.googleMapsLinkAria}
          >
            <span className="text-[15px] font-semibold leading-tight text-white">{SITE.name}</span>
            <span className="mt-1 flex flex-wrap items-center gap-1.5 text-[13px] text-white/90">
              <span className="font-medium text-white">4.6</span>
              <span className="flex items-center gap-px">
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar
                  variant="half"
                  halfGradientId="hero-gmaps-star-half"
                  partialFillPercent={60}
                />
              </span>
              <span className="text-white/75">(17)</span>
            </span>
            <span className="mt-0.5 text-[13px] text-white/70">{dict.hero.googleMapsCategory}</span>
          </a>

          <a
            href={SITE.facebookReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={reviewCardClass}
            aria-label={dict.hero.facebookMapsLinkAria}
          >
            <span className="text-[15px] font-semibold leading-tight text-white">{SITE.name}</span>
            <span className="mt-1 flex flex-wrap items-center gap-1.5 text-[13px] text-white/90">
              <span className="font-medium text-white">{dict.hero.facebookRatingDisplay}</span>
              <span className="flex items-center gap-px">
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
              </span>
              <span className="text-white/75">{dict.hero.facebookReviewCount}</span>
            </span>
            <span className="mt-0.5 text-[13px] text-white/70">{dict.hero.facebookMapsCategory}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
