export const SITE = {
  name: "Control Garage",
  legalName: "Control Garage",
  city: "Orlando",
  region: "FL",
  country: "US",
  phones: {
    en: { label: "English line", tel: "+14074870553", display: "(407) 487-0553" },
    es: {
      label: "Spanish line",
      tel: "+14074864303",
      display: "+1 (407) 486-4303",
    },
  },
  email: "info@controlgarage.com",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Control+Garage/@28.214433,-81.458777,17z",
  facebookUrl: "https://www.facebook.com/",
  /** Embed without API key — coordinates from Google Maps listing */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=28.214433,-81.458777&hl=en&z=15&output=embed",
  suppliers: {
    haas: "https://www.haasdoor.com/",
    liftmasterOpeners:
      "https://www.liftmaster.com/for-homes/garage-door-openers",
    liftmaster: "https://www.liftmaster.com/",
    clopay: "https://www.clopay.com/",
    chi: "https://www.chiohd.com/",
  },
} as const;

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://controlgarageorlando.com"
  );
}

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "14074864303";
}

export function whatsappHref(message?: string): string {
  const num = getWhatsAppNumber();
  const base = `https://wa.me/${num}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
