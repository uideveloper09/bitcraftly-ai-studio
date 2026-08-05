import type { MetadataRoute } from 'next';
import { APP_DESCRIPTION, APP_NAME, APP_SHORT_NAME } from '@bitcraftly/shared';

/**
 * Web app manifest — Bitcraftly brand icons (same as bitcraftly.com).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_SHORT_NAME,
    description: APP_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f7f5',
    theme_color: '#1a1a18',
    icons: [
      {
        src: '/brand/favicon-16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/brand/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/brand/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/brand/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
