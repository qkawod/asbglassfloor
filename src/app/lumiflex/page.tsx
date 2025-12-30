import ProductHero from "@/components/products/ProductHero";
import LumiFlexAdvantages from "@/components/products/LumiFlexAdvantages";
import LumiFlexProjects from "@/components/LumiFlexProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB LumiFlex | ASB GlassFloor",
    description: "The future of sports venues. Full LED video floor for unlimited possibilities in sports, events, and entertainment with ASB LumiFlex.",
};

export default function LumiFlexPage() {
    return (
        <main className="bg-white min-h-screen text-black">
            <ProductHero
                title="ASB LumiFlex"
                videoSrc="/IGNITE THE COURT The Future of Sports Venues with ASB GlassFloor.mp4"
            />
            <LumiFlexAdvantages />
            <LumiFlexProjects />
        </main>
    );
}
