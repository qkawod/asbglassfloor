"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShieldCheck, Activity, Layers, Droplets } from "lucide-react";

export default function MaterialSafety() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".safety-card", {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: <Activity className="w-10 h-10 text-hotPink" />,
            title: "Joint-Friendly Elasticity",
            desc: "The floor is built on an elastic substructure, absorbing shock better than hardwood to protect athletes' joints.",
            gradient: "from-hotPink/20 to-transparent"
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-electricCyan" />,
            title: "Extreme Durability",
            desc: "Tempered safety glass designed to withstand heavy loads, scratches, and impacts. Lasts over 70 years.",
            gradient: "from-electricCyan/20 to-transparent"
        },
        {
            icon: <Layers className="w-10 h-10 text-yellow-400" />,
            title: "Perfect Slip Resistance",
            desc: "Ceramic dots etched into the surface provide the ideal balance of grip and slide, preventing friction burns.",
            gradient: "from-yellow-400/20 to-transparent"
        },
        {
            icon: <Droplets className="w-10 h-10 text-blue-400" />,
            title: "Easy Maintenance",
            desc: "Resistant to water and cleaning agents. No polishing or waxing required, ever.",
            gradient: "from-blue-400/20 to-transparent"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gray-500 uppercase tracking-widest text-sm mb-4 block">Engineered for Humans</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Safety Meets <span className="text-white decoration-hotPink decoration-2 underline underline-offset-4">Performance</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        You might think glass is fragile or slippery. Think again.
                        ASB GlassFloor is engineered to exceed the safety standards of traditional sports flooring.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="safety-card group relative p-8 rounded-2xl bg-deepGrey border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 bg-black/50 rounded-xl inline-block border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
