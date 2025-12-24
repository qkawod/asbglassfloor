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
        <section className="relative h-screen w-full flex overflow-hidden bg-white">
            {/* Left Side - MultiSports */}
            <div
                ref={leftRef}
                className="relative h-full bg-white overflow-hidden cursor-pointer group"
                onClick={() => router.push("/products")}
            >
                {/* Background Image/Video Placeholder */}
                <div className="absolute inset-0 bg-[url('/Dresden/multisports-bg.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-500" />

                {/* Center-heavy gradient overlay - Hover Trigger Here */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/0 transition-opacity duration-500 group-hover:opacity-60"
                    onMouseEnter={() => handleMouseEnter("left")}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full pointer-events-none flex justify-center md:justify-start">
                    <div className="pointer-events-auto max-w-md">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 transition-transform duration-500 group-hover:-translate-y-2 tracking-tighter uppercase leading-none">
                            ASB <br /><span className="text-white">MultiSports</span>
                        </h2>
                        <p className={`text-white/90 text-lg md:text-xl font-medium leading-tight mb-8 min-h-[5.5rem] transition-all duration-500 ${activeSide === 'left' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            The future of sports flooring. Customize LED lines freely via touchscreen to instantly begin any activity.
                        </p>
                        <button className="flex items-center gap-3 text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                            Explore MultiSports <ArrowRight size={18} />
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
                <div className="absolute inset-0 bg-[url('/lumiflex-bg.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-500" />

                {/* Center-heavy gradient overlay - Hover Trigger Here */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/0 transition-opacity duration-500 group-hover:opacity-60"
                    onMouseEnter={() => handleMouseEnter("right")}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full pointer-events-none flex justify-center md:justify-start">
                    <div className="pointer-events-auto max-w-md">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 transition-transform duration-500 group-hover:-translate-y-2 tracking-tighter uppercase leading-none">
                            ASB <br /><span className="text-white">LumiFlex</span>
                        </h2>
                        <p className={`text-white/90 text-lg md:text-xl font-medium leading-tight mb-8 min-h-[5.5rem] transition-all duration-500 ${activeSide === 'right' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            The ultimate full video floor. ASB LumiFlex transforms any space into a multi-functional visual spectacle.
                        </p>
                        <button className="flex items-center gap-3 text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                            Explore LumiFlex <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
