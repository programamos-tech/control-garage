import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site-config";

type Props = { dict: Dictionary };

export function ContactMapColumn({ dict }: Props) {
  return (
    <div className="flex w-full flex-col">
      <div className="relative h-[min(56vh,420px)] min-h-[280px] w-full overflow-hidden border-y border-white/20 bg-slate-900/30 shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:h-[min(68vh,640px)] sm:min-h-[380px]">
        <iframe
          title="Orlando, FL — Control Garage FL service area"
          src={SITE.mapEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 lg:max-w-4xl lg:px-8 lg:pt-10">
        <p className="text-pretty text-center text-base leading-relaxed text-white/85 sm:text-lg">
          {dict.contact.serviceAreaNote}
        </p>
      </div>
    </div>
  );
}
