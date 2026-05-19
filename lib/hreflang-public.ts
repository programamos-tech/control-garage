import { getSiteUrl } from "@/lib/site-config";
import {
  publicPath,
  publicRouteKeys,
  type PublicRouteKey,
} from "@/lib/public-routes";
import type { Locale } from "@/lib/dictionaries";

/**
 * Valores `hreflang` para la landing pública (negocio en EE.UU.).
 * Next.js Metadata `alternates.languages` y el sitemap emiten `<link rel="alternate" hreflang="…">`.
 */
export function publicHreflangForRoute(routeKey: PublicRouteKey): Record<string, string> {
  const base = getSiteUrl().replace(/\/$/, "");
  return {
    "en-US": `${base}${publicPath("en", routeKey)}`,
    "es-US": `${base}${publicPath("es", routeKey)}`,
    "x-default": `${base}${publicPath("en", routeKey)}`,
  };
}

/** @deprecated Usa `publicHreflangForRoute("home")` */
export function publicHreflangLanguages(): Record<string, string> {
  return publicHreflangForRoute("home");
}

export function allPublicSitemapEntries(): {
  routeKey: PublicRouteKey;
  locale: Locale;
}[] {
  const locales: Locale[] = ["en", "es"];
  return locales.flatMap((locale) =>
    publicRouteKeys.map((routeKey) => ({ routeKey, locale })),
  );
}
