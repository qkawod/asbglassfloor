import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ASBHero from "@/components/ASBHero";
import ASBVision from "@/components/ASBVision";
import ASBTech from "@/components/ASBTech";
import ASBStats from "@/components/ASBStats";
import ASBTimeline from "@/components/ASBTimeline";
import ASBSeoContent from "@/components/ASBSeoContent";

export const metadata: Metadata = {
    title: "ASB GlassFloor | 국제 인증 글라스플로어 시스템 | GLOBE",
    description: "ASB GlassFloor는 FIBA, NBA 등 국제 인증을 획득한 프리미엄 글라스플로어 시스템입니다. GLOBE는 ASB GlassFloor 공식 파트너로 설계, 공급, 기술 지원까지 제공합니다.",
};

export default function ASBPage() {
    return (
        <main className="min-h-screen bg-deepGrey text-white selection:bg-neonCyan selection:text-black">
            <Navbar />
            <ASBHero />
            <ASBSeoContent />
            <ASBVision />
            <ASBTech />
            <ASBStats />
            <ASBTimeline />
        </main>
    );
}
