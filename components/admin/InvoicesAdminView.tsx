"use client";

import { useState } from "react";
import type { AdminStrings } from "@/lib/admin-i18n";
import type { MockInvoice } from "@/lib/admin-mock-data";
import { getModalCopy } from "@/lib/admin-modal-copy";
import type { Locale } from "@/lib/dictionaries";
import { formatUsd } from "@/lib/format-usd";
import { AdminDemoBanner } from "./AdminDemoBanner";
import { AdminPageHeader } from "./AdminPageHeader";
import { AdminTableShell } from "./AdminTableShell";
import { CreateInvoiceModal } from "./CreateInvoiceModal";
import { StatusPill } from "./StatusPill";

function invTone(s: MockInvoice["status"]): "success" | "warning" | "danger" {
  if (s === "paid") return "success";
  if (s === "pending") return "warning";
  return "danger";
}

type Props = { labels: AdminStrings; invoices: MockInvoice[]; locale: string };

export function InvoicesAdminView({ labels: t, invoices, locale }: Props) {
  const [open, setOpen] = useState(false);
  const m = getModalCopy(locale as Locale);

  return (
    <>
      <AdminPageHeader
        title={t.invoices.title}
        subtitle={t.invoices.subtitle}
        actionSlot={
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gold-mid px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-blue shadow-sm transition hover:brightness-105"
          >
            {t.common.new} — {t.invoices.newInvoice}
          </button>
        }
      />
      <AdminDemoBanner labels={t} />
      <AdminTableShell>
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">{t.invoices.table.number}</th>
              <th className="px-4 py-3">{t.invoices.table.client}</th>
              <th className="px-4 py-3">{t.invoices.table.total}</th>
              <th className="px-4 py-3">{t.invoices.table.status}</th>
              <th className="px-4 py-3">{t.invoices.table.issued}</th>
              <th className="px-4 py-3">{t.invoices.table.due}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-3 font-mono text-xs font-semibold text-brand-blue">{inv.number}</td>
                <td className="px-4 py-3 font-medium text-slate-800">{inv.client}</td>
                <td className="px-4 py-3 font-semibold tabular-nums">{formatUsd(inv.total)}</td>
                <td className="px-4 py-3">
                  <StatusPill label={t.status.invoice[inv.status]} tone={invTone(inv.status)} />
                </td>
                <td className="px-4 py-3 tabular-nums text-slate-600">{inv.issued}</td>
                <td className="px-4 py-3 tabular-nums text-slate-600">{inv.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminTableShell>
      <CreateInvoiceModal open={open} onClose={() => setOpen(false)} t={t} m={m.invoice} />
    </>
  );
}
