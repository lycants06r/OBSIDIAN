import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/p3",
        destination: "/p3.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/p1",
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: "/p2",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
