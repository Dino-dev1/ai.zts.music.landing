import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZTS Music | AI-Powered Music Platform",
  description:
    "Discover the future of music with ZTS Music - Your AI-powered music platform for artists, producers, and music enthusiasts.",
  keywords: ["music", "AI", "platform", "artists", "producers", "streaming"],
  authors: [{ name: "ZTS Music" }],
  openGraph: {
    title: "ZTS Music | AI-Powered Music Platform",
    description:
      "Discover the future of music with ZTS Music - Your AI-powered music platform.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

