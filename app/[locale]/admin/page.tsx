import { AdminDemoBanner } from "@/components/admin/AdminDemoBanner";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { mockDashboard } from "@/lib/admin-mock-data";
import { getAdminStrings } from "@/lib/admin-i18n";
import { formatUsd } from "@/lib/format-usd";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AdminDashboardPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const t = getAdminStrings(loc as Locale);
  const d = mockDashboard;

  const cards = [
    { label: t.dashboard.revenueMtd, value: formatUsd(d.revenueMtd), tone: "bg-emerald-50 text-emerald-900 border-emerald-200" },
    { label: t.dashboard.openQuotes, value: String(d.openQuotes), tone: "bg-sky-50 text-sky-900 border-sky-200" },
    { label: t.dashboard.overdueInv, value: String(d.overdueInvoices), tone: "bg-rose-50 text-rose-900 border-rose-200" },
    { label: t.dashboard.jobsWeek, value: String(d.jobsThisWeek), tone: "bg-amber-50 text-amber-900 border-amber-200" },
  ];

  return (
    <>
      <AdminPageHeader title={t.dashboard.title} />
      <AdminDemoBanner labels={t} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.label}
            className={`rounded-xl border px-4 py-5 shadow-sm ${c.tone}`}
          >
            <p className="text-xs font-bold uppercase tracking-wide opacity-80">{c.label}</p>
            <p className="mt-2 text-2xl font-extrabold tabular-nums">{c.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.dashboard.activity}</h2>
        <ul className="mt-4 divide-y divide-slate-100">
          {d.recentActivity.map((a) => (
            <li key={a.id} className="flex flex-col gap-0.5 py-3 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-medium text-slate-800">{a.text}</span>
              <span className="shrink-0 text-xs tabular-nums text-slate-500">{a.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
