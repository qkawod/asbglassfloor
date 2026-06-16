import ProductHero from "@/components/products/ProductHero";
import TechAdvantages from "@/components/technology/TechAdvantages";
import TechProjects from "@/components/technology/TechProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology | ASB GlassFloor",
    description: "Discover the advanced technology behind ASB GlassFloor. The perfect synergy of glass, aluminum, and LED.",
    keywords: [
        "ASB GlassFloor 기술",
        "스포츠 바닥재 기술",
        "강화 유리 스포츠 플로어",
        "세라믹 도트 표면",
        "LED 스포츠 플로어 구조",
        "충격 흡수 스포츠 바닥",
        "친환경 스포츠 바닥재",
        "DIN 18032",
        "EN 14904",
        "FIBA 인증 스포츠 플로어",
    ],
};

export default function TechnologyPage() {
    return (
        <main className="bg-white min-h-screen text-black">
            <ProductHero
                title="ASB 테크놀로지"
                subtitle="안정성, 내구성, 디지털 기술을 결합한 스마트 스포츠 인프라"
                videoSrc="/메인영상.mp4"
            />
            <TechAdvantages />
            <TechProjects />
        </main>
    );
}
