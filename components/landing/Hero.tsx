import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";
import { ButtonCta } from "./ButtonCta";
import { GoogleMapStar } from "./GoogleMapStars";

type Props = { dict: Dictionary; locale: string };

/** Imagen principal en `public/CHI-garage-door-collection.jpg`. */
const HERO_IMAGE = "/CHI-garage-door-collection.jpg";

const heroAlt: Record<string, string> = {
  en: "CHI garage door collection — Control Garage, Orlando area",
  es: "Colección de puertas CHI — Control Garage, zona Orlando",
};

const reviewCardClass =
  "inline-flex w-fit max-w-[min(100%,20rem)] flex-col rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 text-left shadow-none backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.14] sm:px-4 sm:py-3";

export function Hero({ dict, locale }: Props) {
  const alt = heroAlt[locale] ?? heroAlt.en;

  return (
    <section
      className="relative z-10 min-h-[min(88vh,840px)] overflow-hidden bg-brand-blue md:min-h-[min(80vh,780px)] lg:min-h-[min(85vh,820px)]"
      aria-labelledby="hero-heading"
    >
      <Image
        src={HERO_IMAGE}
        alt={alt}
        fill
        priority
        className="object-cover object-bottom"
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
        <div className="mt-7 md:mt-8">
          <ButtonCta href="#services" variant="solid" className="w-full shrink-0 sm:w-auto">
            {dict.hero.cta}
          </ButtonCta>
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
              <span className="font-medium text-white">4.5</span>
              <span className="flex items-center gap-px">
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="full" />
                <GoogleMapStar variant="half" halfGradientId="hero-gmaps-star-half" />
              </span>
              <span className="text-white/75">(13)</span>
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
