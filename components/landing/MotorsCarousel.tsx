"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

/** Imágenes en `public/` — productos LiftMaster / motores (orden de presentación). */
const MOTOR_IMAGES = [
  "/8500WCAM_hero_1.png",
  "/2220L_1.png",
  "/c318e429-37a9-405a-a4c7-62e247dde07b.jpeg",
  "/a619c699-8107-4def-a102-949359927043.jpeg",
  "/32fa252d-90dd-4474-a9ae-aaefaf09232f.jpeg",
  "/024a53bb-4f4c-427b-8848-19d038dcdd76.jpeg",
  "/3b823a0b-03e8-4717-9127-d2456e48141a.jpeg",
] as const;

const AUTOPLAY_MS = 4800;

function getScrollStepPx(el: HTMLDivElement): number {
  const slides = el.querySelectorAll<HTMLElement>("[data-motor-slide]");
  if (slides.length >= 2) {
    return slides[1].offsetLeft - slides[0].offsetLeft;
  }
  const first = slides[0];
  return (first?.offsetWidth ?? 280) + 16;
}

export function MotorsCarousel({ dict }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pauseRef = useRef(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [respectMotion, setRespectMotion] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const pad = 4;
    setCanPrev(scrollLeft > pad);
    setCanNext(scrollLeft + clientWidth < scrollWidth - pad);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setRespectMotion(mq.matches);
    const onChange = () => setRespectMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    const ro = new ResizeObserver(() => updateScrollState());
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScrollState]);

  const advanceAutoplay = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = getScrollStepPx(el);
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 10;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: "auto" });
    } else {
      el.scrollBy({ left: step, behavior: "smooth" });
    }
    window.setTimeout(updateScrollState, 400);
  }, [updateScrollState]);

  useEffect(() => {
    if (respectMotion) return;
    const id = window.setInterval(() => {
      if (!pauseRef.current) advanceAutoplay();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [respectMotion, advanceAutoplay]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = getScrollStepPx(el);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
    window.setTimeout(updateScrollState, 350);
  };

  const b = dict.brands;

  return (
    <div
      id="motors"
      className="mt-16 border-t border-slate-200/90 pt-14 sm:mt-20 sm:pt-16"
      aria-labelledby="motors-carousel-title"
    >
      <h3
        id="motors-carousel-title"
        className="text-center text-xl font-extrabold text-brand-blue sm:text-2xl"
      >
        {b.motorsTitle}
      </h3>

      <div
        className="relative mt-8"
        onMouseEnter={() => {
          pauseRef.current = true;
        }}
        onMouseLeave={() => {
          pauseRef.current = false;
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-11 items-center bg-gradient-to-r from-white via-white/95 to-transparent sm:w-14" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-11 items-center justify-end bg-gradient-to-l from-white via-white/95 to-transparent sm:w-14" />

        <button
          type="button"
          onClick={() => scrollByDir(-1)}
          disabled={!canPrev}
          className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white text-brand-blue shadow-md transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-30 sm:left-0 sm:h-11 sm:w-11"
          aria-label={b.motorsCarouselPrev}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByDir(1)}
          disabled={!canNext}
          className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white text-brand-blue shadow-md transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-30 sm:right-0 sm:h-11 sm:w-11"
          aria-label={b.motorsCarouselNext}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          onScroll={updateScrollState}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-10 pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 sm:px-14 [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label={b.motorsTitle}
        >
          {MOTOR_IMAGES.map((src, i) => (
            <div
              key={src}
              data-motor-slide
              className="snap-center shrink-0"
              style={{ width: "min(78vw, 20rem)" }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={b.motorSlideAlt.replace("{n}", String(i + 1))}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 78vw, 320px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
