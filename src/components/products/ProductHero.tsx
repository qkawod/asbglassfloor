"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

import Image from "next/image";

interface ProductHeroProps {
    title?: string;
    subtitle?: string;
    videoSrc?: string;
    imageSrc?: string;
    imageClassName?: string;
    imageWrapperClassName?: string;
    topFade?: boolean;
}

export default function ProductHero({
    title = "ASB 스마트코트",
    subtitle = "다양한 스포츠를 하나의 공간에서 구현하는 멀티스포츠 코트",
    videoSrc = "/Handball in the Dark  on ASB GlassFloor.mp4",
    imageSrc,
    imageClassName = "object-cover",
    imageWrapperClassName = "h-screen w-screen md:h-[56.25vw] md:min-h-screen md:min-w-[177.77vh] md:w-[100vw]",
    topFade = false
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
        const nextSectionTop = (heroRef.current?.offsetTop ?? 0) + window.innerHeight;

        window.scrollTo({
            top: nextSectionTop,
            behavior: "smooth"
        });
    };

    return (
        <section ref={heroRef} className="relative flex h-[100svh] min-h-[620px] w-full items-end justify-start overflow-hidden bg-deepBlack md:h-screen">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Abstract Dark Glass Background matching ReferencesPageRev */}
                {!topFade && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] z-10" />
                )}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${topFade ? "opacity-100" : "opacity-80"} ${imageWrapperClassName}`}>
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className={imageClassName}
                            priority
                        />
                    ) : (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-contain md:object-cover"
                            src={videoSrc}
                        />
                    )}
                </div>
                {topFade && (
                    <div className="absolute left-0 top-0 z-10 h-[10%] w-full bg-gradient-to-b from-[#111] via-[#111]/55 to-transparent pointer-events-none" />
                )}
                {/* Bottom Gradient Fade */}
                <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none ${topFade ? "h-24" : "h-64"}`} />
                {!topFade && (
                    <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(ellipse_at_0%_82%,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.48)_28%,rgba(0,0,0,0.16)_54%,transparent_76%)] z-10 pointer-events-none" />
                )}
            </div>

            {/* Content - Minimal & Impactful */}
            <div className="relative z-10 max-w-5xl origin-bottom-left px-6 pb-20 text-left sm:px-8 md:px-16 md:pb-24 md:scale-[0.8]">
                <h1 ref={titleRef} className="mb-5 text-4xl font-extrabold leading-none tracking-tighter text-white/92 sm:text-5xl md:mb-6 md:text-7xl">
                    {title}
                </h1>

                <p ref={subtitleRef} className="mb-8 max-w-2xl text-base font-medium leading-relaxed tracking-wide !text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)] sm:text-lg md:mb-10 md:text-2xl md:tracking-wider">
                    {subtitle}
                </p>

                {/* Signature LED Line (Extended) */}
                <div className="relative mb-8 h-[1.6px] w-[min(420px,calc(100vw-3rem))] overflow-hidden rounded-full bg-[var(--color-led-line)]/30 shadow-[0_0_15px_var(--color-led-line)] md:mb-10">
                    <div ref={lineScannerRef} className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_white]" />
                </div>

                <div
                    onClick={scrollToContent}
                    className="group inline-flex cursor-pointer items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-white md:gap-3"
                >
                    <div className="rounded-full border border-white/20 p-2 transition-colors group-hover:border-white md:p-3">
                        <ArrowDown className="h-4 w-4 animate-bounce md:h-6 md:w-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] md:text-sm md:tracking-[0.3em]">Discover</span>
                </div>
            </div>
        </section>
    );
}
