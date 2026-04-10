import type { Dictionary } from "@/lib/dictionaries";
import { capitalizeFirstLetter } from "@/lib/capitalize-first-letter";
import { SITE, whatsappHref } from "@/lib/site-config";
import { ButtonCta } from "./ButtonCta";
import { SiteLogo } from "./SiteLogo";

type Props = { dict: Dictionary };

/** Bisel dorado: vértice inferior derecho hacia el centro. */
const goldClip = "[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]";

function RatedBlock({ text }: { text: string }) {
  const line = capitalizeFirstLetter(text);
  return (
    <p className="line-clamp-1 min-w-0 px-2 text-center text-[13px] font-semibold leading-snug tracking-tight text-white/95 sm:text-sm xl:text-[0.95rem]">
      {line}
    </p>
  );
}

export function TopBar({ dict }: Props) {
  return (
    <div className="relative z-50 hidden bg-brand-blue text-white lg:block">
      <div className="flex min-h-[3.75rem] items-stretch sm:min-h-[4rem] xl:min-h-[4.25rem]">
        <a
          href="#top"
          className={`relative flex w-[clamp(13rem,34vw,24rem)] shrink-0 items-center justify-center bg-brand-gold-mid px-4 py-2 sm:px-6 sm:py-2.5 xl:w-[min(26rem,38vw)] ${goldClip} focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-gold-mid`}
        >
          <SiteLogo
            size="top"
            priority
            onGold
            className="max-h-[52px] sm:max-h-[60px] xl:max-h-[68px]"
          />
        </a>

        <div className="flex min-h-0 min-w-0 flex-1 items-stretch">
          <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-6 py-2 sm:gap-4 sm:py-2 lg:gap-5 lg:px-8 xl:gap-6 xl:py-2.5">
            <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center">
              <RatedBlock text={dict.topBar.rated} />
            </div>

            <div className="flex shrink-0 flex-col items-center gap-0.5 px-2 sm:px-3">
              <a
                href={`tel:${SITE.phones.en.tel.replace(/\s/g, "")}`}
                className="block whitespace-nowrap text-center text-xs font-extrabold tracking-tight text-white tabular-nums hover:text-sky-100 sm:text-sm xl:text-base"
              >
                <span className="mr-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50">EN</span>
                {SITE.phones.en.display}
              </a>
              <a
                href={`tel:${SITE.phones.es.tel.replace(/\s/g, "")}`}
                className="block whitespace-nowrap text-center text-xs font-extrabold tracking-tight text-white tabular-nums hover:text-brand-gold-light sm:text-sm xl:text-base"
              >
                <span className="mr-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50">ES</span>
                {SITE.phones.es.display}
              </a>
            </div>

            <ButtonCta
              href={whatsappHref(undefined, dict.contact.whatsappLeadPrefix)}
              external
              size="compact"
              variant="solid"
              className="shrink-0 !py-1.5 sm:!py-2 [&_span:last-child]:!h-6 [&_span:last-child]:!w-6 [&_svg]:!h-3 [&_svg]:!w-3"
            >
              {dict.topBar.cta}
            </ButtonCta>
          </div>
        </div>
      </div>
    </div>
  );
}
