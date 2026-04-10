import Image from "next/image";

type Size = "top" | "nav" | "footer";

const sizeClass: Record<Size, string> = {
  top: "h-[60px] w-auto max-w-[min(220px,54vw)] sm:h-[72px] sm:max-w-[250px] xl:h-[76px] xl:max-w-[270px]",
  nav: "h-12 w-auto max-w-[min(190px,50vw)] sm:h-14 sm:max-w-[210px]",
  footer:
    "h-[min(200px,48vw)] w-auto max-w-[min(92%,260px)] sm:h-[min(240px,42vw)] sm:max-w-[min(92%,300px)] lg:h-[min(280px,36vw)] lg:max-w-[min(92%,360px)] xl:h-[min(320px,32vw)] xl:max-w-[min(92%,400px)] mx-0",
};

type Props = {
  size: Size;
  className?: string;
  priority?: boolean;
  /**
   * Sobre `bg-brand-gold-mid`: tiñe el PNG claro al azul marca con CSS `filter`
   * (sin caja detrás).
   */
  onGold?: boolean;
};

/** Tinte ~brand-blue (#0c2748) + sombra ligera; todo en una sola propiedad `filter` */
const goldSurfaceFilter =
  "[filter:brightness(0)_saturate(100%)_invert(12%)_sepia(100%)_saturate(850%)_hue-rotate(186deg)_brightness(0.9)_contrast(1.06)_drop-shadow(0_1px_2px_rgba(0,0,0,0.2))]";

/** Logo marca: `public/logo_transparent.png` (PNG transparente). */
export function SiteLogo({ size, className = "", priority = false, onGold = false }: Props) {
  return (
    <Image
      src="/logo_transparent.png"
      alt="Control Garage FL — Your garage under control"
      width={1600}
      height={1600}
      priority={priority}
      sizes={
        size === "footer"
          ? "(max-width: 640px) 260px, (max-width: 1024px) 300px, 400px"
          : "(max-width: 640px) 46vw, 260px"
      }
      className={`object-contain object-left ${sizeClass[size]} ${onGold ? goldSurfaceFilter : ""} ${className}`}
    />
  );
}
