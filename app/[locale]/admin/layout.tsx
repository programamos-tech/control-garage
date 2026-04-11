import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdminAppShell } from "@/components/admin/AdminAppShell";
import { getAdminStrings } from "@/lib/admin-i18n";
import { locales, type Locale } from "@/lib/dictionaries";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) return { title: "Admin" };
  const t = getAdminStrings(loc as Locale);
  return {
    title: t.metaTitle,
    robots: { index: false, follow: false },
  };
}

export default async function AdminLayout({ children, params }: Props) {
  const { locale: loc } = await params;
  if (!locales.includes(loc as Locale)) notFound();
  const locale = loc as Locale;
  const labels = getAdminStrings(locale);

  return (
    <AdminAppShell locale={locale} labels={labels}>
      {children}
    </AdminAppShell>
  );
}
