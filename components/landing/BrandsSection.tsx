import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";

type Props = { dict: Dictionary };

const BRANDS = [
  { name: "LiftMaster", href: SITE.suppliers.liftmaster },
  { name: "Clopay", href: SITE.suppliers.clopay },
  { name: "CHI", href: SITE.suppliers.chi },
] as const;

export function BrandsSection({ dict }: Props) {
  return (
    <section
      id="brands"
      className="scroll-mt-24 border-y border-slate-200 bg-white py-16"
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
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {BRANDS.map((b) => (
            <li key={b.name}>
              <a
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[140px] items-center justify-center rounded-full border-2 border-brand-blue/15 bg-slate-50 px-6 py-3 text-lg font-extrabold text-brand-blue transition hover:border-brand-gold hover:bg-brand-gold/10"
              >
                {b.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-brand-blue/5 p-8">
          <h3 className="text-lg font-bold text-brand-blue">{dict.brands.suppliersTitle}</h3>
          <p className="mt-2 text-sm text-slate-600">{dict.brands.suppliersBody}</p>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            <li>
              <a
                href={SITE.suppliers.haas}
                className="text-brand-blue underline-offset-2 hover:text-brand-gold-dark hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.brands.haas}
              </a>
            </li>
            <li>
              <a
                href={SITE.suppliers.liftmasterOpeners}
                className="text-brand-blue underline-offset-2 hover:text-brand-gold-dark hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.brands.liftmasterOpeners}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
