import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Protect backend endpoints
          '/admin/',      // Protect admin/dashboard pages
          '/_next/',      // Next.js internal build files
          '/private/',    // Any private user content
        ],
      },
    ],
    sitemap: 'https://primelynx.com/sitemap.xml',
  }
}