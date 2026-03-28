import type { Dictionary, Locale } from "@/lib/dictionaries";
import { JsonLd } from "./JsonLd";
import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { ServicesSection } from "./ServicesSection";
import { BrandsSection } from "./BrandsSection";
import { ReviewsSection } from "./ReviewsSection";
import { WorkGallery } from "./WorkGallery";
import { WhySection } from "./WhySection";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

type Props = { locale: Locale; dict: Dictionary };

export function LandingPage({ locale, dict }: Props) {
  return (
    <>
      <JsonLd locale={locale} dict={dict} />
      <div id="top" className="flex min-h-screen flex-col">
        <TopBar dict={dict} locale={locale} />
        <MainNav dict={dict} locale={locale} />
        <main className="flex-1">
          <Hero dict={dict} locale={locale} />
          <AboutSection dict={dict} locale={locale} />
          <ServicesSection dict={dict} locale={locale} />
          <BrandsSection dict={dict} />
          <ReviewsSection dict={dict} />
          <WorkGallery dict={dict} />
          <WhySection dict={dict} />
          <FaqSection dict={dict} />
          <ContactSection dict={dict} />
        </main>
        <Footer dict={dict} locale={locale} />
      </div>
    </>
  );
}
