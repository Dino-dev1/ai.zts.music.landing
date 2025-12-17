import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZTS Gigs | Live Music Marketplace - Connect Artists with Venues",
  description:
    "India's premier live music gig marketplace. Find performing opportunities at restaurants, cafes, bars & rooftops. Book talented artists for your venue.",
  keywords: ["live music", "gigs", "artists", "venues", "booking", "performances", "restaurants", "bars", "cafes", "India"],
  authors: [{ name: "ZTS Gigs" }],
  openGraph: {
    title: "ZTS Gigs | Live Music Marketplace",
    description:
      "Connect talented artists with live performance opportunities at venues across India. Find gigs or book artists seamlessly.",
    type: "website",
    locale: "en_IN",
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
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}


