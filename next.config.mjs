import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/media/file/**",
      },
      {
        protocol: "https",
        hostname: "solarluxkenya.co.ke",
        pathname: "/api/media/file/**",
      },
      {
        protocol: "http",
        hostname: "solarluxkenya.co.ke",
        pathname: "/api/media/file/**",
      },
      {
        protocol: "https",
        hostname: "media.solarluxkenya.co.ke",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

export default withPayload(nextConfig);
