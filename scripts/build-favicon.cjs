/**
 * Genera `app/icon.png` (32) y `app/apple-icon.png` (180) desde el logo transparente,
 * con fondo oro marca para que el ícono se lea bien en pestañas y en iOS.
 */
const sharp = require("sharp");
const path = require("path");

const root = path.join(__dirname, "..");
const input = path.join(root, "public/logo_transparent.png");
const gold = { r: 253, g: 178, b: 29, alpha: 1 };

async function main() {
  const icon32 = path.join(root, "app/icon.png");
  const apple180 = path.join(root, "app/apple-icon.png");

  await sharp(input)
    .resize(32, 32, { fit: "contain", background: gold })
    .png()
    .toFile(icon32);

  await sharp(input)
    .resize(180, 180, { fit: "contain", background: gold })
    .png()
    .toFile(apple180);

  console.log("Wrote", icon32, "and", apple180);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
