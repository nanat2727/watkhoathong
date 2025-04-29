import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '.'),  // สมมติว่าคุณเก็บโค้ดไว้ในโฟลเดอร์ src
    };
    return config;
  },
};

export default nextConfig;
