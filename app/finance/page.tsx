import type { Metadata } from 'next';
import ServicePage from '@/components/service-page';
import { serviceContent } from '@/lib/service-content';

export const metadata: Metadata = {
  title: serviceContent.finance.metaTitle,
  description: serviceContent.finance.metaDescription,
  alternates: { canonical: '/finance' },
};

export default function FinancePage() {
  return <ServicePage slug="finance" />;
}
