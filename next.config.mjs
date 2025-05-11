/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/*", // Optional: You can specify a specific pathname or pattern
      },
      //   {
      //     protocol: "https",
      //     hostname: "example.com",
      //     pathname: "*", // Optional: You can specify a specific pathname or pattern
      //   },
    ],
  },
};

export default nextConfig;
