import type { Metadata } from 'next';
import './globals.css';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://hnpl.business'),
  title: 'Hexa Finance Operations | Country-Aware Finance Infrastructure',
  description: 'Hexa builds and operates country-aware finance infrastructure for companies scaling across markets.',
  keywords: 'outsourced accounting, finance operations, GCC, CPF, SST, PPh21, HMRC, CRA, BAS, compliance, bookkeeping, payroll',
  openGraph: {
    title: 'Hexa Finance Operations | Country-Aware Finance Infrastructure',
    description: 'Country-aware finance operations with human oversight, internal intelligence, and accountable governance.',
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
  description: 'Hexa builds and operates country-aware finance infrastructure for companies scaling across markets.',
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
