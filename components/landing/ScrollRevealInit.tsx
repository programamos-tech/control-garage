"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function initScrollReveal() {
  const nodes = document.querySelectorAll<HTMLElement>(
    '[data-reveal]:not([data-reveal-manual])',
  );

  if (prefersReducedMotion()) {
    document.documentElement.classList.add("reveal-ready");
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      el.classList.add("is-visible");
    });
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    },
    { threshold: 0, rootMargin: "0px 0px 10% 0px" },
  );

  nodes.forEach((el) => observer.observe(el));

  requestAnimationFrame(() => {
    document.documentElement.classList.add("reveal-ready");
  });

  return () => observer.disconnect();
}

/** Activa animaciones al scroll en todos los `[data-reveal]` de la página. */
export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup = () => {};
    const frame = requestAnimationFrame(() => {
      cleanup = initScrollReveal();
    });
    return () => {
      cancelAnimationFrame(frame);
      cleanup();
    };
  }, [pathname]);

  return null;
}
