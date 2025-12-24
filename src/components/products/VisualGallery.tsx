"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2 } from "lucide-react";

export default function VisualGallery() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".gallery-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const images = [
        {
            src: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2669&auto=format&fit=crop",
            category: "Professional Sports",
            title: "FIBA Basketball World Cup",
            size: "col-span-1 md:col-span-2 row-span-2"
        },
        {
            src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2670&auto=format&fit=crop",
            category: "Events",
            title: "Nike Product Launch",
            size: "col-span-1 row-span-1"
        },
        {
            src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2670&auto=format&fit=crop",
            category: "Education",
            title: "University of Oxford Gym",
            size: "col-span-1 row-span-1"
        },
        {
            src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2836&auto=format&fit=crop",
            category: "Multi-Use",
            title: "Private Sports Complex",
            size: "col-span-1 md:col-span-2 row-span-1"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-deepBlack">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">Global References</h2>
                        <p className="text-gray-400">Where innovation meets application.</p>
                    </div>
                    <button className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white hover:text-electricCyan hover:border-electricCyan transition-colors pb-1">
                        VIEW ALL PROJECTS <Maximize2 size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    {images.map((item, i) => (
                        <div
                            key={i}
                            className={`gallery-item group relative overflow-hidden rounded-xl bg-gray-900 ${item.size} cursor-pointer`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-electricCyan text-xs font-bold tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white hover:text-electricCyan hover:border-electricCyan transition-colors pb-1">
                        VIEW ALL PROJECTS <Maximize2 size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
}
