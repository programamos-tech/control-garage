const GOOGLE_STAR = "#fbbc04";
const GOOGLE_STAR_EMPTY = "#dadce0";

/** Estrella tipo Google Maps (relleno / mitad / vacía). `halfGradientId` debe ser único si hay varias mitades en la página. */
export function GoogleMapStar({
  variant,
  halfGradientId = "gmaps-star-half",
  partialFillPercent = 50,
  className = "h-[18px] w-[18px]",
}: {
  variant: "full" | "half" | "empty";
  /** Solo para `half`: id único del `<linearGradient>` si conviven varios bloques con media estrella. */
  halfGradientId?: string;
  /** Solo para `half`: porcentaje de relleno amarillo (0–100). Por defecto 50 (media estrella). */
  partialFillPercent?: number;
  className?: string;
}) {
  const d =
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z";
  const svgCls = `shrink-0 ${className}`;
  if (variant === "full") {
    return (
      <svg className={svgCls} viewBox="0 0 24 24" aria-hidden>
        <path d={d} fill={GOOGLE_STAR} />
      </svg>
    );
  }
  if (variant === "empty") {
    return (
      <svg className={svgCls} viewBox="0 0 24 24" aria-hidden>
        <path d={d} fill={GOOGLE_STAR_EMPTY} />
      </svg>
    );
  }
  const pct = Math.min(100, Math.max(0, partialFillPercent));
  return (
    <svg className={svgCls} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={halfGradientId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={GOOGLE_STAR} />
          <stop offset={`${pct}%`} stopColor={GOOGLE_STAR} />
          <stop offset={`${pct}%`} stopColor={GOOGLE_STAR_EMPTY} />
          <stop offset="100%" stopColor={GOOGLE_STAR_EMPTY} />
        </linearGradient>
      </defs>
      <path d={d} fill={`url(#${halfGradientId})`} />
    </svg>
  );
}
