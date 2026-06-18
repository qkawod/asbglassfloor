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

export default function ContactMultiSports() {
    const [activeSport, setActiveSport] = useState<Sport>("all-sports");

    const EmojiIcon = (emoji: string) => () => <span className="text-xl leading-none grayscale opacity-80">{emoji}</span>;

    const sports: { id: Sport; label: string; icon: any; desc: string }[] = [
        { id: "no-line", label: "No line", icon: Ban, desc: "Clean surface" },
        { id: "basketball", label: "Basketball", icon: EmojiIcon("🏀"), desc: "FIBA Layout" },
        { id: "badminton", label: "Badminton", icon: EmojiIcon("🏸"), desc: "BWF Court" },
        { id: "futsal", label: "Futsal", icon: EmojiIcon("⚽"), desc: "Official Dimensions" },
        { id: "handball", label: "Handball", icon: () => <img src="/handball.png" alt="Handball" className="w-5 h-5 flex-shrink-0 object-contain grayscale opacity-80 mix-blend-screen" />, desc: "IHF Court" },
        { id: "volleyball", label: "Volleyball", icon: EmojiIcon("🏐"), desc: "FIVB Layout" },
        { id: "all-sports", label: "All sports", icon: Layers, desc: "Showcase all" },
    ];

    return (
        <div className="relative flex h-full w-full flex-col bg-black md:pr-32">
            {/* Main Interactive Layer */}
            <div className="relative w-full h-full overflow-hidden bg-black group">
                {/* Floor Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

                {/* Reflections/Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                {/* Sport Image Layer */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-center px-5 pt-20 md:px-10 md:pt-24" style={{ height: '55%' }}>
                    <img
                        src={`/sports-demo/${activeSport}.png`}
                        alt={activeSport}
                        className="h-full w-auto max-w-full object-contain transition-opacity duration-500"
                    />
                </div>

                <div className="absolute right-5 top-[60%] z-50 text-[10px] font-mono text-white/30 md:right-12 md:top-[62%] md:text-xs">
                    ASB GlassFloor System v4.0
                </div>

                {/* Bottom Overlay Controls */}
                <div className="absolute bottom-0 left-0 z-30 w-full bg-gradient-to-t from-black via-black/80 to-transparent px-5 pb-20 pt-28 md:px-10 md:pb-48 md:pt-32">
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-white mb-1">ASB 스마트코트 시뮬레이션</h2>
                        <p className="text-gray-400 text-sm">
                            종목 선택에 따라 코트 라인이 즉시 전환됩니다.
                        </p>
                    </div>

                    {/* Scrollable Horizontal List for Controls */}
                    <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 py-4 md:mx-0 md:grid md:grid-cols-7 md:overflow-visible md:px-0">
                        {sports.map((sport) => (
                            <button
                                key={sport.id}
                                onClick={() => setActiveSport(sport.id)}
                                className={`group relative flex min-w-[96px] snap-start flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border p-3 backdrop-blur-xl transition-all duration-500 md:min-w-0 ${activeSport === sport.id
                                    ? "bg-gradient-to-br from-white/20 to-white/5 border-white/60 text-white shadow-[inset_0_0_15px_rgba(255,255,255,0.2)] -translate-y-1"
                                    : "bg-white/[0.03] border-white/10 text-gray-400 hover:bg-white/[0.08] hover:border-white/30 hover:text-white hover:-translate-y-1"
                                    }`}
                            >
                                {/* Liquid Shine Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out ${activeSport === sport.id ? "opacity-0" : "group-hover:translate-x-full"}`}></div>

                                <div className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                    <sport.icon size={20} />
                                </div>
                                <div className="text-xs font-medium relative z-10">{sport.label}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
