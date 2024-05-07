// next.config.js

const nextConfig = {
  env: {},
  images: {
    domains: ["www.aveliving.com", "tjh.com"], // Add your domain here
  },
  async headers() {
    return [
      {
        // Match the specific API endpoint
        source: "/api/v1/:path*", // Update this path to match your API endpoint
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000/",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
