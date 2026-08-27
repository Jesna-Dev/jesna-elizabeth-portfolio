import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import LenisProvider from '@/components/LenisProvider';

const title = 'Jesna Elizabeth Jolly — UI/UX Designer & Creative Technologist';
const description =
  'Portfolio of Jesna Elizabeth Jolly, a UI/UX Designer, Product Designer, and Creative Technologist based in Kerala, India.';

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
    icon: '/ek-logo.png',
    shortcut: '/ek-logo.png',
    apple: '/ek-logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Jesna Elizabeth Jolly',
    title,
    description,
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    // No share image, so previews stay compact rather than reserving a banner slot.
    card: 'summary',
    title,
    description,
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
      </body>
    </html>
  );
}
