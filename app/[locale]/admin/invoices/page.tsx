import { InvoicesAdminView } from "@/components/admin/InvoicesAdminView";
import { mockInvoices } from "@/lib/admin-mock-data";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AdminInvoicesPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const t = getAdminStrings(locale);

  return <InvoicesAdminView labels={t} invoices={mockInvoices} locale={locale} />;
}
