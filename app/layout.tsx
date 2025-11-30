import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Providers} from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://favourakpasi.vercel.app'),
  title: 'Favour Akpasi',
  description:
    'Software engineer crafting elegant, user-focused web and mobile experiences with Javascript and Python.',
  keywords: [
    'Favour Akpasi',
    'Software Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Software Engineer',
    'Python Developer',
    'Machine Learning Engineer',
    'Portfolio',
  ],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
