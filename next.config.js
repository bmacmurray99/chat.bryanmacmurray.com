/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // We disabled trailingSlash to avoid issues with .md files in the public folder
  trailingSlash: false,
};

module.exports = nextConfig;
