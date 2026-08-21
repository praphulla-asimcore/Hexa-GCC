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
      {
        source: '/countries',
        destination: '/markets',
        permanent: true,
      },
      {
        source: '/engagement-models',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/operating-model',
        destination: '/how-it-works',
        permanent: true,
      },
      {
        source: '/why-nepal',
        destination: '/why-hexa',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
