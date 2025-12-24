"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power, Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CoreInnovation() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    // Simulate line switching state
    const [activeSport, setActiveSport] = useState<"basketball" | "volleyball" | "badminton">("basketball");

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: 1,
                },
                x: -50,
                opacity: 0,
                duration: 1
            });

            gsap.from(visualRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: 1,
                },
                x: 50,
                opacity: 0,
                duration: 1
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Sport configuration data
    const sports = {
        basketball: {
            color: "border-white",
            lines: "grid-cols-2 gap-20", // Abstract representation
            label: "Basketball",
            accent: "text-white"
        },
        volleyball: {
            color: "border-neonCyan",
            lines: "grid-cols-3 gap-10",
            label: "Volleyball",
            accent: "text-electricCyan"
        },
        badminton: {
            color: "border-green-500",
            lines: "grid-cols-4 gap-4",
            label: "Badminton",
            accent: "text-green-500"
        }
    };

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full bg-deepGrey py-20 px-6 overflow-hidden flex items-center">
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Visual / Simulation Side */}
                <div ref={visualRef} className="relative order-2 md:order-1 h-[500px] w-full bg-deepBlack rounded-2xl border border-white/10 shadow-2xl p-8 overflow-hidden group">
                    {/* Floor Base */}
                    <div className="absolute inset-0 bg-[#0a0a0a] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

                    {/* Active Lines Simulation */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className={`w-3/4 h-3/4 border-4 transition-all duration-500 ${sports[activeSport].color} shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                            {/* Inner Lines (Abstract) */}
                            <div className="w-full h-full border-2 border-dashed border-white/20 opacity-50 flex items-center justify-center">
                                <span className={`text-4xl font-bold uppercase tracking-widest transition-colors duration-500 ${sports[activeSport].accent}`}>
                                    {sports[activeSport].label}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Controls Overlay */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/80 backdrop-blur-md p-2 rounded-full border border-white/10">
                        {(Object.keys(sports) as Array<keyof typeof sports>).map((sport) => (
                            <button
                                key={sport}
                                onClick={() => setActiveSport(sport)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 ${activeSport === sport
                                        ? "bg-white text-black shadow-lg scale-105"
                                        : "text-gray-400 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {sport}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Side */}
                <div ref={textRef} className="order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-electricCyan/10 rounded-full">
                            <Power className="w-6 h-6 text-electricCyan" />
                        </div>
                        <span className="text-electricCyan font-mono tracking-widest text-sm">CORE INNOVATION</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        One Floor.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Multiple Sports.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        The ASB MultiSports floor uses programmable LED marking lines hidden beneath the glass surface.
                        Switch from basketball to volleyball or badminton at the touch of a button.
                        No more confusing line chaos—just the lines you need, when you need them.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Instant sport switching via touchscreen",
                            "Perfect visibility without line confusion",
                            "Customizable for training or events"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <span className="bg-green-500/20 text-green-400 p-1 rounded-full">
                                    <Check size={14} />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-white/10">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">0.1s</h4>
                                <p className="text-sm text-gray-500">Switching Time</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                                <p className="text-sm text-gray-500">Digital Control</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
