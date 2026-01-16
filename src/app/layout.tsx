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
  title: "ASB GlassFloor ㅣ ASB 글라스플로어",
  description: "독일ASB 국내 독점 공급사ㅣ최첨단 스마트 체육관 시스템 ㅣ ASB 국내 공식 사이트",
  keywords: "asbglassfloor, asb글라스플로어, asb글래스플로어, asb, asbkorea, asb글라스, 에이에스비, 에이에스비글라스플로어, 루미플렉스, 멀티스포츠플로어, led플로어, led바닥재, 유리바닥재, 글라스플로어, 글라스led플로어, 다목적체육관, 글래스바닥재, 스마트체육관, led체육관, 스포츠플로어",
  openGraph: {
    title: "ASB GlassFloor ㅣ ASB 글라스플로어",
    description: "독일ASB 국내 독점 공급사ㅣ최첨단 스마트 체육관 시스템 ㅣ ASB 국내 공식 사이트",
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
