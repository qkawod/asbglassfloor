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

export default function TrySystemDemo() {
    const [activeSport, setActiveSport] = useState<Sport>("all-sports");

    // Emoji Helper for "Ball Icons"
    const EmojiIcon = (emoji: string) => () => <span className="text-2xl leading-none grayscale">{emoji}</span>;

    const sports: { id: Sport; label: string; icon: any; desc: string }[] = [
        { id: "no-line", label: "No line", icon: Ban, desc: "Clean surface for non-sport events" },
        { id: "basketball", label: "Basketball", icon: EmojiIcon("🏀"), desc: "Professional FIBA Layout" },
        { id: "badminton", label: "Badminton", icon: EmojiIcon("🏸"), desc: "BWF Standard Court" },
        { id: "futsal", label: "Futsal", icon: EmojiIcon("⚽"), desc: "Official Futsal Dimensions" },
        { id: "handball", label: "Handball", icon: () => <img src="/handball.png" alt="Handball" className="w-6 h-6 object-contain grayscale opacity-80" />, desc: "IHF Standard Court" },
        { id: "volleyball", label: "Volleyball", icon: EmojiIcon("🏐"), desc: "FIVB Standard Layout" },
        { id: "all-sports", label: "All sports", icon: Layers, desc: "Showcase of all possibilities" },
    ];

    return (
        <section className="relative w-full bg-black flex flex-col items-center py-20">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-20 flex flex-col md:flex-row gap-12 items-stretch min-h-[750px] h-auto">

                {/* Left: Interactive Court */}
                <div className="relative w-full md:w-2/3 min-h-[500px] h-full bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`absolute inset-0 transition-opacity duration-500 ${activeSport === "no-line" ? "opacity-100" : "opacity-0"}`}>
                            <img src="/sports-demo/no-line.png" alt="No Line" className="w-full h-full object-cover" />
                        </div>
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

                {/* Right: Control Panel (DARK THEME) */}
                <div className="w-full md:w-1/3 flex flex-col gap-6">
                    <div className="mb-4">
                        <h2 className="text-3xl text-white mb-2 flex items-baseline gap-3">
                            <span className="font-bold tracking-wide">ASB 스마트코트</span>
                            <span className="font-medium">체험ZONE</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed break-keep">
                            단 한 번의 터치로 다양한 스포츠 종목을 자유롭게 전환해 보세요. ASB는 세계에서 가장 진보된 글라스 플로어 시스템으로 체육관의 기준을 새롭게 정의합니다.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        {sports.map((sport) => (
                            <button
                                key={sport.id}
                                onClick={() => setActiveSport(sport.id)}
                                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 group relative overflow-hidden backdrop-blur-xl ${activeSport === sport.id
                                    ? "bg-gradient-to-br from-white/20 to-white/5 border-white/60 text-white shadow-[inset_0_0_15px_rgba(255,255,255,0.2)] scale-[1.02] -translate-y-1"
                                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.08] hover:border-white/30 hover:text-white hover:-translate-y-1"
                                    }`}
                            >
                                {/* Liquid Shine Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out ${activeSport === sport.id ? "opacity-0" : "group-hover:translate-x-full"}`}></div>

                                <div className={`relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
                                    <sport.icon size={24} />
                                </div>
                                <div className="text-left flex-1 relative z-10 pl-2">
                                    <div className="font-bold tracking-wide">{sport.label}</div>
                                    <div className="text-xs opacity-60 font-light">{sport.desc}</div>
                                </div>

                                {/* RED LED DOT */}
                                <div className={`relative z-10 w-3 h-3 rounded-full border transition-all duration-500 ${activeSport === sport.id
                                    ? "bg-red-600 border-red-500 shadow-[0_0_10px_#DC2626]"
                                    : "border-slate-600 bg-transparent"}`}>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
