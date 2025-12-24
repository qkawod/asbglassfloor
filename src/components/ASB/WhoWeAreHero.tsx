"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WhoWeAreHero() {
    return (
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-deepBlack">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/메인영상.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
}
