import ProductHero from "@/components/products/ProductHero";
import TechAdvantages from "@/components/technology/TechAdvantages";
import TechProjects from "@/components/technology/TechProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology | ASB GlassFloor",
    description: "Discover the advanced technology behind ASB GlassFloor. The perfect synergy of glass, aluminum, and LED.",
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
