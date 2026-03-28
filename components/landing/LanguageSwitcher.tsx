import Link from "next/link";
import type { Locale } from "@/lib/dictionaries";

export function LanguageSwitcher({
  locale,
  dense,
}: {
  locale: Locale;
  /** Barra superior: más compacto */
  dense?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-white/25 bg-white/10 font-semibold text-white backdrop-blur-sm ${
        dense ? "px-0.5 py-0 text-[10px]" : "gap-1 px-1 py-0.5 text-xs"
      }`}
      aria-label="Language"
    >
      <Link
        href="/en"
        className={`rounded-full transition-colors ${
          dense ? "px-1.5 py-0.5" : "px-2 py-1"
        } ${
          locale === "en"
            ? "bg-brand-gold text-brand-blue"
            : "text-white/90 hover:bg-white/10"
        }`}
        hrefLang="en"
      >
        EN
      </Link>
      <Link
        href="/es"
        className={`rounded-full transition-colors ${
          dense ? "px-1.5 py-0.5" : "px-2 py-1"
        } ${
          locale === "es"
            ? "bg-brand-gold text-brand-blue"
            : "text-white/90 hover:bg-white/10"
        }`}
        hrefLang="es"
      >
        ES
      </Link>
    </div>
  );
}
