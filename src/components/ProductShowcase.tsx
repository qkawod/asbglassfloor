"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductShowcase() {
    const router = useRouter();
    const [activeSide, setActiveSide] = useState<"left" | "right" | null>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

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
            <div
                ref={leftRef}
                className="relative h-full bg-white overflow-hidden cursor-pointer group"
                onClick={() => router.push("/products")}
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)] origin-left tracking-tighter uppercase leading-none">
                            ASB <br /><span className="text-white">스마트코트</span>
                        </h2>
                        <button className="flex items-center gap-3 text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                            Explore 스마트코트 <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side - LumiFlex */}
            <div
                ref={rightRef}
                className="relative h-full bg-white overflow-hidden cursor-pointer group"
                onClick={() => router.push("/lumiflex")}
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)] origin-left tracking-tighter uppercase leading-none">
                            ASB <br /><span className="text-white">풀LED 스마트코트</span>
                        </h2>
                        <button className="flex items-center gap-3 text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                            Explore 풀LED 스마트코트 <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
