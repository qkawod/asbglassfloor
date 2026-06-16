import ProductHero from "@/components/products/ProductHero";
import LumiFlexAdvantages from "@/components/products/LumiFlexAdvantages";
import LumiFlexProjects from "@/components/LumiFlexProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB 풀LED 스마트코트 | ASB GlassFloor",
    description: "The future of sports venues. Full LED video floor for unlimited possibilities in sports, events, and entertainment with ASB 풀LED 스마트코트.",
    keywords: [
        "ASB 풀LED 스마트코트",
        "ASB LumiFlex",
        "루미플렉스",
        "풀LED 스포츠 플로어",
        "LED 농구 코트",
        "LED 비디오 플로어",
        "디지털 스포츠 바닥",
        "인터랙티브 스포츠 플로어",
        "스포츠 엔터테인먼트 코트",
        "NBA LED court",
        "ASB GlassFloor",
    ],
};

export default function LumiFlexPage() {
    return (
        <main className="bg-white min-h-screen text-black">
            <ProductHero
                title="ASB 풀LED 스마트코트"
                subtitle="코트 전체가 디지털 화면이 되는 풀 LED 스포츠 플로어"
                videoSrc="/IGNITE THE COURT The Future of Sports Venues with ASB GlassFloor.mp4"
            />
            <LumiFlexAdvantages />
            <LumiFlexProjects />
        </main>
    );
}
