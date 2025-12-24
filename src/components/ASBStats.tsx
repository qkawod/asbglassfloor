"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ASBStats() {
    const containerRef = useRef(null);
    const [countries, setCountries] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 70%",
                onEnter: () => {
                    gsap.to({}, {
                        duration: 2,
                        ease: "power2.out",
                        onUpdate: function () {
                            setCountries(Math.round(this.progress() * 70));
                        }
                    });
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-white relative overflow-hidden text-black">
            {/* Abstract Map Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#ccc_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-medium mb-16 text-black">Innovation without Borders</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
                    <div className="text-center">
                        <div className="text-8xl font-bold text-neonCyan mb-4 tabular-nums">{countries}+</div>
                        <div className="text-xl text-gray-500 uppercase tracking-widest font-semibold">Countries</div>
                    </div>

                    <div className="w-px h-32 bg-black/10 hidden md:block" />

                    <div className="text-center">
                        <div className="text-8xl font-bold text-black mb-4">1965</div>
                        <div className="text-xl text-gray-500 uppercase tracking-widest font-semibold">Since</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
