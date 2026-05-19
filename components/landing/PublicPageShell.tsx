import type { Dictionary, Locale } from "@/lib/dictionaries";
import type { PublicRouteKey } from "@/lib/public-routes";
import { LocalBusinessJsonLd } from "./LocalBusinessJsonLd";
import { MobileSiteHeader } from "./MobileSiteHeader";
import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import { FloatingWhatsappButton } from "./FloatingWhatsappButton";
import { ScrollRevealInit } from "./ScrollRevealInit";

type Props = {
  locale: Locale;
  dict: Dictionary;
  routeKey: PublicRouteKey;
  children: React.ReactNode;
  /** Incluir JSON-LD de negocio local (home y contacto). */
  localBusinessJsonLd?: boolean;
};

export function PublicPageShell({
  locale,
  dict,
  routeKey,
  children,
  localBusinessJsonLd = false,
}: Props) {
  return (
    <>
      {localBusinessJsonLd && <LocalBusinessJsonLd locale={locale} dict={dict} />}
      <ScrollRevealInit />
      <div id="top" className="flex min-h-screen flex-col">
        <div className="site-header-enter">
          <MobileSiteHeader dict={dict} locale={locale} />
          <TopBar dict={dict} locale={locale} />
          <MainNav dict={dict} locale={locale} />
        </div>
        <main className="flex-1">{children}</main>
        <Footer dict={dict} locale={locale} />
        <FloatingWhatsappButton
          ariaLabel={dict.contact.whatsappFabAria}
          whatsappLeadPrefix={dict.contact.whatsappLeadPrefix}
        />
      </div>
    </>
  );
}
