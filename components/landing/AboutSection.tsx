import type { Dictionary, Locale } from "@/lib/dictionaries";

type Props = { dict: Dictionary; locale: Locale };

export function AboutSection({ dict, locale }: Props) {
  const body =
    locale === "en"
      ? "Control Garage is an Orlando garage door company focused on emergency repairs, new door installation, and opener service. Homeowners call us when the garage door is off track, the spring breaks, the opener fails, or they want a quieter, safer door. We answer in English and Spanish, offer 24/7 availability for urgent issues, and install trusted brands like LiftMaster, Clopay, and CHI."
      : "Control Garage es una empresa de puertas de garaje en Orlando enfocada en reparaciones de emergencia, instalación de puertas nuevas y servicio a motores. Nos llaman cuando la puerta sale del riel, se rompe un resorte, falla el motor o quieren una puerta más segura y silenciosa. Atendemos en inglés y español, con disponibilidad 24/7 para urgencias, e instalamos marcas confiables como LiftMaster, Clopay y CHI.";

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white pb-8 pt-8 sm:pb-12 sm:pt-12"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="about-title" className="text-2xl font-extrabold text-brand-blue">
          {dict.nav.about}
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-600">{body}</p>
      </div>
    </section>
  );
}
