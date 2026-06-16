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
            // Initial state
            gsap.set([leftRef.current, rightRef.current], { width: "50%" });
        });
        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (side: "left" | "right") => {
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
        setActiveSide(null);
        gsap.to([leftRef.current, rightRef.current], { width: "50%", duration: 0.5, ease: "power2.out" });
    };

    return (
        <section className="relative h-[60vh] w-full flex overflow-hidden bg-white mt-80">
            {/* Left Side - MultiSports */}
            <Link
                href="/products"
                ref={leftRef}
                className="relative h-full bg-white overflow-hidden cursor-pointer group"
            >
                {/* Background Image/Video Placeholder */}
                <div className="absolute inset-0 bg-[url('/Dresden/multisports-bg.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out transform-gpu group-hover:scale-125" />

                {/* Center-heavy gradient overlay - Hover Trigger Here */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/0 transition-opacity duration-500 group-hover:opacity-60"
                    onMouseEnter={() => handleMouseEnter("left")}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="absolute bottom-0 left-0 p-8 md:p-16 pb-4 md:pb-6 z-20 w-full pointer-events-none flex justify-center md:justify-start">
                    <div className="pointer-events-auto max-w-2xl">
                        <h2 className="led-title text-3xl md:text-5xl font-bold mb-3 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 origin-left tracking-tighter uppercase leading-none">
                            ASB <br /><span className="text-white">스마트코트</span>
                        </h2>
                        <button className="flex items-center gap-3 text-white border border-white/85 bg-white/[0.03] px-8 py-3 shadow-[0_0_18px_rgba(255,255,255,0.2),inset_0_0_12px_rgba(255,255,255,0.08)] backdrop-blur-[1px] hover:bg-white hover:text-black hover:shadow-[0_0_24px_rgba(255,255,255,0.42)] transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                            Explore ASB 스마트코트 <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </Link>

            {/* Right Side - LumiFlex */}
            <Link
                href="/lumiflex"
                ref={rightRef}
                className="relative h-full bg-white overflow-hidden cursor-pointer group"
            >
                {/* Background Image/Video Placeholder */}
                <div className="absolute inset-0 bg-[url('/lumiflex-bg.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out transform-gpu group-hover:scale-125" />

                {/* Center-heavy gradient overlay - Hover Trigger Here */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/0 transition-opacity duration-500 group-hover:opacity-60"
                    onMouseEnter={() => handleMouseEnter("right")}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="absolute bottom-0 left-0 p-8 md:p-16 pb-4 md:pb-6 z-20 w-full pointer-events-none flex justify-center md:justify-start">
                    <div className="pointer-events-auto max-w-2xl">
                        <h2 className="led-title text-3xl md:text-5xl font-bold mb-3 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 origin-left tracking-tighter uppercase leading-none">
                            ASB <br /><span className="text-white">풀LED 스마트코트</span>
                        </h2>
                        <button className="flex items-center gap-3 text-white border border-white/85 bg-white/[0.03] px-8 py-3 shadow-[0_0_18px_rgba(255,255,255,0.2),inset_0_0_12px_rgba(255,255,255,0.08)] backdrop-blur-[1px] hover:bg-white hover:text-black hover:shadow-[0_0_24px_rgba(255,255,255,0.42)] transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                            Explore 풀LED 스마트코트 <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </Link>
        </section>
    );
}
