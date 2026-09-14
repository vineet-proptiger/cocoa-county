/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  async redirects() {
    return [
      {
        source: '/bannerghatta-road',
        destination: '/new-launch',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
