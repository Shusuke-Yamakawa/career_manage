/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src/'],
  },
  poweredByHeader: false,
  experimental: { typedRoutes: true },
  // output: 'export',
};

module.exports = nextConfig;
