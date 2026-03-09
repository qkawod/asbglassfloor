import ProductHero from "@/components/products/ProductHero";
import 풀LED 스마트코트Advantages from "@/components/products/풀LED 스마트코트Advantages";
import 풀LED 스마트코트Projects from "@/components/풀LED 스마트코트Projects";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB 풀LED 스마트코트 | ASB GlassFloor",
    description: "The future of sports venues. Full LED video floor for unlimited possibilities in sports, events, and entertainment with ASB 풀LED 스마트코트.",
};

export default function 풀LED 스마트코트Page() {
    return (
        <main className="bg-white min-h-screen text-black">
            <ProductHero
                title="ASB 풀LED 스마트코트"
                videoSrc="/IGNITE THE COURT The Future of Sports Venues with ASB GlassFloor.mp4"
            />
            <풀LED 스마트코트Advantages />
            <풀LED 스마트코트Projects />
        </main>
    );
}
