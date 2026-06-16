import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globecorp.co.kr"),
  alternates: {
    canonical: "/",
  },
  title: "ASB GlassFloor 공식 파트너 | 글라스플로어 전문 기업 GLOBE",
  description: "GLOBE는 독일 ASB GlassFloor 공식 파트너로 농구장, 스마트체육센터, 멀티스포츠 글라스플로어 시스템을 제공합니다. 국제농구연맹(FIBA), NBA 등 글로벌 인증을 받은 스포츠플로어 솔루션을 한국에 공급합니다.",
  keywords: [
    "ASB GlassFloor",
    "ASB GlassFloor Korea",
    "ASB 글라스플로어",
    "ASB 글래스플로어",
    "ASB 스마트코트",
    "ASB 풀LED 스마트코트",
    "ASB 루미플렉스",
    "스마트코트",
    "스마트짐",
    "스마트체육시설",
    "asbglassfloor",
    "asbkorea",
    "에이에스비 글라스플로어",
    "글라스플로어",
    "글래스플로어",
    "글라스 LED 플로어",
    "LED 스포츠 플로어",
    "LED 바닥재",
    "LED 농구장",
    "스마트 체육관",
    "스마트체육센터",
    "스마트체육관",
    "스마트 스포츠 코트",
    "멀티스포츠 플로어",
    "멀티스포츠 코트",
    "다목적 체육관 바닥",
    "체육관 바닥재",
    "스포츠 바닥재",
    "스포츠 플로어",
    "농구장 바닥재",
    "배구장 바닥재",
    "핸드볼 코트 바닥",
    "실내체육관 바닥",
    "FIBA 인증 바닥재",
    "NBA LED court",
    "digital sports floor",
    "interactive sports floor",
    "GLOBE",
    "글로브코퍼레이션",
  ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased bg-deepBlack text-white break-keep whitespace-pre-line`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.globecorp.co.kr/#organization",
                  "name": "GLOBE",
                  "alternateName": [
                    "GLOBE Corporation",
                    "글로브코퍼레이션",
                    "ASB GlassFloor Korea"
                  ],
                  "url": "https://www.globecorp.co.kr",
                  "logo": "https://www.globecorp.co.kr/Logo/logo-white.png",
                  "image": "https://www.globecorp.co.kr/asb-og-image.jpg",
                  "email": "globe@globecorp.co.kr",
                  "telephone": "+82-31-717-1180",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "KR",
                    "addressRegion": "경기도",
                    "addressLocality": "성남시 분당구",
                    "streetAddress": "판교역로 152, 1103"
                  },
                  "areaServed": "KR",
                  "sameAs": [
                    "https://blog.naver.com/asbkorea_globe",
                    "https://www.youtube.com/@ASBGlassFloor",
                    "https://instagram.com/asbglassfloor"
                  ],
                  "description": "ASB GlassFloor 한국 공식 파트너. 글라스플로어, LED 스포츠 플로어, 스마트코트, 스마트체육관, 멀티스포츠 코트 전문 기업.",
                  "knowsAbout": [
                    "ASB GlassFloor",
                    "LED sports floor",
                    "smart gymnasium",
                    "스마트코트",
                    "스마트짐",
                    "스마트체육시설",
                    "multi-sports court",
                    "glass sports flooring",
                    "FIBA certified sports flooring"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.globecorp.co.kr/#website",
                  "name": "ASB GlassFloor Korea",
                  "alternateName": "GLOBE",
                  "url": "https://www.globecorp.co.kr",
                  "inLanguage": "ko-KR",
                  "publisher": {
                    "@id": "https://www.globecorp.co.kr/#organization"
                  }
                }
              ]
            })
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
