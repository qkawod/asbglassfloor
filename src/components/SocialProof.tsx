"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
    const containerRef = useRef<HTMLDivElement>(null);

    const certifications = [
        { name: "FIBA", label: "Certified Level 1", color: "#F0B323" }, // Basketball
        { name: "IHF", label: "Approved Floor", color: "#009FE3" },    // Handball
        { name: "FIVB", label: "Official Supplier", color: "#E3001B" }, // Volleyball
        { name: "WSF", label: "Accredited", color: "#000000" },        // Squash
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".cert-item",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-24 w-full bg-deepBlack border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
                    {/* Text Content */}
                    <div className="max-w-2xl text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Certified for Professional Sports
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            ASB GlassFloor 제품은 국제농구연맹(FIBA), 국제핸드볼연맹(IHF), 국제배구연맹(FIVB) 등 최고 수준의 경기 대회에서 인증받았으며, 충격 흡수, 공의 반발력, 미끄럼 저항, 마찰력 등 모든 성능 기준을 완벽하게 충족합니다.
                        </p>
                    </div>

                    {/* Logos */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-item flex flex-col items-center gap-3 group">
                                <div
                                    className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-white/5 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10"
                                    style={{ boxShadow: `0 0 20px ${cert.color}10` }}
                                >
                                    <span
                                        className="text-xl font-black tracking-tighter"
                                        style={{ color: cert.color === "#000000" ? "#FFF" : cert.color }}
                                    >
                                        {cert.name}
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                                    {cert.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                    <p>&copy; 2025 ASB GlassFloor. Engineered in Germany.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Imprint</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
