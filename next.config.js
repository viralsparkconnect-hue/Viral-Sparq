/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    typedRoutes: true
  }
};
module.exports = nextConfig;