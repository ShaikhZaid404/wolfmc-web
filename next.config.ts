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
};

export default nextConfig;
