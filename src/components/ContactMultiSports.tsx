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
    const [activeSport, setActiveSport] = useState<Sport>("basketball");

    const EmojiIcon = (emoji: string) => () => <span className="text-xl leading-none grayscale opacity-80">{emoji}</span>;

    const sports: { id: Sport; label: string; icon: any; desc: string }[] = [
        { id: "no-line", label: "No line", icon: Ban, desc: "Clean surface" },
        { id: "basketball", label: "Basketball", icon: EmojiIcon("🏀"), desc: "FIBA Layout" },
        { id: "badminton", label: "Badminton", icon: EmojiIcon("🏸"), desc: "BWF Court" },
        { id: "futsal", label: "Futsal", icon: EmojiIcon("⚽"), desc: "Official Dimensions" },
        { id: "handball", label: "Handball", icon: CircleDot, desc: "IHF Court" },
        { id: "volleyball", label: "Volleyball", icon: EmojiIcon("🏐"), desc: "FIVB Layout" },
        { id: "all-sports", label: "All sports", icon: Layers, desc: "Showcase all" },
    ];

    return (
        <div className="w-full h-full flex flex-col bg-black relative pr-32">
            {/* Main Interactive Layer */}
            <div className="relative w-full h-full overflow-hidden bg-black group">
                {/* Floor Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

                {/* Reflections/Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                {/* Sport Image Layer */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-center pt-10 px-10" style={{ height: '50%' }}>
                    <img
                        src={`/sports-demo/${activeSport}.png`}
                        alt={activeSport}
                        className="h-full w-auto max-w-full object-contain transition-opacity duration-500"
                    />
                </div>

                <div className="absolute top-[62%] right-12 text-xs text-white/30 font-mono z-50">
                    ASB GlassFloor System v4.0
                </div>

                {/* Bottom Overlay Controls */}
                <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-black via-black/80 to-transparent pt-32 pb-48 px-10">
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-white mb-1">MultiSports Configuration</h2>
                        <p className="text-gray-400 text-sm">
                            Select a sport to see the lines adapt instantly.
                        </p>
                    </div>

                    {/* Scrollable Horizontal List for Controls */}
                    <div className="grid grid-cols-7 gap-2 py-4">
                        {sports.map((sport) => (
                            <button
                                key={sport.id}
                                onClick={() => setActiveSport(sport.id)}
                                className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-500 group relative overflow-hidden backdrop-blur-xl ${activeSport === sport.id
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
