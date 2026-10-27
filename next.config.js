/** @type {import('next').NextConfig} */

// Retired URLs (website plan v1.1, section 7) plus older legacy paths.
// statusCode 301 rather than `permanent: true`, which would send 308.
const retired = [
  ['/in-market/:path*', '/'],
  ['/capability-centres', '/centre'],
  ['/advisory/:path*', '/centre'],
  ['/people', '/'],
  ['/workspace', '/'],
  ['/pricing', '/call'],
  ['/hexa-academy', '/about#quality'],
  ['/markets', '/about'],
  ['/why-hexa', '/about'],
  ['/how-it-works', '/about'],
  ['/trust', '/about#security'],
  ['/clients', '/case-studies'],
  ['/resources/:path*', '/'],
  ['/social', '/'],
  ['/embedded-team', '/support'],
  ['/technology-delivery', '/technology'],
  ['/other-services', '/finance'],
  ['/countries', '/about'],
  ['/engagement-models', '/call'],
  ['/operating-model', '/about'],
  ['/finance-intelligence', '/hexa-intelligence'],
];

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
  async redirects() {
    return retired.map(([source, destination]) => ({ source, destination, statusCode: 301 }));
  },
};

module.exports = nextConfig;
