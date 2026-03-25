import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Hexa GCC | Finance & Accounting Global Capability Center | Nepal',
  description: 'From Execution to Accountability. Nepal-based Finance & Accounting GCC serving Singapore, Malaysia, Indonesia, Philippines, UK, USA, Australia, Canada with country-specific compliance expertise.',
  keywords: 'outsourced accounting, finance operations, GCC, Nepal, CPF, SST, PPh21, HMRC, CRA, BAS, compliance, bookkeeping, payroll',
  openGraph: {
    title: 'Hexa GCC | Finance & Accounting Global Capability Center',
    description: 'Country-specific finance operations with compliance confidence. Serving 8 countries from Nepal.',
    images: ['/og-image.png'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
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
        <style dangerouslySetInnerHTML={{ __html: `[data-hydration-error] { display: none !important; }` }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
