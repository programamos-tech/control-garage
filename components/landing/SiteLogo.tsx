import Image from "next/image";

type Size = "top" | "nav" | "footer";

const sizeClass: Record<Size, string> = {
  top: "h-[48px] w-auto max-w-[min(190px,52vw)] sm:h-[58px] sm:max-w-[210px]",
  nav: "h-10 w-auto max-w-[min(160px,45vw)] sm:h-11 sm:max-w-[180px]",
  footer:
    "h-[100px] w-auto max-w-[200px] sm:h-[120px] sm:max-w-[240px] mx-auto sm:mx-0",
};

type Props = {
  size: Size;
  className?: string;
  priority?: boolean;
};

/** PNG con fondo transparente (`/logo.png`), generado desde `public/logo.jpeg`. */
export function SiteLogo({ size, className = "", priority = false }: Props) {
  return (
    <Image
      src="/logo.png"
      alt="Control Garage FL — Your garage under control"
      width={1600}
      height={1600}
      priority={priority}
      sizes={
        size === "footer"
          ? "(max-width: 640px) 200px, 240px"
          : "(max-width: 640px) 46vw, 260px"
      }
      className={`object-contain ${
        size === "footer" ? "object-center sm:object-left" : "object-left"
      } ${sizeClass[size]} ${className}`}
    />
  );
}
