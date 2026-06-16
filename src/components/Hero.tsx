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
        <div className="absolute inset-0 md:top-1/2 md:left-1/2 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 md:w-[100vw] md:h-[56.25vw] md:min-h-screen md:min-w-[177.77vh]">
          <video
            ref={videoRef}
            className="w-full h-full object-contain md:object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/main-video-revC.mp4"
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

      <div className="relative z-20 w-full px-6 pt-24 text-left md:px-12">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-electricCyan md:text-base">
            ASB GlassFloor Korea
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] md:text-6xl lg:text-7xl">
            ASB GlassFloor 공식 파트너 GLOBE
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] md:text-xl">
            글라스플로어, LED 스포츠 플로어, 스마트코트, 스마트체육관, 멀티스포츠 코트를 위한 독일 ASB GlassFloor 솔루션을 한국 시장에 제공합니다.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce text-electricCyan">
        <Mouse size={32} />
        <p className="text-xs uppercase tracking-widest mt-2 text-center">Scroll</p>
      </div>
    </section>
  );
}
