import { Playfair_Display, Cormorant_Garamond, Great_Vibes, Dancing_Script, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-playfair" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-vibes" });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-dancing" });
const deva = Noto_Serif_Devanagari({ subsets: ["devanagari"], weight: ["500", "700"], variable: "--font-deva" });

export const metadata = {
  title: "Dinkal & Ashwani — Wedding Invitation",
  description: "You are cordially invited to the wedding of Dinkal & Ashwani, 3rd November 2026.",
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#7d8f6b" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${playfair.variable} ${cormorant.variable} ${vibes.variable} ${dancing.variable} ${deva.variable}`}>{children}</body>
    </html>
  );
}
