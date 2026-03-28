"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";

type Props = { dict: Dictionary; locale: Locale };

export function MainNav({ dict, locale }: Props) {
  const [open, setOpen] = useState(false);
  const prefix = `/${locale}`;

  const links: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    { href: `${prefix}#top`, label: dict.nav.home },
    { href: `${prefix}#about`, label: dict.nav.about },
    {
      href: `${prefix}#services`,
      label: dict.nav.services,
      sub: [
        { href: `${prefix}#installation`, label: dict.services.items[0].title },
        { href: `${prefix}#repair`, label: dict.services.items[1].title },
        { href: `${prefix}#opener`, label: dict.services.items[2].title },
      ],
    },
    { href: `${prefix}#reviews`, label: dict.nav.reviews },
    { href: `${prefix}#work`, label: dict.nav.work },
    { href: `${prefix}#why`, label: dict.nav.why },
    { href: `${prefix}#faq`, label: dict.nav.faq },
    { href: `${prefix}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white shadow-sm">
      <nav
        className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-2 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-8 lg:py-3"
        aria-label="Main"
      >
        <div className="flex justify-start">
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-slate-200 p-2 text-brand-blue lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden flex-wrap items-center justify-center gap-1 justify-self-center lg:flex lg:gap-2">
          {links.map((l) => (
            <li key={l.label} className="relative group">
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

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/en"
            className={`text-xs font-bold ${locale === "en" ? "text-brand-gold-dark" : "text-slate-400"}`}
            hrefLang="en"
          >
            EN
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/es"
            className={`text-xs font-bold ${locale === "es" ? "text-brand-gold-dark" : "text-slate-400"}`}
            hrefLang="es"
          >
            ES
          </Link>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-slate-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="block py-2 font-bold text-brand-blue"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
                {l.sub && (
                  <ul className="ml-3 border-l-2 border-brand-gold/40 pl-3">
                    {l.sub.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block py-1.5 text-sm text-slate-700"
                          onClick={() => setOpen(false)}
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
        </div>
      )}
    </header>
  );
}
