"use client";

import { useState } from "react";
import type { AdminStrings } from "@/lib/admin-i18n";
import type { MockClient } from "@/lib/admin-mock-data";
import { getModalCopy } from "@/lib/admin-modal-copy";
import type { Locale } from "@/lib/dictionaries";
import { AdminDemoBanner } from "./AdminDemoBanner";
import { AdminPageHeader } from "./AdminPageHeader";
import { AdminTableShell } from "./AdminTableShell";
import { CreateClientModal } from "./CreateClientModal";

type Props = { labels: AdminStrings; clients: MockClient[]; locale: string };

export function ClientsAdminView({ labels: t, clients, locale }: Props) {
  const [open, setOpen] = useState(false);
  const m = getModalCopy(locale as Locale);

  return (
    <>
      <AdminPageHeader
        title={t.clients.title}
        subtitle={t.clients.subtitle}
        actionSlot={
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gold-mid px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-blue shadow-sm transition hover:brightness-105"
          >
            {t.common.new} — {t.clients.newClient}
          </button>
        }
      />
      <AdminDemoBanner labels={t} />
      <AdminTableShell>
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">{t.clients.table.name}</th>
              <th className="px-4 py-3">{t.clients.table.phone}</th>
              <th className="px-4 py-3">{t.clients.table.email}</th>
              <th className="px-4 py-3">{t.clients.table.city}</th>
              <th className="px-4 py-3">{t.clients.table.since}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {clients.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-3 font-semibold text-brand-blue">{c.name}</td>
                <td className="px-4 py-3 tabular-nums text-slate-700">{c.phone}</td>
                <td className="px-4 py-3 text-slate-600">{c.email}</td>
                <td className="px-4 py-3 text-slate-700">
                  {c.address}
                  <br />
                  <span className="text-xs text-slate-500">{c.city}</span>
                </td>
                <td className="px-4 py-3 tabular-nums text-slate-600">{c.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminTableShell>
      <CreateClientModal open={open} onClose={() => setOpen(false)} t={t} m={m.client} />
    </>
  );
}
