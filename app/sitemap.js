export default function sitemap() {
  const baseUrl = 'https://cocoacountysector88a.co.in'
  return [
    {
      url: `${baseUrl}/new-launch`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
