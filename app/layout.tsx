import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import LenisProvider from '@/components/LenisProvider';

const title = 'Jesna Elizabeth Jolly — UI/UX Designer & Creative Technologist';
const description =
  'Portfolio of Jesna Elizabeth Jolly, a UI/UX Designer, Product Designer, and Creative Technologist based in Kerala, India.';

// What link previews (WhatsApp, LinkedIn, iMessage, X) show. The share image
// itself is app/opengraph-image.jpg, picked up by Next's file convention.
const shareTitle = 'Jesna Elizabeth Jolly | UI/UX Designer & Frontend Developer';
const shareDescription =
  'Explore my portfolio showcasing UI/UX design and frontend development.';

// Social crawlers need absolute URLs. Set NEXT_PUBLIC_SITE_URL to the live
// domain; Vercel deployments fall back to their own hostname.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: '/ex-logo.png',
    shortcut: '/ex-logo.png',
    apple: '/ex-logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Jesna Elizabeth Jolly',
    title: shareTitle,
    description: shareDescription,
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    // Square portrait, so the compact card with a thumbnail fits best.
    card: 'summary',
    title: shareTitle,
    description: shareDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-neutral-950 text-white font-sans overflow-x-hidden">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
