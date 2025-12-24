"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string | string[]; // Allow array of images
    alignment: string;
    color: string;
    glow: string;
    bg: string;
}

const projects: Project[] = [
    {
        id: "tech1",
        title: "Glass Surface Engineering",
        subtitle: "TECHNOLOGY",
        description: "독자적인 에칭 공법에 특수 세라믹 도트를 더해, 유리의 한계를 넘어선 고기능성 표면을 설계했습니다. 이 첨단 공정은 국제 스포츠 기준에 부합하는 이상적인 마찰계수를 유지시켜 주며, 완벽한 그립감으로 선수의 안전과 최상의 경기력을 동시에 보장합니다.",
        image: ["/surface.png", "/surface_01.png"], // Slideshow images
        alignment: "left",
        color: "text-neonBlue",
        glow: "shadow-[0_0_15px_#0047FF]",
        bg: "bg-neonBlue"
    },
    {
        id: "tech2",
        title: "Substructure Engineering",
        subtitle: "TECHNOLOGY",
        description: "ASB GlassFloor의 하부 구조 시스템(Substructure)은 스포츠 경기력과 공간 활용성을 동시에 극대화하도록 설계되었습니다. 평상시에는 최상급의 탄성과 충격 흡수율을 제공하여 선수의 관절을 보호하고 최고의 플레이를 지원합니다. 하지만 단순한 스포츠 바닥재에 그치지 않고, 필요 시 구조적 보강을 통해 대규모 관중석이나 중장비가 배치되는 환경까지 완벽하게 대응합니다.",
        image: "/asb_service_03.jpg",
        alignment: "left",
        color: "text-neonCyan",
        glow: "shadow-[0_0_15px_#00AEEF]",
        bg: "bg-neonCyan"
    },
    {
        id: "tech3",
        title: "Performance & Safety",
        subtitle: "TECHNOLOGY",
        description: "ASB GlassFloor는 선수의 안전을 최우선으로 고려하여 최적의 탄성과 충격 흡수 기능을 설계했습니다. 이는 선수의 신체 피로도를 획기적으로 줄여줄 뿐만 아니라, 100%의 공 리바운드율을 완벽하게 구현하여 농구, 핸드볼 등 엄격한 기준이 요구되는 구기 종목에서도 최상의 퍼포먼스를 보장합니다.\n\n특히 ASB LumiFlex는 단 2mm의 미세한 변형만으로 충격의 50%를 흡수하는 놀라운 성능을 발휘합니다. 이 독보적인 쿠셔닝 기술은 유리 자체의 탄성과 하부 구조에 내장된 이중 알루미늄 서스펜션의 정밀한 결합으로 완성됩니다.",
        image: "/MultiFloor Flextest.mp4",
        alignment: "left",
        color: "text-neonBlue",
        glow: "shadow-[0_0_15px_#0047FF]",
        bg: "bg-neonBlue"
    },
    {
        id: "tech4",
        title: "Certified Performance",
        subtitle: "TECHNOLOGY",
        description: "ASB GlassFloor는 엄격한 국제 스포츠 시설 기준을 완벽하게 준수합니다. 독일 공업 규격(DIN 18032-2) 및 유럽 통합 표준(EN 14904) 검증을 통해 충격 흡수성과 공 반발력(Ball Rebound) 부문에서 최상위 등급을 획득했습니다.\n\n더불어 FIBA(농구), FIVB(배구), IHF(핸드볼), WSF(스쿼시)는 물론 IWBF(휠체어 농구)의 공식 인증까지 획득했습니다. 이는 다양한 엘리트 스포츠 경기는 물론, 높은 내구성이 요구되는 휠체어 종목까지 완벽하게 소화하는 압도적인 퍼포먼스를 입증합니다.",
        image: "/bounce.mp4",
        alignment: "right",
        color: "text-neonCyan",
        glow: "shadow-[0_0_15px_#00AEEF]",
        bg: "bg-neonCyan"
    }
];

function ProjectCard({ project }: { project: Project }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Slideshow Logic
    useEffect(() => {
        if (Array.isArray(project.image) && project.image.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % project.image.length);
            }, 3000); // 3 seconds interval
            return () => clearInterval(interval);
        }
    }, [project.image]);

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!cardRef.current) return;

            const image = cardRef.current.querySelector(".project-image-container");
            const text = cardRef.current.querySelector(".project-text");

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
        }, cardRef);

        return () => ctx.revert();
    }, []);

    const isVideo = (src: string) => src.endsWith(".mp4");
    const currentSrc = Array.isArray(project.image) ? project.image[currentImageIndex] : project.image;

    return (
        <div
            ref={cardRef}
            className={`flex flex-col lg:flex-row items-center lg:items-start gap-20 xl:gap-32 py-16 ${project.alignment === "right" ? "lg:flex-row-reverse" : ""}`}
        >
            {/* Image Section */}
            <div className="project-image-container w-full lg:w-3/5 relative group">
                <div className="aspect-[16/10] w-full relative z-10 shadow-2xl overflow-hidden rounded-sm bg-white">
                    {isVideo(currentSrc) ? (
                        <video
                            src={currentSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`w-full h-full object-cover ${project.id === "tech4" ? "scale-[1.03]" : ""}`}
                        />
                    ) : (
                        <div className="relative w-full h-full">
                            {Array.isArray(project.image) ? (
                                // Slideshow rendering
                                project.image.map((src, index) => (
                                    <Image
                                        key={src}
                                        src={src}
                                        alt={`${project.title} - ${index + 1}`}
                                        fill
                                        className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                                    />
                                ))
                            ) : (
                                // Single Image
                                <Image
                                    src={currentSrc}
                                    alt={`${project.title}`}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Text Section */}
            <div className="project-text w-full lg:w-2/5 space-y-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-2 whitespace-nowrap">
                    {project.title}
                </h2>

                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
                    {project.subtitle}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default function TechProjects() {
    return (
        <div>
            {/* First Project Section */}
            <section className="pt-32 pb-20 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20">
                    <ProjectCard project={projects[0]} />
                </div>
            </section>

            {/* CTA/Intermission Section */}
            <section className="py-64 bg-white text-slate-900">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-slate-900">
                        Engineered for the Future
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                        스포츠와 기술, 그 완벽한 조화를 경험해 보세요. 압도적인 내구성과 성능의 ASB GlassFloor로,<br className="hidden md:block" /> 스마트 시대에 걸맞은 경기장의 새로운 패러다임을 제시합니다.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Remaining Projects Section */}
            <section className="py-20 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20">
                    <ProjectCard project={projects[2]} />
                </div>
            </section>

            {/* Third Project Section */}
            <section className="py-20 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20">
                    <ProjectCard project={projects[3]} />
                </div>
            </section>

            {/* Fourth Project Section */}
            <section className="py-20 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20">
                    <ProjectCard project={projects[1]} />
                </div>
            </section>
        </div>
    );
}
