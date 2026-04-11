import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";
import { locales } from "@/lib/dictionaries";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  /** Panel interno — no indexar ni gastar rastreo aquí. */
  const disallow = locales.map((locale) => `/${locale}/admin`);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
