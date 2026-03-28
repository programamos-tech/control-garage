import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

export function WhySection({ dict }: Props) {
  return (
    <section
      id="why"
      className="scroll-mt-24 bg-white py-16"
      aria-labelledby="why-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="why-title"
          className="text-center text-3xl font-extrabold text-brand-blue sm:text-4xl"
        >
          {dict.why.title}
        </h2>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4">
          {dict.why.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-slate-800"
            >
              <span className="mt-0.5 text-brand-gold-dark" aria-hidden>
                ✓
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
