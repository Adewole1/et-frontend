import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Emmanuel Tobiloba — Data Analyst & Project Manager";
const description =
  "Emmanuel Tobiloba turns raw data and complex operations into clear decisions and systems that ship.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: title,
    template: "%s | Emmanuel Tobiloba",
  },
  description,
  applicationName: "Emmanuel Tobiloba Portfolio",
  authors: [{ name: "Emmanuel Tobiloba" }],
  creator: "Emmanuel Tobiloba",
  publisher: "Emmanuel Tobiloba",
  keywords: [
    "Emmanuel Tobiloba",
    "data analyst",
    "project manager",
    "portfolio",
    "data analytics",
    "operations",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Emmanuel Tobiloba",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Emmanuel Tobiloba",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#10131a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full overflow-x-clip">{children}</body>
    </html>
  );
}
