/**
 * Comprime imágenes en public/ → WebP (o PNG optimizado para logos).
 * Uso: node scripts/optimize-public-images.cjs
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC = path.join(__dirname, "../public");
const MANIFEST_PATH = path.join(__dirname, "../lib/image-manifest.json");

/** Presets por tipo de uso en la web */
const PRESETS = {
  hero: { maxWidth: 1600, quality: 72 },
  heroMobile: { maxWidth: 828, quality: 72 },
  service: { maxWidth: 1200, quality: 74 },
  gallery: { maxWidth: 800, quality: 70 },
  carousel: { maxWidth: 560, quality: 76 },
  brand: { maxWidth: 360, quality: 82 },
  logo: { maxWidth: 480, quality: 88, keepPng: true },
  icon: { maxWidth: 128, quality: 85, keepPng: true },
  general: { maxWidth: 1400, quality: 74 },
};

/** WebP ya en public/ — re-comprimir sin originales. */
const WEBP_RECOMPRESS = {
  "CHI-garage-door-collection.webp": "hero",
  "hero-mobile-portrait.webp": "heroMobile",
  "Planks garage doors in black mid-century house.webp": "gallery",
  "urbanhausdesigns cedar planks IG ONLY 2-Edit-1.webp": "gallery",
  "service-installation.webp": "service",
  "service-repair.webp": "service",
  "service-opener.webp": "service",
};

/** Archivo (basename) → preset */
const FILE_PRESET = {
  "CHI-garage-door-collection.jpg": "hero",
  "hero-mobile-portrait.png": "heroMobile",
  "male-with-red-shirt-making-window-with-industrial-tools.jpg": "service",
  "low-angle-people-working-with-drill.jpg": "service",
  "electrician-is-mounting-electric-sockets-white-wall-indoors.jpg": "service",
  "service-installation.webp": "service",
  "service-repair.webp": "service",
  "service-opener.webp": "service",
  "4b89922e-82a5-40c4-8ed5-ce768380c4f0.jpeg": "service",
  "logo_transparent.png": "logo",
  "Liftmaster-Logo.png": "brand",
  "CHI-ColorLogo-removebg-preview.png": "brand",
  "clopay-corporation-logo-810x450.webp": "brand",
  "google_maps_pin_PNG26.png": "icon",
  "Facebook_f_logo_(2019).svg.png": "icon",
  "8500WCAM_hero_1.png": "carousel",
  "2220L_1.png": "carousel",
  "d0be8efb889ae45ee1af6de57438630ff1c9d61c9f5f5fc1966843b0f047e1c1__77228.png": "carousel",
  "Steel-Nylon-Garage-Door-Roller.jpg": "carousel",
  "images.jpeg": "carousel",
  "Planks garage doors in black mid-century house.jpg": "gallery",
  "urbanhausdesigns cedar planks IG ONLY 2-Edit-1.webp": "gallery",
};

const WORK_GALLERY = [
  "194aa84b-9c47-4ea5-bd41-7c0c556743b3.jpeg",
  "1d4131a0-5c23-42fe-974b-d598b8f8bca2.jpeg",
  "2b62da5b-5aef-4bfb-b3ee-8044a27a4402.jpeg",
  "49cf6b45-bca1-4346-940f-143cec878b55.jpeg",
  "5be586b7-6262-47dd-8e19-45301e952214.jpeg",
  "79d29177-3358-444f-b813-d6c9b1ca6fed.jpeg",
  "7ecd1292-3356-4959-9775-220c4ad47d67.jpeg",
  "8db1fc0a-03ef-4dc9-8c72-6c7167e245bf.jpeg",
  "c9260341-bc55-496c-a573-c41eb7bbabdb.jpeg",
  "cdbcfab3-3159-42b7-905b-f1e8102f7ac6.jpeg",
];

const MOTOR_IMAGES = [
  "c318e429-37a9-405a-a4c7-62e247dde07b.jpeg",
  "a619c699-8107-4def-a102-949359927043.jpeg",
  "3b823a0b-03e8-4717-9127-d2456e48141a.jpeg",
];

for (const f of WORK_GALLERY) FILE_PRESET[f] = "gallery";
for (const f of MOTOR_IMAGES) FILE_PRESET[f] = "carousel";

