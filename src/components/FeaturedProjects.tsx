"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gridRef.current?.children;

            // Entry Animation
            if (items) {
                gsap.from(items, {
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                    },
                    y: 100, // Stronger Y movement
                    scale: 0.9, // Start slightly smaller
                    opacity: 0,
                    duration: 0.8, // Faster intro
                    stagger: 0.2,
                    ease: "power3.out",
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: "ARENA Dresden",
            subtitle: "ASB MultiSports",
            image: "/Dresden/Dresden_01.jpg", // Placeholder for Court 16
            link: "/references/BallsportARENA-Dresden",
            isExplore: true,
        },
        {
            title: "OYM",
            subtitle: "ASB MultiSports",
            image: "/OYM/OYM_swiss.jpg",
            link: "/references/OYM-College",
        },
        {
            title: "Oxford University",
            subtitle: "ASB MultiSports",
            image: "/University of oxford/asb-glassfloor-acer.jpg",
            link: "/references/Oxford-University",
        },
    ];

    return (
        <section ref={sectionRef} className="pt-20 pb-24 bg-white text-black">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-20">
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-square w-full overflow-hidden mb-6 rounded-xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-3">
                                <h3 className="text-3xl md:text-4xl text-gray-900 font-normal">
                                    {project.title}
                                </h3>

                                <div className="relative h-6 overflow-hidden">
                                    {/* Default State: ASB MultiSports */}
                                    <div className="absolute top-0 left-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                                        <span className="text-xs font-bold tracking-widest text-gray-500">
                                            {project.subtitle}
                                        </span>
                                    </div>

                                    {/* Hover State: Line + EXPLORE PROJECT */}
                                    <div className="absolute top-0 left-0 flex items-center gap-3 transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="w-8 h-[2px] bg-electricCyan" />
                                        <span className="text-xs font-bold tracking-widest text-gray-500">
                                            EXPLORE PROJECT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
