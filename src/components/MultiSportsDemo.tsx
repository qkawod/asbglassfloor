"use client";

import { useState } from "react";
import { Ban, Layers } from "lucide-react";
import type { ComponentType } from "react";

type Sport =
    | "no-line"
    | "basketball"
    | "badminton"
    | "futsal"
    | "handball"
    | "volleyball"
    | "all-sports";

export default function MultiSportsDemo() {
    const [activeSport, setActiveSport] = useState<Sport>("all-sports");

    const EmojiIcon = (emoji: string) => {
        function SportEmojiIcon() {
            return <span className="text-2xl leading-none grayscale">{emoji}</span>;
        }

        return SportEmojiIcon;
    };

    const sports: { id: Sport; label: string; icon: ComponentType<{ size?: number }>; desc: string }[] = [
        { id: "no-line", label: "No line", icon: Ban, desc: "Clean surface for non-sport events" },
        { id: "basketball", label: "Basketball", icon: EmojiIcon("🏀"), desc: "Professional FIBA Layout" },
        { id: "badminton", label: "Badminton", icon: EmojiIcon("🏸"), desc: "BWF Standard Court" },
        { id: "futsal", label: "Futsal", icon: EmojiIcon("⚽"), desc: "Official Futsal Dimensions" },
        { id: "handball", label: "Handball", icon: () => <img src="/handball.png" alt="Handball" className="w-6 h-6 object-contain grayscale opacity-80 mix-blend-multiply dark:mix-blend-screen" />, desc: "IHF Standard Court" },
        { id: "volleyball", label: "Volleyball", icon: EmojiIcon("🏐"), desc: "FIVB Standard Layout" },
        { id: "all-sports", label: "All sports", icon: Layers, desc: "Showcase of all possibilities" },
    ];

    return (
        <section className="relative flex w-full flex-col items-center bg-white px-0 py-16 md:py-80">
            <div className="mx-auto flex h-auto w-full max-w-[1920px] flex-col items-stretch gap-6 px-6 md:min-h-[700px] md:flex-row md:gap-12 md:px-20">

                {/* Left: Interactive Court */}
                <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-black/5 bg-black shadow-2xl md:min-h-[500px] md:w-2/3 md:aspect-auto">


                    {/* Reflections/Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />

                    {/* Sport Image Layer */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Default/Fallback Image - Transparent to show BG */}
                        <div className={`absolute inset-0 transition-opacity duration-500 ${activeSport === "no-line" ? "opacity-100" : "opacity-0"}`}>
                            <img src="/sports-demo/no-line.png" alt="No Line" className="h-full w-full object-cover" />
                        </div>

                        {/* Dynamic Images */}
                        {sports.map((sport) => (
                            sport.id !== "no-line" && (
                                <img
                                    key={sport.id}
                                    src={`/sports-demo/${sport.id}.png`}
                                    alt={sport.id}
                                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${activeSport === sport.id ? "opacity-100" : "opacity-0"}`}
                                />
                            )
                        ))}
                    </div>

                    <div className="absolute bottom-3 right-3 z-20 text-[10px] font-mono text-white/30 md:bottom-4 md:right-4 md:text-xs">
                        ASB GlassFloor System v4.0
                    </div>
                </div>

                {/* Right: Control Panel */}
                <div className="flex w-full flex-col gap-5 md:w-1/3 md:gap-6">
                    <div className="order-2 mb-2 md:order-1">
                        <h2 className="text-3xl text-slate-900 mb-2 flex items-baseline gap-3">
                            <span className="font-bold tracking-wide">ASB 스마트코트</span>
                            <span className="font-medium">체험ZONE</span>
                        </h2>
                        <p className="text-slate-500 mb-4 leading-relaxed break-keep">
                            단 한 번의 터치로 다양한 스포츠 종목을 자유롭게 전환해 보세요.
                        </p>
                    </div>

                    <div className="order-1 -mx-2 flex w-[calc(100%+1rem)] snap-x gap-2 overflow-x-auto px-2 py-1 md:order-2 md:mx-0 md:w-full md:flex-col md:overflow-visible md:px-0 md:py-0">
                        {sports.map((sport) => (
                            <button
                                key={sport.id}
                                onClick={() => setActiveSport(sport.id)}
                                className={`group relative flex min-w-[148px] shrink-0 snap-start items-center gap-3 overflow-hidden rounded-2xl border p-3 transition-all duration-500 md:w-full md:min-w-0 md:gap-4 ${activeSport === sport.id
                                    ? "bg-slate-900 border-slate-800 text-white shadow-xl md:scale-[1.02] md:-translate-y-1"
                                    : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:text-slate-900 md:hover:-translate-y-1"
                                    }`}
                            >
                                {/* Motion Slide Background (Active) */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transition-transform duration-500 ${activeSport === sport.id ? "translate-x-0" : "-translate-x-full"}`}></div>

                                {/* Liquid Shine Effect (Hover) */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out ${activeSport === sport.id ? "opacity-0" : "group-hover:translate-x-full"}`}></div>

                                <div className={`relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${activeSport === sport.id ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" : ""}`}>
                                    <sport.icon size={24} />
                                </div>
                                <div className="relative z-10 flex-1 pl-1 text-left md:pl-2">
                                    <div className="font-bold tracking-wide">{sport.label}</div>
                                    <div className="hidden text-xs font-light opacity-60 sm:block">{sport.desc}</div>
                                </div>
                                <div className={`relative z-10 w-3 h-3 rounded-full border transition-all duration-500 ${activeSport === sport.id ? "bg-red-500 border-red-400 shadow-[0_0_10px_#EF4444]" : "border-slate-300 bg-slate-100"}`}></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
