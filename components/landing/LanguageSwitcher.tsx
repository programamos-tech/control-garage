import Link from "next/link";
import type { Locale } from "@/lib/dictionaries";

type Size = "compact" | "default" | "navBar";

export function LanguageSwitcher({
  locale,
  dense,
  onLight,
  size: sizeProp,
}: {
  locale: Locale;
  /** @deprecated Usa `size="compact"` */
  dense?: boolean;
  onLight?: boolean;
  size?: Size;
}) {
  const size: Size = sizeProp ?? (dense ? "compact" : "default");

  const shell =
    size === "navBar"
      ? onLight
        ? "border border-slate-200/90 bg-white/95 p-0.5 shadow-sm sm:p-1"
        : "border border-white/15 bg-brand-blue-mid/90 p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-1"
      : onLight
        ? "border border-slate-200 bg-slate-50/90 p-0.5"
        : "border border-white/20 bg-white/10 p-0.5 backdrop-blur-sm";

  const shellSize =
    size === "compact"
      ? "gap-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide"
      : size === "navBar"
        ? "gap-0.5 rounded-md sm:gap-1 sm:rounded-lg"
        : "gap-0.5 rounded-md text-sm font-bold uppercase tracking-wide";

  const linkClass = (active: boolean) => {
    const baseNavBar =
      "inline-flex min-h-9 min-w-[2.5rem] items-center justify-center rounded px-2 py-1 text-[11px] font-bold uppercase tracking-wide transition-colors sm:min-h-[2.65rem] sm:min-w-[3.25rem] sm:rounded-md sm:px-3 sm:py-2 sm:text-sm sm:tracking-wide md:min-h-[2.85rem] md:min-w-[3.5rem] md:px-3.5 md:text-[0.9375rem]";
    const baseCompact =
      "inline-flex items-center justify-center rounded px-1.5 py-0.5 transition-colors";
    const baseDefault =
      "inline-flex min-h-[2.25rem] items-center justify-center rounded-md px-3 py-1.5 transition-colors";

    if (size === "navBar") {
      if (onLight) {
        return `${baseNavBar} ${
          active
            ? "bg-brand-gold-mid text-brand-blue shadow-sm"
            : "text-slate-600 hover:bg-slate-100 hover:text-brand-blue"
        }`;
      }
      return `${baseNavBar} ${
        active
          ? "bg-brand-gold-mid text-brand-blue shadow-sm"
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }`;
    }

    const inactiveLight = "text-slate-600 hover:bg-slate-200/80";
    const inactiveDark = "text-white/85 hover:bg-white/10";
    const inactive = onLight ? inactiveLight : inactiveDark;

    if (size === "compact") {
      return `${baseCompact} ${active ? "bg-brand-gold-mid text-brand-blue" : inactive}`;
    }
    return `${baseDefault} ${active ? "bg-brand-gold-mid text-brand-blue" : inactive}`;
  };

  return (
    <div className={`flex items-center ${shellSize} ${shell}`} aria-label="Language">
      <Link
        href="/en"
        className={linkClass(locale === "en")}
        hrefLang="en"
        title="English"
        aria-label="English (US)"
      >
        EN
      </Link>
      <Link
        href="/es"
        className={linkClass(locale === "es")}
        hrefLang="es"
        title="Español"
        aria-label="Español (España)"
      >
        ES
      </Link>
    </div>
  );
}
