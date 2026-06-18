import ProductHero from "@/components/products/ProductHero";
import MultiSportsAdvantages from "@/components/products/MultiSportsAdvantages";
import MultiSportsProjects from "@/components/products/MultiSportsProjects";
import LumiFlexAdvantages from "@/components/products/LumiFlexAdvantages";
import LumiFlexProjects from "@/components/LumiFlexProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASB 스마트코트 | 풀LED 스마트코트 | ASB GlassFloor",
    description: "ASB 스마트코트와 ASB 풀LED 스마트코트를 한 페이지에서 확인하세요. 멀티스포츠 LED 라인 시스템부터 풀 LED 비디오 플로어까지 ASB GlassFloor의 스마트코트 솔루션을 소개합니다.",
    keywords: [
        "ASB 스마트코트",
        "ASB 풀LED 스마트코트",
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
        "풀LED 스포츠 플로어",
        "LED 비디오 플로어",
        "루미플렉스",
        "ASB GlassFloor",
    ],
};

function SmartCourtTransition() {
    return (
        <section className="relative -mb-px overflow-hidden bg-[linear-gradient(180deg,#F5F7FA_0%,#F5F7FA_18%,#E8EBEF_30%,#9A9A9A_47%,#303030_64%,#101010_82%,#111111_100%)] text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-[46vh] bg-gradient-to-b from-[#F5F7FA] via-[#F5F7FA]/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-[#111]/45 to-[#111]" />
                <div className="absolute inset-x-[10%] bottom-0 top-[56%] opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]">
                    <div className="smart-court-transition-line left-[18%] h-[68%] [animation-delay:-0.2s]" />
                    <div className="smart-court-transition-line left-[34%] h-[82%] [animation-delay:-1.7s]" />
                    <div className="smart-court-transition-line left-[52%] h-[74%] [animation-delay:-0.9s]" />
                    <div className="smart-court-transition-line left-[69%] h-[88%] [animation-delay:-2.3s]" />
                    <div className="smart-court-transition-line left-[84%] h-[64%] [animation-delay:-1.2s]" />
                </div>
                <div className="absolute inset-x-[12%] bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
            </div>

            <div className="mx-auto flex min-h-[86vh] w-full max-w-[1920px] flex-col justify-end px-6 pb-20 pt-[42vh] sm:px-8 md:min-h-[92vh] md:px-20 md:pb-28 md:pt-[46vh]">
                <div className="max-w-7xl">
                    <div className="mb-5 flex items-center gap-5 md:gap-6">
                        <p className="led-flow-text text-sm font-bold uppercase tracking-[0.34em] md:text-base">
                            From Lines to Light
                        </p>
                        <span className="led-flow-line hidden h-px flex-1 md:block" />
                    </div>
                    <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        라인을 넘어,
                        <br />
                        완전한 디지털 플로어로
                    </h2>
                    <p className="mt-7 max-w-4xl text-base font-medium leading-relaxed text-white/82 drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:text-lg md:mt-8 md:text-xl">
                        ASB 스마트코트가 다양한 종목의 라인을 즉시 전환하는 시스템이라면,
                        ASB 풀LED 스마트코트는 코트 전체를 영상과 데이터, 광고, 연출이 가능한 디지털 무대로 확장합니다
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function ProductsPage() {
    return (
        <main className="min-h-screen">
            <section id="asb-smart-court" className="bg-deepBlack text-white">
                <ProductHero
                    title="ASB 스마트코트"
                    subtitle="다양한 스포츠를 하나의 공간에서 구현하는 멀티스포츠 코트"
                />
                <MultiSportsAdvantages />
                <MultiSportsProjects />
            </section>

            <SmartCourtTransition />

            <section id="full-led-smartcourt" className="bg-deepBlack text-black">
                <ProductHero
                    title="ASB 풀LED 스마트코트"
                    subtitle="코트 전체가 디지털 화면이 되는 풀 LED 스포츠 플로어"
                    videoSrc="/IGNITE THE COURT The Future of Sports Venues with ASB GlassFloor.mp4"
                    topFade
                />
                <LumiFlexAdvantages />
                <LumiFlexProjects />
            </section>
        </main>
    );
}
