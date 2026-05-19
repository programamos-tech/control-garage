import type { Dictionary, Locale } from "@/lib/dictionaries";
import { FaqJsonLd } from "./FaqJsonLd";
import { Hero } from "./Hero";
import { ServicesSection } from "./ServicesSection";
import { BrandsSection } from "./BrandsSection";
import { ReviewsSection } from "./ReviewsSection";
import { WorkGallery } from "./WorkGallery";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { MobileServiceSection } from "./MobileServiceSection";

type Props = { locale: Locale; dict: Dictionary };

/** Landing completa en inicio — mismas secciones que antes (anclas #services, #reviews, etc.). */
export function HomePageContent({ locale, dict }: Props) {
  return (
    <>
      <FaqJsonLd dict={dict} />
      <Hero dict={dict} locale={locale} />
      <ServicesSection dict={dict} locale={locale} />
      <BrandsSection dict={dict} />
      <ReviewsSection dict={dict} />
      <WorkGallery dict={dict} locale={locale} />
      <FaqSection dict={dict} />
      <ContactSection dict={dict} />
      <MobileServiceSection dict={dict} />
    </>
  );
}
