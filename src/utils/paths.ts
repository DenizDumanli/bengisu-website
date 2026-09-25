/**
 * Base-path helpers.
 *
 * Astro only prefixes the base path for assets it generates (bundled CSS/JS).
 * Hand-written root-relative links (`/hakkimda/`, `/logo-mark.webp`, ...) keep
 * working on a domain root, but break on a sub-path deployment such as a
 * GitHub Pages project site (`https://user.github.io/repo/`). Route every
 * root-relative URL through `withBase` so `BASE_PATH` can move the site.
 */
const BASE = import.meta.env.BASE_URL;

/** Prefix a root-relative path with the configured Astro base path. */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE.replace(/\/+$/, '')}${path}`;
}

/** Absolute URL for a root-relative path, respecting the base path. */
export function absoluteUrl(path: string, origin: URL | string): string {
  return new URL(withBase(path), origin).href;
}

/** Absolute origin including the base path, without a trailing slash. */
export function baseOrigin(origin: URL | string): string {
  return new URL(BASE, origin).href.replace(/\/+$/, '');
}
