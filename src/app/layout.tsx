import type { Metadata } from "next";

import "./globals.css";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "Fahrezi Adha",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark bg-background text-foreground font-sans antialiased ${GeistSans.variable}`}>{children}</body>
    </html>
  );
}
