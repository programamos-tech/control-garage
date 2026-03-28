import type { Dictionary } from "@/lib/dictionaries";
import { SITE, whatsappHref } from "@/lib/site-config";
import { ButtonCta } from "./ButtonCta";

type Props = { dict: Dictionary };

export function ContactSection({ dict }: Props) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-brand-blue py-16 text-white"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 id="contact-title" className="text-3xl font-extrabold sm:text-4xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-white/85">{dict.contact.sub}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a
              href={`tel:${SITE.phones.en.tel.replace(/\s/g, "")}`}
              className="block rounded-xl border-l-4 border-sky-400 bg-white/10 p-4 ring-1 ring-white/10 transition hover:bg-white/[0.14]"
            >
              <div className="flex items-center gap-2">
                <span className="rounded border border-sky-300/50 bg-sky-500/25 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-sky-100">
                  EN
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-sky-100/90">
                  {dict.contact.callEn}
                </span>
              </div>
              <span className="mt-2 block text-2xl font-extrabold text-white hover:text-sky-100">
                {SITE.phones.en.display}
              </span>
            </a>
            <a
              href={`tel:${SITE.phones.es.tel.replace(/\s/g, "")}`}
              className="block rounded-xl border-l-4 border-brand-gold bg-brand-gold/15 p-4 ring-1 ring-brand-gold/30 transition hover:bg-brand-gold/25"
            >
              <div className="flex items-center gap-2">
                <span className="rounded border border-brand-gold-light/70 bg-brand-gold/35 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-gold-light">
                  ES
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-brand-gold-light">
                  {dict.contact.callEs}
                </span>
              </div>
              <span className="mt-2 block text-2xl font-extrabold text-white hover:text-brand-gold-light">
                {SITE.phones.es.display}
              </span>
            </a>
          </div>
          <div className="mt-6">
            <ButtonCta href={whatsappHref()} external>
              {dict.contact.whatsapp}
            </ButtonCta>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-xl">
          <iframe
            title="Control Garage on Google Maps"
            src={SITE.mapEmbedUrl}
            className="h-[min(420px,60vh)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-4">
            <a
              href={SITE.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-brand-gold-light hover:underline"
            >
              {dict.contact.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
