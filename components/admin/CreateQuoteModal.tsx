"use client";

import type { AdminStrings } from "@/lib/admin-i18n";
import type { AdminModalCopy } from "@/lib/admin-modal-copy";
import { formatUsd } from "@/lib/format-usd";
import { AdminModalFrame } from "./AdminModalFrame";
import { adminReadonlyField, adminSectionTitle, adminSubsection } from "./field-styles";

type Props = {
  open: boolean;
  onClose: () => void;
  t: AdminStrings;
  m: AdminModalCopy["quote"];
};

const DEMO_LINES = [
  { desc: "Clopay Canyon Ridge 16×7 insulated", sku: "CLP-167-RD", qty: 1, unit: 2100, line: 2100 },
  { desc: "LiftMaster 87504-267 belt Wi-Fi", sku: "LM-87504", qty: 1, unit: 580, line: 580 },
  { desc: "Disposal / haul-away existing door", sku: "LAB-DISP", qty: 1, unit: 120, line: 120 },
  { desc: "Labor — install & programming (8h est.)", sku: "LAB-INST", qty: 8, unit: 95, line: 760 },
];

export function CreateQuoteModal({ open, onClose, t, m }: Props) {
  const subtotal = DEMO_LINES.reduce((s, r) => s + r.line, 0);
  const discount = 150;
  const tax = Math.round((subtotal - discount) * 0.065);
  const total = subtotal - discount + tax;

  const footer = (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-slate-500">{m.signatureHint}</p>
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-slate-300 px-5 py-2.5 text-sm font-bold text-slate-600">
          {t.common.save}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        >
          {t.common.cancel}
        </button>
      </div>
    </div>
  );

  return (
    <AdminModalFrame
      open={open}
      onClose={onClose}
      title={t.forms.quoteNewTitle}
      subtitle={m.subtitle}
      footer={footer}
    >
      <div className="space-y-8">
        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionHeader}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="block text-sm font-semibold text-slate-700">
              {m.quoteNumber}
              <input className={adminReadonlyField} readOnly defaultValue="CG-Q-2026-0150 (preview)" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.validDays}
              <input className={adminReadonlyField} readOnly defaultValue="14" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.taxCounty}
              <input className={adminReadonlyField} readOnly defaultValue="Orange County, FL — 6.5% state + local est." />
            </label>
            <label className="block text-sm font-semibold text-slate-700 sm:col-span-2 lg:col-span-1">
              {m.leadSource}
              <select className={adminReadonlyField} defaultValue="web" disabled>
                <option value="web">{m.leadWeb}</option>
                <option value="ref">{m.leadReferral}</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700 lg:col-span-2">
              {t.forms.quoteClientLabel}
              <input className={adminReadonlyField} readOnly defaultValue="Martínez Residential" />
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionJob}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              {m.jobType}
              <select className={adminReadonlyField} defaultValue="install" disabled>
                <option value="install">{m.jobInstall}</option>
                <option value="repair">{m.jobRepair}</option>
                <option value="opener">{m.jobOpener}</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {t.forms.quoteAddressLabel}
              <input className={adminReadonlyField} readOnly defaultValue="4521 Curry Ford Rd, Orlando, FL 32806" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
              {m.crewNotes}
              <textarea className={`${adminReadonlyField} min-h-[72px]`} readOnly defaultValue="Park in driveway; dogs behind fence — call 10 min out." />
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className={adminSectionTitle}>{m.sectionLines}</h3>
            <span className="inline-flex cursor-not-allowed text-xs font-bold uppercase tracking-wide text-slate-400">
              {m.addRow}
            </span>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-3 py-2">{m.colItem}</th>
                  <th className="px-3 py-2">{m.colSku}</th>
                  <th className="px-3 py-2 text-right">{m.colQty}</th>
                  <th className="px-3 py-2 text-right">{m.colUnit}</th>
                  <th className="px-3 py-2 text-right">{m.colLine}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {DEMO_LINES.map((row) => (
                  <tr key={row.sku}>
                    <td className="px-3 py-2 font-medium text-slate-800">{row.desc}</td>
                    <td className="px-3 py-2 font-mono text-xs text-slate-600">{row.sku}</td>
                    <td className="px-3 py-2 text-right tabular-nums">{row.qty}</td>
                    <td className="px-3 py-2 text-right tabular-nums">{formatUsd(row.unit)}</td>
                    <td className="px-3 py-2 text-right font-semibold tabular-nums">{formatUsd(row.line)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionTotals}</h3>
          <dl className="mt-4 grid max-w-md gap-2 text-sm sm:ml-auto">
            <div className="flex justify-between gap-4 border-b border-slate-100 py-1">
              <dt className="text-slate-600">{m.subtotal}</dt>
              <dd className="font-semibold tabular-nums">{formatUsd(subtotal)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-slate-100 py-1">
              <dt className="text-slate-600">{m.discount}</dt>
              <dd className="font-semibold tabular-nums text-rose-700">−{formatUsd(discount)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-slate-100 py-1">
              <dt className="text-slate-600">{m.tax}</dt>
              <dd className="font-semibold tabular-nums">{formatUsd(tax)}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2 text-base">
              <dt className="font-bold text-brand-blue">{m.total}</dt>
              <dd className="font-extrabold tabular-nums text-brand-blue">{formatUsd(total)}</dd>
            </div>
          </dl>
          <label className="mt-4 block max-w-xs text-sm font-semibold text-slate-700">
            {m.depositPct}
            <input className={adminReadonlyField} readOnly defaultValue="40" />
          </label>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionTerms}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{m.termsBody}</p>
          <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50/80 px-4 py-8 text-center text-sm text-slate-500">
            {m.signatureHint}
          </div>
        </section>
      </div>
    </AdminModalFrame>
  );
}
