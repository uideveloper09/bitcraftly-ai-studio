import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@bitcraftly/ui', '@bitcraftly/shared'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
