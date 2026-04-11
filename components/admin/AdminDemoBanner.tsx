import type { AdminStrings } from "@/lib/admin-i18n";

export function AdminDemoBanner({ labels }: { labels: AdminStrings }) {
  return (
    <div className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm text-amber-950">
      <strong className="font-semibold">Demo</strong>
      <span className="text-amber-900/90"> — {labels.common.demoNote}</span>
    </div>
  );
}
