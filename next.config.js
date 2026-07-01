/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/cv', destination: '/CV.html' },
      { source: '/cv-se', destination: '/CV-se.html' },
    ];
  },
};

module.exports = nextConfig;
