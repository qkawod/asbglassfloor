"use client";

import { useState } from "react";
import { Ban, Building2, Layers } from "lucide-react";
import type { ComponentType } from "react";

type Sport =
    | "no-line"
    | "basketball"
    | "badminton"
    | "futsal"
    | "handball"
    | "volleyball"
    | "general-gym"
    | "all-sports";

export default function TrySystemDemo() {
    const [activeSport, setActiveSport] = useState<Sport>("all-sports");

    // Emoji Helper for "Ball Icons"
    const EmojiIcon = (emoji: string) => {
        function SportEmojiIcon() {
            return <span className="text-2xl leading-none grayscale">{emoji}</span>;
        }

        return SportEmojiIcon;
    };

    const sports: { id: Sport; label: string; icon: ComponentType<{ size?: number }>; desc: string }[] = [
        { id: "general-gym", label: "일반체육관", icon: Building2, desc: "Conventional multi-line gymnasium" },
        { id: "no-line", label: "이벤트 모드", icon: Ban, desc: "Clean surface for non-sport events" },
        { id: "basketball", label: "농구", icon: EmojiIcon("🏀"), desc: "Professional FIBA Layout" },
        { id: "badminton", label: "배드민턴", icon: EmojiIcon("🏸"), desc: "BWF Standard Court" },
        { id: "futsal", label: "풋살", icon: EmojiIcon("⚽"), desc: "Official Futsal Dimensions" },
        { id: "handball", label: "핸드볼", icon: () => <img src="/handball.png" alt="Handball" className="w-6 h-6 object-contain grayscale opacity-80 mix-blend-screen" />, desc: "IHF Standard Court" },
        { id: "volleyball", label: "배구", icon: EmojiIcon("🏐"), desc: "FIVB Standard Layout" },
        { id: "all-sports", label: "전체 종목", icon: Layers, desc: "Showcase of all possibilities" },
    ];

    return (
        <section className="relative flex w-full flex-col items-center bg-black px-0 py-16 md:py-20">
            <div className="mx-auto flex h-auto w-full max-w-[1920px] flex-col items-stretch gap-6 px-6 md:min-h-[700px] md:flex-row md:gap-12 md:px-20">

                {/* Left: Interactive Court */}
                <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-2xl md:min-h-[500px] md:w-2/3 md:aspect-auto">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`absolute inset-0 transition-opacity duration-500 ${activeSport === "no-line" ? "opacity-100" : "opacity-0"}`}>
                            <img src="/sports-demo/no-line.png" alt="No Line" className="h-full w-full object-cover" />
                        </div>
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

                {/* Right: Control Panel (DARK THEME) */}
                <div className="flex w-full flex-col gap-5 md:w-1/3 md:gap-6">
                    <div className="order-2 mb-4 md:order-1">
                        <h2 className="text-3xl text-white mb-2 flex items-baseline gap-3">
                            <span className="font-bold tracking-wide">ASB 스마트코트</span>
                            <span className="font-medium">체험ZONE</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed break-keep">
                            단 한 번의 터치로 다양한 스포츠 종목을 자유롭게 전환해 보세요.
                        </p>
                    </div>

                    <div className="order-1 -mx-2 flex w-[calc(100%+1rem)] snap-x gap-2 overflow-x-auto px-2 py-1 md:order-2 md:mx-0 md:w-full md:flex-col md:gap-3 md:overflow-visible md:px-0 md:py-0">
                        {sports.map((sport) => (
                            <button
                                key={sport.id}
                                onClick={() => setActiveSport(sport.id)}
                                className={`group relative flex min-w-[148px] shrink-0 snap-start items-center gap-3 overflow-hidden rounded-2xl border p-3 transition-all duration-500 backdrop-blur-xl md:w-full md:min-w-0 md:gap-4 md:p-4 ${activeSport === sport.id
                                    ? "bg-gradient-to-br from-white/20 to-white/5 border-white/60 text-white shadow-[inset_0_0_15px_rgba(255,255,255,0.2)] md:scale-[1.02] md:-translate-y-1"
                                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.08] hover:border-white/30 hover:text-white md:hover:-translate-y-1"
                                    }`}
                            >
                                {/* Liquid Shine Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out ${activeSport === sport.id ? "opacity-0" : "group-hover:translate-x-full"}`}></div>

                                <div className={`relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
                                    <sport.icon size={24} />
                                </div>
                                <div className="relative z-10 flex-1 pl-1 text-left md:pl-2">
                                    <div className="font-bold tracking-wide">{sport.label}</div>
                                    <div className="hidden text-xs font-light opacity-60 sm:block">{sport.desc}</div>
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
