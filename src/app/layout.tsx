import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASB GlassFloor | 세계 최초의 LED 유리 바닥 (ASB GlassFloor Korea)",
  description: "ASB GlassFloor, LumiFlex, 스마트체육관, LED바닥재, 유리바닥, 스포츠플로어 솔루션. 과천자이체육관 등 다목적체육관 및 커뮤니티센터 시공 사례. ASB KOREA 공식 홈페이지.",
  keywords: "asbglassfloor, asb글라스플로어, asb글래스플로어, asb, asbkorea, asb글라스, 에이에스비, 에이에스비글라스플로어, 루미플렉스, 멀티스포츠플로어, led플로어, led바닥재, 유리바닥재, 글라스플로어, 글라스led플로어, 다목적체육관, 글래스바닥재, 스마트체육관, led체육관, 스포츠플로어",
  openGraph: {
    title: "ASB GlassFloor | 세계 최초의 LED 유리 바닥",
    description: "ASB GlassFloor Korea - 스포츠, 그 이상의 경험. LED 유리 바닥재와 루미플렉스로 만드는 최첨단 스마트 체육관.",
    url: "https://www.globecorp.co.kr",
    siteName: "ASB GlassFloor Korea",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/asb-og-image.jpg", // 기본 OG 이미지가 있다면 설정, 없으면 추후 추가 필요
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
    <html lang="en">
      <body className={`${inter.className} antialiased bg-deepBlack text-white break-keep whitespace-pre-line`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
