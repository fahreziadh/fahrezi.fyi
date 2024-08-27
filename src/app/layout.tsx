import type { Metadata } from "next";

import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Fahrezi Adha",
  description: "Frontend Engineer",
  openGraph: {
    type: "website",
    url: "https://fahrezi.fyi",
    description: "Frontend Engineer",
    title: "Fahrezi Adha",
    siteName: "Fahrezi Adha",
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
        {children}
      </body>
    </html>
  );
}
