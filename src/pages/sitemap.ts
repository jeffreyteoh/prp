import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://prp-nine.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://prp-nine.vercel.app/cookie',
      lastModified: new Date(),
    },
    {
      url: 'https://prp-nine.vercel.app/privacy',
      lastModified: new Date(),
    },
  ]
}