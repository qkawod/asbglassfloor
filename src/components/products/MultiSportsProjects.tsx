"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import MultiSportsDemo from "@/components/MultiSportsDemo";


gsap.registerPlugin(ScrollTrigger);


const projects = [
    {
        id: "oxford",
        slug: "Oxford-University",
        title: "The University of Oxford",
        subtitle: "ASB 스마트코트",
        description: "세계적인 교육기관 옥스퍼드 대학교는 에이서 네더콧(Acer Nethercott) 스포츠 홀에 ASB 스마트코트를 도입했습니다. 블랙색상의 커스텀 컬러가 적용된 GlassFloor와 선명한 화이트 라인 마킹이 어우러져, 공간 전체에 모던하고 미래지향적인 분위기를 연출합니다.",
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
        subtitle: "국제 프로 스포츠 인증",
        description: "스위스 캄(Cham)에 위치한 엘리트 스포츠 전문 센터 OYM(On Your Marks)은 ASB 스마트코트를 선택했습니다. 이 시스템은 프로 선수들이 최고 수준에서 훈련하고 경기를 펼칠 수 있는 완벽한 환경을 제공합니다.",
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

const conceptScenes = [
    {
        number: "01",
        eyebrow: "CAMPUS SMART GYMNASIUM",
        title: "학교복합시설 스마트체육관",
        description: "교육시설과 지역 생활체육을 하나로 연결한 미래형 스마트코트 입니다.",
        image: "/smartcourt-concepts/campus-smart-gymnasium.jpg",
        width: 1488,
        height: 1060,
        details: [
            "학교복합시설, 공간재구조화, 학교스포츠클럽 운영에 대응하는",
            "미래형 체육공간으로,",
            "수업·방과후·지역연계를 유연하게 수용합니다.",
        ],
    },
    {
        number: "02",
        eyebrow: "INTEGRATED SPORTS COMMUNITY",
        title: "복합 스포츠 커뮤니티",
        description: "스마트코트와 휴게공간, 스쿼시 코트를 유기적으로 구성한 복합 스포츠 공간입니다.",
        image: "/smartcourt-concepts/integrated-sports-community.jpeg",
        width: 1686,
        height: 933,
        details: [
            "운동과 휴식, 소통이 자연스럽게 연결되는 구성으로",
            "입주민 만족도와 커뮤니티 가치를 높이는",
            "고급형 복합 스포츠 커뮤니티 공간입니다.",
        ],
    },
    {
        number: "03",
        eyebrow: "PREMIUM MULTISPORT COURT",
        title: "스마트형 다목적체육관",
        description: "LED 라인 시스템으로 다양한 종목을 선명하게 전환하는 스마트형 다목적체육관 입니다.",
        image: "/smartcourt-concepts/premium-multisport-court.jpg",
        width: 1224,
        height: 689,
        details: [
            "하나의 공간에서 다양한 종목과 프로그램을 운영할 수 있도록",
            "LED 라인 전환 시스템을 적용한",
            "고효율 공공 체육시설 솔루션입니다.",
        ],
    },
];

interface Project {
    id: string;
    slug: string | null;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    images?: string[];
    alignment: string;
    color: string;
    glow: string;
    bg: string;
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
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

function SmartCourtConceptGallery() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".concept-heading > *",
                { y: 36, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".concept-heading",
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            gsap.utils.toArray<HTMLElement>(".concept-scene").forEach((scene, index) => {
                const x = index === 1 ? -48 : index === 2 ? 48 : 0;
                const y = index === 0 ? 56 : 28;
                const caption = scene.querySelector(".concept-caption");
                const line = scene.querySelector(".concept-line");

                gsap.fromTo(
                    scene.querySelector(".concept-frame"),
                    { x, y, opacity: 0, scale: 0.97 },
                    {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1.05,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: scene,
                            start: "top 82%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );

                gsap.fromTo(
                    caption,
                    { y: 26, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: 0.16,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: scene,
                            start: "top 78%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );

                gsap.fromTo(
                    line,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.75,
                        delay: 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: scene,
                            start: "top 78%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            aria-labelledby="smartcourt-concept-title"
            className="overflow-hidden bg-[#070A0F] py-24 text-white md:py-28"
        >
            <div className="mx-auto w-full max-w-[1680px] px-5 md:px-12 xl:px-20">
                <div className="concept-heading mx-auto mb-16 max-w-7xl text-center md:mb-20">
                    <span className="text-xs font-bold tracking-[0.34em] text-[#4D9FFF]">
                        SMARTCOURT SPACE CONCEPT
                    </span>
                    <h2
                        id="smartcourt-concept-title"
                        className="mt-7 text-3xl font-medium leading-[1.2] tracking-tight text-white md:whitespace-nowrap md:text-[clamp(28px,4vw,56px)]"
                    >
                        하나의 공간, 더 많은 가능성
                    </h2>
                    <p className="mx-auto mt-6 text-base leading-[1.8] text-white/65 md:whitespace-nowrap md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">
                        교육시설부터 복합 스포츠센터, 프리미엄 커뮤니티 시설까지 공간의 규모와 운영 목적에 최적화된 ASB 스마트코트 적용 모델을 제안합니다.
                    </p>
                    <p className="mt-5 text-xs tracking-[0.08em] text-white/35">
                        AI 기반 공간 적용 콘셉트 조감도
                    </p>
                </div>

                <div className="concept-gallery grid gap-16 lg:grid-cols-3 lg:gap-6 xl:gap-8">
                    {conceptScenes.map((scene, index) => (
                        <figure
                            key={scene.number}
                            className={`concept-scene concept-card ${index === 0 ? "concept-card-left" : index === 2 ? "concept-card-right" : "concept-card-center"}`}
                        >
                            <div className="concept-frame relative aspect-video overflow-hidden rounded-[10px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                                <Image
                                    src={scene.image}
                                    alt={`${scene.title} 조감도`}
                                    width={scene.width}
                                    height={scene.height}
                                    unoptimized
                                    sizes="(min-width: 1680px) 490px, (min-width: 1024px) 31vw, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2.5rem)"
                                    className="h-full w-full object-cover object-center"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-black/10" />
                                <div className="concept-extra-shade pointer-events-none absolute inset-0 hidden lg:block" />
                                <div className="concept-extra-copy pointer-events-none absolute bottom-6 left-6 z-10 hidden w-max max-w-[calc(100%-3rem)] lg:block">
                                    <span className="mb-3 block text-[10px] font-bold tracking-[0.2em] text-[#4D9FFF]">
                                        CONCEPT NOTE
                                    </span>
                                    {scene.details.map((detail) => (
                                        <p key={detail} className="mt-1 text-[8px] leading-relaxed text-white first:mt-0 xl:text-[8.4px]">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <figcaption className="concept-caption mt-6 border-b border-white/10 pb-9">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm font-medium tracking-[0.25em] text-[#4D9FFF]">
                                        {scene.number}
                                    </span>
                                    <span className="text-right text-[10px] font-bold tracking-[0.18em] text-white/35">
                                        {scene.eyebrow}
                                    </span>
                                </div>
                                <h3 className="mt-5 text-2xl font-medium tracking-tight text-white xl:text-3xl">
                                    {scene.title}
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/55 lg:min-h-[3.25rem] xl:text-base">
                                    {scene.description}
                                </p>
                                <div className="mt-5 border-t border-white/10 pt-4 lg:hidden">
                                    {scene.details.map((detail) => (
                                        <p key={detail} className="mt-2 text-sm leading-relaxed text-white/45 first:mt-0">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                                <span className="concept-line mt-7 block h-px w-20 origin-left bg-[#4D9FFF]" />
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function MultiSportsProjects() {
    return (
        <div>
            <SmartCourtConceptGallery />

            {/* CTA/Intermission Section */}
            <section ref={(el) => {
                if (el) {
                    const ctx = gsap.context(() => {
                        gsap.from(el.children[2].children, {
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
                    style={{ backgroundImage: `url('/FIBA U19 Women’s World Cup/asb-glassfloor-source-fiba-media-41.jpg')` }}
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />

                <div className="relative container mx-auto px-6 text-center max-w-4xl z-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white drop-shadow-lg break-keep">
                        타협하지 않는 다목적 플로어 시스템
                    </h2>
                    <p className="text-white text-lg md:text-2xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto drop-shadow-md break-keep">
                        ASB 스마트코트는 단순한 실내 바닥재가 아닙니다. 모든 영역에서 퍼포먼스를 극대화하도록 설계된, 어떠한 타협도 없는 완성형 시스템입니다.
                        <br className="hidden md:block" /><br className="hidden md:block" />
                        특수 처리된 유리 표면과 알루미늄 하부 구조(Substructure)의 독창적인 결합은 실내 스포츠 환경에서 전례 없는 품질과 최적의 플레이 조건을 제공합니다.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Interactive Line Change System */}
            <MultiSportsDemo />

            {/* Certification Section (Intermission 2) */}
            <section className="py-64 bg-white text-slate-900">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl md:text-5xl font-medium mb-8 max-w-4xl mx-auto text-slate-900">
                        국제 프로 스포츠 인증
                    </h3>
                    <p className="text-slate-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed break-keep">
                        ASB GlassFloor는 국제농구연맹(FIBA), 국제핸드볼연맹(IHF), 국제배구연맹(FIVB) 등 주요 국제 스포츠 연맹의 최고 등급 인증을 획득했습니다. 충격 흡수성, 공 반발력, 미끄럼 저항성 등 엄격한 성능 테스트를 모두 통과하여 프로 경기에서도 완벽한 퍼포먼스를 보장합니다.
                    </p>



                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 opacity-90">
                        {/* FIBA */}
                        <div className="relative w-64 h-32 md:w-96 md:h-48">
                            <Image
                                src="/FIBA.webp"
                                alt="FIBA"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* FIVB */}
                        <div className="relative w-64 h-32 md:w-96 md:h-48">
                            <Image
                                src="/FIVB.webp"
                                alt="FIVB"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* IHF */}
                        <div className="relative w-64 h-32 md:w-96 md:h-48">
                            <Image
                                src="/IHF.webp"
                                alt="IHF"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Remaining Projects Section */}
            <section className="pt-20 pb-32 bg-[#F5F7FA] text-slate-900 overflow-hidden">
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-20 space-y-32">
                    {[projects[2], projects[1], projects[0]].map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i + 2} />
                    ))}
                </div>


            </section>
        </div>
    );
}
