import type { MetadataRoute } from 'next';
import { getAllContentRoutes } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const content: MetadataRoute.Sitemap = getAllContentRoutes().map(
    (p): MetadataRoute.Sitemap[number] => ({
      url: base + p,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  );

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...content,
  ];
}