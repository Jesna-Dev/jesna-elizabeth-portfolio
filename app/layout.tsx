import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import LenisProvider from '@/components/LenisProvider';

export const metadata: Metadata = {
  title: 'Jesna Elizabeth Jolly — UI/UX Designer & Creative Technologist',
  description:
    'Portfolio of Jesna Elizabeth Jolly, a UI/UX Designer, Product Designer, and Creative Technologist based in Kerala, India.',
  icons: {
    icon: '/ek-logo.png',
    shortcut: '/ek-logo.png',
    apple: '/ek-logo.png',
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
