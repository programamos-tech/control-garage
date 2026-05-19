import type { Locale } from "@/lib/dictionaries";

/** Rutas públicas de marketing (excluye admin). */
export type PublicRouteKey =
  | "home"
  | "about"
  | "services"
  | "installation"
  | "repair"
  | "opener"
  | "reviews"
  | "work"
  | "faq"
  | "contact";

export const publicRouteKeys: PublicRouteKey[] = [
  "home",
  "about",
  "services",
  "installation",
  "repair",
  "opener",
  "reviews",
  "work",
  "faq",
  "contact",
];

const slugs: Record<Exclude<PublicRouteKey, "home">, Record<Locale, string>> = {
  about: { en: "about", es: "nosotros" },
  services: { en: "services", es: "servicios" },
  installation: { en: "garage-door-installation", es: "instalacion-puertas-garaje" },
  repair: { en: "garage-door-repair", es: "reparacion-puertas-garaje" },
  opener: { en: "garage-door-opener", es: "reparacion-motor-garaje" },
  reviews: { en: "reviews", es: "resenas" },
  work: { en: "our-work", es: "nuestro-trabajo" },
  faq: { en: "faq", es: "preguntas-frecuentes" },
  contact: { en: "contact", es: "contacto" },
};

export const serviceRouteKeys = ["installation", "repair", "opener"] as const;
export type ServiceRouteKey = (typeof serviceRouteKeys)[number];

export const serviceRouteIndex: Record<ServiceRouteKey, number> = {
  installation: 0,
  repair: 1,
  opener: 2,
};

export function getSlug(locale: Locale, key: Exclude<PublicRouteKey, "home">): string {
  return slugs[key][locale];
}

export function publicPath(locale: Locale, key: PublicRouteKey): string {
  if (key === "home") return `/${locale}`;
  return `/${locale}/${slugs[key][locale]}`;
}

/** Resuelve un segmento de URL a clave de ruta; `null` si no es una página de marketing. */
export function routeKeyFromSlug(locale: Locale, slug: string): PublicRouteKey | null {
  for (const key of publicRouteKeys) {
    if (key === "home") continue;
    if (slugs[key][locale] === slug) return key;
  }
  return null;
}

export function routeKeyFromPathname(pathname: string): PublicRouteKey {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return "home";
  const locale = parts[0] === "es" ? "es" : "en";
  if (parts.length === 1) return "home";
  const key = routeKeyFromSlug(locale, parts[1] ?? "");
  return key ?? "home";
}

export function alternateLocalePath(
  pathname: string,
  targetLocale: Locale,
): string {
  const key = routeKeyFromPathname(pathname);
  return publicPath(targetLocale, key);
}

export function marketingStaticParams(): { locale: Locale; slug: string }[] {
  const locales: Locale[] = ["en", "es"];
  return locales.flatMap((locale) =>
    (Object.keys(slugs) as Exclude<PublicRouteKey, "home">[]).map((key) => ({
      locale,
      slug: slugs[key][locale],
    })),
  );
}
