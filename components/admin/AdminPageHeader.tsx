"use client";

import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  action?: { href: string; label: string };
  /** Botón u otra acción (p. ej. abrir modal) — tiene prioridad sobre `action` enlace */
  actionSlot?: React.ReactNode;
};

export function AdminPageHeader({ title, subtitle, action, actionSlot }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-brand-blue sm:text-3xl">{title}</h1>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      {actionSlot ? (
        actionSlot
      ) : action ? (
        <Link
          href={action.href}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gold-mid px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-blue shadow-sm transition hover:brightness-105"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
