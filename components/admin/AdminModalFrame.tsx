"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function AdminModalFrame({ open, onClose, title, subtitle, children, footer }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative flex max-h-[94dvh] w-full max-w-3xl flex-col rounded-t-2xl border border-slate-200 bg-white shadow-2xl sm:max-h-[92dvh] sm:rounded-2xl lg:max-w-5xl">
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:px-6">
          <div className="min-w-0 pr-2">
            <h2 id="admin-modal-title" className="text-lg font-extrabold text-brand-blue sm:text-xl">
              {title}
            </h2>
            {subtitle ? <p className="mt-1 text-sm leading-snug text-slate-600">{subtitle}</p> : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5">
          {children}
        </div>
        <div className="shrink-0 border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-6">{footer}</div>
      </div>
    </div>
  );
}
