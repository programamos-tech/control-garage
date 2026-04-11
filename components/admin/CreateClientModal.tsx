"use client";

import type { AdminStrings } from "@/lib/admin-i18n";
import type { AdminModalCopy } from "@/lib/admin-modal-copy";
import { AdminModalFrame } from "./AdminModalFrame";
import { adminReadonlyField, adminSectionTitle, adminSubsection } from "./field-styles";

type Props = {
  open: boolean;
  onClose: () => void;
  t: AdminStrings;
  m: AdminModalCopy["client"];
};

export function CreateClientModal({ open, onClose, t, m }: Props) {
  const f = t.forms.fields;

  const footer = (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-slate-500">{m.footerHint}</p>
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
      title={t.forms.clientNewTitle}
      subtitle={m.subtitle}
      footer={footer}
    >
      <div className="space-y-8">
        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionProfile}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              {m.accountType}
              <select className={adminReadonlyField} defaultValue="res" disabled>
                <option value="res">{m.typeResidential}</option>
                <option value="com">{m.typeCommercial}</option>
                <option value="hoa">{m.typeHoa}</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.legalName}
              <input className={adminReadonlyField} readOnly defaultValue="Summerset Townhomes LLC (demo)" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
              {m.preferredLanguage}
              <select className={adminReadonlyField} defaultValue="es" disabled>
                <option value="en">{m.langEnglish}</option>
                <option value="es">{m.langSpanish}</option>
              </select>
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionContact}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              {m.primaryPhone}
              <input className={adminReadonlyField} readOnly defaultValue="(407) 555-0144" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.altPhone}
              <input className={adminReadonlyField} readOnly defaultValue="(407) 555-0145" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.emailBilling}
              <input className={adminReadonlyField} readOnly type="email" defaultValue="ap@summerset-demo.local" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.emailService}
              <input className={adminReadonlyField} readOnly type="email" defaultValue="supervisor@summerset-demo.local" />
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionBilling}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" defaultChecked readOnly />
              {m.billingSame}
            </label>
            <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
              {f.address}
              <input className={adminReadonlyField} readOnly defaultValue="14500 Lake Underhill Rd, Ste 200" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {f.city}
              <input className={adminReadonlyField} readOnly defaultValue="Orlando, FL 32826" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.county}
              <input className={adminReadonlyField} readOnly defaultValue="Orange" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
              {m.taxIdHint}
              <input className={adminReadonlyField} readOnly placeholder="—" defaultValue="Resale cert. #FL-88421 (demo)" />
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionProperty}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
              {m.serviceAddress}
              <input className={adminReadonlyField} readOnly defaultValue="8800 Moss Park Rd" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.unitApt}
              <input className={adminReadonlyField} readOnly defaultValue="Gate B — call box 0142" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.gateCode}
              <input className={adminReadonlyField} readOnly defaultValue="#7421*" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {m.doorCount}
              <input className={adminReadonlyField} readOnly defaultValue="12 (community) / visit: bays 3–4" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
              {m.headroomNote}
              <input className={adminReadonlyField} readOnly defaultValue="Standard 15″ radius — confirm on pre-install photos" />
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionCommercial}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" defaultChecked readOnly />
              {m.poRequired}
            </label>
            <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
              {m.apContact}
              <input className={adminReadonlyField} readOnly defaultValue="Maria López — ext. 12" />
            </label>
          </div>
        </section>

        <section className={adminSubsection}>
          <h3 className={adminSectionTitle}>{m.sectionFiles}</h3>
          <p className="mt-2 text-sm text-slate-600">{m.uploadHint}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Gate_photo.jpg", "HOA_form.pdf", "Prior_invoice.pdf"].map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
              >
                {name}
              </span>
            ))}
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            {f.notes}
            <textarea className={`${adminReadonlyField} min-h-[88px]`} readOnly defaultValue="Call 30 min ahead. Spanish preferred on site." />
          </label>
        </section>
      </div>
    </AdminModalFrame>
  );
}
