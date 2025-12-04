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
  title: "GigConnect | Connect Venues with Artists",
  description:
    "The platform connecting restaurants, hotels, and venues with talented artists and performers. Book live entertainment for your events with ease.",
  keywords: ["gig", "artists", "venues", "live music", "entertainment", "booking", "performers", "restaurants", "hotels"],
  authors: [{ name: "GigConnect" }],
  openGraph: {
    title: "GigConnect | Connect Venues with Artists",
    description:
      "Find the perfect artist for your venue or discover your next gig opportunity.",
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
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans relative`}
      >
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
