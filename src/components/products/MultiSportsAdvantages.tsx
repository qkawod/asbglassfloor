"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const advantagesData = [
    {
        title: "CERTIFIED (공인 인증)",
        description: "ASB MultiSports는 국제 및 프로 스포츠 공식 인증을 획득한 솔루션으로, 기존 코트의 복잡한 라인으로 인한 시각적 혼란을 효과적으로 해소합니다."
    },
    {
        title: "MULTIPURPOSE (다목적 활용성)",
        description: "터치스크린으로 제어되는 맞춤형 LED 라인 시스템을 통해, 스포츠 경기와 행사·이벤트를 하나의 공간에서 유연하게 전환할 수 있습니다."
    },
    {
        title: "SAFE (탁월한 안전성)",
        description: "특허받은 세라믹 도트 표면 처리를 적용하여 기존 목재 마루를 능가하는 최상의 그립감과 탄성을 제공합니다.\n넘어지거나 슬라이딩 상황에서도 피부 마찰 화상(Friction burn)이 발생하지 않으며, 유해 물질이나 냄새가 전혀 없는 인체 친화적이고 안전한 소재로 제작되었습니다."
    },
    {
        title: "DURABLE (압도적인 내구성)",
        description: "강화 유리와 알루미늄 등 고내구성 소재로 제작되어 약 70년에 달하는 긴 기대 수명을 자랑합니다.\n장기간 사용 후에도 눈에 띄는 마모 없이 초기 품질과 성능을 안정적으로 유지합니다."
    },
    {
        title: "EASY TO MAINTAIN (유지보수의 혁신)",
        description: "외부 신발 착용, 음료 등 오염, 무대 장치 설치 등 다양한 상황에서도 별도의 바닥 보양 작업이 필요 없습니다.\n목재 플로어와 달리 주기적인 표면 샌딩(Resurfacing) 작업이 전혀 필요 없으며, 청소와 유지관리가 기존 바닥재 대비 훨씬 간편합니다."
    }
];

export default function MultiSportsAdvantages() {
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
        <section ref={sectionRef} className="relative py-24 bg-deepBlack text-white">
            {/* Background Video Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-deepBlack/40 z-10" /> {/* Lighter overlay */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-deepBlack to-transparent z-20" /> {/* Top Blend */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/OYM Die neue Welt des Spitzensports.MOV" type="video/quicktime" />
                    <source src="/OYM Die neue Welt des Spitzensports.MOV" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-12 gap-12">

                {/* Left Column: Title */}
                <div className="md:col-span-4">
                    <div className="sticky top-32 sticky-title">
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">
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
                            className="border-b border-white/10 pb-12 last:border-0"
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
