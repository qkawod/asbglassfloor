"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const advantagesData = [
    {
        title: "CERTIFIED ENGINEERING (검증된 엔지니어링)",
        description: "ASB LumiFlex는 프로 스포츠 경기에 최적화된 국제 공인 인증을 획득했습니다. FIBA(국제농구연맹), IHF(국제핸드볼연맹), FIVB(국제배구연맹)의 엄격한 기준을 충족하며, 면탄성 스포츠 바닥재 표준인 EN 14904를 준수합니다. 뛰어난 탄성과 미끄럼 저항성으로 선수의 관절을 보호하는 안전한 경기 환경을 제공합니다."
    },
    {
        title: "SAFER BY DESIGN (설계부터 남다른 안전성)",
        description: "특허받은 세라믹 도트 표면 처리는 기존 목재 마루를 능가하는 최상의 그립감과 탄성을 제공합니다. 넘어지거나 슬라이딩 시 발생하는 피부 마찰 화상(Friction burn)을 방지하며, 유해 증기나 냄새가 전혀 배출되지 않는 안전한 소재입니다."
    },
    {
        title: "UNLIMITED POSSIBILITIES (무한한 확장성)",
        description: "선수와 관중 모두에게 몰입감 넘치는 경험을 선사합니다. ASB LumiFlex는 단순한 바닥재를 넘어, 팀 로고와 스폰서 광고부터 몰입형 비디오 및 화려한 모션 그래픽까지 역동적인 콘텐츠를 자유롭게 표출하는 디지털 캔버스입니다."
    },
    {
        title: "INTERACTIVE INNOVATION (인터랙티브 혁신)",
        description: "스포츠와 첨단 기술, 그리고 팬 참여를 하나로 연결합니다. 트래킹 시스템 및 헬스 데이터를 연동하여 경기 데이터를 바닥 위에 실시간 비주얼로 구현할 수 있습니다. 다이내믹한 스폰서 노출부터 하프타임 쇼, 증강 현실(AR) 퍼포먼스까지, 선수와 구단, 스폰서, 팬 모두에게 차원이 다른 가치를 제공합니다."
    },
    {
        title: "DURABLE AND EASY TO MAINTAIN (압도적 내구성과 유지관리)",
        description: "최대 70년의 수명과 100,000시간 이상의 LED 수명을 자랑하는 ASB LumiFlex는 지속 가능한 솔루션입니다. 유리와 알루미늄 등 내구성이 강한 친환경 소재로 제작되어, 오랜 세월이 흘러도 마모 없이 초기 품질을 유지하며 별도의 표면 샌딩(Resurfacing) 작업이 필요 없습니다."
    }
];

export default function LumiFlexAdvantages() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Main Title and Line
            const mainTitle = sectionRef.current?.querySelector(".sticky-title");
            if (mainTitle) {
                gsap.from(mainTitle.children, {
                    scrollTrigger: {
                        trigger: mainTitle,
                        start: "top 85%",
                    },
                    y: 100, // Larger movement
                    opacity: 0,
                    filter: "blur(10px)", // Blur effect
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power4.out" // Stronger ease
                });
            }

            // Animate Scanner Line
            const scanner = sectionRef.current?.querySelector(".line-scanner");
            if (scanner) {
                gsap.fromTo(scanner,
                    { x: "-100%" },
                    {
                        x: "100%",
                        duration: 2,
                        ease: "power2.inOut",
                        repeat: -1,
                    }
                );
            }

            // Animate List Items
            itemsRef.current.forEach((item, index) => {
                if (!item) return;

                // Animate the children (Title and Description) sequentially
                gsap.from(item.children, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                    y: 50, // Larger movement
                    opacity: 0,
                    filter: "blur(5px)", // Blur effect
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out"
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 bg-deepBlack text-white overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/NBA UNVEILS STATE-OF-THE-ART LED COURT FOR ALL-STAR 2024 EVENTS TAKING PLACE AT LUCAS OIL STADIUM.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60" />
                {/* Boundary Gradient Fades */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-deepBlack to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-deepBlack to-transparent z-10" />
            </div>

            <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-12 gap-12">

                {/* Left Column: Title */}
                <div className="md:col-span-4">
                    <div className="sticky top-32 sticky-title">
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4 text-white">
                            Advantages
                        </h2>
                        <div className="relative h-[1.6px] w-48 bg-[var(--color-led-line)]/30 rounded-full shadow-[0_0_15px_var(--color-led-line)] overflow-hidden">
                            <div className="line-scanner absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" />
                        </div>
                    </div>
                </div>

                {/* Right Column: List */}
                <div className="md:col-span-8 space-y-16">
                    {advantagesData.map((item, i) => (
                        <div
                            key={i}
                            ref={el => { itemsRef.current[i] = el }}
                            className="border-b border-white/20 pb-12 last:border-0"
                        >
                            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mb-4">
                                {item.title}
                            </h3>
                            <p className="text-lg text-white font-medium leading-relaxed whitespace-pre-line text-pretty break-keep">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
