"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    {
        year: "1965",
        title: "The Beginning",
        description: "ASB is founded by Horst Babinsky, revolutionizing squash court construction with innovative system building methods."
    },
    {
        year: "2006",
        title: "The GlassFloor Invention",
        description: "The first ASB GlassFloor is unveiled, marking a paradigm shift in sports flooring technology."
    },
    {
        year: "2012",
        title: "First LED Court",
        description: "Introduction of the ASB MultiSports, the first glass floor with LED marking lines that can be switched on and off."
    },
    {
        year: "Today",
        title: "Global Innovation Leader",
        description: "With installations in over 70 countries, ASB GlassFloor continues to set the standard for modern sports venues."
    }
];

export default function OurStory() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".milestone-item");

            items.forEach((item: any, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.2
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-white text-deepBlack">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From a squash court manufacturer to a global technology leader.
                    </p>
                </div>

                <div className="relative border-l-2 border-gray-200 ml-4 md:ml-1/2 space-y-12">
                    {milestones.map((item, index) => (
                        <div key={index} className="milestone-item relative pl-8 md:pl-0">
                            {/* Dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-electricCyan border-4 border-white shadow-sm" />

                            <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-5/12 mb-4 md:mb-0">
                                    <span className="text-electricCyan font-bold text-xl block mb-2">{item.year}</span>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="md:w-5/12" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
