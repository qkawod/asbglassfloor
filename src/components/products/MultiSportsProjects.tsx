"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const projects = [
    {
        id: "oxford",
        slug: "Oxford-University",
        title: "The University of Oxford",
        subtitle: "ASB MultiSports",
        description: "옥스포드 대학교는 에이서 네더코트(Acer Nethercott) 스포츠 홀에 ASB MultiSports를 도입했습니다. 커스텀 컬러가 적용된 GlassFloor와 선명한 화이트 라인 마킹은 공간 전체에 모던하고 미래지향적인 분위기를 연출합니다.",
        image: "/University of oxford/asb-glassfloor-acer.jpg",
        alignment: "left",
        color: "text-neonBlue",
        glow: "shadow-[0_0_15px_#0047FF]",
        bg: "bg-neonBlue"
    },
    {
        id: "oym",
        slug: "OYM-College",
        title: "OYM - On Your Marks",
        subtitle: "Certified for Professional Sports",
        description: "스위스 캄(Cham)에 위치한 엘리트 스포츠 전문 센터 OYM(On Your Marks)은 ASB MultiSports를 선택했습니다. 이 시스템은 프로 선수들이 최고 수준에서 훈련하고 경기를 펼칠 수 있는 완벽한 환경을 제공합니다.",
        image: "/OYM/OYM_swiss.jpg",
        images: [
            "/OYM/OYM_01.jpg",
            "/OYM/OYM__.jpeg",
            "/OYM/OYM____.jpeg"
        ],
        alignment: "right",
        color: "text-hotPink",
        glow: "shadow-[0_0_15px_#FF0099]",
        bg: "bg-hotPink"
    },
    {
        id: "bmw",
        slug: "BallsportARENA-Dresden",
        title: "BallsportARENA in Dresden",
        subtitle: "PROFESSIONAL HANDBALL VENUE",
        description: "독일 DRESDEN BallsportARENA는 진정한 다기능 공간의 표준을 제시합니다. 2,000m² 규모의 이 가변형 공간은 엘리트 스포츠와 장애인 스포츠는 물론, 복싱이나 콘서트와 같은 대형 이벤트까지 수용하며 공간 활용의 극대화를 입증하고 있습니다.",
        image: "/Dresden/BallSport ARENA Dresden_04.jpg",
        images: [
            "/Dresden/BallSport ARENA Dresden_04.jpg",
            "/Dresden/20690303_1039972409439437_3075886819015665266_o-c797e3e6.jpg",
            "/Dresden/BallSport ARENA Dresden_05.jpg"
        ],
        alignment: "left",
        color: "text-neonYellow",
        glow: "shadow-[0_0_15px_#E6FF00]",
        bg: "bg-neonYellow"
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
        }, 3000); // 3 Seconds

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

export default function MultiSportsProjects() {
    return (
        <div>
            {/* First Project Section */}
            <section className="pt-32 pb-20 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20">
                    <ProjectCard project={projects[0]} index={0} />
                </div>
            </section>

            {/* CTA/Intermission Section */}
            <section className="py-64 bg-white text-slate-900">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-slate-900">
                        타협하지 않는 다목적 플로어 시스템
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-3xl mx-auto break-keep">
                        ASB MultiSports는 평범한 실내 바닥재가 아닙니다. 이는 모든 영역에서 퍼포먼스를 극대화하기 위해 설계된, 어떠한 타협도 없는 완벽한 시스템입니다.
                        <br className="hidden md:block" /><br className="hidden md:block" />
                        특수 처리된 유리 표면과 알루미늄 하부 구조(Substructure)의 독창적인 결합은 실내 스포츠 환경에서 전례 없는 품질과 최적의 조건을 제공합니다.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Remaining Projects Section (OYM) */}
            <section className="py-20 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20">
                    <ProjectCard project={projects[1]} index={1} />
                </div>
            </section>

            {/* Certification Section (Intermission 2) */}
            <section className="py-64 bg-white text-slate-900">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl md:text-5xl font-medium mb-8 max-w-4xl mx-auto text-slate-900">
                        Certified for Professional Sports
                    </h3>
                    <p className="text-slate-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed break-keep">
                        ASB GlassFloor는 국제농구연맹(FIBA), 국제핸드볼연맹(IHF), 국제배구연맹(FIVB) 등 주요 국제 스포츠 연맹의 최고 등급 인증을 획득했습니다. 충격 흡수성, 공 반발력, 미끄럼 저항성 등 엄격한 성능 테스트를 모두 통과하여 프로 경기에서도 완벽한 퍼포먼스를 보장합니다.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 opacity-90">
                        {/* FIBA */}
                        <div className="relative w-64 h-32 md:w-96 md:h-48">
                            <Image
                                src="/Logo/FIBA.png.webp"
                                alt="FIBA"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* FIVB */}
                        <div className="relative w-64 h-32 md:w-96 md:h-48">
                            <Image
                                src="/Logo/FIVB.png.webp"
                                alt="FIVB"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* IHF */}
                        <div className="relative w-64 h-32 md:w-96 md:h-48">
                            <Image
                                src="/Logo/IHF.png.webp"
                                alt="IHF"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Remaining Projects Section (BMW Park +) */}
            <section className="pt-20 pb-32 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20 space-y-32">
                    {projects.slice(2).map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i + 2} />
                    ))}
                </div>


            </section>
        </div>
    );
}
