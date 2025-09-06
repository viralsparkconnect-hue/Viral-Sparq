import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ViralSpark — Digital Marketing & Web Development Agency",
  description: "Modern SEO, ads, social, and high‑performance Next.js websites. Based online, serving globally.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "ViralSpark — Digital Marketing & Web Development",
    description: "We turn clicks into clients.",
    url: "https://example.com",
    siteName: "ViralSpark",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViralSpark — Digital Marketing & Web Dev",
    description: "Modern marketing + fast websites.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}