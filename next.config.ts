import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // reactStrictMode: true,
  images: {
    unoptimized: true,
    // imageSizes: [800, 1200, 1440, 1920],
  },
};

export default nextConfig;
