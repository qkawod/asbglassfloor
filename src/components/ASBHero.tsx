"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ASBHero() {

    const containerRef = useRef(null);
    const textRef = useRef(null);
    const scannerRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            if (!isMuted) {
                videoRef.current.volume = 1.0;
            }
        }
    }, [isMuted]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
            );

            // LED Scanner Animation
            gsap.fromTo(scannerRef.current,
                { x: "-100%" },
                {
                    x: "100%",
                    duration: 3,
                    ease: "power2.inOut",
                    repeat: -1,
                    delay: 1
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-deepGrey flex items-end justify-start text-left"
        >
            {/* Abstract Dark Glass Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deepGrey z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] opacity-80">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        src={encodeURI("/How Brands Shine on the ASB GlassFloor   Highlights from Beats N Buckets.mp4")}
                    />
                </div>
            </div>

            {/* Mute Toggle Button */}
            <button
                onClick={toggleMute}
                className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 transition-all duration-300 border border-white/20 group cursor-pointer"
            >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span className="text-sm font-medium tracking-wide">{isMuted ? "UNMUTE" : "MUTE"}</span>
            </button>
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none" />

            <div ref={textRef} className="relative z-20 px-8 pb-16 max-w-6xl origin-bottom-left transform scale-[0.8]">
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white/80 mb-6 leading-none">
                    WE BUILD THE FUTURE
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wider">
                    Experience the Difference of ASB GlassFloor
                </p>
                <div className="relative h-[1.1px] w-72 bg-[var(--color-led-line)]/30 mt-8 rounded-full shadow-[0_0_15px_var(--color-led-line)] overflow-hidden">
                    <div ref={scannerRef} className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" />
                </div>
            </div>
        </section>
    );
}
