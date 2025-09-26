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
    default: "nonxdev • จ้างโปรแกรมเมอร์มืออาชีพ | Hire Pro Developers",
    template: "%s | nonxdev",
  },
  description:
    "แพลตฟอร์มให้ลูกค้าจ้างโปรแกรมเมอร์มืออาชีพ Web/Mobile/Backend/AI พร้อมเริ่มงาน รวดเร็ว ปลอดภัย คุณภาพการันตี",
  applicationName: "nonxdev",
  keywords: [
    "จ้างโปรแกรมเมอร์",
    "รับทำเว็บไซต์",
    "Next.js",
    "React",
    "Freelance Developer",
  ],
  openGraph: {
    type: "website",
    title: "nonxdev • จ้างโปรแกรมเมอร์มืออาชีพ",
    description:
      "ลูกค้าจ้างงานนักพัฒนาคุณภาพ ราคาชัดเจน ส่งงานตรงเวลา ปลอดภัยด้วย Escrow",
    url: "/",
    siteName: "nonxdev",
    images: [{ url: "/nonxdev-og.png", width: 1200, height: 630, alt: "nonxdev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "nonxdev • จ้างโปรแกรมเมอร์มืออาชีพ",
    description:
      "ลูกค้าจ้างงานนักพัฒนาคุณภาพ ราคาชัดเจน ส่งงานตรงเวลา ปลอดภัยด้วย Escrow",
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
            '@type': 'Organization',
            name: 'nonxdev',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            logo: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/nonxdev.svg',
          })}
        </Script>
      </body>
    </html>
  );
}
