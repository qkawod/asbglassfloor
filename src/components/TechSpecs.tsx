"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Shield, Zap, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TechSpecs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const layersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const layers = gsap.utils.toArray(".tech-layer");

            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                }
            })
                .to(layers, {
                    y: (i) => i * -150 + 200, // Spread layers vertically
                    z: (i) => i * 50, // Add some depth
                    rotationX: 60, // Tilt for 3D view
                    rotationZ: -10,
                    opacity: 1,
                    stagger: 0.1,
                    ease: "none",
                })
                .to(".layer-content", {
                    opacity: 1,
                    x: 0,
                    stagger: 0.1,
                }, "<"); // Sync with layer expansion

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const layers = [
        {
            title: "Glass Surface",
            description: "Etched ceramic dots for perfect grip and anti-reflection.",
            icon: <Shield className="w-8 h-8 text-electricCyan" />,
            color: "bg-white/10",
            borderColor: "border-white/30"
        },
        {
            title: "LED Video Layer",
            description: "High-density LED panels for brilliant visuals.",
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            color: "bg-black/80",
            borderColor: "border-yellow-400/50"
        },
        {
            title: "Aluminum Substructure",
            description: "Lightweight, durable support system.",
            icon: <Layers className="w-8 h-8 text-gray-400" />,
            color: "bg-gray-800",
            borderColor: "border-gray-600"
        },
        {
            title: "Shock Absorption",
            description: "Advanced pads for athlete safety and comfort.",
            icon: <Cpu className="w-8 h-8 text-hotPink" />,
            color: "bg-hotPink/20",
            borderColor: "border-hotPink/50"
        }
    ];

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-deepBlack overflow-hidden flex items-center justify-center perspective-1000">

            <div className="absolute top-20 left-0 w-full text-center z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Engineering Perfection</h2>
                <p className="text-gray-400">Scroll to explore the layers</p>
            </div>

            <div ref={layersRef} className="relative w-[80vw] md:w-[600px] h-[400px] preserve-3d">
                {layers.map((layer, index) => (
                    <div
                        key={index}
                        className={`tech-layer absolute inset-0 rounded-xl border ${layer.borderColor} ${layer.color} backdrop-blur-sm shadow-2xl flex items-center justify-center transition-all duration-500`}
                        style={{
                            transform: `translateY(0) translateZ(0) rotateX(60deg) rotateZ(-10deg)`,
                            zIndex: layers.length - index,
                            opacity: 0.5 // Start slightly transparent
                        }}
                    >
                        {/* Layer Visual (Simplified) */}
                        <div className="absolute inset-0 bg-grid-white/[0.05]" />

                        {/* Content Label (Initially hidden) */}
                        <div className="layer-content opacity-0 translate-x-20 absolute -right-[300px] top-1/2 -translate-y-1/2 w-64 text-left">
                            <div className="flex items-center gap-4 mb-2">
                                {layer.icon}
                                <h3 className="text-xl font-bold text-white">{layer.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm">{layer.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
