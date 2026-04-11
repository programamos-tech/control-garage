import { AdminDemoBanner } from "@/components/admin/AdminDemoBanner";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AdminReportsPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const t = getAdminStrings(loc as Locale);

  return (
    <>
      <AdminPageHeader title={t.reports.title} subtitle={t.reports.subtitle} />
      <AdminDemoBanner labels={t} />
      <div className="flex min-h-[280px] items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
        <p className="max-w-md text-sm">{t.reports.placeholder}</p>
      </div>
    </>
  );
}
