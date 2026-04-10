/** Mayúscula en la primera letra Unicode (p. ej. "#1 trusted" → "#1 Trusted"). */
export function capitalizeFirstLetter(s: string) {
  const t = s.trim();
  const m = /\p{L}/u.exec(t);
  if (!m || m.index === undefined) return t;
  const i = m.index;
  return t.slice(0, i) + t.slice(i, i + 1).toLocaleUpperCase() + t.slice(i + 1);
}
