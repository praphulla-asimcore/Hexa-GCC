import type { Metadata } from 'next';
import './globals.css';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
