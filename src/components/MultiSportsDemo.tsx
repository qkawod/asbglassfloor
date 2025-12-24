"use client";

import { useState } from "react";
import { Activity, Circle, Trophy, Grid, Hexagon, Triangle, Square, Layers, Ban, CircleDot } from "lucide-react";

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
        { id: "all-sports", label: "All sports lines together", icon: Layers, desc: "Showcase of all possibilities" },
    ];

    return (
        <section className="relative w-full bg-white flex flex-col items-center pt-80 pb-40">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-20 flex flex-col md:flex-row gap-12 items-stretch h-[750px]">

                {/* Left: Interactive Court */}
                <div className="relative w-full md:w-2/3 h-full bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden group">
                    {/* Floor Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

                    {/* Reflections/Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                    {/* Sport Image Layer */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src={`/sports-demo/${activeSport}.png`}
                            alt={activeSport}
                            className="w-full h-full object-cover transition-opacity duration-500"
                        />
                    </div>

                    <div className="absolute bottom-4 right-4 text-xs text-white/30 font-mono z-20">
                        ASB GlassFloor System v4.0
                    </div>
                </div>

                {/* Right: Control Panel */}
                <div className="w-full md:w-1/3 flex flex-col gap-6">
                    <div className="mb-4">
                        <h2 className="text-3xl font-medium text-black mb-2">MultiSports</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Transform your arena with the world's most advanced glass flooring system. Seamlessly switch between sports configurations at the touch of a button.
                        </p>
                    </div>

                    <div className="space-y-3 h-full overflow-y-auto pr-2 custom-scrollbar">
                        {sports.map((sport) => (
                            <button
                                key={sport.id}
                                onClick={() => setActiveSport(sport.id)}
                                className={`w-full flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 ${activeSport === sport.id
                                    ? "bg-black/10 border-black text-black shadow-md"
                                    : "bg-transparent border-black/10 text-gray-500 hover:bg-black/5 hover:text-gray-700"
                                    }`}
                            >
                                <sport.icon size={24} />
                                <div className="text-left">
                                    <div className="font-bold">{sport.label}</div>
                                    <div className="text-xs opacity-70">{sport.desc}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
