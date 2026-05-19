import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";
import { allPublicSitemapEntries } from "@/lib/hreflang-public";
import { publicHreflangForRoute } from "@/lib/hreflang-public";
import { publicPath } from "@/lib/public-routes";

/**
 * URLs públicas indexables. El panel `/[locale]/admin` no debe listarse.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return allPublicSitemapEntries().map(({ routeKey, locale }) => ({
    url: `${base}${publicPath(locale, routeKey)}`,
    lastModified: now,
    changeFrequency: routeKey === "home" ? ("weekly" as const) : ("monthly" as const),
    priority: routeKey === "home" ? (locale === "en" ? 1 : 0.9) : 0.8,
    alternates: { languages: publicHreflangForRoute(routeKey) },
  }));
}
