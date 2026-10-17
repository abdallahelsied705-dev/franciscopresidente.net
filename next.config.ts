import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy / template slugs → Portuguese slugs
      { source: "/blog/best-iptv-apps-firestick", destination: "/blog/melhores-apps-iptv-firestick", permanent: true },
      { source: "/blog/best-iptv-canada", destination: "/blog/melhor-iptv-portugal", permanent: true },
      { source: "/blog/iptv-android-tv-canada", destination: "/blog/iptv-android-tv", permanent: true },
      { source: "/blog/iptv-buffering-fix-guide", destination: "/blog/como-resolver-buffering-iptv", permanent: true },
      { source: "/blog/iptv-free-trial-canada", destination: "/blog/iptv-teste-gratis-portugal", permanent: true },
      { source: "/blog/iptv-mag-box-setup-canada", destination: "/blog/configurar-iptv-mag-box", permanent: true },
      { source: "/blog/iptv-on-apple-tv-canada", destination: "/blog/iptv-na-apple-tv", permanent: true },
      { source: "/blog/iptv-on-iphone-canada", destination: "/blog/iptv-no-iphone", permanent: true },
      { source: "/blog/iptv-setup-guide-smart-tv", destination: "/blog/configurar-iptv-smart-tv", permanent: true },
      { source: "/blog/iptv-subscription-canada", destination: "/blog/subscricao-iptv-portugal", permanent: true },
      { source: "/blog/iptv-vs-satellite-tv-comparison", destination: "/blog/iptv-vs-tv-satelite", permanent: true },
      { source: "/blog/watch-live-football-canada-iptv", destination: "/blog/ver-futebol-em-direto-iptv", permanent: true },
      { source: "/blog/watch-live-sports-without-satellite", destination: "/blog/ver-desporto-sem-satelite", permanent: true },
      { source: "/blog/what-is-iptv-complete-guide", destination: "/blog/o-que-e-iptv-guia-completo", permanent: true },
      { source: "/product/1-month-iptv-canada", destination: "/product/1-mes-iptv-portugal", permanent: true },
      { source: "/product/3-month-iptv-canada", destination: "/product/3-meses-iptv-portugal", permanent: true },
      { source: "/product/6-month-iptv-canada", destination: "/product/6-meses-iptv-portugal", permanent: true },
      { source: "/product/12-month-iptv-canada", destination: "/product/12-meses-iptv-portugal", permanent: true },
      { source: "/product/24-month-iptv-canada", destination: "/product/24-meses-iptv-portugal", permanent: true },
    ];
  },
};

export default nextConfig;
