"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ASBVision() {
    const containerRef = useRef(null);
    const lineRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                lineRef.current,
                { height: 0, opacity: 0 },
                { height: "700px", opacity: 1, duration: 1.5, ease: "power3.inOut" }
            ).fromTo(
                textRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=0.5"
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center relative overflow-hidden pt-0"
        >
            {/* Glowing Line connecting from top */}
            <div
                ref={lineRef}
                className="w-[2px] bg-gradient-to-b from-transparent via-[var(--color-led-line)] to-transparent shadow-[0_0_20px_var(--color-led-line)] mb-12"
            />

            <div ref={textRef} className="px-6 z-10 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
                    Change the Game. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE57F] to-white">
                        Change the Space.
                    </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                    We redefine sports floors as infinite digital surfaces.
                </p>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE57F]/5 rounded-full blur-[100px] pointer-events-none z-0" />
        </section>
    );
}
