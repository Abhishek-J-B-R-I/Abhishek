import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { PortfolioProvider } from '@/context/PortfolioContext';

export const metadata: Metadata = {
  title: 'Abhishek | Software Engineer & Flutter Developer',
  description:
    'Software engineer with 2+ years of experience building and maintaining production applications end to end, from UI to REST API and cloud backend integration.',
  keywords: [
    'Abhishek',
    'Flutter Developer',
    'Software Engineer',
    'BLoC',
    'Firebase',
    'REST API',
    'Mobile Application Development',
    'Gurugram',
    'India',
  ],
  authors: [{ name: 'Abhishek' }],
  creator: 'Abhishek',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Abhishek | Software Engineer & Flutter Developer',
    description:
      'Software engineer with 2+ years of experience building and maintaining production applications end to end, from UI to REST API and cloud backend integration.',
    siteName: 'Abhishek Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek | Software Engineer & Flutter Developer',
    description:
      'Software engineer with 2+ years of experience building and maintaining production applications end to end, from UI to REST API and cloud backend integration.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen bg-page text-ink selection:bg-brand selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <PortfolioProvider>{children}</PortfolioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
