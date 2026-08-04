// Prefixes an internal, root-relative path with the deployment base path.
//
// The site is currently served from a GitHub project page (/fedari-web/), so
// every internal link and asset needs that prefix. Once fedari.ae is connected
// and `base` is removed from astro.config.mjs, BASE_URL becomes '/' and this
// function returns the path unchanged — no call sites need to be touched.
//
// External values (tel:, mailto:, https://…) are returned as-is.
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
