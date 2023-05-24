import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';


import { i18n } from '../../i18n-config';

export const metadata: Metadata = {
  title: 'Pol Reig Broto',
  description: 'This is my portfolio',
  openGraph: {
    title: 'Pol Reig Broto | DEV',
    description: 'This is my portfolio',
    url: 'https://www.polreigbroto.com',
    siteName: 'Pol Reig Broto',
    images: [
      {
        url: 'https://www.polreigbroto.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fte1jbfhy%2Fproduction%2F9b3888002eb7477a104d7c2fdde0f3d2b5897db2-2937x2937.png&w=828&q=75',
        alt: 'Profile Image',
        width: 500,
        height: 500,
      },
    ],
  },
};

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
