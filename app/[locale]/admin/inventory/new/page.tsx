import Link from "next/link";
import { AdminDemoBanner } from "@/components/admin/AdminDemoBanner";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AdminInventoryNewPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const t = getAdminStrings(locale);
  const input =
    "mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm read-only:bg-slate-50";

  return (
    <>
      <AdminPageHeader title={t.inventory.newItem} />
      <AdminDemoBanner labels={t} />
      <div className="max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-700">
            {t.inventory.table.sku}
            <input className={input} placeholder="SP-200-8x" readOnly />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.inventory.table.name}
            <input className={input} placeholder="Description" readOnly />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.inventory.table.qty}
            <input className={input} type="number" defaultValue={0} readOnly />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.inventory.table.location}
            <input className={input} defaultValue="Warehouse" readOnly />
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex cursor-not-allowed rounded-full bg-slate-200 px-5 py-2.5 text-sm font-bold text-slate-500">
            {t.common.save}
          </span>
          <Link href={`/${locale}/admin/inventory`} className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:bg-slate-50">
            {t.common.cancel}
          </Link>
        </div>
      </div>
    </>
  );
}
