import type {Metadata} from 'next';
import {Bellefair, Barlow_Condensed, Barlow} from 'next/font/google';
import './globals.css';

const belleFair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-belleFair',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-barlowCondensed',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${belleFair.variable} ${barlowCondensed.variable} ${barlow.variable}`}>
        {children}
      </body>
    </html>
  );
}
