import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site';

const description =
  'Hexa builds and runs Finance and Technology shared services for growing companies, from added capacity to a full capability centre. Part of the Hexamatics Group, established 2002.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hexa | Finance and Technology Shared Services, Built and Run for You',
    template: '%s | Hexa',
  },
  description,
  openGraph: {
    siteName: 'Hexa',
    title: 'Hexa | Finance and Technology Shared Services, Built and Run for You',
    description,
    images: ['/og-image.png'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hexa',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description,
  email: CONTACT_EMAIL,
  parentOrganization: { '@type': 'Organization', name: 'Hexamatics Group', foundingDate: '2002' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <style dangerouslySetInnerHTML={{ __html: `[data-hydration-error] { display: none !important; }` }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-white focus:text-hexa-ink focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
