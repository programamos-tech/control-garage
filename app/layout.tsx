import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const base = getSiteUrl();

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(base),
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export const viewport = {
  width: "device-width" as const,
  initialScale: 1,
  themeColor: "#0c2748",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const locale = h.get("x-next-locale");
  const lang = locale === "es" ? "es" : "en";

  return (
    <html lang={lang} className={`${montserrat.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
