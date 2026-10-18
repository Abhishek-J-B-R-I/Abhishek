/**
 * Resolves static asset paths with support for GitHub Pages subpath (e.g. /Abhishek)
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;

  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!basePath && typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/Abhishek') || window.location.pathname.includes('/Abhishek/')) {
      basePath = '/Abhishek';
    }
  }

  basePath = basePath.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
