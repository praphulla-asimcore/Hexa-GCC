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
      {
        source: '/call',
        destination: 'https://calendar.app.google/eq4mJvdvNWXjK5du8',
        permanent: false,
      },
      {
        source: '/finance-intelligence',
        destination: '/hexa-intelligence',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
