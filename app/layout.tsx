import type { Metadata } from 'next';
import './globals.css';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://hnpl.business'),
  title: 'Hexa | Finance, Technology & People Operations',
  description: 'Hexa runs finance, technology, and people operations for companies operating across borders — under one governance model, with one accountable owner.',
  keywords: 'shared services centre, GBS, outsourced accounting, finance operations, IT delivery, HR operations, payroll, GCC, CPF, SST, PPh21, HMRC, CRA, BAS, compliance, bookkeeping',
  openGraph: {
    title: 'Hexa | Finance, Technology & People Operations',
    description: 'One centre, three towers, one governance model — finance, technology, and people operations delivered with human oversight and accountable governance.',
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
  name: 'Hexa GCC',
  url: 'https://hnpl.business',
  logo: 'https://hnpl.business/logo.png',
  description: 'Hexa runs finance, technology, and people operations for companies operating across borders — under one governance model, with one accountable owner.',
  email: 'praphulla@hexamatics.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressCountry: 'NP',
  },
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
        {children}
      </body>
    </html>
  );
}
