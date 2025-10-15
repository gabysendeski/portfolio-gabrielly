import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gabysendeski.vercel.app'), // Adicione esta linha
  title: 'Gabrielly Sendeski - Desenvolvedora Frontend',
  description: 'Portfolio de Gabrielly Sendeski, desenvolvedora frontend especializada em React, Next.js e tecnologias modernas.',
  keywords: ['Gabrielly Sendeski', 'Desenvolvedor Frontend', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Gabrielly Sendeski' }],
  openGraph: {
    title: 'Gabrielly Sendeski - Desenvolvedora Frontend',
    description: 'Portfolio de Gabrielly Sendeski, desenvolvedora frontend especializada em React, Next.js e tecnologias modernas.',
    url: 'https://gabysendeski.vercel.app',
    siteName: 'Gabrielly Sendeski Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabrielly Sendeski - Desenvolvedora Frontend',
    description: 'Portfolio de Gabrielly Sendeski, desenvolvedora frontend especializada em React, Next.js e tecnologias modernas.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}