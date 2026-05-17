import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vulcanworkwear.co.za" },
      { protocol: "https", hostname: "www.vicbay-gp.co.za" },
      { protocol: "https", hostname: "pinnacleshop.co.za" },
    ],
  },
};

export default nextConfig;
