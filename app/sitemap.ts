import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { publicRoutes } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({ url: route === "/" ? SITE_URL : `${SITE_URL}${route}` }));
}
