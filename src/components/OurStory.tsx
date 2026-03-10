"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const historyData = [
    { year: '1965', event: 'ASB 최초설립' },
    { year: '1968', event: '"Trelement" 알루미늄 건축용 프로파일 최초개발\n독일관공서 납품 및 시공' },
    { year: '1972', event: 'ASB특허 시공공법 개발, 서독 관련업계 1위 실적 달성' },
    { year: '1976', event: 'ASB스쿼시 시스템 개발 및 특허등록' },
    { year: '1977', event: 'ASB 시스템 40 독일 최고권위(ZDF) 스포츠 프로그램상 수상' },
    { year: '1978', event: 'ASB프로 글라스 백월 개발' },
    { year: '1979', event: 'ASB스포츠 플로어 및 이동식 wall개발' },
    { year: '1987', event: '스포츠연맹 "스포츠 혁신 기업상" 수상' },
    { year: '1990', event: 'ASB Game court' },
    { year: '1995', event: 'ASB RainbowCourts' },
    { year: '1998', event: 'ASB Show GlassCourt' },
    { year: '2000', event: 'ASB Sensitive Tin / ASB TopSquash' },
    { year: '2002', event: '세계스쿼시연맹(WSF) 이노베이션상 수상' },
    { year: '2006', event: '멀티스포츠 플로어 최초개발' },
    { year: '2007', event: '세계최초 글라스코트_AIDAdiva크루즈' },
    { year: '2010', event: 'ASB이동식코트 / 인터렉티브 ASB TopSquash' },
    { year: '2012', event: '전세계 영업 및 물류 ASB GMBH 법인통합' },
    { year: '2014', event: 'ASB PermanentGlassCourt' },
];

const OurStory = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const items = itemsRef.current;

        if (!section || !title) return;

        gsap.fromTo(
            title,
            { y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                },
            }
        );

        items.forEach((item, index) => {
            if (!item) return;
            gsap.fromTo(
                item,
                { y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: (index % 4) * 0.1, // Stagger slightly based on position
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                    },
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-zinc-900 text-white overflow-hidden relative border-t border-zinc-800">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div ref={titleRef} className="mb-20 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Story</h2>
                    <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
                    <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        HISTORY_ASB Since 1965
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative">
                    {/* Central Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-blue-900/50 to-transparent -translate-x-1/2" />

                    {historyData.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            className={`relative flex flex-col ${index % 2 === 0
                                ? 'md:items-end md:text-right md:pr-16'
                                : 'md:items-start md:text-left md:pl-16'
                                }`}
                        >
                            {/* Dot on the line */}
                            <div className={`hidden md:block absolute top-3 w-4 h-4 rounded-full border-4 border-zinc-950 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10 ${index % 2 === 0 ? '-right-[8px]' : '-left-[8px]'
                                }`} />

                            {/* Connector Line (Horizontal) */}
                            <div className={`hidden md:block absolute top-[18px] h-px bg-blue-900/50 w-12 ${index % 2 === 0 ? 'right-4' : 'left-4'
                                }`} />

                            <div className="text-5xl font-bold text-blue-600/90 mb-3 tracking-tighter">{item.year}</div>
                            <div className="text-lg text-gray-300 font-medium leading-relaxed whitespace-pre-line">
                                {item.event}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStory;
