import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://vancheckers.com/sitemap.xml',
    host: 'https://vancheckers.com',
  };
}
