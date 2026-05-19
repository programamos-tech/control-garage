import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MarketingPageContent } from "@/components/landing/MarketingPageContent";
import { PublicPageShell } from "@/components/landing/PublicPageShell";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { buildPublicMetadata } from "@/lib/public-metadata";
import {
  marketingStaticParams,
  routeKeyFromSlug,
} from "@/lib/public-routes";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return marketingStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc, slug } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const routeKey = routeKeyFromSlug(loc as Locale, slug);
  if (!routeKey) notFound();
  return buildPublicMetadata(loc as Locale, routeKey);
}

export default async function MarketingSlugPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const routeKey = routeKeyFromSlug(locale, slug);
  if (!routeKey) notFound();

  const dict = getDictionary(locale);
  const localBusinessJsonLd = routeKey === "contact";

  return (
    <PublicPageShell
      locale={locale}
      dict={dict}
      routeKey={routeKey}
      localBusinessJsonLd={localBusinessJsonLd}
    >
      <MarketingPageContent routeKey={routeKey} locale={locale} dict={dict} />
    </PublicPageShell>
  );
}
