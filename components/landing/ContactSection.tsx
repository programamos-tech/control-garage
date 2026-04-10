import type { Dictionary } from "@/lib/dictionaries";
import { ContactMapColumn } from "./ContactMapColumn";

type Props = { dict: Dictionary };

export function ContactSection({ dict }: Props) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-brand-blue pb-14 pt-12 text-white sm:pb-16 sm:pt-14"
      aria-labelledby="contact-sr-title"
    >
      <h2 id="contact-sr-title" className="sr-only">
        {dict.contact.sectionTitle}
      </h2>
      <ContactMapColumn dict={dict} />
    </section>
  );
}
