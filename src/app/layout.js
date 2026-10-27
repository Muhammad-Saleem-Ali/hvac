import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  metadataBase: new URL("https://hvaccompany.com"),
  title: {
    default: "HVAC Company | Heating, Cooling & Electrical Solutions 24/7",
    template: "%s | HVAC Company",
  },
  description:
    "Expert HVAC & AC repair, multi-zone VRF systems, cold room refrigeration, and certified industrial electrical solutions. 24/7 emergency dispatch. Call 0306-1407243.",
  keywords: [
    "HVAC Company",
    "Heating and Cooling Services",
    "AC Repair and Installation",
    "24/7 Emergency AC Repair",
    "VRF System Installation",
    "VRV System Maintenance",
    "Cold Room Refrigeration",
    "Blast Freezer Installation",
    "Industrial Compressor Repair",
    "Chiller Plant Maintenance",
    "Industrial Electrical Contractor",
    "Distribution Board DB Dressing",
    "3-Phase Electrical Load Balancing",
    "Commercial HVAC Maintenance",
    "Residential AC Gas Charging",
    "0306-1407243",
    "0322-4152778",
    "0321-1155955",
  ],
  authors: [{ name: "HVAC Company", url: "https://hvaccompany.com" }],
  creator: "HVAC Company",
  publisher: "HVAC Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HVAC Company | Reliable Solutions for a Cooler, Safer Tomorrow",
    description:
      "Complete heating, cooling, VRF central AC, cold room refrigeration & industrial electrical contracting. 24/7 emergency support. Call 0306-1407243.",
    url: "https://hvaccompany.com",
    siteName: "HVAC Company",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HVAC Company - 24/7 Heating, Cooling & Electrical Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Company | Heating, Cooling & Electrical 24/7",
    description:
      "Reliable HVAC, VRF systems, cold room refrigeration & industrial electrical solutions with 24/7 emergency response. Call 0306-1407243.",
    images: ["/images/og-image.jpg"],
    creator: "@hvaccompany",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  category: "business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#08214d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="HVAC Company" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
