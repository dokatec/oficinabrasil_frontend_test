/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/weather", // ou qualquer outra página
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
