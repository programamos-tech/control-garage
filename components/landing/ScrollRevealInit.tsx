"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh * 0.94 && rect.bottom > 0;
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

  nodes.forEach((el) => {
    if (isInViewport(el)) el.classList.add("is-visible");
  });
  document.documentElement.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    },
    { threshold: 0.05, rootMargin: "0px 0px 10% 0px" },
  );

  nodes.forEach((el) => {
    if (!el.classList.contains("is-visible")) {
      observer.observe(el);
    }
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
