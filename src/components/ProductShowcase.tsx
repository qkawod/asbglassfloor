"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductShowcase() {
    const [activeSide, setActiveSide] = useState<"left" | "right" | null>(null);
    const leftRef = useRef<HTMLAnchorElement>(null);
    const rightRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (window.matchMedia("(min-width: 768px)").matches) {
                gsap.set([leftRef.current, rightRef.current], { width: "50%" });
            }
        });
        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (side: "left" | "right") => {
        if (!window.matchMedia("(min-width: 768px)").matches) return;

        setActiveSide(side);
        if (side === "left") {
            gsap.to(leftRef.current, { width: "70%", duration: 0.5, ease: "power2.out" });
            gsap.to(rightRef.current, { width: "30%", duration: 0.5, ease: "power2.out" });
        } else {
            gsap.to(leftRef.current, { width: "30%", duration: 0.5, ease: "power2.out" });
            gsap.to(rightRef.current, { width: "70%", duration: 0.5, ease: "power2.out" });
        }
    };

    const handleMouseLeave = () => {
        if (!window.matchMedia("(min-width: 768px)").matches) return;

        setActiveSide(null);
        gsap.to([leftRef.current, rightRef.current], { width: "50%", duration: 0.5, ease: "power2.out" });
    };

    return (
        <section className="relative mt-24 flex min-h-[720px] w-full flex-col overflow-hidden bg-white md:mt-80 md:h-[60vh] md:min-h-0 md:flex-row">
            {/* Left Side - MultiSports */}
            <Link
                href="/smartcourt"
                ref={leftRef}
                className="group relative h-1/2 min-h-[360px] overflow-hidden bg-white cursor-pointer md:h-full"
            >
                {/* Background Image/Video Placeholder */}
                <div className="absolute inset-0 bg-[url('/Dresden/multisports-bg.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out transform-gpu group-hover:scale-125" />

                {/* Center-heavy gradient overlay - Hover Trigger Here */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/0 transition-opacity duration-500 group-hover:opacity-60"
                    onMouseEnter={() => handleMouseEnter("left")}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="absolute bottom-0 left-0 z-20 flex w-full justify-start p-6 pb-6 pointer-events-none sm:p-8 md:p-16 md:pb-6">
                    <div className="pointer-events-auto max-w-2xl">
                        <h2 className="led-title mb-3 text-3xl font-bold uppercase leading-none tracking-tighter transition-all duration-500 ease-out origin-left group-hover:-translate-y-2 group-hover:scale-105 md:text-5xl">
                            ASB <br /><span className="text-white">스마트코트</span>
                        </h2>
                        <button className="flex items-center gap-3 border border-white/85 bg-white/[0.03] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_18px_rgba(255,255,255,0.2),inset_0_0_12px_rgba(255,255,255,0.08)] backdrop-blur-[1px] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_24px_rgba(255,255,255,0.42)] sm:px-8 sm:text-sm">
                            Explore ASB 스마트코트 <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </Link>

            {/* Right Side - LumiFlex */}
            <Link
                href="/lumiflex"
                ref={rightRef}
                className="group relative h-1/2 min-h-[360px] overflow-hidden bg-white cursor-pointer md:h-full"
            >
                {/* Background Image/Video Placeholder */}
                <div className="absolute inset-0 bg-[url('/lumiflex-bg.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out transform-gpu group-hover:scale-125" />

                {/* Center-heavy gradient overlay - Hover Trigger Here */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/0 transition-opacity duration-500 group-hover:opacity-60"
                    onMouseEnter={() => handleMouseEnter("right")}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="absolute bottom-0 left-0 z-20 flex w-full justify-start p-6 pb-6 pointer-events-none sm:p-8 md:p-16 md:pb-6">
                    <div className="pointer-events-auto max-w-2xl">
                        <h2 className="led-title mb-3 text-3xl font-bold uppercase leading-none tracking-tighter transition-all duration-500 ease-out origin-left group-hover:-translate-y-2 group-hover:scale-105 md:text-5xl">
                            ASB <br /><span className="text-white">풀LED 스마트코트</span>
                        </h2>
                        <button className="flex items-center gap-3 border border-white/85 bg-white/[0.03] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_18px_rgba(255,255,255,0.2),inset_0_0_12px_rgba(255,255,255,0.08)] backdrop-blur-[1px] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_24px_rgba(255,255,255,0.42)] sm:px-8 sm:text-sm">
                            Explore 풀LED 스마트코트 <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </Link>
        </section>
    );
}
