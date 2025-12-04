/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No basePath needed when using custom domain (CNAME)
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;

