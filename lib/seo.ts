import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website', siteName: 'Hexa', title, description,
      url, images: ['/og-image.png'],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
  };
}

// Keep the published route inventory shared by the sitemap and SEO checks.
// Add only canonical, public, indexable pages. Do not manufacture lastmod dates.
export const publicRoutes = [
  '/', '/support', '/delivery', '/centre', '/finance', '/technology',
  '/accounting-outsourcing-australia', '/offshore-accounting-teams',
  '/hexa-intelligence', '/case-studies', '/about', '/why-nepal',
  '/security', '/faq', '/call', '/privacy', '/terms', '/leadership',
  '/insights',
  '/insights/dedicated-finance-team-vs-accounting-outsourcing',
  '/insights/outsourcing-month-end-close-controls',
];
