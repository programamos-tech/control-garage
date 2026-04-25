import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { SITE, whatsappHref } from "@/lib/site-config";

const IDS = ["installation", "repair", "opener"] as const;

/** Imágenes de referencia en `public/` por servicio (instalación · reparación · motor). */
const SERVICE_IMAGES = [
  "/male-with-red-shirt-making-window-with-industrial-tools.jpg",
  "/low-angle-people-working-with-drill.jpg",
  "/electrician-is-mounting-electric-sockets-white-wall-indoors.jpg",
] as const;

function waMessageForService(locale: Locale, serviceTitle: string) {
  if (locale === "es") {
    return `Hola ${SITE.name} — quiero información sobre: ${serviceTitle}`;
  }
  return `Hi ${SITE.name} — I'd like info about: ${serviceTitle}`;
}

type Props = { dict: Dictionary; locale: Locale };

export function ServicesSection({ dict, locale }: Props) {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 pb-20 pt-12 sm:pb-24 sm:pt-16"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-title"
          className="text-center text-3xl font-extrabold tracking-tight text-brand-blue sm:text-4xl"
        >
          {dict.services.title}
        </h2>
        <div className="mt-8 grid gap-8 sm:mt-10 md:grid-cols-3 md:gap-10">
          {dict.services.items.map((item, i) => (
            <article
              key={item.title}
              id={IDS[i]}
              className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="relative aspect-[16/11] w-full shrink-0 bg-slate-200">
                <Image
                  src={SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0]}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-xl font-bold text-brand-blue">{item.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
                <div className="mt-8 flex w-full justify-center">
                  <a
                    href={whatsappHref(
                      waMessageForService(locale, item.title),
                      dict.contact.whatsappLeadPrefix,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex max-w-full items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:brightness-110 active:brightness-95"
                  >
                    {item.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
