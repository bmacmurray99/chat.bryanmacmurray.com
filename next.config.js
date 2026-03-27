/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable trailingSlash for better compatibility with static hosting
  trailingSlash: true,
};

module.exports = nextConfig;
