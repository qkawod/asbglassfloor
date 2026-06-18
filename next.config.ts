import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/smartcourt",
        permanent: true,
      },
      {
        source: "/lumiflex",
        destination: "/smartcourt#full-led-smartcourt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
