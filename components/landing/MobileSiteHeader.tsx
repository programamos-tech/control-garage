"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { capitalizeFirstLetter } from "@/lib/capitalize-first-letter";
import { getMainNavLinks } from "@/lib/nav-links";
import { SITE, whatsappHref } from "@/lib/site-config";
import { ButtonCta } from "./ButtonCta";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SiteLogo } from "./SiteLogo";

type Props = { dict: Dictionary; locale: Locale };

const goldClip = "[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]";

export function MobileSiteHeader({ dict, locale }: Props) {
  const [open, setOpen] = useState(false);
  const links = getMainNavLinks(dict, locale);
  const primary = locale === "es" ? SITE.phones.es : SITE.phones.en;
  const secondary = locale === "es" ? SITE.phones.en : SITE.phones.es;
  const secondaryLabel = locale === "es" ? "English" : "Español";

  return (
    <header className="sticky top-0 z-50 lg:hidden">
      {/* Franja 1: marca + menú (estilo referencia 1A) */}
      <div className="flex min-h-[4rem] items-stretch overflow-hidden bg-brand-blue shadow-[0_1px_0_rgba(255,255,255,0.06)] sm:min-h-[4.25rem]">
        <a
          href="#top"
          className={`relative flex w-[min(54vw,16.5rem)] max-w-[280px] shrink-0 items-center justify-center bg-brand-gold-mid px-3 py-2.5 sm:w-[min(48vw,18rem)] sm:py-3 ${goldClip} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40`}
        >
          <SiteLogo
            size="nav"
            priority
            onGold
            className="!h-12 !max-h-12 max-w-[min(200px,50vw)] sm:!h-14 sm:!max-h-14 sm:max-w-[min(220px,46vw)]"
          />
        </a>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 pr-2 sm:gap-2 sm:pr-3">
          <div className="shrink-0">
            <LanguageSwitcher locale={locale} size="navBar" />
          </div>
          <button
            type="button"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white transition hover:bg-white/10 active:bg-white/15 sm:h-[3.25rem] sm:w-[3.25rem]"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-site-nav"
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Franja 2: blanca, poco texto + teléfono + CTA */}
      <div className="border-b border-slate-200/90 bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="line-clamp-1 text-[11px] font-medium leading-tight text-slate-500 sm:text-xs">
              {capitalizeFirstLetter(dict.topBar.rated)}
            </p>
            <a
              href={`tel:${primary.tel.replace(/\s/g, "")}`}
              className="mt-1 block text-lg font-extrabold leading-none tracking-tight text-brand-blue tabular-nums sm:text-xl"
            >
              {primary.display}
            </a>
            <a
              href={`tel:${secondary.tel.replace(/\s/g, "")}`}
              className="mt-1 inline-block text-[11px] font-medium text-slate-400 underline-offset-2 hover:text-brand-blue hover:underline"
            >
              {secondaryLabel} · {secondary.display}
            </a>
          </div>
          <ButtonCta
            href={whatsappHref(undefined, dict.contact.whatsappLeadPrefix)}
            external
            size="compact"
            variant="solid"
            className="max-w-[min(11rem,42vw)] shrink-0 scale-95 py-2 text-[9px] sm:max-w-none sm:scale-100 sm:text-[10px]"
          >
            {dict.topBar.cta}
          </ButtonCta>
        </div>
      </div>

      {open && (
        <div
          id="mobile-site-nav"
          className="max-h-[min(70vh,calc(100dvh-8rem))] overflow-y-auto border-b border-slate-200 bg-white px-4 pb-5 shadow-lg"
        >
          <ul className="flex flex-col gap-0.5 pt-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="block rounded-lg py-2.5 pl-1 text-[15px] font-bold text-brand-blue transition hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
                {l.sub && (
                  <ul className="ml-3 border-l-2 border-brand-gold-mid/40 pl-3">
                    {l.sub.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block py-1.5 text-sm font-medium text-slate-600"
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
