
import ProductHero from "@/components/products/ProductHero";
import TrySystemDemo from "@/components/TrySystemDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Try Our System | ASB GlassFloor",
    description: "Experience the interactive MultiSports system in action.",
};

export default function TryOurSystemPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-electricCyan selection:text-white">
            <ProductHero
                title="Try Our System"
                videoSrc="/ASB GlassFloor Athletes Lab 2.0 in Orlando.mp4"
            />
            <TrySystemDemo />
        </main>
    );
}
