/** @type {import('next').NextConfig} */
const securityHeaders = [
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
    },
  ];

const nextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com"
      },
      {
        hostname:"storage.googleapis.com", 
      },
      {
        hostname:"rickandmortyapi.com",  
      },
      {
        hostname:"http://localhost:3000/api"
      }
    ]
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
