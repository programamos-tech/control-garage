import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary; hideHeading?: boolean };

export function FaqSection({ dict, hideHeading }: Props) {
  return (
    <section
      id="faq"
      data-reveal
      className="reveal-fade-up scroll-mt-24 border-t border-slate-200 bg-slate-50 py-16"
      aria-labelledby={hideHeading ? undefined : "faq-title"}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <h2 id="faq-title" className="text-3xl font-extrabold text-brand-blue sm:text-4xl">
            {dict.faq.title}
          </h2>
        )}
        <div className={hideHeading ? "space-y-4" : "mt-8 space-y-4"}>
          {dict.faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 open:border-brand-gold-mid open:ring-2 open:ring-brand-gold-mid/35 hover:shadow-md"
            >
              <summary className="cursor-pointer list-none font-bold text-brand-blue">
                <span className="flex items-center justify-between gap-2">
                  {item.q}
                  <span className="text-brand-gold-mid transition group-open:rotate-180" aria-hidden>
                    ▼
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
