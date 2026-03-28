import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { getMainNavLinks } from "@/lib/nav-links";

type Props = { dict: Dictionary; locale: Locale };

export function MainNav({ dict, locale }: Props) {
  const links = getMainNavLinks(dict, locale);

  return (
    <header className="sticky top-0 z-40 hidden border-b border-slate-200/90 bg-white/95 shadow-[0_1px_0_rgba(12,39,72,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-white/80 lg:block">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8"
        aria-label="Main"
      >
        <div className="min-w-[4.5rem] flex-1" aria-hidden />

        <ul className="flex max-w-[min(100%,52rem)] flex-wrap items-center justify-center gap-1 lg:gap-2">
          {links.map((l) => (
            <li key={l.label} className="group relative">
              <Link
                href={l.href}
                className="flex items-center gap-1 px-2 py-2 text-sm font-bold text-brand-blue hover:text-brand-gold-dark"
              >
                {l.label}
                {l.sub && (
                  <svg className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                )}
              </Link>
              {l.sub && (
                <ul className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-lg border border-slate-100 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {l.sub.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-slate-50 hover:text-brand-gold-dark"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex min-w-[4.5rem] flex-1 items-center justify-end gap-1.5">
          <Link
            href="/en"
            className={`rounded-md px-2 py-1 text-xs font-bold transition hover:bg-slate-100 ${locale === "en" ? "text-brand-gold-dark" : "text-slate-400"}`}
            hrefLang="en"
          >
            EN
          </Link>
          <span className="text-slate-200" aria-hidden>
            |
          </span>
          <Link
            href="/es"
            className={`rounded-md px-2 py-1 text-xs font-bold transition hover:bg-slate-100 ${locale === "es" ? "text-brand-gold-dark" : "text-slate-400"}`}
            hrefLang="es"
          >
            ES
          </Link>
        </div>
      </nav>
    </header>
  );
}
