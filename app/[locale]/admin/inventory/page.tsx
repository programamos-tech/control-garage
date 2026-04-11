import { AdminDemoBanner } from "@/components/admin/AdminDemoBanner";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminTableShell } from "@/components/admin/AdminTableShell";
import { mockInventory } from "@/lib/admin-mock-data";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AdminInventoryPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const t = getAdminStrings(locale);
  const prefix = `/${locale}/admin`;

  return (
    <>
      <AdminPageHeader
        title={t.inventory.title}
        subtitle={t.inventory.subtitle}
        action={{ href: `${prefix}/inventory/new`, label: t.inventory.newItem }}
      />
      <AdminDemoBanner labels={t} />
      <AdminTableShell>
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">{t.inventory.table.sku}</th>
              <th className="px-4 py-3">{t.inventory.table.name}</th>
              <th className="px-4 py-3">{t.inventory.table.qty}</th>
              <th className="px-4 py-3">{t.inventory.table.reorder}</th>
              <th className="px-4 py-3">{t.inventory.table.location}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockInventory.map((row) => {
              const low = row.qty <= row.reorderAt;
              return (
                <tr key={row.sku} className={low ? "bg-amber-50/60" : "hover:bg-slate-50/80"}>
                  <td className="px-4 py-3 font-mono text-xs font-bold text-brand-blue">{row.sku}</td>
                  <td className="px-4 py-3 text-slate-800">{row.name}</td>
                  <td className="px-4 py-3 tabular-nums font-semibold text-slate-900">{row.qty}</td>
                  <td className="px-4 py-3 tabular-nums text-slate-600">{row.reorderAt}</td>
                  <td className="px-4 py-3 text-slate-600">{row.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </AdminTableShell>
    </>
  );
}
