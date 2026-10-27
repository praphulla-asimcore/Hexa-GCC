import type { Metadata } from 'next';
import ServicePage from '@/components/service-page';
import { serviceContent } from '@/lib/service-content';

export const metadata: Metadata = {
  title: serviceContent.technology.metaTitle,
  description: serviceContent.technology.metaDescription,
  alternates: { canonical: '/technology' },
};

export default function TechnologyPage() {
  return <ServicePage slug="technology" />;
}
