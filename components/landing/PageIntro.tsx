import { Reveal } from "./Reveal";

type Props = {
  title: string;
  subtitle?: string;
};

export function PageIntro({ title, subtitle }: Props) {
  return (
    <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-brand-blue sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <Reveal immediate delay={120}>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
