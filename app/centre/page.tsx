import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import ProductPage from '@/components/product-page';
import { productContent } from '@/lib/product-content';

export const metadata: Metadata = pageMetadata('/centre', 'Global Capability Centre as a Service: Hexa Centre | Hexa', productContent.centre.metaDescription);

export default function CentrePage() {
  return <ProductPage slug="centre" />;
}
