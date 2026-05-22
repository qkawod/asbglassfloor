"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Award, BadgeCheck, FileText, ShieldCheck, X } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Certificate = {
    title: string;
    description: string;
    overlayTitle: string;
    overlayDescription: string;
    file: string;
    width: number;
    height: number;
};

type CertificateCategory = {
    id: string;
    title: string;
    subtitle: string;
    summary: string;
    accent: string;
    icon: "award" | "shield" | "file" | "badge";
    certificates: Certificate[];
};

const categories: CertificateCategory[] = [
    {
        id: "sports-federations",
        title: "국제연맹 인증",
        subtitle: "종목별 국제연맹 인증",
        summary: "프로 경기 기준에 맞춘 종목별 공식 인증 문서입니다.",
        accent: "from-electricCyan/70 to-neonCyan/20",
        icon: "award",
        certificates: [
            {
                title: "FIBA 인증서",
                description: "농구 코트 성능과 국제 스포츠 기준 적합성을 입증하는 공식 인증입니다.",
                overlayTitle: "FIBA",
                overlayDescription: "국제농구연맹",
                file: "asb_cert_fiba_basketball.pdf",
                width: 848,
                height: 1200,
            },
            {
                title: "FIVB 인증서",
                description: "배구 코트 성능과 국제연맹 요구 기준을 검증한 인증입니다.",
                overlayTitle: "FIVB",
                overlayDescription: "국제배구연맹",
                file: "asb_cert_fivb_volleyball.pdf",
                width: 848,
                height: 1200,
            },
            {
                title: "IHF 인증서",
                description: "핸드볼 코트 성능과 국제연맹 기준 적합성을 확인한 인증입니다.",
                overlayTitle: "IHF",
                overlayDescription: "국제핸드볼연맹",
                file: "asb_cert_ihf_handball.pdf",
                width: 848,
                height: 1200,
            },
            {
                title: "ITF Pace Rating 문서",
                description: "테니스 표면의 속도와 경기 특성을 검증한 Pace Rating 문서입니다.",
                overlayTitle: "ITF Pace Rating",
                overlayDescription: "국제테니스연맹",
                file: "asb_cert_itf_pace-rating.pdf",
                width: 848,
                height: 1200,
            },
            {
                title: "IWBF Europe 인증서",
                description: "휠체어 농구와 포용 스포츠 기준에 대한 성능 인증입니다.",
                overlayTitle: "IWBF Europe",
                overlayDescription: "국제휠체어농구연맹",
                file: "asb_cert_iwbf-europe_wheelchair-basketball.pdf",
                width: 927,
                height: 1200,
            },
        ],
    },
    {
        id: "fire-reaction",
        title: "화재반응등급",
        subtitle: "유럽 화재반응등급 시험성적서",
        summary: "유럽 안전 기준에 따른 화재 반응 분류 및 시험 문서입니다.",
        accent: "from-white/70 to-electricCyan/20",
        icon: "shield",
        certificates: [
            {
                title: "Reaction to Fire 등급분류",
                description: "유럽 기준에 따른 화재 안전 성능 등급을 확인하는 문서입니다.",
                overlayTitle: "Reaction to Fire",
                overlayDescription: "유럽 화재반응등급 분류",
                file: "asb_cert_fire-reaction_classification_01.pdf",
                width: 848,
                height: 1200,
            },
            {
                title: "Reaction to Fire 시험성적서",
                description: "화재반응등급 산정을 뒷받침하는 시험 결과 문서입니다.",
                overlayTitle: "Fire Test Result",
                overlayDescription: "유럽화재반응등급 시험성적서",
                file: "asb_cert_fire-reaction_test-result_02.pdf",
                width: 848,
                height: 1200,
            },
        ],
    },
    {
        id: "en-din-standards",
        title: "EN / DIN 기준",
        subtitle: "EN / DIN 성능 및 슬라이딩 테스트 관련 문서",
        summary: "유럽 및 독일 스포츠 바닥재 성능 기준 관련 문서입니다.",
        accent: "from-neonCyan/70 to-white/20",
        icon: "badge",
        certificates: [
            {
                title: "EN Performance Test",
                description: "유럽 기준에 따른 스포츠 바닥재 성능을 검증한 문서입니다.",
                overlayTitle: "EN Performance",
                overlayDescription: "EN 성능 기준 시험",
                file: "asb_cert_en_performance-test.pdf",
                width: 848,
                height: 1200,
            },
            {
                title: "EN Sliding Friction Test",
                description: "표면 미끄럼 및 슬라이딩 성능을 확인하는 EN 시험 문서입니다.",
                overlayTitle: "EN Sliding Friction",
                overlayDescription: "EN 슬라이딩 마찰 시험",
                file: "asb_cert_en_sliding-friction.pdf",
                width: 847,
                height: 1200,
            },
            {
                title: "DIN Sliding Friction Test",
                description: "DIN 기준에 따른 슬라이딩 마찰 성능 시험 문서입니다.",
                overlayTitle: "DIN Sliding Friction",
                overlayDescription: "독일 DIN 마찰 성능 시험",
                file: "asb_cert_din_Gleitreibungsbeiwert nach DIN.pdf",
                width: 848,
                height: 1200,
            },
        ],
    },
    {
        id: "patents",
        title: "특허",
        subtitle: "특허",
        summary: "글라스 플로어와 조명 스포츠 바닥 기술 관련 특허 문서입니다.",
        accent: "from-slate-200/70 to-neonCyan/20",
        icon: "file",
        certificates: [
            {
                title: "US GlassFloor Patent",
                description: "ASB GlassFloor 기술과 관련된 미국 특허 문서입니다.",
                overlayTitle: "US Patent",
                overlayDescription: "미국 특허",
                file: "asb_patent_us_glassfloor.pdf",
                width: 848,
                height: 1200,
            },
            {
                title: "German Illuminated Sports Floor Patent",
                description: "조명이 적용된 실내 스포츠 바닥 기술에 관한 독일 특허 문서입니다.",
                overlayTitle: "German Patent",
                overlayDescription: "독일 특허",
                file: "asb_patent_Patent Urkunde Beleuchteter Hallenfußboden.pdf",
                width: 848,
                height: 1200,
            },
        ],
    },
];

