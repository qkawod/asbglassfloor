"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mouse, Volume2, VolumeX } from "lucide-react";
import { audioController } from "../utils/AudioController";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Initial unlock on mount (mostly for fast interactions)
    // Real unlock happens on user gesture
    const handleUnlock = () => {
      audioController.unlock();
      window.removeEventListener('click', handleUnlock);
      window.removeEventListener('touchstart', handleUnlock);
    };

    window.addEventListener('click', handleUnlock);
    window.addEventListener('touchstart', handleUnlock);

    return () => {
      window.removeEventListener('click', handleUnlock);
      window.removeEventListener('touchstart', handleUnlock);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (!isMuted) {
        videoRef.current.volume = 1.0;
        // Also trigger controller unlock to be safe
        audioController.unlock();
      } else {
        // Optional: Cancel speech if muted
        // window.speechSynthesis.cancel();
      }
    }
  }, [isMuted]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-deepBlack flex flex-col items-center justify-center text-center"
    >
      {/* Video Background (YouTube) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] min-h-[100vh] md:h-[56.25vw] md:min-h-screen md:min-w-[177.77vh]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/hero-bg.mp4"
          />
        </div>
      </div>

      {/* Sound Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-10 right-10 z-30 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all pointer-events-auto"
      >
        {isMuted ? (
          <div className="flex items-center gap-2">
            <VolumeX size={20} />
            <span className="text-xs font-bold tracking-widest hidden md:inline">UNMUTE</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Volume2 size={20} />
            <span className="text-xs font-bold tracking-widest hidden md:inline">MUTE</span>
          </div>
        )}
      </button>

      {/* Content */}
      <div className="relative z-40 px-6 py-8 max-w-4xl mx-auto mt-20 md:mt-0 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          글라스플로어 전문 기업 GLOBE
        </h1>
        <p className="text-lg md:text-xl text-gray-100 drop-shadow-md leading-relaxed">
          GLOBE는 독일 ASB GlassFloor의 공식 파트너로, 농구장·멀티스포츠·스마트체육센터에 적용되는
          글라스플로어 시스템을 국내에 공급하고 있습니다.<br className="hidden md:block" />
          ASB GlassFloor는 국제농구연맹(FIBA), NBA 등 세계 주요 스포츠 기관의 인증을 획득한
          차세대 스포츠플로어 솔루션입니다.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce text-electricCyan">
        <Mouse size={32} />
        <p className="text-xs uppercase tracking-widest mt-2 text-center">Scroll</p>
      </div>
    </section>
  );
}
