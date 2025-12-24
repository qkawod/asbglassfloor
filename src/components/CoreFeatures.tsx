"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CoreFeatures() {
    const containerRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const certificationsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Feature Columns
            const featureItems = featuresRef.current?.children;
            if (featureItems) {
                gsap.from(featureItems, {
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: "top 80%",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2, // Stagger effect for columns
                    ease: "power2.out"
                });
            }

            // Animate Certification Section
            if (certificationsRef.current) {
                const certElements = certificationsRef.current.children;
                gsap.from(certElements, {
                    scrollTrigger: {
                        trigger: certificationsRef.current,
                        start: "top 80%",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15, // Stagger title, text, logos
                    ease: "power2.out"
                });
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col bg-white text-black">
            <div className="container mx-auto px-4 flex-1 flex flex-col">
                {/* Spacer for top balance */}
                <div className="flex-1 min-h-[4rem]" />

                {/* Features Grid */}
                <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">독보적인 다기능성</h3>
                        <p className="text-gray-600 leading-relaxed">
                            단일 표면에서 다양한 스포츠 활동 간에 매끄럽게 전환하여 시간과 자원을 절약합니다.
                            농구에서 배구에 이르기까지 ASB GlassFloor는 손쉽게 적응하여 공간 활용을 극대화하고 다용도성을 향상시킵니다.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">신뢰할 수 있는 안전성</h3>
                        <p className="text-gray-600 leading-relaxed">
                            미끄럼 방지 세라믹 도트로 설계되어 선수들에게 확실한 마찰력을 제공하며 미끄러짐과 넘어짐의 위험을 줄입니다.
                            최고 스포츠 기구의 승인을 받아 가장 높은 안전 기준을 충족합니다.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">향상된 내구성</h3>
                        <p className="text-gray-600 leading-relaxed">
                            지속적인 강도를 위해 설계되어 시간이 지나도 외관을 유지하면서 격렬한 스포츠 활동의 혹독함을 견딥니다.
                            시설에 지속적인 가치를 제공하는 유지 보수가 필요 없는 솔루션을 즐겨보세요.
                        </p>
                    </div>
                </div>

                {/* Spacer for middle balance */}
                <div className="flex-1 min-h-[4rem]" />

                {/* Certifications Section */}
                <div ref={certificationsRef} className="text-center mx-auto w-full">
                    <h3 className="text-3xl md:text-5xl font-medium mb-8 max-w-4xl mx-auto">Certified for Professional Sports</h3>
                    <p className="text-gray-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed">
                        ASB GlassFloor는 국제농구연맹(FIBA), 국제핸드볼연맹(IHF), 국제배구연맹(FIVB) 등 주요 국제 스포츠 연맹의 최고 등급 인증을 획득했습니다. 충격 흡수성, 공 반발력, 미끄럼 저항성 등 엄격한 성능 테스트를 모두 통과하여 프로 경기에서도 완벽한 퍼포먼스를 보장합니다.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 opacity-90">
                        {/* FIBA */}
                        <div className="relative w-96 h-48">
                            <Image
                                src="/FIBA.png.webp"
                                alt="FIBA"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* FIVB */}
                        <div className="relative w-96 h-48">
                            <Image
                                src="/FIVB.png.webp"
                                alt="FIVB"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* IHF */}
                        <div className="relative w-96 h-48">
                            <Image
                                src="/IHF.png.webp"
                                alt="IHF"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Spacer for bottom balance */}
                <div className="flex-1 min-h-[4rem]" />
            </div>
        </section>
    );
}
