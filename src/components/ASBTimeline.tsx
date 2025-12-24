"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    { year: '1965', title: '설립', description: '독일 ASB 설립' },
    { year: '1976', title: '혁신', description: 'ASB 스쿼시 시스템 개발' },
    { year: '2007', title: '최초의 GlassCourt', description: 'AIDAdiva 크루즈 선에 설치.' },
    { year: '2012', title: 'ASB GlassFloor', description: 'LED플로어 시스템' },
    { year: 'Today', title: '글로벌 리더', description: '전 세계 디지털 스포츠 표면의 표준을 정립.' },
];

export default function ASBTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const line = lineRef.current;
        const content = contentRef.current;

        if (!section || !line || !content) return;

        // Animate the vertical line drawing down
        gsap.fromTo(line,
            { height: 0 },
            {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top center',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            }
        );

        // Animate items fading in
        itemsRef.current.forEach((item, index) => {
            if (!item) return;
            gsap.fromTo(item,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 95%',
                    }
                }
            );
        });

    }, []);

    return (
        <section ref={sectionRef} className="pt-32 pb-64 bg-white text-black relative">
            <div className="max-w-5xl mx-auto px-6 relative">
                <h2 className="text-4xl md:text-6xl font-medium text-black mb-24 tracking-tight text-center">Engineering Milestones</h2>

                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-32 bottom-0 w-1 bg-black/10 -translate-x-1/2">
                    <div ref={lineRef} className="w-full bg-[#FFE57F] shadow-[0_0_15px_rgba(255,229,127,0.6)]" />
                </div>

                <div ref={contentRef} className="space-y-24">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content Side */}
                            <div className={`md:w-1/2 pl-12 md:pl-0 text-left md:text-right ${index % 2 === 0 ? 'md:pl-32' : 'md:pr-32'}`}>
                                <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <span className="text-5xl font-bold text-[#FFE57F] block mb-2 drop-shadow-[0_0_8px_rgba(255,229,127,0.5)]">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-[#FFE57F] rounded-full -translate-x-1/2 mt-3 z-10 box-shadow-[0_0_10px_rgba(255,229,127,0.5)]" />

                            {/* Empty Side for Balance */}
                            <div className="hidden md:block md:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
