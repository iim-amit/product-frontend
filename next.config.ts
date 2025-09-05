// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
};
module.exports = {
  images: {
    remotePatterns: [new URL('https://assets.example.com/account123/**')],
  },
}


module.exports = nextConfig;
