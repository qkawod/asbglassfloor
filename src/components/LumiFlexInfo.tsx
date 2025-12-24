"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function LumiFlexInfo() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            // Update state ONLY for UI icon update, not for controlling the video prop
            setIsMuted(videoRef.current.muted);
        }
    };
    return (
        <section className="relative w-full bg-white flex flex-col items-center pt-80 pb-40">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-20 flex flex-col md:flex-row gap-12 items-stretch h-[750px]">

                {/* Left: Text Content */}
                <div className="w-full md:w-1/3 flex flex-col gap-6 justify-start">
                    <div className="mb-4">
                        <h2 className="text-3xl font-medium text-black mb-6">ASB LumiFlex</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify break-keep">
                            <p>
                                ASB LumiFlex는 평범했던 공간을 압도적인 시각적 경험이 펼쳐지는 다목적 무대로 변화시킵니다. 경기장, 각종 이벤트 홀, 그리고 프리미엄 스포츠 시설을 위한 가장 이상적인 솔루션입니다.
                            </p>
                            <p>
                                특수 강화 유리 아래 내장된 고해상도 LED 기술은 공간의 한계를 지워버립니다. 화려한 그래픽 연출부터 실시간 경기 데이터 송출, 광고, 그리고 관객을 매료시키는 몰입형 환경까지. 당신이 상상하는 모든 가능성을 바닥 위에 생생하게 구현해 보십시오.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>공간 전체를 스크린으로 활용하는 풀 LED 시스템</li>
                                <li>모든 스포츠와 이벤트에 맞춰 변경 가능한 유연한 설계</li>
                                <li>충격을 효과적으로 흡수하는 고내구성 ASB Glass 탄성</li>
                                <li>선수 안전을 최우선으로 설계된 정밀한 마찰력</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right: Image Container (Placeholder) */}
                <div className="relative w-full md:w-2/3 h-full bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden group">
                    {/* Floor Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

                    {/* Reflections/Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                    {/* Video Layer */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <video
                            ref={videoRef}
                            src="/IGNITE THE COURT The Future of Sports Venues with ASB GlassFloor.mp4"
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            // Use pure boolean attribute for initial load, DO NOT bind to isMuted state
                            muted
                            playsInline
                        />
                    </div>

                    {/* Mute Toggle Button */}
                    <button
                        onClick={toggleMute}
                        className="absolute bottom-6 left-6 z-30 p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 transition-all duration-300 group-hover:scale-110"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                </div>

                <div className="absolute bottom-4 right-4 text-xs text-white/30 font-mono z-20">
                    ASB GlassFloor System v4.0
                </div>
            </div>
        </section>
    );
}
