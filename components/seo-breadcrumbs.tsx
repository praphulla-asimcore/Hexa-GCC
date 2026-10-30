import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export default function SeoBreadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const breadcrumbs = [{ name: 'Home', path: '/' }, ...items];
  return (
    <div className="container-hexa py-5">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2 text-sm text-muted">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === breadcrumbs.length - 1
                ? <span aria-current="page">{item.name}</span>
                : <Link href={item.path} className="underline underline-offset-4">{item.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem', position: index + 1, name: item.name, item: `${SITE_URL}${item.path}`,
        })),
      }).replace(/</g, '\u003c') }} />
    </div>
  );
}
