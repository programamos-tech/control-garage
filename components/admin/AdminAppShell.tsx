"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/dictionaries";
import type { AdminStrings } from "@/lib/admin-i18n";

/** Logo en blanco sobre fondo azul marca (silueta clara + sombra suave) */
const logoWhiteOnBlue =
  "[filter:brightness(0)_invert(1)_drop-shadow(0_1px_2px_rgba(0,0,0,0.35))]";

type Props = {
  locale: Locale;
  labels: AdminStrings;
  children: React.ReactNode;
};

const navKeys = [
  { href: "", key: "dashboard" as const },
  { href: "clients", key: "clients" as const },
  { href: "quotes", key: "quotes" as const },
  { href: "invoices", key: "invoices" as const },
  { href: "jobs", key: "jobs" as const },
  { href: "inventory", key: "inventory" as const },
  { href: "reports", key: "reports" as const },
];

export function AdminAppShell({ locale, labels, children }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const base = `/${locale}/admin`;
  const otherLocale = locale === "es" ? "en" : "es";
  const otherPath = pathname.replace(`/${locale}/`, `/${otherLocale}/`);

  const isActive = (segment: string) => {
    if (segment === "") return pathname === base || pathname === `${base}/`;
    return pathname === `${base}/${segment}` || pathname.startsWith(`${base}/${segment}/`);
  };

  const NavLinks = (
    <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
      {navKeys.map(({ href, key }) => {
        const fullHref = href ? `${base}/${href}` : base;
        const active = isActive(href);
        return (
          <Link
            key={key}
            href={fullHref}
            onClick={() => setMobileOpen(false)}
            className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
              active
                ? "bg-brand-gold-mid text-brand-blue"
                : "text-white/90 hover:bg-white/10 hover:text-white"
            }`}
          >
            {labels.nav[key]}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Mobile overlay */}
      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 flex w-64 flex-col border-r border-white/10 bg-brand-blue text-white shadow-xl transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="border-b border-white/10 px-4 py-5">
          <Link href={`/${locale}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue" title={labels.backToSite}>
            <div className="flex justify-center">
              <Image
                src="/logo_transparent.png"
                alt={`${labels.appName} — ${labels.appSubtitle}`}
                width={400}
                height={120}
                priority
                className={`h-14 w-auto max-w-full object-contain object-center sm:h-16 ${logoWhiteOnBlue}`}
              />
            </div>
            <p className="mt-4 text-center text-lg font-extrabold leading-tight tracking-tight text-white">{labels.sidebarHeading}</p>
            <p className="mt-1 text-center text-[11px] leading-snug text-white/70">{labels.appSubtitle}</p>
          </Link>
        </div>
        {NavLinks}
        <div className="mt-auto border-t border-white/10 p-3">
          <Link
            href={`/${locale}`}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
          >
            ← {labels.backToSite}
          </Link>
          <Link
            href={otherPath}
            className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
          >
            {labels.localeSwitch}
          </Link>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-6">
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-brand-blue hover:bg-slate-100 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-brand-blue">{labels.sidebarHeading}</p>
            <p className="truncate text-xs text-slate-500">{labels.appSubtitle}</p>
          </div>
          <span className="hidden rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-900 sm:inline">
            Demo
          </span>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
