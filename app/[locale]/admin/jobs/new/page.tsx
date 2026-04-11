import Link from "next/link";
import { AdminDemoBanner } from "@/components/admin/AdminDemoBanner";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AdminJobNewPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const t = getAdminStrings(locale);
  const input =
    "mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm read-only:bg-slate-50";

  return (
    <>
      <AdminPageHeader title={`${t.common.new} — ${t.jobs.newJob}`} />
      <AdminDemoBanner labels={t} />
      <div className="max-w-xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-700">
            {t.jobs.table.client}
            <input className={input} defaultValue="Martínez Residential" readOnly />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.jobs.table.type}
            <input className={input} defaultValue="Repair — spring inspection" readOnly />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.jobs.table.date}
            <input className={input} type="date" defaultValue="2026-04-15" readOnly />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.jobs.table.window}
            <input className={input} defaultValue="8:00 AM – 12:00 PM" readOnly />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.jobs.table.tech}
            <select className={input} defaultValue="Team A" disabled>
              <option>Team A</option>
              <option>Team B</option>
            </select>
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex cursor-not-allowed rounded-full bg-slate-200 px-5 py-2.5 text-sm font-bold text-slate-500">
            {t.common.save}
          </span>
          <Link href={`/${locale}/admin/jobs`} className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:bg-slate-50">
            {t.common.cancel}
          </Link>
        </div>
      </div>
    </>
  );
}