const SKIP = new Set([
  "icon.png",
  "apple-icon.png",
  "favicon.ico",
]);

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeFile(basename) {
  const inputPath = path.join(PUBLIC, basename);
  if (!fs.existsSync(inputPath)) {
    console.warn(`  skip (missing): ${basename}`);
    return null;
  }

  const presetName = FILE_PRESET[basename] ?? "general";
  const preset = PRESETS[presetName];
  const before = fs.statSync(inputPath).size;

  const base = basename.replace(/\.[^.]+$/, "");
  const outExt = preset.keepPng ? ".png" : ".webp";
  const outName = `${base}${outExt}`;
  const outputPath = path.join(PUBLIC, outName);

  let pipeline = sharp(inputPath).rotate();
  const meta = await pipeline.metadata();
  const w = meta.width ?? preset.maxWidth;
  if (w > preset.maxWidth) {
    pipeline = pipeline.resize({ width: preset.maxWidth, withoutEnlargement: true });
  }

  const tempPath = path.join(PUBLIC, `.opt-${outName}`);
  if (preset.keepPng) {
    await pipeline
      .png({ quality: preset.quality, compressionLevel: 9, effort: 10 })
      .toFile(tempPath);
  } else {
    await pipeline.webp({ quality: preset.quality, effort: 6 }).toFile(tempPath);
  }
  fs.renameSync(tempPath, outputPath);

  const after = fs.statSync(outputPath).size;
  const publicPath = `/${outName}`;

  console.log(
    `  ${basename} → ${outName}  ${formatBytes(before)} → ${formatBytes(after)} (${presetName})`,
  );

  return { from: basename, to: outName, path: publicPath, before, after };
}

async function recompressWebp(webpName, presetName) {
  const inputPath = path.join(PUBLIC, webpName);
  if (!fs.existsSync(inputPath)) {
    console.warn(`  skip webp (missing): ${webpName}`);
    return null;
  }

  const preset = PRESETS[presetName];
  const before = fs.statSync(inputPath).size;
  const tempPath = path.join(PUBLIC, `.opt-${webpName}`);

  let pipeline = sharp(inputPath).rotate();
  const meta = await pipeline.metadata();
  const w = meta.width ?? preset.maxWidth;
  if (w > preset.maxWidth) {
    pipeline = pipeline.resize({ width: preset.maxWidth, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: preset.quality, effort: 6 }).toFile(tempPath);
  fs.renameSync(tempPath, inputPath);

  const after = fs.statSync(inputPath).size;
  console.log(
    `  ${webpName}  ${formatBytes(before)} → ${formatBytes(after)} (recompress ${presetName})`,
  );
  return { before, after };
}

function loadExistingManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  } catch {
    return {};
  }
}

async function main() {
  const files = Object.keys(FILE_PRESET);
  console.log(`Optimizing ${files.length} images...\n`);

  const manifest = loadExistingManifest();
  let saved = 0;

  for (const basename of files) {
    if (SKIP.has(basename)) continue;
    const result = await optimizeFile(basename);
    if (!result) continue;
    manifest[basename] = result.path;
    manifest[result.path] = result.path;
    saved += result.before - result.after;
  }

  const webpEntries = Object.entries(WEBP_RECOMPRESS);
  if (webpEntries.length > 0) {
    console.log(`\nRecompressing ${webpEntries.length} WebP files...\n`);
    for (const [webpName, presetName] of webpEntries) {
      const result = await recompressWebp(webpName, presetName);
      if (result) saved += result.before - result.after;
    }
  }

  // Conservar entradas previas si no había originales que procesar (evita romper rutas .jpg → .webp).
  fs.writeFileSync(
    MANIFEST_PATH,
    JSON.stringify(manifest, null, 2) + "\n",
  );
  console.log(`\nManifest: lib/image-manifest.json`);
  console.log(`Estimated savings vs originals processed: ~${formatBytes(saved)}`);

  const archiveDir = path.join(PUBLIC, "_originals");
  fs.mkdirSync(archiveDir, { recursive: true });
  let archived = 0;
  for (const [from, toPath] of Object.entries(manifest)) {
    if (!from.includes(".") || from.startsWith("/")) continue;
    const toBase = path.basename(toPath);
    if (from === toBase) continue;
    const src = path.join(PUBLIC, from);
    if (!fs.existsSync(src)) continue;
    fs.renameSync(src, path.join(archiveDir, from));
    archived++;
  }
  if (archived > 0) {
    console.log(`\nArchived ${archived} originals → public/_originals/ (no se despliegan si están en .gitignore).`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
