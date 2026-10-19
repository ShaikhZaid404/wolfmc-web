import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crafatar.com",
      },
      {
        protocol: "https",
        hostname: "mc-heads.net",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/store-boxpvp",
        destination: "/store/boxpvp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
