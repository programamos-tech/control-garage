import Link from "next/link";
import type { Locale } from "@/lib/dictionaries";

export function LanguageSwitcher({
  locale,
  dense,
  onLight,
}: {
  locale: Locale;
  /** Barra superior: más compacto */
  dense?: boolean;
  /** Fondo claro (p. ej. menú móvil) */
  onLight?: boolean;
}) {
  const shell = onLight
    ? "border-slate-200 bg-slate-100/90 text-slate-700"
    : "border-white/25 bg-white/10 text-white backdrop-blur-sm";
  const inactive = onLight
    ? "text-slate-600 hover:bg-slate-200/80"
    : "text-white/90 hover:bg-white/10";

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border font-semibold ${shell} ${
        dense ? "px-0.5 py-0 text-[10px]" : "gap-1 px-1 py-0.5 text-xs"
      }`}
      aria-label="Language"
    >
      <Link
        href="/en"
        className={`rounded-full transition-colors ${
          dense ? "px-1.5 py-0.5" : "px-2 py-1"
        } ${locale === "en" ? "bg-brand-gold text-brand-blue" : inactive}`}
        hrefLang="en"
      >
        EN
      </Link>
      <Link
        href="/es"
        className={`rounded-full transition-colors ${
          dense ? "px-1.5 py-0.5" : "px-2 py-1"
        } ${locale === "es" ? "bg-brand-gold text-brand-blue" : inactive}`}
        hrefLang="es"
      >
        ES
      </Link>
    </div>
  );
}
