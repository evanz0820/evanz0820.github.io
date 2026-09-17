import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves a static export with no image optimizer,
  // so images in /public are pre-sized WebP files.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
