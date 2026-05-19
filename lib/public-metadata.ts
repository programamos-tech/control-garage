import type { Metadata } from "next";
import type { Locale } from "@/lib/dictionaries";
import { images } from "@/lib/image-assets";
import { getSiteUrl, SITE } from "@/lib/site-config";
import { publicHreflangForRoute } from "@/lib/hreflang-public";
import {
  publicPath,
  type PublicRouteKey,
} from "@/lib/public-routes";

type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
};

const seo: Record<PublicRouteKey, Record<Locale, PageSeo>> = {
  home: {
    en: {
      title:
        "Garage repair Orlando — garage doors, install, replace & openers | Control Garage FL",
      description:
        "Control Garage FL — garage repair Orlando, FL: springs, cables, openers, off-track doors, panels, and full garage door repair. Residential garage service, new installs & 24/7 emergencies. English & Spanish — (407) 487-0553 · (407) 486-4303.",
      keywords: [
        "garage repair orlando",
        "garage door repair orlando",
        "garage door installation orlando",
        "Control Garage FL",
      ],
    },
    es: {
      title:
        "Reparación de puertas de garaje Orlando — instalación, reemplazo y 24/7 | Control Garage FL",
      description:
        "Control Garage FL — reparación de puertas de garaje Orlando, FL: resortes, cables, motores, puertas fuera de riel e instalación nueva. Cotización gratis y emergencias 24h. Español e inglés — (407) 486-4303 · (407) 487-0553.",
      keywords: [
        "reparación de puertas de garaje orlando",
        "instalación puerta de garaje orlando",
        "Control Garage FL",
      ],
    },
  },
  about: {
    en: {
      title: "About Control Garage FL — garage door team in Orlando, FL",
      description:
        "Meet Control Garage FL: honest garage repair and garage door service in Orlando. English & Spanish, clear quotes, LiftMaster, Clopay & CHI. Call (407) 487-0553 or (407) 486-4303.",
      keywords: ["garage door company orlando", "Control Garage FL about", "garage repair orlando"],
    },
    es: {
      title: "Nosotros — Control Garage FL, puertas de garaje en Orlando",
      description:
        "Conozca Control Garage FL: reparación de puertas de garaje en Orlando con presupuestos claros. Inglés y español, marcas LiftMaster, Clopay y CHI.",
      keywords: ["empresa puertas garaje orlando", "Control Garage FL nosotros"],
    },
  },
  services: {
    en: {
      title: "Garage door services Orlando — install, repair & openers | Control Garage FL",
      description:
        "Garage door installation, garage repair, and opener service in Orlando by Control Garage FL. Same-day help, premium brands, free estimates.",
      keywords: [
        "garage door services orlando",
        "garage door installation orlando",
        "garage door repair orlando",
      ],
    },
    es: {
      title: "Servicios de puertas de garaje Orlando | Control Garage FL",
      description:
        "Instalación, reparación y motores de garaje en Orlando con Control Garage FL. Cotización gratis, marcas premium y atención el mismo día.",
      keywords: [
        "servicios puertas de garaje orlando",
        "instalación puerta garaje orlando",
        "reparación puerta garaje orlando",
      ],
    },
  },
  installation: {
    en: {
      title: "Garage door installation Orlando — new doors & hardware | Control Garage FL",
      description:
        "Professional garage door installation in Orlando by Control Garage FL. New residential doors, clean hardware, CHI & Clopay options. Free installation quote.",
      keywords: [
        "garage door installation orlando",
        "new garage door orlando",
        "garage door replacement orlando",
      ],
    },
    es: {
      title: "Instalación de puertas de garaje Orlando | Control Garage FL",
      description:
        "Instalación de puertas de garaje en Orlando con Control Garage FL. Puertas residenciales, herrajes seguros y acabados CHI y Clopay. Cotización gratis.",
      keywords: [
        "instalación puerta de garaje orlando",
        "puerta de garaje nueva orlando",
      ],
    },
  },
  repair: {
    en: {
      title: "Garage door repair Orlando — springs, cables & 24/7 | Control Garage FL",
      description:
        "Garage repair and garage door repair in Orlando: broken springs, cables, rollers, sensors, and off-track doors. Control Garage FL — clear pricing, same-day slots.",
      keywords: [
        "garage door repair orlando",
        "garage repair orlando",
        "emergency garage door repair orlando",
      ],
    },
    es: {
      title: "Reparación de puertas de garaje Orlando — 24/7 | Control Garage FL",
      description:
        "Reparación de puertas de garaje en Orlando: resortes, cables, ruedas, sensores y puertas fuera de riel. Control Garage FL — presupuesto claro y urgencias 24h.",
      keywords: [
        "reparación puerta de garaje orlando",
        "reparación garaje orlando",
        "emergencia puerta garaje orlando",
      ],
    },
  },
  opener: {
    en: {
      title: "Garage door opener repair Orlando — LiftMaster & smart openers | Control Garage FL",
      description:
        "Garage door opener repair and replacement in Orlando. Control Garage FL services LiftMaster and smart openers — remotes, motors, and upgrades.",
      keywords: [
        "garage door opener orlando",
        "garage door opener repair orlando",
        "liftmaster orlando",
      ],
    },
    es: {
      title: "Reparación de motor de garaje Orlando — LiftMaster | Control Garage FL",
      description:
        "Reparación y cambio de motor de puerta de garaje en Orlando. Control Garage FL instala y da servicio a LiftMaster y abridores inteligentes.",
      keywords: [
        "motor garaje orlando",
        "reparación motor puerta garaje orlando",
        "liftmaster orlando",
      ],
    },
  },
  reviews: {
    en: {
      title: "Reviews — Control Garage FL on Google & Facebook | Orlando",
      description:
        "Read what Orlando homeowners say about Control Garage FL garage repair and garage door service on Google and Facebook before you call.",
      keywords: ["Control Garage FL reviews", "garage door repair reviews orlando"],
    },
    es: {
      title: "Reseñas — Control Garage FL en Google y Facebook | Orlando",
      description:
        "Opiniones de clientes sobre Control Garage FL: reparación de puertas de garaje en Orlando. Reseñas en Google y Facebook.",
      keywords: ["reseñas Control Garage FL", "reparación puerta garaje orlando opiniones"],
    },
  },
  work: {
    en: {
      title: "Our work — garage door projects in Orlando | Control Garage FL",
      description:
        "Gallery of garage door installation, repair, and upgrades completed by Control Garage FL for homeowners across Orlando.",
      keywords: ["garage door projects orlando", "Control Garage FL gallery"],
    },
    es: {
      title: "Nuestros trabajos — puertas de garaje en Orlando | Control Garage FL",
      description:
        "Galería de instalaciones y reparaciones de puertas de garaje realizadas por Control Garage FL en Orlando.",
      keywords: ["trabajos puertas garaje orlando", "galería Control Garage FL"],
    },
  },
  faq: {
    en: {
      title: "FAQ — garage repair & garage doors Orlando | Control Garage FL",
      description:
        "Answers about garage repair, installation, openers, emergencies, and service areas from Control Garage FL in Orlando. English & Spanish.",
      keywords: ["garage door faq orlando", "garage repair questions orlando"],
    },
    es: {
      title: "Preguntas frecuentes — puertas de garaje Orlando | Control Garage FL",
      description:
        "Respuestas sobre reparación, instalación, motores, emergencias y zonas de servicio de Control Garage FL en Orlando.",
      keywords: ["preguntas puerta garaje orlando", "faq reparación garaje orlando"],
    },
  },
  contact: {
    en: {
      title: "Contact Control Garage FL — garage repair Orlando | Call or WhatsApp",
      description:
        "Contact Control Garage FL for garage repair in Orlando. Call (407) 487-0553 (EN) or (407) 486-4303 (ES), email, or WhatsApp. Mobile service map.",
      keywords: ["contact garage door repair orlando", "Control Garage FL phone"],
    },
    es: {
      title: "Contacto Control Garage FL — reparación garaje Orlando",
      description:
        "Contacte a Control Garage FL para reparación de puertas de garaje en Orlando. (407) 486-4303 español · (407) 487-0553 inglés, email y WhatsApp.",
      keywords: ["contacto puerta garaje orlando", "teléfono Control Garage FL"],
    },
  },
};

export function buildPublicMetadata(
  locale: Locale,
  routeKey: PublicRouteKey,
): Metadata {
  const page = seo[routeKey][locale];
  const base = getSiteUrl();
  const path = publicPath(locale, routeKey);
  const url = `${base}${path}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
      languages: publicHreflangForRoute(routeKey),
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_US" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_US"],
      url,
      siteName: SITE.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: images.logo,
          width: 512,
          height: 512,
          alt: "Control Garage FL logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [images.logo],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
