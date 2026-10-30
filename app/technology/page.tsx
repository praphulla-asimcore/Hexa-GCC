import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import ServicePage from '@/components/service-page';
import { serviceContent } from '@/lib/service-content';

export const metadata: Metadata = pageMetadata('/technology', `${serviceContent.technology.metaTitle} | Hexa`, serviceContent.technology.metaDescription);

export default function TechnologyPage() {
  return <ServicePage slug="technology" />;
}
