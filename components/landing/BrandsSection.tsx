import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";
import { MotorsCarousel } from "./MotorsCarousel";

type Props = { dict: Dictionary };

const BRAND_LOGOS = [
  {
    name: "LiftMaster",
    src: "/Liftmaster-Logo.png",
    href: SITE.suppliers.liftmaster,
  },
  {
    name: "Clopay",
    src: "/clopay-corporation-logo-810x450.webp",
    href: SITE.suppliers.clopay,
  },
  {
    name: "C.H.I. Overhead Doors",
    src: "/CHI-ColorLogo-removebg-preview.png",
    href: SITE.suppliers.chi,
  },
] as const;

export function BrandsSection({ dict }: Props) {
  return (
    <section
      id="brands"
      className="scroll-mt-24 border-y border-slate-200/80 bg-white py-14 sm:py-20"
      aria-labelledby="brands-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="brands-title"
          className="text-center text-3xl font-extrabold text-brand-blue sm:text-4xl"
        >
          {dict.brands.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          {dict.brands.sub}
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 md:gap-x-16 lg:gap-x-20">
          {BRAND_LOGOS.map((b) => (
            <li key={b.name}>
              <a
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-opacity hover:opacity-90"
              >
                <span className="relative mx-auto block h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60 lg:h-32 lg:w-72">
                  <Image
                    src={b.src}
                    alt={b.name}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 288px"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <MotorsCarousel dict={dict} />
      </div>
    </section>
  );
}
