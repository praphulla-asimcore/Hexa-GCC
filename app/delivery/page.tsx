import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import ProductPage from '@/components/product-page';
import { productContent } from '@/lib/product-content';

export const metadata: Metadata = pageMetadata('/delivery', 'Hexa Delivery: Functions Run to Agreed Service Levels | Hexa', productContent.delivery.metaDescription);

export default function DeliveryPage() {
  return <ProductPage slug="delivery" />;
}
