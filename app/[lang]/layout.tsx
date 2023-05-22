import { Montserrat } from 'next/font/google';

import './globals.css';

import { i18n } from '../../i18n-config';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {lang: string };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params: { lang }
}: RootLayoutProps) {
  return (
    <html className={montserrat.className} lang={lang}>
      <body>{children}</body>
    </html>
  )
}
