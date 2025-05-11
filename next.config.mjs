/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "/*", // Optional: You can specify a specific pathname or pattern
      },
      //   {
      //     protocol: "https",
      //     hostname: "example.com",
      //     pathname: "*", // Optional: You can specify a specific pathname or pattern
      //   },
    ],
  },
  allowedDevOrigins: ["*", "*/*", "http://localhost:3000"],
};

export default nextConfig;
