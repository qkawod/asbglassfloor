"use client";

import { useState } from "react";
import { Layers, Ban, CircleDot } from "lucide-react";

type Sport =
    | "no-line"
    | "basketball"
    | "badminton"
    | "futsal"
    | "handball"
    | "volleyball"
    | "all-sports";

export default function MultiSportsDemo() {
    const [activeSport, setActiveSport] = useState<Sport>("basketball");

    const EmojiIcon = (emoji: string) => () => <span className="text-2xl leading-none grayscale">{emoji}</span>;

    const sports: { id: Sport; label: string; icon: any; desc: string }[] = [
        { id: "no-line", label: "No line", icon: Ban, desc: "Clean surface for non-sport events" },
        { id: "basketball", label: "Basketball", icon: EmojiIcon("🏀"), desc: "Professional FIBA Layout" },
        { id: "badminton", label: "Badminton", icon: EmojiIcon("🏸"), desc: "BWF Standard Court" },
        { id: "futsal", label: "Futsal", icon: EmojiIcon("⚽"), desc: "Official Futsal Dimensions" },
        { id: "handball", label: "Handball", icon: CircleDot, desc: "IHF Standard Court" },
        { id: "volleyball", label: "Volleyball", icon: EmojiIcon("🏐"), desc: "FIVB Standard Layout" },
        { id: "all-sports", label: "All sports", icon: Layers, desc: "Showcase of all possibilities" },
    ];

    return (
        <section className="relative w-full bg-white flex flex-col items-center pt-80 pb-80">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-20 flex flex-col md:flex-row gap-12 items-stretch min-h-[700px] h-auto">

                {/* Left: Interactive Court */}
                <div className="relative w-full md:w-2/3 min-h-[500px] bg-black rounded-xl border border-black/5 shadow-2xl overflow-hidden group">


                    {/* Reflections/Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />

                    {/* Sport Image Layer */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Default/Fallback Image - Transparent to show BG */}
                        <div className={`absolute inset-0 transition-opacity duration-500 ${activeSport === "no-line" ? "opacity-100" : "opacity-0"}`}>
                            <img src="/sports-demo/no-line.png" alt="No Line" className="w-full h-full object-cover" />
                        </div>

                        {/* Dynamic Images */}
                        {sports.map((sport) => (
                            sport.id !== "no-line" && (
                                <img
                                    key={sport.id}
                                    src={`/sports-demo/${sport.id}.png`}
                                    alt={sport.id}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeSport === sport.id ? "opacity-100" : "opacity-0"}`}
                                />
                            )
                        ))}
                    </div>

                    <div className="absolute bottom-4 right-4 text-xs text-white/30 font-mono z-20">
                        ASB GlassFloor System v4.0
                    </div>
                </div>

                {/* Right: Control Panel */}
                <div className="w-full md:w-1/3 flex flex-col gap-6">
                    <div className="mb-2">
                        <h2 className="text-3xl text-slate-900 mb-2 flex items-baseline gap-3">
                            <span className="font-bold tracking-wide">ASB 스마트코트</span>
                            <span className="font-medium">체험ZONE</span>
                        </h2>
                        <p className="text-slate-500 mb-4 leading-relaxed break-keep">
                            단 한 번의 터치로 다양한 스포츠 종목을 자유롭게 전환해 보세요. ASB는 세계에서 가장 진보된 글라스 플로어 시스템으로 체육관의 기준을 새롭게 정의합니다.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        {sports.map((sport) => (
                            <button
                                key={sport.id}
                                onClick={() => setActiveSport(sport.id)}
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${activeSport === sport.id
                                    ? "bg-slate-900 border-slate-800 text-white shadow-xl scale-[1.02] -translate-y-1"
                                    : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:text-slate-900 hover:-translate-y-1"
                                    }`}
                            >
                                {/* Motion Slide Background (Active) */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transition-transform duration-500 ${activeSport === sport.id ? "translate-x-0" : "-translate-x-full"}`}></div>

                                {/* Liquid Shine Effect (Hover) */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out ${activeSport === sport.id ? "opacity-0" : "group-hover:translate-x-full"}`}></div>

                                <div className={`relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${activeSport === sport.id ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" : ""}`}>
                                    <sport.icon size={24} />
                                </div>
                                <div className="text-left flex-1 relative z-10 pl-2">
                                    <div className="font-bold tracking-wide">{sport.label}</div>
                                    <div className="text-xs opacity-60 font-light">{sport.desc}</div>
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
