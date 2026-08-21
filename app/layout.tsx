import type { Metadata } from 'next';
import './globals.css';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://hnpl.business'),
  title: 'Hexa | Shared Services Partner for Finance, Technology and People Operations',
  description: 'One shared services partner delivering finance, technology and people operations under one governance model. ISO 27001 and ISO 9001 certified. ACCA Approved Employer. Established 2002.',
  keywords: 'shared services partner, embedded team, finance operations, technology delivery, people operations, payroll, ISO 27001, ACCA approved employer, CPF, SST, PPh21, HMRC, CRA, BAS, compliance, bookkeeping',
  openGraph: {
    title: 'Hexa | Shared Services Partner for Finance, Technology and People Operations',
    description: 'One shared services partner delivering finance, technology and people operations under one governance model. ISO 27001 and ISO 9001 certified. ACCA Approved Employer. Established 2002.',
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
  url: 'https://hnpl.business',
  logo: 'https://hnpl.business/logo.png',
  description: 'One shared services partner delivering finance, technology and people operations under one governance model. ISO 27001 and ISO 9001 certified. ACCA Approved Employer. Established 2002.',
  email: 'praphulla@hexamatics.com',
  foundingDate: '2002',
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
