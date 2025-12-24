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
                title="ASB Technology"
                videoSrc="/메인영상.mp4"
            />
            <TechAdvantages />
            <TechProjects />
        </main>
    );
}
