import type { Dictionary, Locale } from "@/lib/dictionaries";
import { JsonLd } from "./JsonLd";
import { MobileSiteHeader } from "./MobileSiteHeader";
import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";
import { Hero } from "./Hero";
import { ServicesSection } from "./ServicesSection";
import { BrandsSection } from "./BrandsSection";
import { ReviewsSection } from "./ReviewsSection";
import { WorkGallery } from "./WorkGallery";
import { MobileServiceSection } from "./MobileServiceSection";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { FloatingWhatsappButton } from "./FloatingWhatsappButton";

type Props = { locale: Locale; dict: Dictionary };

export function LandingPage({ locale, dict }: Props) {
  return (
    <>
      <JsonLd locale={locale} dict={dict} />
      <div id="top" className="flex min-h-screen flex-col">
        <MobileSiteHeader dict={dict} locale={locale} />
        <TopBar dict={dict} />
        <MainNav dict={dict} locale={locale} />
        <main className="flex-1">
          <Hero dict={dict} locale={locale} />
          <ServicesSection dict={dict} locale={locale} />
          <BrandsSection dict={dict} />
          <ReviewsSection dict={dict} />
          <WorkGallery dict={dict} locale={locale} />
          <FaqSection dict={dict} />
          <ContactSection dict={dict} />
          <MobileServiceSection dict={dict} />
        </main>
        <Footer dict={dict} locale={locale} />
        <FloatingWhatsappButton
          ariaLabel={dict.contact.whatsappFabAria}
          whatsappLeadPrefix={dict.contact.whatsappLeadPrefix}
        />
      </div>
    </>
  );
}
