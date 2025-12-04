/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/KAMAL_PORTFOLIO',
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;

