import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";

type Props = { dict: Dictionary };

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=900&q=80",
];

export function WorkGallery({ dict }: Props) {
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLACEHOLDER_IMAGES.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <Image
                src={src}
                alt={`Garage door project example ${i + 1} — Orlando`}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width:640px) 100vw, 25vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
