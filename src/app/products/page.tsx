import ProductHero from "@/components/products/ProductHero";
import MultiSportsAdvantages from "@/components/products/MultiSportsAdvantages";
import MultiSportsProjects from "@/components/products/MultiSportsProjects";
import MultiSportsInfo from "@/components/products/MultiSportsInfo";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB 스마트코트 | ASB GlassFloor",
    description: "The most advanced sports floor in the world. Switch lines instantly for basketball, volleyball, badminton, and more with ASB 스마트코트.",
    keywords: [
        "ASB 스마트코트",
        "스마트코트",
        "스마트짐",
        "스마트체육시설",
        "멀티스포츠 코트",
        "멀티스포츠 플로어",
        "LED 라인 마킹",
        "다목적 체육관",
        "스마트 체육관",
        "농구 배구 배드민턴 겸용 코트",
        "체육관 바닥재",
        "실내 스포츠 플로어",
        "ASB GlassFloor",
    ],
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
