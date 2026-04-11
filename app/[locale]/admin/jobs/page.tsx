import { AdminDemoBanner } from "@/components/admin/AdminDemoBanner";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminTableShell } from "@/components/admin/AdminTableShell";
import { StatusPill } from "@/components/admin/StatusPill";
import { mockJobs } from "@/lib/admin-mock-data";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

function jobTone(s: (typeof mockJobs)[0]["status"]): "info" | "warning" | "success" | "muted" | "danger" {
  if (s === "scheduled") return "info";
  if (s === "in_progress") return "warning";
  if (s === "completed") return "success";
  if (s === "cancelled") return "muted";
  return "danger";
}

type Props = { params: Promise<{ locale: string }> };

export default async function AdminJobsPage({ params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const t = getAdminStrings(locale);
  const prefix = `/${locale}/admin`;

  return (
    <>
      <AdminPageHeader
        title={t.jobs.title}
        subtitle={t.jobs.subtitle}
        action={{ href: `${prefix}/jobs/new`, label: t.jobs.newJob }}
      />
      <AdminDemoBanner labels={t} />
      <AdminTableShell>
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">{t.jobs.table.client}</th>
              <th className="px-4 py-3">{t.jobs.table.type}</th>
              <th className="px-4 py-3">{t.jobs.table.date}</th>
              <th className="px-4 py-3">{t.jobs.table.window}</th>
              <th className="px-4 py-3">{t.jobs.table.tech}</th>
              <th className="px-4 py-3">{t.jobs.table.status}</th>
              <th className="px-4 py-3">{t.jobs.table.address}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockJobs.map((j) => (
              <tr key={j.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-3 font-semibold text-brand-blue">{j.client}</td>
                <td className="px-4 py-3 text-slate-800">{j.type}</td>
                <td className="px-4 py-3 tabular-nums text-slate-700">{j.date}</td>
                <td className="px-4 py-3 text-slate-600">{j.window}</td>
                <td className="px-4 py-3 text-slate-700">{j.tech}</td>
                <td className="px-4 py-3">
                  <StatusPill label={t.status.job[j.status]} tone={jobTone(j.status)} />
                </td>
                <td className="max-w-[200px] px-4 py-3 text-xs text-slate-600">{j.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminTableShell>
    </>
  );
}
