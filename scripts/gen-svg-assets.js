/* Regenerates the standalone SVG assets from the inlined registries.
 *   components/core/iconData.js  ->  assets/icons/*.svg
 *   components/core/logoData.js  ->  assets/logo-full.svg, assets/pif-company.svg
 *
 * The registries are the source of truth (they are what <Icon> and <Logo>
 * render at runtime); these files exist so designers and non-React consumers
 * can grab a glyph directly.
 *
 * Usage: node scripts/gen-svg-assets.js
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ICONS } from '../components/core/iconData.js';
import { LOGO_FULL, LOGO_PIF } from '../components/core/logoData.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const iconDir = path.join(ROOT, 'assets', 'icons');
fs.mkdirSync(iconDir, { recursive: true });

const names = Object.keys(ICONS).sort();
for (const name of names) {
  const { viewBox, path: body } = ICONS[name];
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="currentColor">${body}</svg>\n`;
  fs.writeFileSync(path.join(iconDir, `${name}.svg`), svg, 'utf8');
}
console.log(`icons: ${names.length} -> assets/icons/`);

for (const [art, key, file] of [
  [LOGO_FULL, 'LOGO_FULL', 'logo-full.svg'],
  [LOGO_PIF, 'LOGO_PIF', 'pif-company.svg']
]) {
  if (!art) { console.warn(`  (skipped ${key} — not exported)`); continue; }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${art.viewBox}">${art.body}</svg>\n`;
  fs.writeFileSync(path.join(ROOT, 'assets', file), svg, 'utf8');
  console.log(`logo: ${key} -> assets/${file}`);
}
