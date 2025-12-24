"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Final Project Data based on User Request
// Mapped to actual existing files in public/
const projects = [
    {
        type: "L",
        title: "NBA All-Star 2024",
        location: "Indianapolis, USA",
        image: "/NBA/NBA-AS24-LED-Court-Collage.png",
        slug: "NBA-AS24-LED-Court-Collage"
    },
    {
        type: "L",
        title: "FIBA U19 Women’s World Cup",
        location: "Madrid, Spain",
        image: "/FIBA_U19_Womens_World_Cup.jpg",
        slug: "FIBA-U19-Womens-World-Cup"
    },
    {
        type: "M",
        title: "OYM",
        location: "Zug, Swiss",
        image: "/OYM/OYM_swiss.jpg",
        slug: "OYM-College"
    },
    {
        type: "L",
        title: "University of Kentucky",
        location: "Lexington, USA",
        image: "/Kentucky_BBM/Kenturky BBM_1.jpeg",
        slug: "University-of-Kentucky"
    },
    {
        type: "M",
        title: "BallsportARENA Dresden",
        location: "Dresden, Germany",
        image: "/Dresden/Dresden_M.jpg",
        slug: "BallsportARENA-Dresden"
    },
    {
        type: "L",
        title: "BMW Park",
        location: "Munich, Germany",
        image: "/BMW/BMW Park_3.jpg",
        slug: "FC-Bayern-Munich"
    },
    {
        type: "M",
        title: "Oxford University",
        location: "Wellington Square, UK",
        image: "/University of oxford/asb_referenzen_oxford_03.jpg",
        slug: "Oxford-University"
    },
    {
        type: "L",
        title: "OAKA Arena",
        location: "Athens, Greece",
        image: "/OAKA/asb-glassfloor-bcl-final-four-2024-03.jpg.webp",
        slug: "OAKA-Arena"
    },
    {
        type: "M",
        title: "Private Estate, London",
        location: "London, UK",
        image: "/London/London1.jpeg",
        slug: "Private-Estate-London"
    }
];

const categories = ["ALL", "MultiSports", "LumiFlex"];

export default function ReferencesPageRev() {
    const [activeFilter, setActiveFilter] = useState("ALL");
    const [isMuted, setIsMuted] = useState(true);
    const heroRef = useRef<HTMLDivElement>(null);
    const scannerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            if (!isMuted) {
                videoRef.current.volume = 1.0;
            }
        }
    }, [isMuted]);

    // Filtering Logic
    const filteredProjects = activeFilter === "ALL"
        ? projects
        : projects.filter(project => {
            if (activeFilter === "MultiSports") return project.type === "M";
            if (activeFilter === "LumiFlex") return project.type === "L";
            return true;
        });

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (scannerRef.current) {
                gsap.fromTo(scannerRef.current,
                    { x: "-100%" },
                    {
                        x: "100%",
                        duration: 3,
                        ease: "power2.inOut",
                        repeat: -1,
                    }
                );
            }
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-gray-200 selection:text-black">

            {/* 1. Hero Section (Video Background) - Restored for Rev Page */}
            <section
                ref={heroRef}
                className="relative h-screen w-full overflow-hidden bg-deepGrey flex items-end justify-start text-left"
            >
                {/* Abstract Dark Glass Background */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] opacity-80">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            src={encodeURI("/ASB Athletes Lab 2.0 – One Month In   New Location, Bigger Space, First Teams Inside.mp4")}
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
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none" />

                <div className="relative z-20 px-8 pb-16 max-w-6xl origin-bottom-left transform scale-[0.8] md:scale-100">
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white/90 mb-6 leading-none uppercase">
                        References
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wider">
                        Explore how ASB GlassFloor is redefining sports and event surfaces globally.
                    </p>

                    {/* Signature LED Line */}
                    <div className="relative h-[1.1px] w-72 mt-12 bg-neonCyan/30 rounded-full shadow-[0_0_15px_#0ff] overflow-hidden">
                        <div ref={scannerRef} className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" />
                    </div>

                    <div
                        onClick={scrollToContent}
                        className="cursor-pointer inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group mt-12"
                    >
                        <div className="p-3 rounded-full border border-white/20 group-hover:border-white transition-colors">
                            <ArrowDown className="w-6 h-6 animate-bounce" />
                        </div>
                        <span className="text-sm uppercase tracking-[0.3em]">Discover</span>
                    </div>
                </div>
            </section>

            {/* 2. Filter System */}
            <section className="py-12 px-6 sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto max-w-[1700px] flex flex-wrap gap-20 items-center justify-start">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`
                        text-sm font-bold tracking-widest transition-all duration-300 outline-none focus:outline-none relative
                        ${activeFilter === cat
                                    ? "text-[#FFE57F] after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#FFE57F]"
                                    : "text-gray-400 hover:text-[#FFE57F]"
                                }
                    `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. Project Gallery Grid */}
            <section className="py-12 px-6 md:px-20 bg-white">
                <div className="w-full max-w-[1700px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredProjects.map((project, index) => (
                            <Link
                                key={index}
                                href={project.slug !== "#" ? `/references/${project.slug}` : "#"}
                                className="group block no-underline cursor-pointer"
                            >
                                {/* Card Image */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-6">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Card Content (Below Image) */}
                                <div className="flex flex-col items-start gap-1">
                                    <h3 className="text-2xl font-medium text-black group-hover:text-gray-600 transition-all duration-300 group-hover:-translate-y-1">
                                        {project.title}
                                    </h3>

                                    {/* Animation Wrapper: Relative container to hold fading elements */}
                                    <div className="relative w-full h-6 mt-1 overflow-hidden">
                                        {/* Default: Category */}
                                        <p className="absolute top-0 left-0 text-xs font-bold text-gray-400 tracking-widest transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                                            ASB {project.type === "L" ? "LumiFlex" : "MultiSports"}
                                        </p>

                                        {/* Hover: Explore Project + Yellow Line */}
                                        <div className="absolute top-0 left-0 flex items-center gap-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            <div className="h-[2px] w-8 bg-[#FFE57F] shadow-[0_0_10px_#FFE57F]"></div>
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">EXPLORE PROJECT</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
