import type { Metadata } from 'next';
import ProductPage from '@/components/product-page';
import { productContent } from '@/lib/product-content';

export const metadata: Metadata = {
  title: 'Hexa Support: Extra Capacity for Finance and Technology',
  description: productContent.support.metaDescription,
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  return <ProductPage slug="support" />;
}
