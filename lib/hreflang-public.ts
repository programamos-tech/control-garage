import { getSiteUrl } from "@/lib/site-config";

/**
 * Valores `hreflang` para la landing pública (negocio en EE.UU.).
 * Next.js Metadata `alternates.languages` y el sitemap emiten `<link rel="alternate" hreflang="…">`.
 *
 * No hay URLs por país (`/co` / `/us`): solo versiones de idioma `/en` y `/es`.
 */
export function publicHreflangLanguages(): Record<string, string> {
  const base = getSiteUrl().replace(/\/$/, "");
  return {
    "en-US": `${base}/en`,
    "es-US": `${base}/es`,
    "x-default": `${base}/en`,
  };
}
