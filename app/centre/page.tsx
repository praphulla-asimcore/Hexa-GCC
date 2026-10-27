import type { Metadata } from 'next';
import ProductPage from '@/components/product-page';
import { productContent } from '@/lib/product-content';

export const metadata: Metadata = {
  title: 'Hexa Centre: Your Own Shared Services Centre, Run by Hexa',
  description: productContent.centre.metaDescription,
  alternates: { canonical: '/centre' },
};

export default function CentrePage() {
  return <ProductPage slug="centre" />;
}
