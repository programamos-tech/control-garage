import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { getSiteUrl, SITE } from "@/lib/site-config";

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

  const keywords =
    loc === "es"
      ? [
          "reparación de puertas de garaje orlando",
          "reparación puerta de garaje Orlando",
          "reparación garaje Orlando",
          "instalación puerta de garaje Orlando",
          "reemplazo puerta de garaje Orlando",
          "motor garaje Orlando",
          "Control Garage FL",
          "CONTROL GARAGE FL",
        ]
      : [
          "garage door repair orlando",
          "garage door repair",
          "garage door repair Orlando",
          "garage door installation Orlando",
          "garage door replacement Orlando",
          "garage door opener Orlando",
          "Control Garage FL",
          "CONTROL GARAGE FL",
        ];

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords,
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
      siteName: SITE.name,
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: [
        {
          url: "/logo_transparent.png",
          width: 512,
          height: 512,
          alt: "Control Garage FL logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: ["/logo_transparent.png"],
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
