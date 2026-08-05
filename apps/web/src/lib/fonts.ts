import { Geist, Geist_Mono } from 'next/font/google';

/**
 * Primary sans — injected as `--font-sans` on `<html>`.
 * Configured via next/font (no CDN / @import).
 */
export const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: true,
});

/**
 * Monospace — injected as `--font-mono` on `<html>`.
 */
export const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  adjustFontFallback: true,
});

/** Class names that expose font CSS variables on the document root. */
export const fontVariableClassName = `${geistSans.variable} ${geistMono.variable}`;
