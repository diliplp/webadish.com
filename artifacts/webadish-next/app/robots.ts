import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/srh-vs-pbks-live-ipl-2025-match-updates-and-score'],
    },
    sitemap: 'https://www.webadish.com/sitemap.xml',
  };
}
