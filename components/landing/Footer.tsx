import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";
import { SiteLogo } from "./SiteLogo";

type Props = { dict: Dictionary; locale: Locale };

export function Footer({ dict, locale }: Props) {
  const year = new Date().getFullYear();
  const prefix = `/${locale}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 py-12 text-sm text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:px-8">
        <Link
          href={`${prefix}#top`}
          className="inline-flex shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30 focus-visible:ring-offset-2"
        >
          <SiteLogo size="footer" />
        </Link>
        <div className="min-w-0 flex-1 text-center lg:text-left">
          <p className="font-bold text-brand-blue">{SITE.name}</p>
          <p className="mt-1">
            © {year} {SITE.name}. {dict.footer.rights}
          </p>
          <p className="mt-2 max-w-md lg:mx-0 mx-auto">{dict.footer.areas}</p>
        </div>
        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none lg:w-auto lg:items-end">
          <a
            href={`${prefix}#contact`}
            className="text-center text-sm font-semibold text-brand-blue hover:underline lg:text-right"
          >
            {dict.nav.contact}
          </a>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-end">
            <a
              href={`tel:${SITE.phones.en.tel.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-lg border-l-4 border-sky-500 bg-white px-3 py-2.5 text-brand-blue shadow-sm ring-1 ring-slate-200/80 transition hover:bg-sky-50/80"
            >
              <span className="rounded bg-sky-600 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                EN
              </span>
              <span className="font-bold">{SITE.phones.en.display}</span>
            </a>
            <a
              href={`tel:${SITE.phones.es.tel.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 px-3 py-2.5 text-brand-blue shadow-sm ring-1 ring-brand-gold/35 transition hover:bg-brand-gold/20"
            >
              <span className="rounded bg-brand-gold px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-blue">
                ES
              </span>
              <span className="font-bold">{SITE.phones.es.display}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
