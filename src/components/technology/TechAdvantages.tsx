"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const advantagesData = [
    {
        title: "INNOVATION (혁신)",
        description: "ASB GlassFloor의 기술은 스포츠 바닥재의 새로운 기준을 제시합니다. 첨단 유리 공학과 LED 기술의 결합으로 이전에는 불가능했던 기능들을 현실로 만듭니다."
    },
    {
        title: "DURABILITY (내구성)",
        description: "특수 강화 유리와 알루미늄 구조는 극한의 하중과 충격에도 견딜 수 있도록 설계되었습니다. 최대 70년의 수명을 자랑하며, 유지보수가 거의 필요하지 않습니다."
    },
    {
        title: "VERSATILITY (다목적성)",
        description: "하나의 공간에서 모든 스포츠와 이벤트를 소화할 수 있습니다. LED 라인을 통해 경기 종목을 즉시 변경하고, 비디오 기능을 통해 무한한 연출이 가능합니다."
    },
    {
        title: "SUSTAINABILITY (지속가능성)",
        description: "친환경 소재 사용과 긴 수명으로 환경에 미치는 영향을 최소화합니다. ASB GlassFloor는 미래 세대를 위한 지속 가능한 선택입니다."
    },
    {
        title: "PERFORMANCE (퍼포먼스)",
        description: "선수들에게 최적의 탄성과 마찰력을 제공하여 부상을 방지하고 경기력을 향상시킵니다. 국제 스포츠 연맹의 엄격한 인증 기준을 충족합니다."
    }
];

export default function TechAdvantages() {
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
        <section ref={sectionRef} className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/glass-production-packaging-1024x666.jpeg"
                    alt="Glass Production"
                    fill
                    className="object-cover"
                />
                {/* Black Overlay for text readability */}
                <div className="absolute inset-0 bg-black/80"></div>

                {/* Gradient Fade for smooth transition at the top */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 relative z-10">

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
                            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line text-pretty">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
