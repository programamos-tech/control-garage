import type { Dictionary, Locale } from "@/lib/dictionaries";
import { SITE, getSiteUrl } from "@/lib/site-config";
import { publicPath } from "@/lib/public-routes";

type Props = { locale: Locale; dict: Dictionary };

export function LocalBusinessJsonLd({ locale, dict }: Props) {
  const base = getSiteUrl();
  const url = `${base}${publicPath(locale, "home")}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    alternateName: SITE.legalName,
    description: dict.meta.description,
    url,
    telephone: [SITE.phones.en.tel, SITE.phones.es.tel],
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: {
      "@type": "City",
      name: "Orlando",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [SITE.googleReviewsUrl, SITE.facebookUrl],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.6,
      reviewCount: 17,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
