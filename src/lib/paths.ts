export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;

  if (!path) {
    return base;
  }

  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, '');

  return `${normalizedBase}${normalizedPath}`;
}
