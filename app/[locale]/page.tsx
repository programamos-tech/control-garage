import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/LandingPage";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale);
  return <LandingPage locale={locale as Locale} dict={dict} />;
}
