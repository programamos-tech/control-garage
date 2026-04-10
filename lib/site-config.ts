export const SITE = {
  name: "CONTROL GARAGE FL",
  legalName: "CONTROL GARAGE FL",
  city: "Orlando",
  region: "FL",
  country: "US",
  phones: {
    en: { label: "English line", tel: "+14074870553", display: "(407) 487-0553" },
    es: {
      label: "Spanish line",
      tel: "+14074864303",
      display: "(407) 486-4303",
    },
  },
  email: "info@controlgarage.com",
  /** Listing de Google Maps (reseñas) — enlace compartido del negocio */
  googleReviewsUrl: "https://maps.app.goo.gl/v6mAGTHSJxAbHMhV7",
  /** Página principal de Facebook */
  facebookUrl: "https://www.facebook.com/ControlGarages",
  /** Pestaña de reseñas / recomendaciones */
  facebookReviewsUrl:
    "https://www.facebook.com/ControlGarages/reviews/?id=100054295729505&sk=reviews",
  /** Centro operativo (direcciones / referencia en mapa) */
  mapCenter: { lat: 28.214433, lng: -81.458777 } as const,
  /** Radio de servicio en copy (~25 km) */
  serviceRadiusMeters: 25_000,
  /** Equivalente en millas para textos US (~25 km) */
  serviceRadiusMiles: 15,
  /**
   * Google Maps embebido — muestra Orlando y alrededores (zoom amplio).
   * Más fiable que teselas OSM en iframes / navegadores restringidos.
   */
  mapEmbedUrl:
    "https://www.google.com/maps?q=28.214433,-81.458777&z=10&hl=en&output=embed",
  /** Foto de la camioneta de servicio (`public/`) */
  serviceVanImage: "/4b89922e-82a5-40c4-8ed5-ce768380c4f0.jpeg",
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

/**
 * Abre WhatsApp con texto prefijado (p. ej. procedencia web/tienda).
 * @param message — Texto adicional (p. ej. servicio concreto); opcional.
 * @param leadPrefix — Primera parte del mensaje (viene del diccionario por idioma).
 */
export function whatsappHref(message: string | undefined, leadPrefix: string): string {
  const num = getWhatsAppNumber();
  const base = `https://wa.me/${num}`;
  const trimmed = message?.trim();
  const body = trimmed ? `${leadPrefix}\n\n${trimmed}` : leadPrefix;
  return `${base}?text=${encodeURIComponent(body)}`;
}
