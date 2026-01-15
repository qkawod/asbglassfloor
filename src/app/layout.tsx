import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASB GlassFloor | 세계 최초의 LED 유리 바닥 (ASB GlassFloor Korea)",
  description: "ASB GlassFloor, LumiFlex, 스마트체육관, LED바닥재, 유리바닥, 스포츠플로어 솔루션. 과천자이체육관 등 다목적체육관 및 커뮤니티센터 시공 사례. ASB KOREA 공식 홈페이지.",
  keywords: "ASBGlassFloor, LumiFlex, ASB바닥재, ASB체육관, ASBKOREA, 글래스플로어, 글라스플로어, LED바닥재, 유리바닥, 강화유리플로어, 스마트플로어, 스마트체육관, 스마트짐, 체육관바닥, 다목적체육관, 풀LED바닥, 스포츠시설, 학교체육관, 스포츠플로어, 실내체육관, 과천자이체육관, 커뮤니티센터, 피클볼, 루미플렉스",
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
    'naver-site-verification': 'c2450537233866d63d662f5567b4abc61204d807', // Placeholder code
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
