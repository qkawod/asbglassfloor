import ReferencesPage from "@/components/ReferencesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "시공 및 도입 사례 | ASB GlassFloor",
    description: "NBA, FIBA, BMW Park, Oxford University 등 전 세계 ASB GlassFloor 및 스마트코트 도입 사례를 확인하세요.",
    keywords: [
        "ASB GlassFloor 사례",
        "ASB 시공 사례",
        "스마트코트 도입 사례",
        "LED 농구장 사례",
        "NBA LED court",
        "FIBA ASB GlassFloor",
        "BMW Park ASB",
        "Oxford ASB GlassFloor",
        "스포츠 플로어 레퍼런스",
    ],
};

export default function Page() {
    return <ReferencesPage />;
}
