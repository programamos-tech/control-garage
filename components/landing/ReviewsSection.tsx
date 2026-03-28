import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";

type Props = { dict: Dictionary };

export function ReviewsSection({ dict }: Props) {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-brand-blue py-16 text-white"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="reviews-title" className="text-3xl font-extrabold sm:text-4xl">
          {dict.reviews.title}
        </h2>
        <p className="mt-4 max-w-2xl text-white/85">{dict.reviews.sub}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 transition hover:bg-white/15"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#4285F4]" aria-hidden>
                G
              </span>
              <span>
                <span className="block text-lg font-bold">Google</span>
                <span className="text-sm text-white/80">{dict.reviews.google}</span>
              </span>
            </span>
            <span className="text-brand-gold-light" aria-hidden>
              ★★★★★
            </span>
          </a>
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 transition hover:bg-white/15"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-xl font-bold text-white" aria-hidden>
                f
              </span>
              <span>
                <span className="block text-lg font-bold">Facebook</span>
                <span className="text-sm text-white/80">{dict.reviews.facebook}</span>
              </span>
            </span>
            <span className="text-brand-gold-light" aria-hidden>
              ★★★★★
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
