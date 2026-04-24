import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";
import { GoogleMapStar } from "./GoogleMapStars";

type Props = { dict: Dictionary };

const GOOGLE_LOGO = "/google_maps_pin_PNG26.png";
const FACEBOOK_LOGO = "/Facebook_f_logo_(2019).svg.png";

/** Más acotado que antes para alinearse visualmente con la fila de marcas (logos horizontales). */
const starMd = "h-5 w-5 sm:h-5 md:h-6 md:w-6";

export function ReviewsSection({ dict }: Props) {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-brand-blue py-16 text-white sm:py-20"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="reviews-title" className="text-3xl font-extrabold sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
          {dict.reviews.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
          {dict.reviews.sub}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:mt-14">
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 rounded-2xl border border-white/20 bg-white/[0.07] p-5 transition hover:border-white/30 hover:bg-white/[0.11] sm:gap-5 sm:p-6 md:p-7"
            aria-label={dict.hero.googleMapsLinkAria}
          >
            <span className="relative h-[4.25rem] w-[4.25rem] shrink-0 sm:h-[4.75rem] sm:w-[4.75rem] md:h-20 md:w-20">
              <Image
                src={GOOGLE_LOGO}
                alt=""
                fill
                className="object-contain drop-shadow-md"
                sizes="80px"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-lg font-bold leading-tight sm:text-xl md:text-[1.35rem]">
                {SITE.name}
              </span>
              <span className="mt-2 flex flex-wrap items-center gap-2 text-sm sm:text-base">
                <span className="font-semibold text-white">4.6</span>
                <span className="flex items-center gap-px">
                  <GoogleMapStar variant="full" className={starMd} />
                  <GoogleMapStar variant="full" className={starMd} />
                  <GoogleMapStar variant="full" className={starMd} />
                  <GoogleMapStar variant="full" className={starMd} />
                  <GoogleMapStar
                    variant="half"
                    halfGradientId="reviews-gmaps-star-half"
                    partialFillPercent={60}
                    className={starMd}
                  />
                </span>
                <span className="text-white/80">(17)</span>
              </span>
              <span className="mt-1.5 block text-xs text-white/75 sm:text-sm">{dict.hero.googleMapsCategory}</span>
            </span>
          </a>

          <a
            href={SITE.facebookReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 rounded-2xl border border-white/20 bg-white/[0.07] p-5 transition hover:border-white/30 hover:bg-white/[0.11] sm:gap-5 sm:p-6 md:p-7"
            aria-label={dict.hero.facebookMapsLinkAria}
          >
            <span className="relative h-[4.25rem] w-[4.25rem] shrink-0 sm:h-[4.75rem] sm:w-[4.75rem] md:h-20 md:w-20">
              <Image
                src={FACEBOOK_LOGO}
                alt=""
                fill
                className="object-contain drop-shadow-md"
                sizes="80px"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-lg font-bold leading-tight sm:text-xl md:text-[1.35rem]">
                {SITE.name}
              </span>
              <span className="mt-2 flex flex-wrap items-center gap-2 text-sm sm:text-base">
                <span className="font-semibold text-white">{dict.hero.facebookRatingDisplay}</span>
                <span className="flex items-center gap-px">
                  <GoogleMapStar variant="full" className={starMd} />
                  <GoogleMapStar variant="full" className={starMd} />
                  <GoogleMapStar variant="full" className={starMd} />
                  <GoogleMapStar variant="full" className={starMd} />
                  <GoogleMapStar variant="full" className={starMd} />
                </span>
                <span className="text-white/80">{dict.hero.facebookReviewCount}</span>
              </span>
              <span className="mt-1.5 block text-xs text-white/75 sm:text-sm">{dict.hero.facebookMapsCategory}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
