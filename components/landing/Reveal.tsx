"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type RevealVariant = "fade-up" | "fade" | "fade-down";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: RevealVariant;
  /** Retraso en ms antes de animar */
  delay?: number;
  /** Animar al cargar (hero, intro) sin esperar scroll */
  immediate?: boolean;
  style?: CSSProperties;
  id?: string;
};

const variantClass: Record<RevealVariant, string> = {
  "fade-up": "reveal-fade-up",
  fade: "reveal-fade",
  "fade-down": "reveal-fade-down",
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh * 0.94 && rect.bottom > 0;
}

/** Entrada animada (hero / intros). Para secciones al scroll usa `data-reveal` + ScrollRevealInit. */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  immediate = false,
  style,
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    if (immediate) {
      document.documentElement.classList.add("reveal-ready");
      const timer = window.setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }

    const el = ref.current;
    if (!el) return;

    if (isInViewport(el)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, delay]);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal
      data-reveal-manual={immediate ? "" : undefined}
      className={`${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{
        ...style,
        ...(delay > 0 ? { transitionDelay: `${delay}ms` } : undefined),
      }}
    >
      {children}
    </Tag>
  );
}
