import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'AlphaFlow - AI Angel Investing',
  description: 'Your AI co-pilot for smarter angel investing',
  openGraph: {
    title: 'AlphaFlow',
    description: 'Your AI co-pilot for smarter angel investing',
    type: 'website',
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/api/og',
    'fc:frame:button:1': 'View Dashboard',
    'fc:frame:button:2': 'Browse Deals',
    'fc:frame:post_url': '/api/frame',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
