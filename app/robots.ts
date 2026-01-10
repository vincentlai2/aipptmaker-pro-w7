import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aipptmaker.pro'}/sitemap.xml`,
  };
}