function getThumbnailPath(file: string) {
    return `${encodeURI(`/cert-thumbnails/${file.replace(/\.pdf$/i, ".png")}`)}?v=3`;
}

function CategoryIcon({ type }: { type: CertificateCategory["icon"] }) {
    const className = "h-5 w-5";

    if (type === "award") return <Award className={className} />;
    if (type === "shield") return <ShieldCheck className={className} />;
    if (type === "badge") return <BadgeCheck className={className} />;
    return <FileText className={className} />;
}

export default function CertificationArchive() {
    const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
    const overviewSectionRef = useRef<HTMLDivElement>(null);
    const overviewItemsRef = useRef<(HTMLElement | null)[]>([]);
    const totalCertificates = useMemo(
        () => categories.reduce((count, category) => count + category.certificates.length, 0),
        []
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mainTitle = overviewSectionRef.current?.querySelector(".cert-sticky-title");
            if (mainTitle) {
                gsap.from(mainTitle.children, {
                    scrollTrigger: {
                        trigger: mainTitle,
                        start: "top 85%",
                    },
                    y: 100,
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power4.out",
                });
            }

            const scanner = overviewSectionRef.current?.querySelector(".cert-line-scanner");
            if (scanner) {
                gsap.fromTo(
                    scanner,
                    { x: "-100%" },
                    {
                        x: "100%",
                        duration: 2,
                        ease: "power2.inOut",
                        repeat: -1,
                    }
                );
            }

            overviewItemsRef.current.forEach((item) => {
                if (!item) return;

                const targets = item.children.length > 0 ? item.children : item;

                gsap.from(targets, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                    y: 50,
                    opacity: 0,
                    filter: "blur(5px)",
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                });
            });
        }, overviewSectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!activeCertificate) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setActiveCertificate(null);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [activeCertificate]);

    return (
        <div className="bg-white text-slate-900">
            <section ref={overviewSectionRef} className="relative overflow-hidden bg-black py-24 text-white md:py-32">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/glass-production-packaging-1024x666.jpeg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />

                <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
                    <div className="md:col-span-4">
                        <div className="cert-sticky-title sticky top-32">
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-electricCyan">
                                인증 개요
                            </p>
                            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tighter text-white md:text-6xl">
                                검증된 기술,
                                <br />
                                공식 기준의 신뢰성
                            </h2>
                            <div className="relative mt-8 h-[1.6px] w-48 overflow-hidden rounded-full bg-[var(--color-led-line)]/30 shadow-[0_0_15px_var(--color-led-line)]">
                                <div className="cert-line-scanner absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white to-transparent" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10 md:col-span-8">
                        <p
                            ref={(el) => {
                                overviewItemsRef.current[0] = el;
                            }}
                            className="max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
                        >
                            ASB GlassFloor는 국제 스포츠 연맹, 유럽 안전 기준, 독일 산업 규격,
                            특허 기술을 통해 성능과 안전성을 검증받은 스포츠 바닥 시스템입니다.
                        </p>
                        <div className="space-y-8">
                            {[
                                ["국제연맹 인증", "FIBA, FIVB, IHF, ITF, IWBF Europe 기준에 따른 스포츠 성능 검증"],
                                ["화재 안전", "유럽 화재반응등급 분류와 시험성적서를 통한 안전성 확인"],
                                ["EN / DIN 기준", "스포츠 바닥재 성능, 미끄럼, 슬라이딩 마찰 기준 검증"],
                                ["특허 기술", "GlassFloor 및 조명 스포츠 바닥 구조에 대한 핵심 특허 문서"],
                            ].map(([title, description], index) => (
                                <div
                                    key={title}
                                    ref={(el) => {
                                        overviewItemsRef.current[index + 1] = el;
                                    }}
                                    className="border-b border-white/10 pb-8 last:border-0"
                                >
                                    <h3 className="mb-3 text-xl font-bold tracking-wide text-white md:text-2xl">
                                        {title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-gray-400 md:text-lg">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div
                            ref={(el) => {
                                overviewItemsRef.current[5] = el;
                            }}
                            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
                        >
                            {[
                                ["04", "분류"],
                                [String(totalCertificates).padStart(2, "0"), "문서"],
                                ["EN", "유럽 기준"],
                                ["DIN", "독일 규격"],
                            ].map(([value, label]) => (
                                <div key={label} className="border border-white/10 bg-white/[0.04] p-5">
                                    <div className="text-2xl font-semibold text-white">{value}</div>
                                    <div className="mt-2 text-xs font-bold tracking-[0.22em] text-white/42">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-4 text-xs font-bold tracking-[0.34em] text-slate-500">
                                인증 카테고리
                            </p>
                            <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-5xl">
                                프리미엄 인증 아카이브
                            </h2>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-slate-500">
                            국제연맹, 화재 안전, EN/DIN 성능 기준, 특허 문서를 카테고리별로 정리했습니다.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {categories.map((category, index) => (
                            <motion.a
                                key={category.id}
                                href={`#${category.id}`}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: index * 0.06 }}
                                className="group border border-slate-200 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
                            >
                                <div className={`mb-6 h-[2px] w-full bg-gradient-to-r ${category.accent}`} />
                                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50 text-slate-900 transition-colors group-hover:border-neonCyan/40 group-hover:text-neonCyan">
                                    <CategoryIcon type={category.icon} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                                <p className="mt-2 text-sm font-medium text-slate-500">{category.subtitle}</p>
                                <p className="mt-5 text-sm leading-relaxed text-slate-500">{category.summary}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#F5F7FA] py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-14">
                        <p className="mb-4 text-xs font-bold tracking-[0.34em] text-slate-500">
                            인증서 목록
                        </p>
                        <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-5xl">
                            인증서 원문 보기
                        </h2>
                    </div>

                    <div className="space-y-20 md:space-y-28">
                        {categories.map((category) => (
                            <div key={category.id} id={category.id} className="scroll-mt-28">
                                <div className="mb-10 flex flex-col gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
                                    <div>
                                        <h3 className="text-2xl font-medium tracking-tight text-slate-900 md:text-4xl">
                                            {category.title}
                                        </h3>
                                        <p className="mt-2 text-sm font-medium text-neonCyan">{category.subtitle}</p>
                                    </div>
                                </div>

                                <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                    {category.certificates.map((certificate) => (
                                        <motion.button
                                            key={certificate.file}
                                            type="button"
                                            initial={{ opacity: 0, y: 18 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.55 }}
                                            onClick={() => setActiveCertificate(certificate)}
                                            className="group relative block h-full w-full cursor-pointer overflow-hidden border border-slate-200 bg-white p-3 text-left shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] focus:outline-none focus:ring-2 focus:ring-slate-900"
                                            aria-label={`${certificate.title} 크게 보기`}
                                        >
                                            <div className="relative aspect-[3/4] overflow-hidden bg-white">
                                                <div className="relative h-full w-full">
                                                    <Image
                                                        src={getThumbnailPath(certificate.file)}
                                                        alt={`${certificate.title} 이미지`}
                                                        fill
                                                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.045]"
                                                        unoptimized
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/62" />
                                                <div className="absolute inset-x-7 bottom-7 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                                    <div className="border-l-2 border-electricCyan pl-5 text-white drop-shadow-lg">
                                                        <span className="block text-xl font-semibold tracking-tight md:text-2xl">
                                                            {certificate.overlayTitle}
                                                        </span>
                                                        <span className="mt-2 block text-sm font-medium leading-relaxed text-white/78 md:text-base">
                                                            {certificate.overlayDescription}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="grid gap-10 bg-slate-900 p-8 text-white md:grid-cols-[1.1fr_0.9fr] md:p-12">
                        <div>
                            <p className="mb-5 text-xs font-bold tracking-[0.34em] text-electricCyan">
                                검증된 퍼포먼스
                            </p>
                            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                                국제 기준으로 검증된 ASB GlassFloor의 기술력
                            </h2>
                        </div>
                        <div className="flex flex-col justify-end">
                            <p className="text-base leading-relaxed text-white/58 md:text-lg">
                                스포츠 성능, 안전성, 건축 적용성까지 국제 기준으로 확인된 프리미엄 글라스 플로어 솔루션입니다.
                            </p>
                            <a
                                href="#sports-federations"
                                className="mt-8 inline-flex w-fit border border-white/20 px-5 py-3 text-xs font-bold tracking-[0.22em] text-white transition-colors hover:border-electricCyan/70 hover:text-electricCyan"
                            >
                                인증 문서 보기
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {activeCertificate && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/86 p-4 backdrop-blur-md md:p-8"
                    onClick={() => setActiveCertificate(null)}
                >
                    <button
                        type="button"
                        onClick={() => setActiveCertificate(null)}
                        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black/45 text-white transition-colors hover:border-white/50 md:right-8 md:top-8"
                        aria-label="인증서 이미지 닫기"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div
                        className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden border border-white/15 bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,0.6)] md:p-4"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="relative flex max-h-[82vh] items-center justify-center overflow-hidden bg-[#eef1f5]">
                            <Image
                                src={getThumbnailPath(activeCertificate.file)}
                                alt={`${activeCertificate.title} 원본 이미지`}
                                width={activeCertificate.width}
                                height={activeCertificate.height}
                                sizes="100vw"
                                className="max-h-[82vh] w-auto max-w-full object-contain"
                                priority
                                unoptimized
                            />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/78 to-transparent px-5 pb-5 pt-16">
                                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                                    {activeCertificate.overlayTitle}
                                </h3>
                                <p className="mt-1 text-sm font-medium text-white/70 md:text-base">
                                    {activeCertificate.overlayDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
