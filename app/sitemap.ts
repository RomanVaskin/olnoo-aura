import type { MetadataRoute } from 'next'
import { settlements } from '@/lib/data'

const BASE_URL = 'https://aura.olnoo.com'

// Public broker/developer profile pages currently linked from the site (see components/site-header.tsx).
// There is no broker/developer dataset yet, so these are listed explicitly.
const brokerSlugs = ['anna-orlova']
const developerSlugs = ['greenline']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/settlements`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/houses`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/plots`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/ru/kupit-dom-na-istre`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/presentation`, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const settlementRoutes: MetadataRoute.Sitemap = settlements.map((settlement) => ({
    url: `${BASE_URL}/settlements/${settlement.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const brokerRoutes: MetadataRoute.Sitemap = brokerSlugs.map((slug) => ({
    url: `${BASE_URL}/brokers/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const developerRoutes: MetadataRoute.Sitemap = developerSlugs.map((slug) => ({
    url: `${BASE_URL}/developers/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...settlementRoutes, ...brokerRoutes, ...developerRoutes]
}
