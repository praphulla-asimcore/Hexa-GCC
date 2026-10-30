import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import ProductPage from '@/components/product-page';
import { productContent } from '@/lib/product-content';

export const metadata: Metadata = pageMetadata('/support', 'Hexa Support: Extra Capacity for Finance and Technology | Hexa', productContent.support.metaDescription);

export default function SupportPage() {
  return <ProductPage slug="support" />;
}
