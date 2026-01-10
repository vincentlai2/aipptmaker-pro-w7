# AI PPT Maker Pro

A professional AI-powered presentation generator built with Next.js. Convert text to PowerPoint presentations instantly.

## Features

- 🤖 AI-powered slide generation
- 📄 Text to PPT conversion
- 🎨 Professional templates
- 📊 Multiple export formats (PPTX, PDF)
- 🔒 Enterprise-grade privacy
- ⚡ Fast and efficient

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd aipptmaker.pro
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## SEO Features

This Next.js application is optimized for SEO with:

- Server-side rendering (SSR)
- Static site generation (SSG)
- Metadata API for proper meta tags
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card support
- Sitemap support (can be added)
- robots.txt support

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── generator/       # Generator page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Button.tsx
│   ├── Generator.tsx
│   ├── HomePage.tsx
│   ├── Navbar.tsx
│   └── SlidePreview.tsx
├── services/           # API services
│   └── geminiService.ts
└── types.ts           # TypeScript types
```

## Technologies

- **Next.js 15** - React framework with SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Google Gemini AI** - AI content generation
- **Lucide React** - Icon library

## License

MIT
