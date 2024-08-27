import type { Metadata } from "next";

import "./globals.css";
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

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
      <body className={`text-zinc-950 font-sans antialiased ${fontSans.variable}`}>{children}</body>
    </html>
  );
}
