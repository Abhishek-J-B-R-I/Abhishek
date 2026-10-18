/**
 * URL validation and sanitization
 * Ensures only safe http, https, and mailto protocols are rendered.
 */
export function sanitizeUrl(url?: string | null): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  // Allow mailto:
  if (trimmed.toLowerCase().startsWith('mailto:')) {
    const email = trimmed.slice(7).trim();
    // basic email safety check
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return `mailto:${email}`;
    }
    return null;
  }

  // Allow tel:
  if (trimmed.toLowerCase().startsWith('tel:')) {
    const phone = trimmed.slice(4).trim();
    if (/^[+0-9\s\-()]+$/.test(phone)) {
      return `tel:${phone}`;
    }
    return null;
  }

  // Allow safe root-relative URLs (e.g. /Abhishek_Resume.pdf, /images/...)
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return trimmed;
  }

  // Allow http:// and https://
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString();
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * Text sanitizer to prevent non-string or malformed inputs from breaking rendering.
 * All React JSX text rendering already auto-escapes HTML strings, but this ensures
 * sheet values are clean trimmed strings and prevents unexpected objects.
 */
export function sanitizeText(val: unknown, fallback = ''): string {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string') return val.trim();
  if (typeof val === 'number') return String(val);
  return fallback;
}
