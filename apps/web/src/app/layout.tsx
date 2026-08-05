import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Tektur } from 'next/font/google';
import { APP_DESCRIPTION, APP_NAME } from '@bitcraftly/shared';
import { ThemeProvider } from '@/providers/theme-provider';
import { AppErrorBoundary } from '@/providers/error-boundary';
import { getAppUrl } from '@/lib/env';
import '@/styles/globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  adjustFontFallback: true,
});

/** Octagonal display face for hero / tech headlines */
const tektur = Tektur({
  subsets: ['latin'],
  weight: '900',
  variable: '--font-tektur',
  display: 'swap',
  adjustFontFallback: true,
});

const appUrl = getAppUrl();

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: APP_NAME,
    template: `%s · ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  keywords: ['AI', 'content generation', 'Bitcraftly', 'SaaS', 'studio'],
  authors: [{ name: 'Bitcraftly' }],
  creator: 'Bitcraftly',
  publisher: 'Bitcraftly',
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    type: 'website',
    siteName: APP_NAME,
    url: appUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/brand/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0c0b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tektur.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <AppErrorBoundary>{children}</AppErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
