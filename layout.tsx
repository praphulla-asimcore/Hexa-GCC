import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'HexaSuite - Business Intelligence & Automation Tools',
  description: 'A comprehensive suite of business tools including financial dashboards, compliance monitoring, e-signatures, and AI-powered accounting assistance.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'HexaSuite - Business Intelligence & Automation Tools',
    description: 'A comprehensive suite of business tools including financial dashboards, compliance monitoring, e-signatures, and AI-powered accounting assistance.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
