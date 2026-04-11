"use client";

import { useState } from "react";
import type { AdminStrings } from "@/lib/admin-i18n";
import type { MockQuote } from "@/lib/admin-mock-data";
import { getModalCopy } from "@/lib/admin-modal-copy";
import type { Locale } from "@/lib/dictionaries";
import { formatUsd } from "@/lib/format-usd";
import { AdminDemoBanner } from "./AdminDemoBanner";
import { AdminPageHeader } from "./AdminPageHeader";
import { AdminTableShell } from "./AdminTableShell";
import { CreateQuoteModal } from "./CreateQuoteModal";
import { StatusPill } from "./StatusPill";

function quoteTone(s: MockQuote["status"]): "neutral" | "info" | "success" | "danger" {
  if (s === "draft") return "neutral";
  if (s === "sent") return "info";
  if (s === "accepted") return "success";
  return "danger";
}

type Props = { labels: AdminStrings; quotes: MockQuote[]; locale: string };

export function QuotesAdminView({ labels: t, quotes, locale }: Props) {
  const [open, setOpen] = useState(false);
  const m = getModalCopy(locale as Locale);

  return (
    <>
      <AdminPageHeader
        title={t.quotes.title}
        subtitle={t.quotes.subtitle}
        actionSlot={
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gold-mid px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-blue shadow-sm transition hover:brightness-105"
          >
            {t.common.new} — {t.quotes.newQuote}
          </button>
        }
      />
      <AdminDemoBanner labels={t} />
      <AdminTableShell>
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">{t.quotes.table.number}</th>
              <th className="px-4 py-3">{t.quotes.table.client}</th>
              <th className="px-4 py-3">{t.quotes.table.summary}</th>
              <th className="px-4 py-3">{t.quotes.table.total}</th>
              <th className="px-4 py-3">{t.quotes.table.status}</th>
              <th className="px-4 py-3">{t.quotes.table.date}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {quotes.map((q) => (
              <tr key={q.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-3 font-mono text-xs font-semibold text-brand-blue">{q.number}</td>
                <td className="px-4 py-3 font-medium text-slate-800">{q.client}</td>
                <td className="max-w-[220px] px-4 py-3 text-slate-600">{q.lineSummary}</td>
                <td className="px-4 py-3 font-semibold tabular-nums text-slate-900">{formatUsd(q.total)}</td>
                <td className="px-4 py-3">
                  <StatusPill label={t.status.quote[q.status]} tone={quoteTone(q.status)} />
                </td>
                <td className="px-4 py-3 tabular-nums text-slate-600">{q.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminTableShell>
      <CreateQuoteModal open={open} onClose={() => setOpen(false)} t={t} m={m.quote} />
    </>
  );
}
