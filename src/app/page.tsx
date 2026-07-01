import Hero from "@/components/Hero";
import CoreFeatures from "@/components/CoreFeatures";
import ProductShowcase from "@/components/ProductShowcase";
import MultiSportsDemo from "@/components/MultiSportsDemo";
import Partners from "@/components/Partners";
import FeaturedProjects from "@/components/FeaturedProjects";
import LumiFlexProjects from "@/components/LumiFlexProjects";
import LumiFlexInfo from "@/components/LumiFlexInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: "ASB GlassFloor Korea | GLOBE",
  description:
    "GLOBE는 ASB GlassFloor 한국 공식 파트너로 LED 스포츠 플로어와 스마트코트 솔루션을 제공합니다.",
  keywords: [
    "ASB GlassFloor Korea",
    "ASB GlassFloor",
    "ASB 글라스플로어",
    "ASB 글래스플로어",
    "ASB 스마트코트",
    "스마트코트",
    "스마트짐",
    "스마트체육시설",
    "LED 스포츠 플로어",
    "글라스플로어",
    "스마트체육관",
    "멀티스포츠 코트",
    "체육관 바닥재",
    "농구장 바닥재",
    "FIBA 인증 바닥재",
    "GLOBE",
    "글로브코퍼레이션",
  ],
  openGraph: {
    title: "ASB GlassFloor Korea | GLOBE",
    description:
      "글라스플로어, LED 스포츠 플로어, 스마트코트, 스마트체육관, 멀티스포츠 코트를 위한 ASB GlassFloor 한국 공식 파트너.",
    url: "https://www.globecorp.co.kr",
    siteName: "ASB GlassFloor Korea",
    locale: "ko_KR",
    type: "website",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ASB GlassFloor Korea",
  url: "https://www.globecorp.co.kr",
  description:
    "ASB GlassFloor 한국 공식 파트너 GLOBE의 메인페이지. 글라스플로어, LED 스포츠 플로어, 스마트코트, 스마트체육관, 멀티스포츠 코트 솔루션을 소개합니다.",
  about: [
    "ASB GlassFloor",
    "LED sports floor",
    "smart sports court",
    "스마트코트",
    "스마트짐",
    "스마트체육시설",
    "multi-sports floor",
    "glass sports flooring",
  ],
  primaryImageOfPage: "https://www.globecorp.co.kr/asb-og-image.jpg",
};




export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-electricCyan selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero />
      <CoreFeatures />
      <ProductShowcase />
      <MultiSportsDemo />
      <FeaturedProjects />
      <LumiFlexInfo />
      <LumiFlexProjects />
      <Partners />
    </main>
  );
}
