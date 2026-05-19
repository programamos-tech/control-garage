/**
 * Rutas de imágenes optimizadas (WebP/PNG comprimido).
 * Generado/actualizado con: npm run images:optimize
 */
import manifest from "./image-manifest.json";

/** Resuelve ruta pública optimizada; si no hay entrada en manifest, devuelve la original. */
export function img(src: string): string {
  const key = src.startsWith("/") ? src.slice(1) : src;
  const mapped = (manifest as Record<string, string>)[key];
  if (mapped) return mapped.startsWith("/") ? mapped : `/${mapped}`;
  return src.startsWith("/") ? src : `/${src}`;
}

export const images = {
  hero: {
    desktop: img("/CHI-garage-door-collection.jpg"),
    mobile: img("/hero-mobile-portrait.png"),
  },
  services: [
    img("/male-with-red-shirt-making-window-with-industrial-tools.jpg"),
    img("/low-angle-people-working-with-drill.jpg"),
    img("/electrician-is-mounting-electric-sockets-white-wall-indoors.jpg"),
  ],
  logo: img("/logo_transparent.png"),
  serviceVan: img("/4b89922e-82a5-40c4-8ed5-ce768380c4f0.jpeg"),
  workGallery: [
    img("/194aa84b-9c47-4ea5-bd41-7c0c556743b3.jpeg"),
    img("/1d4131a0-5c23-42fe-974b-d598b8f8bca2.jpeg"),
    img("/2b62da5b-5aef-4bfb-b3ee-8044a27a4402.jpeg"),
    img("/49cf6b45-bca1-4346-940f-143cec878b55.jpeg"),
    img("/5be586b7-6262-47dd-8e19-45301e952214.jpeg"),
    img("/79d29177-3358-444f-b813-d6c9b1ca6fed.jpeg"),
    img("/7ecd1292-3356-4959-9775-220c4ad47d67.jpeg"),
    img("/8db1fc0a-03ef-4dc9-8c72-6c7167e245bf.jpeg"),
    img("/c9260341-bc55-496c-a573-c41eb7bbabdb.jpeg"),
    img("/cdbcfab3-3159-42b7-905b-f1e8102f7ac6.jpeg"),
  ] as const,
  chiGallery: [
    img("/CHI-garage-door-collection.jpg"),
    img("/Planks garage doors in black mid-century house.jpg"),
    img("/urbanhausdesigns cedar planks IG ONLY 2-Edit-1.webp"),
  ] as const,
  motors: [
    img("/8500WCAM_hero_1.png"),
    img("/2220L_1.png"),
    img("/c318e429-37a9-405a-a4c7-62e247dde07b.jpeg"),
    img("/a619c699-8107-4def-a102-949359927043.jpeg"),
    img("/3b823a0b-03e8-4717-9127-d2456e48141a.jpeg"),
    img("/images.jpeg"),
    img("/Steel-Nylon-Garage-Door-Roller.jpg"),
    img("/d0be8efb889ae45ee1af6de57438630ff1c9d61c9f5f5fc1966843b0f047e1c1__77228.png"),
  ] as const,
  brands: {
    liftmaster: img("/Liftmaster-Logo.png"),
    clopay: img("/clopay-corporation-logo-810x450.webp"),
    chi: img("/CHI-ColorLogo-removebg-preview.png"),
  },
  reviews: {
    google: img("/google_maps_pin_PNG26.png"),
    facebook: img("/Facebook_f_logo_(2019).svg.png"),
  },
} as const;
