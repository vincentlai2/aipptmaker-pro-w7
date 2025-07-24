import type { Metadata } from "next"
import AIPPTMakerHomepage from "./AIPPTMakerHomepage"

export const metadata: Metadata = {
  title: "AI PPT Maker: Free AI Presentation Generator & PowerPoint Creator",
  description:
    "Create stunning presentations instantly with our free AI PPT Maker. Transform your ideas into professional PowerPoint slides in seconds. Perfect for business, education, and creative projects. Try our AI presentation maker now!",
  keywords:
    "AI PPT Maker, free AI presentation maker, ai powerpoint generator, slider maker, presentation generator, automated slides, AI presentations, PowerPoint creator, slide generator, presentation tool, free ppt maker, ai slide creator",
  openGraph: {
    title: "AI PPT Maker: Free AI Presentation Generator & PowerPoint Creator",
    description:
      "Create stunning presentations instantly with our free AI PPT Maker. Transform your ideas into professional PowerPoint slides in seconds.",
    type: "website",
    url: "https://aipptmaker.pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI PPT Maker - Free AI Presentation Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI PPT Maker: Free AI Presentation Generator & PowerPoint Creator",
    description:
      "Create stunning presentations instantly with our free AI PPT Maker. Transform your ideas into professional PowerPoint slides in seconds.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://aipptmaker.pro",
  },
}

export default function Home() {
  return <AIPPTMakerHomepage />
}
