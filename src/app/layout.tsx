import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppThemeProvider from "@/components/AppThemeProvider";
import ClientOnly from "@/components/ClientOnly";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "nonxdev • บริการพัฒนาเว็บไซต์ AI Chatbot Web Scraping",
    template: "%s | nonxdev",
  },
  description:
    "nonxdev พัฒนาเว็บไซต์ ระบบ eCommerce chatbot AI และ web scraping มืออาชีพ ผลงานจริง ราคาแข่งขัน ส่งงานตรงเวลา",
  applicationName: "nonxdev",
  keywords: [
    "พัฒนาเว็บไซต์",
    "AI Chatbot",
    "Web Scraping",
    "eCommerce",
    "รับทำเว็บไซต์",
    "Next.js",
    "React",
    "Node.js",
    "Python",
  ],
  openGraph: {
    type: "website",
    title: "nonxdev • บริการพัฒนาเว็บไซต์ AI Chatbot Web Scraping",
    description:
      "พัฒนาเว็บไซต์ ระบบ eCommerce chatbot AI web scraping มืออาชีพ ผลงานจริง ราคาแข่งขัน",
    url: "/",
    siteName: "nonxdev",
    images: [{ url: "/nonxdev-og.png", width: 1200, height: 630, alt: "nonxdev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "nonxdev • บริการพัฒนาเว็บไซต์ AI Chatbot Web Scraping",
    description:
      "พัฒนาเว็บไซต์ ระบบ eCommerce chatbot AI web scraping มืออาชีพ ผลงานจริง ราคาแข่งขัน",
    images: ["/nonxdev-og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientOnly>
          <AppThemeProvider>
            <Navbar />
            {children}
          </AppThemeProvider>
        </ClientOnly>
        {/* JSON-LD: Organization */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'nonxdev',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            logo: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/nonxdev.svg',
            serviceType: ['Web Development', 'AI Chatbot', 'Web Scraping'],
          })}
        </Script>
      </body>
    </html>
  );
}
