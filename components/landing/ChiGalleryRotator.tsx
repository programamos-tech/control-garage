"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/image-assets";

const INTERVAL_MS = 6000;

/** Fotos de estilos CHI — rutas optimizadas (WebP). */
const CHI_GALLERY_IMAGES = images.chiGallery.map((src) =>
  src.includes(" ") ? encodeURI(src) : src,
);

type Props = { imageAlt: string };

export function ChiGalleryRotator({ imageAlt }: Props) {
  const [active, setActive] = useState(0);
  const pauseRef = useRef(false);
  /** Asumimos reduce hasta hidratar para no animar un frame antes de leer `matchMedia`. */
  const [respectMotion, setRespectMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setRespectMotion(mq.matches);
    const onChange = () => setRespectMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (respectMotion) return;
    const id = window.setInterval(() => {
      if (!pauseRef.current) {
        setActive((i) => (i + 1) % CHI_GALLERY_IMAGES.length);
      }
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [respectMotion]);

  return (
    <span
      className="relative block aspect-[21/9] w-full sm:aspect-[2.4/1]"
      onMouseEnter={() => {
        pauseRef.current = true;
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
    >
      <span className="absolute inset-0 block transition duration-500 ease-out group-hover:scale-[1.02]">
        {CHI_GALLERY_IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === active ? imageAlt : ""}
            fill
            aria-hidden={i !== active}
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              i === active ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
            sizes="(max-width: 1280px) 100vw, 1152px"
            quality={78}
            priority={i === 0}
            loading={i === 0 ? undefined : "lazy"}
          />
        ))}
      </span>

      <span
        className="pointer-events-none absolute bottom-2 left-0 right-0 z-[2] flex justify-center gap-1.5 sm:bottom-3"
        aria-hidden
      >
        {CHI_GALLERY_IMAGES.map((_, i) => (
          <span
            key={String(i)}
            className={`h-1.5 w-1.5 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.65)] ring-1 ring-black/25 transition-colors duration-300 sm:h-2 sm:w-2 ${
              i === active ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </span>
    </span>
  );
}
