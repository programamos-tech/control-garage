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
  m: AdminModalCopy["invoice"];
};

const INV_LINES = [
  { desc: "Deposit — new door & opener (per quote CG-Q-2026-0142)", qty: 1, rate: 1136, amt: 1136 },
  { desc: "Permit coordination — Orange County", qty: 1, rate: 85, amt: 85 },
  { desc: "Extended warranty registration", qty: 1, rate: 0, amt: 0 },
];

export function CreateInvoiceModal({ open, onClose, t, m }: Props) {
  const subtotal = INV_LINES.reduce((s, r) => s + r.amt, 0);
  const tax = Math.round(subtotal * 0.065);
  const total = subtotal + tax;

  const footer = (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-slate-500">{m.footerAccounting}</p>
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
      title={t.forms.invoiceNewTitle}
      subtitle={m.subtitle}
      footer={footer}
    >
      <div className="space-y-8">
        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionLink}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              {m.linkQuote}
              <select className={adminReadonlyField} defaultValue="q1" disabled>
                <option value="q1">CG-Q-2026-0142 — Martínez Residential — {formatUsd(2840)}</option>
                <option value="none">{m.noQuote}</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {t.forms.invoiceNumberLabel}
              <input className={adminReadonlyField} readOnly defaultValue="CG-INV-2026-0090 (preview)" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {t.forms.invoiceDueLabel}
              <input className={adminReadonlyField} type="date" readOnly defaultValue="2026-05-01" />
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionParties}</h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <label className="block text-sm font-semibold text-slate-700">
              {m.billTo}
              <textarea
                className={`${adminReadonlyField} min-h-[100px]`}
                readOnly
                defaultValue={"Martínez Residential\n4521 Curry Ford Rd\nOrlando, FL 32806"}
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.shipTo}
              <textarea
                className={`${adminReadonlyField} min-h-[100px]`}
                readOnly
                defaultValue="Same as billing (service at install address)"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.remitTo}
              <textarea
                className={`${adminReadonlyField} min-h-[100px]`}
                readOnly
                defaultValue={"CONTROL GARAGE FL\nMobile HQ — Greater Orlando\nRemit: ACH per attached PDF"}
              />
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionLines}</h3>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-3 py-2">{m.colDescription}</th>
                  <th className="px-3 py-2 text-right">{m.colQty}</th>
                  <th className="px-3 py-2 text-right">{m.colRate}</th>
                  <th className="px-3 py-2 text-right">{m.colAmount}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {INV_LINES.map((row) => (
                  <tr key={row.desc}>
                    <td className="px-3 py-2 text-slate-800">{row.desc}</td>
                    <td className="px-3 py-2 text-right tabular-nums">{row.qty}</td>
                    <td className="px-3 py-2 text-right tabular-nums">{formatUsd(row.rate)}</td>
                    <td className="px-3 py-2 text-right font-semibold tabular-nums">{formatUsd(row.amt)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t border-slate-200 bg-slate-50/80 text-sm">
                <tr>
                  <td colSpan={3} className="px-3 py-2 text-right font-semibold text-slate-700">
                    {m.linesFooterTotal}
                  </td>
                  <td className="px-3 py-2 text-right font-extrabold text-brand-blue tabular-nums">{formatUsd(total)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionPayment}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              {m.termsSelect}
              <select className={adminReadonlyField} defaultValue="net30" disabled>
                <option value="net15">{m.termNet15}</option>
                <option value="net30">{m.termNet30}</option>
                <option value="receipt">{m.termDueOnReceipt}</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.lateFee}
              <input className={adminReadonlyField} readOnly defaultValue="1.5% monthly after due date (demo policy)" />
            </label>
          </div>
          <h4 className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-500">{m.paymentMethods}</h4>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
            <li className="flex gap-2">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300" defaultChecked readOnly />
              {m.achWire}
            </li>
            <li className="flex gap-2">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300" defaultChecked readOnly />
              {m.cardPortal}
            </li>
            <li className="flex gap-2">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300" readOnly />
              {m.checkMail}
            </li>
          </ul>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionCompliance}</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" defaultChecked readOnly />
              {m.w9Hint}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" readOnly />
              {m.lienHint}
            </label>
          </div>
        </section>
      </div>
    </AdminModalFrame>
  );
}
