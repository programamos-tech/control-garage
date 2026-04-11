type Props = { children: React.ReactNode };

export function AdminTableShell({ children }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
