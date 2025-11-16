import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // Enable modern JavaScript features and reduce bundle size
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimize CSS
  experimental: {
    // Enable CSS optimization
    optimizeCss: true,
  },

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Compress responses
  compress: true,

  // React strict mode for better development experience
  reactStrictMode: true,

  // Modern JavaScript targeting
  // @ts-expect-error: 'swcMinify' is a supported Next.js option but not yet typed in NextConfig
  swcMinify: true,
};

export default nextConfig;
