import ProductHero from "@/components/products/ProductHero";
import MultiSportsAdvantages from "@/components/products/MultiSportsAdvantages";
import MultiSportsProjects from "@/components/products/MultiSportsProjects";
import MultiSportsInfo from "@/components/products/MultiSportsInfo";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB MultiSports | ASB GlassFloor",
    description: "The most advanced sports floor in the world. Switch lines instantly for basketball, volleyball, badminton, and more with ASB MultiSports.",
};

export default function ProductsPage() {
    return (
        <main className="bg-deepBlack min-h-screen text-white">
            <ProductHero />
            <MultiSportsAdvantages />
            <MultiSportsProjects />
            <MultiSportsInfo />
        </main>
    );
}
