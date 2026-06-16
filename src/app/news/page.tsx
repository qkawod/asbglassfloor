import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "뉴스 | ASB GlassFloor Korea",
    description: "ASB GlassFloor, 스마트코트, 풀LED 스포츠 플로어와 관련된 최신 소식과 프로젝트 뉴스를 확인하세요.",
    keywords: [
        "ASB GlassFloor 뉴스",
        "ASB 스마트코트 뉴스",
        "LED 스포츠 플로어 뉴스",
        "글라스플로어 소식",
        "스마트 체육관 뉴스",
    ],
};

export default function NewsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
            <h1 className="text-4xl font-bold">NEWS</h1>
        </main>
    );
}
