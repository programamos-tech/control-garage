import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";
import { locales } from "@/lib/dictionaries";
import { publicHreflangLanguages } from "@/lib/hreflang-public";

/**
 * URLs públicas indexables. Ampliar aquí cuando añadas rutas de marketing
 * (p. ej. `/en/reparacion-orlando`); el panel `/[locale]/admin` no debe listarse.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const languages = publicHreflangLanguages();

  const home: MetadataRoute.Sitemap[number] = {
    url: `${base}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages: { ...languages } },
  };

  const localePages = locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages: { ...languages } },
  }));

  return [home, ...localePages];
}
