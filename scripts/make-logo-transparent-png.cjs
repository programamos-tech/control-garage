/**
 * Flood-fills near-white pixels connected to image edges → transparent.
 * Keeps interior whites that are enclosed by the logo artwork.
 */
const sharp = require("sharp");
const path = require("path");

const input = path.join(__dirname, "../public/logo.jpeg");
const output = path.join(__dirname, "../public/logo.png");

const WHITE_MIN = 248;

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

      function nearWhite(px) {
        const r = out[px];
        const g = out[px + 1];
        const b = out[px + 2];
        return r >= WHITE_MIN && g >= WHITE_MIN && b >= WHITE_MIN;
      }

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
        if (!nearWhite(p)) continue;
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
