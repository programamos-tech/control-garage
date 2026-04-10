import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** Barra superior u otros espacios estrechos */
  size?: "default" | "compact";
  /** `solid` = un solo tono (más limpio en cabeceras); `gradient` = marca clásica */
  variant?: "gradient" | "solid";
};

export function ButtonCta({
  href,
  children,
  className = "",
  external,
  size = "default",
  variant = "gradient",
}: Props) {
  const isCompact = size === "compact";
  const bgClass =
    variant === "solid"
      ? "bg-brand-gold-mid shadow-sm transition hover:brightness-[1.05] active:brightness-[0.98]"
      : "bg-brand-gold-gradient shadow-md transition hover:brightness-[1.06] active:brightness-[0.97]";

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-full font-bold uppercase tracking-wide text-brand-blue ${bgClass} ${
        isCompact
          ? "gap-2 px-3 py-2 text-[10px] leading-tight sm:px-3.5 sm:text-[11px]"
          : "gap-3 px-5 py-3 text-sm"
      } ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-brand-blue text-brand-gold-mid ${
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
