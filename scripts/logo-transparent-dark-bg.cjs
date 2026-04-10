/**
 * Quita el fondo gris oscuro del logo: relleno desde bordes (flood fill)
 * sobre píxeles neutros oscuros, sin atravesar blancos / colores de marca.
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const CHROMA_MAX = 48;
const WHITE_MIN = 218;

function isNearWhite(r, g, b) {
  return r >= WHITE_MIN && g >= WHITE_MIN && b >= WHITE_MIN;
}

/** Gris / gris-azulado de fondo (baja saturación, no blanco). */
function isDarkNeutralBackground(r, g, b) {
  if (isNearWhite(r, g, b)) return false;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max - min > CHROMA_MAX) return false;
  const avg = (r + g + b) / 3;
  return avg < 210;
}

function defaultInput() {
  const a = path.join(__dirname, "../public/logo.png");
  const b = path.join(__dirname, "../public/new-logo.png");
  if (fs.existsSync(a)) return a;
  if (fs.existsSync(b)) return b;
  return a;
}

const input = process.argv[2] ? path.resolve(process.argv[2]) : defaultInput();
const output = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(__dirname, "../public/logo.png");

function main() {
  return sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
      const w = info.width;
      const h = info.height;
      const out = Buffer.from(data);
      const visited = new Uint8Array(w * h);
      const stack = [];

      for (let x = 0; x < w; x++) {
        stack.push(x, 0);
        stack.push(x, h - 1);
      }
      for (let y = 0; y < h; y++) {
        stack.push(0, y);
        stack.push(w - 1, y);
      }

      while (stack.length) {
        const y = stack.pop();
        const x = stack.pop();
        if (x < 0 || x >= w || y < 0 || y >= h) continue;
        const idx = y * w + x;
        if (visited[idx]) continue;
        visited[idx] = 1;
        const p = idx * 4;
        const r = out[p];
        const g = out[p + 1];
        const b = out[p + 2];
        if (!isDarkNeutralBackground(r, g, b)) continue;
        out[p + 3] = 0;
        stack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1);
      }

      return sharp(out, {
        raw: { width: w, height: h, channels: 4 },
      })
        .png({ compressionLevel: 9 })
        .toFile(output);
    });
}

main()
  .then(() => console.log("Wrote", output))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
