/** @type {import('next').NextConfig} */
const securityHeaders = [
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
    },
  ];

const nextConfig = {
  compress: true,
  concurrentFeatures: true,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "storage.googleapis.com"]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
}

module.exports = nextConfig
