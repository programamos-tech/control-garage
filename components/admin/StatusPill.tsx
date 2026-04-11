const tones: Record<string, string> = {
  neutral: "bg-slate-100 text-slate-800",
  info: "bg-sky-100 text-sky-900",
  success: "bg-emerald-100 text-emerald-900",
  warning: "bg-amber-100 text-amber-900",
  danger: "bg-rose-100 text-rose-900",
  muted: "bg-slate-200 text-slate-700",
};

export function StatusPill({ label, tone = "neutral" }: { label: string; tone?: keyof typeof tones }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${tones[tone] ?? tones.neutral}`}>
      {label}
    </span>
  );
}
