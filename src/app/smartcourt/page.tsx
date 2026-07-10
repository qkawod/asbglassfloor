import ProductHero from "@/components/products/ProductHero";
import MultiSportsAdvantages from "@/components/products/MultiSportsAdvantages";
import MultiSportsProjects from "@/components/products/MultiSportsProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB 스마트코트 | ASB GlassFloor",
    description: "ASB 스마트코트는 다양한 스포츠 라인을 즉시 전환해 하나의 공간에서 여러 종목을 구현하는 멀티스포츠 코트 솔루션입니다.",
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
        <main className="min-h-screen">
            <section className="bg-deepBlack text-white">
                <ProductHero
                    title="ASB 스마트코트"
                    subtitle="다양한 스포츠를 하나의 공간에서 구현하는 멀티스포츠 코트"
                />
                <MultiSportsAdvantages />
                <MultiSportsProjects />
            </section>
        </main>
    );
}
