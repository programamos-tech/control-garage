/**
 * Ajusta logo.png para web:
 * - Rojos (texto CONTROL, puerta, etc.) → azul marca
 * - Grises neutros (bordes / trazos) → transparente o azul muy suave
 * No toca marrones del garaje / tipografía "GARAGE FL" en tono tierra.
 */
const sharp = require("sharp");
const path = require("path");

const input = path.join(__dirname, "../public/logo.png");
const output = path.join(__dirname, "../public/logo.png");

const NAVY = { r: 12, g: 39, b: 72 };

function isReddish(r, g, b) {
  if (r < 95) return false;
  if (g > r * 0.58 || b > r * 0.58) return false;
  if (r < g + 18 || r < b + 18) return false;
  return true;
}

/** Grises de contorno (no blanco, no negro, poca saturación). */
function isOutlineGray(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max - min > 38) return false;
  const avg = (r + g + b) / 3;
  if (avg < 62 || avg > 248) return false;
  if (avg > 210) return false;
  if (r > 145 && g < avg + 25 && b < avg + 25 && r > g && r > b) return false;
  return avg >= 62 && avg <= 185;
}

sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const out = Buffer.from(data);
    const n = info.width * info.height;

    for (let i = 0; i < n; i++) {
      const p = i * 4;
      let r = out[p];
      let g = out[p + 1];
      let b = out[p + 2];
      const a = out[p + 3];
      if (a < 8) continue;

      if (isReddish(r, g, b)) {
        out[p] = NAVY.r;
        out[p + 1] = NAVY.g;
        out[p + 2] = NAVY.b;
        continue;
      }

      if (isOutlineGray(r, g, b)) {
        const avg = (r + g + b) / 3;
        if (avg < 150) {
          out[p + 3] = 0;
        } else {
          out[p] = NAVY.r;
          out[p + 1] = NAVY.g;
          out[p + 2] = NAVY.b;
        }
        continue;
      }
    }

    return sharp(out, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .png({ compressionLevel: 9 })
      .toFile(output);
  })
  .then(() => console.log("Updated", output))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
