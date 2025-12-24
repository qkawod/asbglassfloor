"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grid, Layers, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const infoItems = [
    {
        icon: <Grid className="w-12 h-12 text-neonBlue" />,
        title: "One Sports Floor – Many Possibilities",
        description: [
            "Whether used as a sports floor for professional sports or as a multipurpose floor in public halls, the ASB MultiSports inspires users and facility operators alike.",
            "The floor not only provides significant benefits for athletes due to its joint-friendly properties, but also enables the practice of parasports.",
            "All LED marking lines can be easily turned on or off via touchscreen."
        ]
    },
    {
        icon: <Layers className="w-12 h-12 text-hotPink" />,
        title: "Is Glass Better? Definitely!",
        description: [
            "The floor is made of tempered safety glass and can withstand enormous forces. The glass undergoes several special treatments to achieve the ideal elasticity, slip resistance and light reflection.",
            "In terms of deflection and friction, the ASB MultiSports achieves equal or better results than a conventional floor due to its superior elasticity."
        ]
    },
    {
        icon: <ShieldCheck className="w-12 h-12 text-neonYellow" />,
        title: "Durable and Easy to Maintain",
        description: [
            "Due to its special surface, the floor is durable, easy to maintain, and robust. It does not need extra coverings for events as street shoes, liquids and stage constructions pose no challenge.",
            "Cleaning requires less effort than a conventional floor. The matte reflection ensures scratches remain invisible even after years of use."
        ]
    }
];

export default function MultiSportsInfo() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-deepBlack relative overflow-hidden">
            {/* Background Gradient/Noise */}
            <div className="absolute inset-0 bg-gradient-to-b from-deepBlack via-gray-900/20 to-deepBlack pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    {infoItems.map((item, index) => (
                        <div
                            key={index}
                            ref={el => { cardsRef.current[index] = el }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Icon Box */}
                            <div className="mb-6 p-4 rounded-xl bg-black/40 w-fit border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-neonBlue transition-colors duration-300">
                                {item.title}
                            </h3>

                            <div className="space-y-4">
                                {item.description.map((text, i) => (
                                    <p key={i} className="text-gray-400 leading-relaxed text-sm">
                                        {text}
                                    </p>
                                ))}
                            </div>

                            {/* Hover Shadow */}
                            <div className="absolute inset-0 rounded-2xl bg-neonBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
