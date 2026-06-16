import ASBHero from "@/components/ASBHero";
import ASBVision from "@/components/ASBVision";
import ASBTech from "@/components/ASBTech";
import ASBStats from "@/components/ASBStats";
import ASBTimeline from "@/components/ASBTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB GlassFloor 소개 | GLOBE",
    description: "독일 ASB GlassFloor의 역사, 기술력, 글로벌 설치 사례를 소개합니다. GLOBE는 ASB GlassFloor 한국 공식 파트너입니다.",
    keywords: [
        "ASB GlassFloor",
        "ASB GlassFloor Korea",
        "ASB 글라스플로어",
        "ASB 공식 파트너",
        "독일 스포츠 바닥재",
        "스마트 스포츠 코트",
        "글로브 ASB",
    ],
};

export default function ASBPage() {
    return (
        <main className="min-h-screen bg-deepGrey text-white selection:bg-neonCyan selection:text-black">
            <ASBHero />
            <ASBVision />
            <ASBTech />
            <ASBStats />
            <ASBTimeline />
        </main>
    );
}
