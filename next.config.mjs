/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // placehold.co returns SVGs — allow them in development
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

export default nextConfig;
