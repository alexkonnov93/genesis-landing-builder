import type { Metadata } from 'next';
import { inter, spaceGrotesk } from '@/lib/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Landing Page Builder',
  description: 'Brand-accurate landing pages built section by section',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
