import type { Dictionary, Locale } from "@/lib/dictionaries";
import { publicPath } from "@/lib/public-routes";

export type NavLinkItem = {
  href: string;
  label: string;
  sub?: { href: string; label: string }[];
};

export function getMainNavLinks(dict: Dictionary, locale: Locale): NavLinkItem[] {
  return [
    { href: publicPath(locale, "home"), label: dict.nav.home },
    { href: publicPath(locale, "about"), label: dict.nav.about },
    {
      href: publicPath(locale, "services"),
      label: dict.nav.services,
      sub: [
        { href: publicPath(locale, "installation"), label: dict.services.items[0].title },
        { href: publicPath(locale, "repair"), label: dict.services.items[1].title },
        { href: publicPath(locale, "opener"), label: dict.services.items[2].title },
      ],
    },
    { href: publicPath(locale, "reviews"), label: dict.nav.reviews },
    { href: publicPath(locale, "work"), label: dict.nav.work },
    { href: publicPath(locale, "faq"), label: dict.nav.faq },
    { href: publicPath(locale, "contact"), label: dict.nav.contact },
  ];
}
