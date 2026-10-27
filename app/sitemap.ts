import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const routes = [
  '/',
  '/support',
  '/delivery',
  '/centre',
  '/finance',
  '/technology',
  '/hexa-intelligence',
  '/case-studies',
  '/about',
  '/why-nepal',
  '/call',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${SITE_URL}${route}` }));
}
