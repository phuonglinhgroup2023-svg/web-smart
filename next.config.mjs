import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
