import type { Metadata } from "next";

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Provider } from "./provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahrezi.fyi"),
  title: "Fahrezi Adha",
  description: "Frontend Engineer",
  openGraph: {
    type: "website",
    url: "https://fahrezi.fyi",
    description: "Frontend Engineer",
    title: "Fahrezi Adha",
    siteName: "Fahrezi Adha",
    locale: "en_US",
    images: [
      {
        url: "https://fahrezi.fyi/og_image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fahreziadhaa",
    title: "Fahrezi Adha",
    description: "Frontend Engineer",
    images: "https://fahrezi.fyi/og_image.png",
    creator: "@fahreziadhaa",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`dark bg-background text-foreground font-sans antialiased ${GeistSans.variable}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
