import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** Barra superior u otros espacios estrechos */
  size?: "default" | "compact";
};

export function ButtonCta({
  href,
  children,
  className = "",
  external,
  size = "default",
}: Props) {
  const isCompact = size === "compact";

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-full bg-brand-gold font-bold uppercase tracking-wide text-brand-blue shadow-md transition hover:bg-brand-gold-light ${
        isCompact
          ? "gap-2 px-3 py-2 text-[10px] leading-tight sm:px-3.5 sm:text-[11px]"
          : "gap-3 px-5 py-3 text-sm"
      } ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-brand-blue text-white ${
          isCompact ? "h-7 w-7" : "h-8 w-8"
        }`}
        aria-hidden
      >
        <svg
          width={isCompact ? 14 : 16}
          height={isCompact ? 14 : 16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}
