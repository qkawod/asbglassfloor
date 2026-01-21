
import ProductHero from "@/components/products/ProductHero";
import MultiSportsDemo from "@/components/MultiSportsDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Try Our System | ASB GlassFloor",
    description: "Experience the ASB GlassFloor system with our interactive demo.",
};

export default function TryOurSystemPage() {
    return (
        <main className="bg-deepBlack min-h-screen text-white">
            <ProductHero
                title="Try Our System"
                videoSrc="/ASB GlassFloor Athletes Lab 2.0 in Orlando.mp4"
            />
            <MultiSportsDemo />
        </main>
    );
}
