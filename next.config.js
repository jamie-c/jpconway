/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:'export'
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
      },
    ],
  },
}

module.exports = nextConfig
