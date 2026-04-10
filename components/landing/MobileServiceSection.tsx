import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE, whatsappHref } from "@/lib/site-config";
import { ButtonCta } from "./ButtonCta";

type Props = { dict: Dictionary };

const sectionMinH = "min-h-[min(70vh,680px)]";

export function MobileServiceSection({ dict }: Props) {
  return (
    <section
      id="mobile-service"
      className={`relative isolate scroll-mt-24 overflow-hidden ${sectionMinH}`}
      aria-labelledby="mobile-service-title"
    >
      <Image
        src={SITE.serviceVanImage}
        alt={dict.mobileService.imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />
      {/* Continuidad con Contact + mapa; la parte alta queda bien cubierta para el copy */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-blue from-0% via-brand-blue/92 via-[10%] via-brand-blue/55 via-[26%] via-brand-blue/22 via-[42%] to-transparent to-[70%]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-blue/45 from-0% via-transparent via-[55%] to-transparent to-[100%]"
        aria-hidden
      />
      <div
        className={`relative z-10 mx-auto flex ${sectionMinH} max-w-7xl flex-col items-center justify-start px-4 pb-14 pt-4 text-center sm:px-6 sm:pb-16 sm:pt-6 lg:px-8 lg:pt-8`}
      >
        <div className="max-w-xl">
          <h2
            id="mobile-service-title"
            className="text-3xl font-extrabold tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            {dict.mobileService.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-white/95 [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] sm:mt-5 sm:text-lg">
            {dict.mobileService.sub}
          </p>
          <div className="mt-8 flex justify-center sm:mt-10">
            <ButtonCta href={whatsappHref(undefined, dict.contact.whatsappLeadPrefix)} external variant="solid">
              {dict.mobileService.cta}
            </ButtonCta>
          </div>
        </div>
      </div>
    </section>
  );
}
