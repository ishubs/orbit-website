import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbit — One Loyalty Network",
  description:
    "Multi-merchant blockchain loyalty platform on Hedera. Earn anywhere, redeem everywhere.",
  metadataBase: new URL("https://orbit.example"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-[--color-bg] text-[--color-fg]`}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
