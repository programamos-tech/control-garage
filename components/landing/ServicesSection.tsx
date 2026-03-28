import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";

const IDS = ["installation", "repair", "opener"] as const;

type Props = { dict: Dictionary; locale: Locale };

export function ServicesSection({ dict, locale }: Props) {
  const prefix = `/${locale}`;

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 pb-24 pt-32 sm:pt-40"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-title"
          className="text-center text-3xl font-extrabold tracking-tight text-brand-blue sm:text-4xl"
        >
          {dict.services.title}
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {dict.services.items.map((item, i) => (
            <article
              key={item.title}
              id={IDS[i]}
              className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-brand-blue">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.body}</p>
              <Link
                href={`${prefix}#contact`}
                className="mt-6 inline-flex text-sm font-bold uppercase tracking-wide text-brand-gold-dark hover:underline"
              >
                {item.learn}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
