"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Partners() {
    const containerRef = useRef<HTMLDivElement>(null);

    const partners = [
        { name: "FIBA", logo: "/Logo/FIBA_1.svg" },
        { name: "University of Oxford", logo: "/Logo/Oxford.svg" },
        { name: "Nike", logo: "/Logo/NIKE.svg" },
        { name: "Audi", logo: "/Logo/Audi.svg" },
        { name: "Absen", logo: "/Logo/absen_01.png" },
        { name: "Microsoft", logo: "/Logo/Microsoft.svg" },
        { name: "Volleyball Bundesliga", logo: "/Logo/Bundesliga_Volleyball.svg" },
        { name: "Dell", logo: "/Logo/DELL.svg" },
        { name: "Supercup", logo: "/Logo/Supercup.svg" },
        { name: "Politecnico Milano", logo: "/Logo/Politecnico Milano_01.png" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo(".partners-header",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Grid Items Stagger Animation
            gsap.fromTo(".partner-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".partners-grid",
                        start: "top 85%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col justify-center py-24 w-full bg-[#F3F8FC] text-black">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-20">
                <div className="text-center mb-16 partners-header">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 text-black">
                        파트너스
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 w-full max-w-7xl mx-auto partners-grid">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="partner-card aspect-[4/5] bg-white rounded-sm flex items-center justify-center p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {partner.logo ? (
                                <div className="relative w-[85%] h-[85%]">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <span className="text-gray-400 font-bold text-center">
                                    {partner.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
