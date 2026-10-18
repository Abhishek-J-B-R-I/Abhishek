'use client';

import { PortfolioData } from '@/lib/content/types';
import { generateResumeBlob } from './generateResumePdf';

/**
 * Returns the correct asset URL taking basePath into account (for GitHub Pages / subpaths)
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!basePath && typeof window !== 'undefined' && window.location.pathname.startsWith('/Abhishek/')) {
    basePath = '/Abhishek';
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

/**
 * Robust resume download trigger.
 * If PortfolioData is provided, generates the PDF directly from the current live Google Sheet data.
 * Otherwise, fetches the static /Abhishek_Resume.pdf file.
 */
export async function triggerResumeDownload(
  dataOrUrl?: PortfolioData | string,
  fileName = 'Abhishek_Resume.pdf'
): Promise<void> {
  // Case 1: Live PortfolioData provided -> generate dynamic PDF directly from Google Sheet data
  if (dataOrUrl && typeof dataOrUrl === 'object' && 'profile' in dataOrUrl) {
    try {
      const blob = generateResumeBlob(dataOrUrl);
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);
      return;
    } catch (err) {
      console.warn('[triggerResumeDownload] Dynamic PDF build failed, falling back to static asset:', err);
    }
  }

  // Case 2: Static asset URL (or string customUrl)
  const customUrl = typeof dataOrUrl === 'string' ? dataOrUrl : '/Abhishek_Resume.pdf';
  const url = getAssetUrl(customUrl || '/Abhishek_Resume.pdf');

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = blobUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);
  } catch (err) {
    console.warn('[triggerResumeDownload] Direct blob download failed, falling back to direct link:', err);
    const fallbackLink = document.createElement('a');
    fallbackLink.href = url;
    fallbackLink.download = fileName;
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener noreferrer';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    setTimeout(() => {
      document.body.removeChild(fallbackLink);
    }, 500);
  }
}
