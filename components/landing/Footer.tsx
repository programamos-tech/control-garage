import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";
import { SiteLogo } from "./SiteLogo";

type Props = { dict: Dictionary; locale: Locale };

const serviceIds = ["installation", "repair", "opener"] as const;

/** Bisel más tendido que el navbar (92%) — diagonal más suave / “más acostada” */
const footerGoldClip = "[clip-path:polygon(0_0,100%_0,72%_100%,0_100%)]";

export function Footer({ dict, locale }: Props) {
  const year = new Date().getFullYear();
  const prefix = `/${locale}`;

  const serviceLinks = dict.services.items.map((item, i) => ({
    href: `${prefix}#${serviceIds[i]}`,
    label: item.title,
  }));

  const quickLinks = [
    { href: `${prefix}#reviews`, label: dict.nav.reviews },
    { href: `${prefix}#work`, label: dict.nav.work },
    { href: `${prefix}#faq`, label: dict.nav.faq },
  ];

  return (
    <footer
      id="about"
      className="scroll-mt-24 flex flex-col text-sm text-white/90 shadow-[0_-8px_32px_rgba(0,0,0,0.12)]"
    >
      <div className="flex min-w-0 flex-1 flex-row items-stretch overflow-hidden bg-brand-blue">
        {/* Mismo tratamiento que el bloque logo del navbar: ancho responsive + bisel + logo size="top" */}
        <Link
          href={`${prefix}#top`}
          className={`relative flex w-[min(58vw,18rem)] max-w-[300px] shrink-0 items-center justify-center self-stretch bg-brand-gold-mid px-4 py-10 sm:w-[min(50vw,21rem)] sm:max-w-[340px] sm:py-12 sm:px-5 lg:w-[clamp(15rem,38vw,28rem)] lg:px-6 lg:py-14 xl:w-[min(32rem,42vw)] ${footerGoldClip} focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-gold-mid`}
        >
          {/* Corrección óptica: el clip diagonal recorta a la derecha; sin esto el logo queda “corrido” */}
          <span className="inline-flex max-w-full -translate-x-[clamp(0.75rem,5vw,2.25rem)] sm:-translate-x-[clamp(0.5rem,4vw,2rem)] lg:-translate-x-[clamp(0.5rem,3.5vw,1.75rem)]">
            <SiteLogo size="footer" onGold />
          </span>
        </Link>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-brand-blue px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* About + contacto (logo en franja dorada) */}
          <div className="min-w-0 text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-wide text-white/95">{dict.nav.about}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{dict.about.body}</p>

            <h3 className="mt-8 text-xs font-bold uppercase tracking-wider text-white/95">
              {dict.footer.contactHeading}
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`tel:${SITE.phones.en.tel.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 text-white transition hover:text-sky-100 md:justify-start"
              >
                <span className="text-[10px] font-bold uppercase text-sky-300">EN</span>
                <span className="font-semibold tabular-nums">{SITE.phones.en.display}</span>
              </a>
              <a
                href={`tel:${SITE.phones.es.tel.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 text-white transition hover:text-brand-gold-light md:justify-start"
              >
                <span className="text-[10px] font-bold uppercase text-brand-gold-mid">ES</span>
                <span className="font-semibold tabular-nums">{SITE.phones.es.display}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="text-white/90 underline-offset-2 transition hover:text-white hover:underline">
                {SITE.email}
              </a>
            </div>
            <p className="mt-6 text-xs leading-snug text-white/55">{dict.footer.addressLine}</p>
          </div>

          {/* Por qué nosotros */}
          <div className="min-w-0 text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/95">
              {dict.footer.whyUsHeading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-left text-sm text-white/80">
              {dict.footer.whyUsItems.map((line, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 text-brand-gold-mid" aria-hidden>
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios + enlaces */}
          <div className="min-w-0 text-center md:col-span-2 md:text-left lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/95">
              {dict.footer.columnServices}
            </h3>
            <ul className="mt-4 space-y-2 text-left">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-start gap-2 text-sm text-white/85 transition hover:text-brand-gold-mid"
                  >
                    <span className="mt-1 shrink-0 text-brand-gold-mid" aria-hidden>
                      ›
                    </span>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-start gap-2 text-sm text-white/85 transition hover:text-brand-gold-mid"
                  >
                    <span className="mt-1 shrink-0 text-brand-gold-mid" aria-hidden>
                      ›
                    </span>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className="mx-auto mt-12 w-full max-w-7xl border-t border-white/15 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-white/55 sm:flex-row sm:text-left">
              <p>
                © {year} {SITE.name}. {dict.footer.rights}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
                <span className="text-white/45">{dict.footer.privacy}</span>
                <Link
                  href={`${prefix}/admin`}
                  className="text-white/70 transition hover:text-white hover:underline"
                >
                  {dict.footer.adminPortal}
                </Link>
                <Link
                  href={`${prefix}#contact`}
                  className="font-semibold text-brand-gold-mid transition hover:text-brand-gold-light hover:underline"
                >
                  {dict.nav.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
