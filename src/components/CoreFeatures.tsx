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
                <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-6 md:px-0">
                    {/* Feature 1: DURABILITY */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold uppercase tracking-wider">DURABILITY (내구성)</h3>
                        <p className="text-gray-600 leading-relaxed text-sm break-keep">
                            특수 강화 유리와 알루미늄 구조로 설계되어 극한의 하중과 충격에도 뛰어난 내구성을 발휘합니다.
                            <br className="my-2 block" />
                            최대 70년에 달하는 긴 수명을 자랑하며, 장기간 사용에도 유지보수 부담이 거의 없습니다.
                        </p>
                    </div>

                    {/* Feature 2: VERSATILITY */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold uppercase tracking-wider">VERSATILITY (다목적성)</h3>
                        <p className="text-gray-600 leading-relaxed text-sm break-keep">
                            하나의 공간에서 다양한 스포츠와 이벤트를 모두 구현할 수 있습니다.
                            <br className="my-2 block" />
                            LED 라인을 통해 경기 종목을 즉시 전환할 수 있으며, 비디오 기능을 활용한 무한한 연출이 가능합니다.
                        </p>
                    </div>

                    {/* Feature 3: SUSTAINABILITY */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold uppercase tracking-wider">SUSTAINABILITY (지속 가능성)</h3>
                        <p className="text-gray-600 leading-relaxed text-sm break-keep">
                            친환경 소재 사용과 긴 수명을 통해 환경에 미치는 영향을 최소화합니다.
                            <br className="my-2 block" />
                            ASB GlassFloor는 미래 세대를 위한 책임 있는 지속 가능한 선택입니다.
                        </p>
                    </div>

                    {/* Feature 4: PERFORMANCE */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold uppercase tracking-wider">PERFORMANCE (퍼포먼스)</h3>
                        <p className="text-gray-600 leading-relaxed text-sm break-keep">
                            선수에게 최적의 탄성과 마찰력을 제공해 부상 위험을 줄이고 경기력을 극대화합니다.
                            <br className="my-2 block" />
                            국제 스포츠 연맹의 엄격한 인증 기준을 충족한, 프로 레벨의 퍼포먼스를 제공합니다.
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
                            <img
                                src="/FIBA.webp"
                                alt="FIBA"
                                className="object-contain w-full h-full"
                            />
                        </div>

                        {/* FIVB */}
                        <div className="relative w-96 h-48">
                            <img
                                src="/FIVB.webp"
                                alt="FIVB"
                                className="object-contain w-full h-full"
                            />
                        </div>

                        {/* IHF */}
                        <div className="relative w-96 h-48">
                            <img
                                src="/IHF.webp"
                                alt="IHF"
                                className="object-contain w-full h-full"
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
