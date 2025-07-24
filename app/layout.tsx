import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI PPT Maker: Powered Presentation & PowerPoint Generator for Professionals",
  description:
    "Create stunning presentations instantly with our AI PPT Maker. Transform your ideas into professional PowerPoint slides in seconds. Perfect for business, education, and creative projects.",
  keywords:
    "AI PPT Maker, ai presentation maker, ai powerpoint generator, slider maker, presentation generator, automated slides, AI presentations, PowerPoint creator, slide generator, presentation tool",
  authors: [{ name: "AIPPTMaker Team" }],
  creator: "AIPPTMaker",
  publisher: "AIPPTMaker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aipptmaker.pro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI PPT Maker: Powered Presentation & PowerPoint Generator for Professionals",
    description:
      "Create stunning presentations instantly with our AI PPT Maker. Transform your ideas into professional PowerPoint slides in seconds.",
    url: "https://aipptmaker.pro",
    siteName: "AIPPTMaker",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIPPTMaker - AI Powered Presentation Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI PPT Maker: Powered Presentation & PowerPoint Generator for Professionals",
    description:
      "Create stunning presentations instantly with our AI PPT Maker. Transform your ideas into professional PowerPoint slides in seconds.",
    images: ["/og-image.png"],
    creator: "@aipptmaker",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
