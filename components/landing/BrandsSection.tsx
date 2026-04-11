import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";
import { ChiGalleryRotator } from "./ChiGalleryRotator";
import { MotorsCarousel } from "./MotorsCarousel";

type Props = { dict: Dictionary };

const BRAND_LOGOS = [
  {
    name: "LiftMaster",
    src: "/Liftmaster-Logo.png",
    href: SITE.suppliers.liftmaster,
  },
  {
    name: "Clopay",
    src: "/clopay-corporation-logo-810x450.webp",
    href: SITE.suppliers.clopay,
  },
  {
    name: "C.H.I. Overhead Doors",
    src: "/CHI-ColorLogo-removebg-preview.png",
    href: SITE.suppliers.chiResidentialCollections,
  },
] as const;

export function BrandsSection({ dict }: Props) {
  return (
    <section
      id="brands"
      className="scroll-mt-24 border-y border-slate-200/80 bg-white py-14 sm:py-20"
      aria-labelledby="brands-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="brands-title"
          className="text-center text-3xl font-extrabold text-brand-blue sm:text-4xl"
        >
          {dict.brands.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          {dict.brands.sub}
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 md:gap-x-16 lg:gap-x-20">
          {BRAND_LOGOS.map((b) => (
            <li key={b.name}>
              <a
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-opacity hover:opacity-90"
              >
                <span className="relative mx-auto block h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60 lg:h-32 lg:w-72">
                  <Image
                    src={b.src}
                    alt={b.name}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 288px"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 sm:mt-16">
          <h3 className="text-center text-lg font-extrabold tracking-tight text-brand-blue sm:text-xl">
            {dict.brands.chiGalleryHeading}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            {dict.brands.chiPickDoorBefore}{" "}
            <a
              href={SITE.suppliers.chiResidentialCollections}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-blue underline decoration-brand-blue/35 underline-offset-2 transition hover:text-brand-gold-dark hover:decoration-brand-gold-mid"
            >
              {dict.brands.chiPickDoorLinkLabel}
            </a>{" "}
            {dict.brands.chiPickDoorAfter}
          </p>
          <a
            href={SITE.suppliers.chiResidentialCollections}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 block overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-sm ring-1 ring-slate-100 transition hover:border-brand-gold-mid/50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-mid focus-visible:ring-offset-2"
          >
            <ChiGalleryRotator imageAlt={dict.brands.chiGalleryAlt} />
          </a>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base">
            {dict.brands.chiGalleryDesignNote}
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center sm:mt-4 sm:gap-x-6">
            <a
              href={`tel:${SITE.phones.en.tel.replace(/\s/g, "")}`}
              className="inline-flex items-baseline gap-2 text-sm font-extrabold tabular-nums text-brand-blue underline-offset-2 transition hover:text-brand-gold-dark hover:underline sm:text-base"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-brand-blue/70">EN</span>
              {SITE.phones.en.display}
            </a>
            <span className="hidden text-slate-300 sm:inline" aria-hidden>
              |
            </span>
            <a
              href={`tel:${SITE.phones.es.tel.replace(/\s/g, "")}`}
              className="inline-flex items-baseline gap-2 text-sm font-extrabold tabular-nums text-brand-blue underline-offset-2 transition hover:text-brand-gold-dark hover:underline sm:text-base"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-brand-blue/70">ES</span>
              {SITE.phones.es.display}
            </a>
          </p>
        </div>

        <MotorsCarousel dict={dict} />
      </div>
    </section>
  );
}
