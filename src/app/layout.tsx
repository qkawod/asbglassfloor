import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globecorp.co.kr"),
  alternates: {
    canonical: "/",
  },
  title: "ASB GlassFloor 공식 파트너 | 글라스플로어 전문 기업 GLOBE",
  description: "GLOBE는 독일 ASB GlassFloor 공식 파트너로 농구장, 스마트체육센터, 멀티스포츠 글라스플로어 시스템을 제공합니다. 국제농구연맹(FIBA), NBA 등 글로벌 인증을 받은 스포츠플로어 솔루션을 한국에 공급합니다.",
  keywords: "asbglassfloor, asb글라스플로어, asb글래스플로어, asb, asbkorea, asb글라스, 에이에스비, 에이에스비글라스플로어, 루미플렉스, 멀티스포츠플로어, led플로어, led바닥재, 유리바닥재, 글라스플로어, 글라스led플로어, 다목적체육관, 글래스바닥재, 스마트체육관, led체육관, 스포츠플로어",
  openGraph: {
    title: "ASB GlassFloor 공식 파트너 | 글라스플로어 전문 기업 GLOBE",
    description: "GLOBE는 독일 ASB GlassFloor 공식 파트너로 농구장, 스마트체육센터, 멀티스포츠 글라스플로어 시스템을 제공합니다. 국제농구연맹(FIBA), NBA 등 글로벌 인증을 받은 스포츠플로어 솔루션을 한국에 공급합니다.",
    url: "https://www.globecorp.co.kr",
    siteName: "ASB GlassFloor Korea",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/asb-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASB GlassFloor",
      },
    ],
  },
  other: {
    'naver-site-verification': '2a86449b9e69a610e63c771a81d2211ed126c18d',
  },
  icons: {
    icon: "/Logo/1111ASBGlassFloor.jpg",
    shortcut: "/Logo/1111ASBGlassFloor.jpg",
    apple: "/Logo/1111ASBGlassFloor.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-deepBlack text-white break-keep whitespace-pre-line`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GLOBE",
              "url": "https://www.globecorp.co.kr",
              "sameAs": [
                "https://blog.naver.com/asbkorea_globe",
                "https://www.youtube.com/@ASBGlassFloor",
                "https://instagram.com/asbglassfloor"
              ],
              "description": "ASB GlassFloor 공식 파트너. 글라스플로어, 스마트체육관, 멀티스포츠 코트 전문.",
              "image": "https://www.globecorp.co.kr/Logo/logo-white.png"
            })
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
