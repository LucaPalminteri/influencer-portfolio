import type { Metadata } from "next";
import "./globals.css";
import "@/styles/colors.css";
import { Inter } from "next/font/google";
import siteConfig from "@/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
