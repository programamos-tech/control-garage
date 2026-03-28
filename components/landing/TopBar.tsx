import type { Dictionary, Locale } from "@/lib/dictionaries";
import { SITE, whatsappHref } from "@/lib/site-config";
import { ButtonCta } from "./ButtonCta";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SiteLogo } from "./SiteLogo";

type Props = { dict: Dictionary; locale: Locale };

const goldClip = "[clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]";

export function TopBar({ dict, locale }: Props) {
  return (
    <div className="relative z-50 hidden bg-brand-blue text-white lg:block">
      <div className="flex min-h-[4rem] items-stretch xl:min-h-[4.5rem]">
        <div
          className={`relative flex w-[min(100%,200px)] shrink-0 items-center justify-start gap-2 bg-brand-gold py-1 pl-3 pr-4 text-brand-blue sm:min-w-[132px] sm:max-w-[200px] md:max-w-[220px] xl:w-[20%] xl:min-w-[160px] xl:max-w-[240px] xl:pl-4 xl:pr-5 ${goldClip}`}
        >
          <a
            href={`#top`}
            className="flex min-w-0 items-center py-0.5 font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-gold"
          >
            <SiteLogo
              size="top"
              priority
              className="drop-shadow-[0_2px_12px_rgba(12,39,72,0.18)]"
            />
          </a>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 px-3 py-2 sm:gap-2 sm:px-4 md:px-5 xl:flex-row xl:flex-nowrap xl:items-center xl:gap-3 xl:overflow-x-auto xl:overscroll-x-contain xl:py-2.5 xl:[-ms-overflow-style:none] xl:[scrollbar-width:none] xl:px-6 xl:[&::-webkit-scrollbar]:hidden">
          <p className="w-full min-w-0 text-[11px] font-medium leading-snug text-white/95 line-clamp-2 sm:text-xs md:text-sm xl:w-auto xl:flex-1 xl:basis-0 xl:leading-normal xl:line-clamp-1">
            {dict.topBar.rated}
          </p>
          <div className="flex w-full min-w-0 flex-wrap content-center items-center justify-end gap-x-2 gap-y-2 sm:gap-x-2.5 md:gap-x-3 xl:ml-auto xl:w-auto xl:flex-nowrap xl:shrink-0">
            <LanguageSwitcher locale={locale} dense />
            <span className="shrink-0 whitespace-nowrap text-[9px] font-semibold uppercase leading-tight tracking-wide text-white/65 sm:text-[10px]">
              {dict.topBar.callToday}
            </span>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="shrink-0 rounded border border-sky-400/50 bg-sky-500/20 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-sky-100 sm:px-2 sm:text-[10px]">
                EN
              </span>
              <a
                href={`tel:${SITE.phones.en.tel.replace(/\s/g, "")}`}
                className="whitespace-nowrap text-xs font-extrabold tracking-tight text-white hover:text-sky-100 sm:text-sm md:text-base xl:text-base"
              >
                {SITE.phones.en.display}
              </a>
            </div>
            <span className="hidden h-5 w-px shrink-0 bg-white/25 sm:block" aria-hidden />
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="shrink-0 rounded border border-brand-gold-light/60 bg-brand-gold/25 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-brand-gold-light sm:px-2 sm:text-[10px]">
                ES
              </span>
              <a
                href={`tel:${SITE.phones.es.tel.replace(/\s/g, "")}`}
                className="whitespace-nowrap text-xs font-extrabold tracking-tight text-white hover:text-brand-gold-light sm:text-sm md:text-base xl:text-base"
              >
                {SITE.phones.es.display}
              </a>
            </div>
            <ButtonCta
              href={whatsappHref()}
              external
              size="compact"
              className="shrink-0 sm:max-xl:shrink-0"
            >
              {dict.topBar.cta}
            </ButtonCta>
          </div>
        </div>
      </div>
    </div>
  );
}
