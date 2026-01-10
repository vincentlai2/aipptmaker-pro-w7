import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI PPT Maker Pro - Professional AI Presentation Generator',
  description: 'AI PPT Maker - The professional AI presentation generator. Convert text to PPT, create pitch decks, and automate slide design in seconds. Export to editable PowerPoint.',
  keywords: ['AI PPT Maker', 'presentation generator', 'slide generator', 'text to PPT', 'PowerPoint generator', 'AI presentation', 'pitch deck', 'slide design'],
  authors: [{ name: 'AI PPT Maker Pro' }],
  creator: 'AI PPT Maker Pro',
  publisher: 'AI PPT Maker Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aipptmaker.pro'),
  openGraph: {
    title: 'AI PPT Maker Pro - Professional AI Presentation Generator',
    description: 'Convert text to PPT, create pitch decks, and automate slide design in seconds. Export to editable PowerPoint.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aipptmaker.pro',
    siteName: 'AI PPT Maker Pro',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI PPT Maker Pro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI PPT Maker Pro - Professional AI Presentation Generator',
    description: 'Convert text to PPT, create pitch decks, and automate slide design in seconds.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'AI PPT Maker Pro',
              applicationCategory: 'DesignApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description: 'Professional AI presentation generator that converts text to slides, creates pitch decks, and exports editable PPTX files.',
              featureList: 'Text to PPT, AI Design, PowerPoint Export, Slide Generation, Image Sourcing',
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}



