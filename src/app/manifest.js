export default function manifest() {
  return {
    name: "HVAC Company | Heating, Cooling & Electrical Solutions",
    short_name: "HVAC Company",
    description:
      "24/7 expert HVAC, AC repair & installation, VRF systems, cold room refrigeration, and industrial electrical engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#051430",
    theme_color: "#08214d",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
