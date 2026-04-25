import type { Dictionary, Locale } from "@/lib/dictionaries";
import { SITE, getSiteUrl } from "@/lib/site-config";

type Props = { locale: Locale; dict: Dictionary };

export function JsonLd({ locale, dict }: Props) {
  const base = getSiteUrl();
  const url = locale === "en" ? `${base}/en` : `${base}/es`;

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
    /** Coincide con la tarjeta pública de Google Maps en la landing. */
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.6,
      reviewCount: 17,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
