import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePageContent } from "@/components/landing/HomePageContent";
import { PublicPageShell } from "@/components/landing/PublicPageShell";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { buildPublicMetadata } from "@/lib/public-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  return buildPublicMetadata(loc as Locale, "home");
}

export default async function Page({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const dict = getDictionary(locale);

  return (
    <PublicPageShell locale={locale} dict={dict} routeKey="home" localBusinessJsonLd>
      <HomePageContent locale={locale} dict={dict} />
    </PublicPageShell>
  );
}
