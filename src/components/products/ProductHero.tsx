"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

import Image from "next/image";

interface ProductHeroProps {
    title?: string;
    videoSrc?: string;
    imageSrc?: string;
}

export default function ProductHero({
    title = "ASB MultiSports",
    videoSrc = "/Handball in the Dark  on ASB GlassFloor.mp4",
    imageSrc
}: ProductHeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const lineScannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });

            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            })
                .from(subtitleRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power3.out"
                }, "-=1.2"); // Overlap animation

            // LED Scanner Animation
            if (lineScannerRef.current) {
                gsap.fromTo(lineScannerRef.current,
                    { x: "-100%" },
                    {
                        x: "100%",
                        duration: 3,
                        ease: "power2.inOut",
                        repeat: -1,
                        delay: 1
                    }
                );
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <section ref={heroRef} className="relative h-screen w-full flex items-end justify-start bg-deepBlack overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Background Media */}
                <div className="absolute inset-0 bg-black" />

                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover opacity-100"
                        priority
                    />
                ) : (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-100"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-transparent to-transparent" />


            </div>

            {/* Content - Minimal & Impactful */}
            <div className="relative z-10 text-left px-8 md:px-16 pb-24 max-w-5xl origin-bottom-left transform scale-[0.8]">
                <h1 ref={titleRef} className="text-4xl md:text-7xl font-extrabold text-white/80 mb-6 tracking-tighter leading-none">
                    {title}
                </h1>

                <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 font-light tracking-wider max-w-2xl mb-10">
                    The most advanced sports floor in the world.
                </p>

                {/* Signature LED Line (Extended) */}
                <div className="relative h-[1.6px] w-[420px] bg-[var(--color-led-line)]/30 mb-10 rounded-full shadow-[0_0_15px_var(--color-led-line)] overflow-hidden">
                    <div ref={lineScannerRef} className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_white]" />
                </div>

                <div
                    onClick={scrollToContent}
                    className="cursor-pointer inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                    <div className="p-3 rounded-full border border-white/20 group-hover:border-white transition-colors">
                        <ArrowDown className="w-6 h-6 animate-bounce" />
                    </div>
                    <span className="text-sm uppercase tracking-[0.3em]">Discover</span>
                </div>
            </div>
        </section>
    );
}
