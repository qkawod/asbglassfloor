"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ASBTech() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Title
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Animate Text
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out"
            });

            // Animate Grid Items
            const items = gridRef.current?.children;
            if (items) {
                gsap.from(items, {
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 75%",
                    },
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out"
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center py-24 bg-white text-black">
            {/* Gradient Transition Overlay */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />
            <div className="w-full px-4 md:px-10">
                <div className="text-center mb-20">
                    <h2 ref={titleRef} className="text-3xl md:text-6xl font-medium mb-8 text-black tracking-tight" style={{ opacity: 1, transform: 'none' }}>
                        Engineered Luminance
                    </h2>
                    <p ref={textRef} className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        The perfect fusion of physical sport and digital technology.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { src: "/NBA-AS24-LED-Court-Collage.png", title: "NBA All-Star 2024" },
                        { src: "/Kenturky BBM_1.jpeg", title: "University of Kentucky" },
                        { src: "/BMW Park_3.jpg", title: "BMW Park" },
                        { src: "/asb-glassfloor-acer-nethercott-sports-hall---oxford-university-universities-archello.1596121230.1534.jpg", title: "Oxford University" },
                        { src: "/FIBA_U19_Womens_World_Cup.jpg", title: "FIBA U19 World Cup" },
                        { src: "/OYM_swiss.jpg", title: "OYM Switzerland" },
                        { src: "/asb_referenzen_nike_vegas_04.jpg", title: "Nike Court" },
                        { src: "/Supercup_3.jpeg", title: "Supercup" },
                    ].map((item, index) => (
                        <div key={index} className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 flex items-end justify-start p-6">
                                <h3 className="text-white text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
