import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/dictionaries";

type Props = { dict: Dictionary; locale: Locale };

/** Fotos reales de proyectos en `public/` (orden alfabético por nombre de archivo). */
const WORK_IMAGES = [
  "/194aa84b-9c47-4ea5-bd41-7c0c556743b3.jpeg",
  "/1d4131a0-5c23-42fe-974b-d598b8f8bca2.jpeg",
  "/2b62da5b-5aef-4bfb-b3ee-8044a27a4402.jpeg",
  "/49cf6b45-bca1-4346-940f-143cec878b55.jpeg",
  "/5be586b7-6262-47dd-8e19-45301e952214.jpeg",
  "/79d29177-3358-444f-b813-d6c9b1ca6fed.jpeg",
  "/7ecd1292-3356-4959-9775-220c4ad47d67.jpeg",
  "/8db1fc0a-03ef-4dc9-8c72-6c7167e245bf.jpeg",
  "/c9260341-bc55-496c-a573-c41eb7bbabdb.jpeg",
  "/cdbcfab3-3159-42b7-905b-f1e8102f7ac6.jpeg",
] as const;

export function WorkGallery({ dict, locale }: Props) {
  return (
    <section
      id="work"
      className="scroll-mt-24 bg-slate-50 py-16"
      aria-labelledby="work-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="work-title"
          className="text-center text-3xl font-extrabold text-brand-blue sm:text-4xl"
        >
          {dict.work.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">{dict.work.sub}</p>
        <div
          className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5"
          role="list"
        >
          {WORK_IMAGES.map((src, i) => (
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
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
