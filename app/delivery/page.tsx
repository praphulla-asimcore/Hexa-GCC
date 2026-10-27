import type { Metadata } from 'next';
import ProductPage from '@/components/product-page';
import { productContent } from '@/lib/product-content';

export const metadata: Metadata = {
  title: 'Hexa Delivery: Functions Run to Agreed Service Levels',
  description: productContent.delivery.metaDescription,
  alternates: { canonical: '/delivery' },
};

export default function DeliveryPage() {
  return <ProductPage slug="delivery" />;
}
