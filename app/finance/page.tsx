import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import ServicePage from '@/components/service-page';
import { serviceContent } from '@/lib/service-content';

export const metadata: Metadata = pageMetadata('/finance', `${serviceContent.finance.metaTitle} | Hexa`, serviceContent.finance.metaDescription);

export default function FinancePage() {
  return <ServicePage slug="finance" />;
}
