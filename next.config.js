/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/technology-delivery',
        destination: '/technology',
        permanent: true,
      },
      {
        source: '/other-services',
        destination: '/finance',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
