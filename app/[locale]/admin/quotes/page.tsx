import { QuotesAdminView } from "@/components/admin/QuotesAdminView";
import { mockQuotes } from "@/lib/admin-mock-data";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AdminQuotesPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const t = getAdminStrings(locale);

  return <QuotesAdminView labels={t} quotes={mockQuotes} locale={locale} />;
}
