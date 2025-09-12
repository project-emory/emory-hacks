import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    imageSizes: [800, 1200, 1440, 1920],
  },
};

export default nextConfig;
