import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";
import { locales } from "@/lib/dictionaries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${base}/en`,
        es: `${base}/es`,
        "x-default": `${base}/en`,
      },
    },
  }));
}
