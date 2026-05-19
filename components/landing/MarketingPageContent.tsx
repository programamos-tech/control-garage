import Link from "next/link";
import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import {
  publicPath,
  serviceRouteIndex,
  type PublicRouteKey,
  type ServiceRouteKey,
} from "@/lib/public-routes";
import { images } from "@/lib/image-assets";
import { IMAGE_QUALITY } from "@/lib/image-quality";
import { SITE, whatsappHref } from "@/lib/site-config";
import { PageIntro } from "./PageIntro";
import { ServicesSection } from "./ServicesSection";
import { BrandsSection } from "./BrandsSection";
import { ReviewsSection } from "./ReviewsSection";
import { WorkGallery } from "./WorkGallery";
import { MobileServiceSection } from "./MobileServiceSection";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { FaqJsonLd } from "./FaqJsonLd";

const serviceKeys: ServiceRouteKey[] = ["installation", "repair", "opener"];

function waMessageForService(locale: Locale, serviceTitle: string) {
  if (locale === "es") {
    return `Hola ${SITE.name} — quiero información sobre: ${serviceTitle}`;
  }
  return `Hi ${SITE.name} — I'd like info about: ${serviceTitle}`;
}

type Props = {
  routeKey: PublicRouteKey;
  locale: Locale;
  dict: Dictionary;
};

export function MarketingPageContent({ routeKey, locale, dict }: Props) {
  switch (routeKey) {
    case "about":
      return (
        <>
          <PageIntro title={dict.nav.about} />
          <section data-reveal className="reveal-fade-up py-14 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <p className="text-lg leading-relaxed text-slate-700">{dict.about.body}</p>
              <h2 className="mt-12 text-xl font-bold text-brand-blue">{dict.footer.whyUsHeading}</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                {dict.footer.whyUsItems.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="shrink-0 text-brand-gold-mid" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      );

    case "services":
      return (
        <>
          <PageIntro title={dict.nav.services} subtitle={dict.brands.sub} />
          <ServicesSection dict={dict} locale={locale} linkToPages hideHeading />
          <BrandsSection dict={dict} />
        </>
      );

    case "installation":
    case "repair":
    case "opener": {
      const idx = serviceRouteIndex[routeKey];
      const item = dict.services.items[idx]!;
      const image = images.services[idx] ?? images.services[0];
      return (
        <>
          <PageIntro title={item.title} />
          <section data-reveal className="reveal-fade-up py-12 sm:py-16">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-8">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-200 shadow-md">
                <Image
                  src={image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  quality={IMAGE_QUALITY.marketing}
                  priority
                />
              </div>
              <div>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{item.body}</p>
                <a
                  href={whatsappHref(waMessageForService(locale, item.title), dict.contact.whatsappLeadPrefix)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:brightness-110"
                >
                  {item.cta}
                </a>
                <p className="mt-10 text-sm font-semibold text-brand-blue">
                  {locale === "es" ? "Otros servicios" : "Other services"}
                </p>
                <ul className="mt-3 space-y-2">
                  {serviceKeys
                    .filter((k) => k !== routeKey)
                    .map((k) => (
                      <li key={k}>
                        <Link
                          href={publicPath(locale, k)}
                          className="text-sm text-slate-600 underline-offset-2 hover:text-brand-gold-dark hover:underline"
                        >
                          {dict.services.items[serviceRouteIndex[k]]!.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      );
    }

    case "reviews":
      return (
        <>
          <PageIntro title={dict.reviews.title} subtitle={dict.reviews.sub} />
          <ReviewsSection dict={dict} hideHeading />
        </>
      );

    case "work":
      return (
        <>
          <PageIntro title={dict.work.title} subtitle={dict.work.sub} />
          <WorkGallery dict={dict} locale={locale} hideHeading />
          <MobileServiceSection dict={dict} />
        </>
      );

    case "faq":
      return (
        <>
          <FaqJsonLd dict={dict} />
          <PageIntro title={dict.faq.title} />
          <FaqSection dict={dict} hideHeading />
        </>
      );

    case "contact":
      return (
        <>
          <PageIntro title={dict.nav.contact} subtitle={dict.contact.serviceAreaNote} />
          <ContactSection dict={dict} />
        </>
      );

    default:
      return null;
  }
}
