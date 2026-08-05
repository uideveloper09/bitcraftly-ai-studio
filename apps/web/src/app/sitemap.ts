import type { MetadataRoute } from 'next';
import { ROUTES } from '@bitcraftly/shared';
import { getAppUrl } from '@/lib/env';

/**
 * Sitemap placeholder — expand as public marketing pages grow.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getAppUrl();

  return [
    {
      url: `${base}${ROUTES.HOME}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
