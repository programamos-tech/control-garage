import { ClientsAdminView } from "@/components/admin/ClientsAdminView";
import { mockClients } from "@/lib/admin-mock-data";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AdminClientsPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const t = getAdminStrings(locale);

  return <ClientsAdminView labels={t} clients={mockClients} locale={locale} />;
}
