import ProductHero from "@/components/products/ProductHero";
import MultiSportsAdvantages from "@/components/products/MultiSportsAdvantages";
import MultiSportsProjects from "@/components/products/MultiSportsProjects";
import MultiSportsInfo from "@/components/products/MultiSportsInfo";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB 스마트코트 | ASB GlassFloor",
    description: "The most advanced sports floor in the world. Switch lines instantly for basketball, volleyball, badminton, and more with ASB 스마트코트.",
};

export default function ProductsPage() {
    return (
        <main className="bg-deepBlack min-h-screen text-white">
            <ProductHero
                title="ASB 스마트코트"
                subtitle="다양한 스포츠를 하나의 공간에서 구현하는 멀티스포츠 코트"
            />
            <MultiSportsAdvantages />
            <MultiSportsProjects />
        </main>
    );
}
