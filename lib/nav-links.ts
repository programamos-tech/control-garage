import type { Dictionary, Locale } from "@/lib/dictionaries";

export type NavLinkItem = {
  href: string;
  label: string;
  sub?: { href: string; label: string }[];
};

export function getMainNavLinks(dict: Dictionary, locale: Locale): NavLinkItem[] {
  const prefix = `/${locale}`;
  return [
    { href: `${prefix}#top`, label: dict.nav.home },
    { href: `${prefix}#about`, label: dict.nav.about },
    {
      href: `${prefix}#services`,
      label: dict.nav.services,
      sub: [
        { href: `${prefix}#installation`, label: dict.services.items[0].title },
        { href: `${prefix}#repair`, label: dict.services.items[1].title },
        { href: `${prefix}#opener`, label: dict.services.items[2].title },
      ],
    },
    { href: `${prefix}#reviews`, label: dict.nav.reviews },
    { href: `${prefix}#work`, label: dict.nav.work },
    { href: `${prefix}#why`, label: dict.nav.why },
    { href: `${prefix}#faq`, label: dict.nav.faq },
    { href: `${prefix}#contact`, label: dict.nav.contact },
  ];
}
