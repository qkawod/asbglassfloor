"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "nba",
        slug: "NBA-AS24-LED-Court-Collage",
        title: "NBA All-Star 2024",
        subtitle: "ASB 풀LED 스마트코트",
        description: "세계 최고 수준의 ASB 풀LED 스마트코트 시스템은 1,000만 명 이상의 순 시청자(Unique Viewers)를 사로잡았습니다. 이는 최근 4년 내 'NBA All-Star Saturday Night' 최다 시청 기록으로, 시스템의 압도적인 몰입감을 입증한 사례입니다.",
        image: "/NBA/NBA-AS24-LED-Court-Collage.png",
        images: [
            "/NBA/NBA All-STAR_1.webp",
            "/NBA/NBA All-STAR_2.webp",
            "/NBA/NBA All-STAR_3.webp",
            "/NBA/NBA All-STAR_4.jpg",
            "/NBA/NBA All-STAR_5.jpg",
            "/NBA/NBA All-STAR_6.jpg.webp"
        ],
        alignment: "left",
        color: "text-hotPink",
        glow: "shadow-[0_0_15px_#FF0099]",
        bg: "bg-hotPink"
    },
    {
        id: "bmw",
        slug: "FC-Bayern-Munich",
        title: "BMW Park",
        subtitle: "ASB 풀LED 스마트코트",
        description: "FC 바이에른 농구팀은 뮌헨 BMW 파크에서 ASB 풀LED 스마트코트 위에서 역사적인 BBL(분데스리가) 개막전을 치렀습니다. 세계 최고 수준의 구단이 선택한 ASB GlassFloor는 코트의 새로운 기준이 됩니다.",
        image: "/BMW/BMW Park_5.jpg",
        alignment: "right",
        color: "text-neonYellow",
        glow: "shadow-[0_0_15px_#E6FF00]",
        bg: "bg-neonYellow"
    },
    {
        id: "dazn",
        slug: null, // No specific page yet, fallback to references or handle strictly
        title: "DAZN Infinity League",
        subtitle: "ASB 풀LED 스마트코트",
        description: "DAZN 인피니티 리그를 통해 ASB 풀LED 스마트코트의 인터랙티브한 잠재력을 보여주었습니다. 코트 위에 직접 구현되는 게임 요소를 활용한 기능과 실시간 시각 정보 제공을 통해, ASB 풀LED 스마트코트는 스포츠 엔터테인먼트의 새로운 지평을 열어가고 있습니다.",
        image: "/DAZN Infinity League_2.webp",
        alignment: "left",
        color: "text-neonCyan",
        glow: "shadow-[0_0_15px_#00AEEF]",
        bg: "bg-neonCyan"
    }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageList = project.images || [project.image];

    // Image Rotation Logic
    useEffect(() => {
        if (imageList.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev: number) => (prev + 1) % imageList.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [imageList.length]);

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!cardRef.current) return;

            const image = cardRef.current.querySelector(".project-image-container");
            const text = cardRef.current.querySelector(".project-text");
            const line = cardRef.current.querySelector(".project-line");
            const scanner = cardRef.current.querySelector(".project-line-scanner");

            // Image Parallax & Fade
            gsap.fromTo(image,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Text Slide In
            gsap.fromTo(text,
                { x: 30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2.0,
                    ease: "power2.out",
                    delay: 0.4,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Line Entrance (Grow)
            gsap.fromTo(line,
                { width: 0, opacity: 0 },
                {
                    width: "8rem",
                    opacity: 1,
                    duration: 1.0,
                    ease: "power2.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Scanner Loop (Infinite)
            gsap.fromTo(scanner,
                { x: "-100%" },
                {
                    x: "100%",
                    duration: 4,
                    ease: "power2.inOut",
                    repeat: -1,
                    delay: 0
                }
            );
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`flex flex-col lg:flex-row items-center gap-20 xl:gap-32 py-16 ${project.alignment === "right" ? "lg:flex-row-reverse" : ""}`}
        >
            {/* Image Section */}
            <div className="project-image-container w-full lg:w-3/5 relative group">
                <div className="aspect-[16/10] w-full relative z-10 shadow-2xl overflow-hidden rounded-sm bg-white">
                    {imageList.map((img: string, i: number) => (
                        <Image
                            key={i}
                            src={img}
                            alt={`${project.title} - ${i + 1}`}
                            fill
                            className={`object-cover transition-all duration-1000 ${i === currentImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                                }`}
                            priority={index === 0 && i === 0}
                        />
                    ))}
                </div>
            </div>

            {/* Text Section */}
            <div className="project-text w-full lg:w-2/5 space-y-6 lg:px-8">
                {/* Blue Accent Line - LED Effect */}


                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-2">
                    {project.title}
                </h2>

                <h3 className="text-sm font-bold tracking-widest text-slate-900 mb-6">
                    {project.subtitle}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                    {project.description}
                </p>

                <div className="pt-4">
                    <Link
                        href={project.slug ? `/references/${project.slug}` : "/references"}
                        className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function LumiFlexProjects() {
    return (
        <div>
            {/* First Project Section */}
            <section className="pt-32 pb-20 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20">
                    <ProjectCard project={projects[0]} index={0} />
                </div>
            </section>

            {/* CTA/Intermission Section */}
            <section ref={(el) => {
                if (el) {
                    const ctx = gsap.context(() => {
                        gsap.from(el.children[0].children, {
                            scrollTrigger: {
                                trigger: el,
                                start: "top 80%",
                            },
                            y: 50,
                            opacity: 0,
                            duration: 1.2,
                            stagger: 0.2,
                            ease: "power3.out"
                        });
                    }, el);
                    return () => ctx.revert();
                }
            }} className="relative w-full py-48 md:py-64 bg-black text-white overflow-hidden group">
                {/* Background Image - Made to stretch as wide as possible */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url('/BMW/BMW_Park_2.jpeg')` }}
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />

                <div className="relative container mx-auto px-6 text-center max-w-4xl z-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white drop-shadow-lg">
                        풀LED 스마트코트
                    </h2>
                    <p className="text-white text-lg md:text-2xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto drop-shadow-md">
                        ASB 풀LED 스마트코트는 플로어 전체를 멀티펑션 스크린으로 탈바꿈시킵니다. 이는 스포츠, 이벤트, 광고 영역에 새로운 지평을 열었으며, 시각적 효과를 극대화하여 관객의 몰입도를 최고 수준으로 끌어올립니다.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        Contact Us
                    </Link>
                </div >
            </section >

            {/* Remaining Projects Section (BMW Park) */}
            < section className="py-20 bg-[#F5F7FA] text-slate-900 overflow-hidden" >
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20">
                    <ProjectCard project={projects[1]} index={1} />
                </div>
            </section >



            {/* Remaining Projects Section (DAZN +) */}
            < section className="pt-20 pb-32 bg-[#F5F7FA] text-slate-900 overflow-hidden" >
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20 space-y-32">
                    {projects.slice(2).map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i + 2} />
                    ))}
                </div>
            </section >
        </div >
    );
}
