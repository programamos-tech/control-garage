import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { getSiteUrl } from "@/lib/site-config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const dict = getDictionary(loc);
  const base = getSiteUrl();

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: loc === "en" ? `${base}/en` : `${base}/es`,
      languages: {
        en: `${base}/en`,
        es: `${base}/es`,
        "x-default": `${base}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: loc === "es" ? "es_US" : "en_US",
      alternateLocale: loc === "es" ? ["en_US"] : ["es_US"],
      url: loc === "en" ? `${base}/en` : `${base}/es`,
      siteName: "Control Garage",
      title: dict.meta.ogTitle,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return children;
}
