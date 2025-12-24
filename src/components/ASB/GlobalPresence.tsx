"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Countries", value: 70, suffix: "+" },
    { label: "Installations", value: 250, suffix: "+" },
    { label: "Years of Experience", value: 50, suffix: "+" },
    { label: "Patents", value: 30, suffix: "+" }
];

export default function GlobalPresence() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-deepBlack text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16">Global Impact</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="text-5xl md:text-7xl font-bold text-electricCyan mb-2">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-xl text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
