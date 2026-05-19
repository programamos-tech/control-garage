import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { images } from "@/lib/image-assets";

type Props = { dict: Dictionary; locale: Locale; hideHeading?: boolean };

export function WorkGallery({ dict, locale, hideHeading }: Props) {
  return (
    <section
      id="work"
      data-reveal
      className="reveal-fade-up scroll-mt-24 bg-slate-50 py-16"
      aria-labelledby={hideHeading ? undefined : "work-title"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <>
            <h2
              id="work-title"
              className="text-center text-3xl font-extrabold text-brand-blue sm:text-4xl"
            >
              {dict.work.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">{dict.work.sub}</p>
          </>
        )}
        <div
          className={`grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 ${hideHeading ? "mt-0" : "mt-10"}`}
          role="list"
        >
          {images.workGallery.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              className="group relative aspect-square overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-100"
            >
              <Image
                src={src}
                alt={
                  locale === "es"
                    ? `${dict.work.title} — referencia ${i + 1} de proyecto en Orlando`
                    : `${dict.work.title} — project reference ${i + 1}, Orlando area`
                }
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.05]"
                sizes="(max-width:640px) 50vw, (max-width:768px) 33vw, (max-width:1024px) 25vw, 20vw"
                quality={75}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
