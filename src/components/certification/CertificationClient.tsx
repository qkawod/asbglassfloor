"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowDown, X, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Data structure for certificates
const certificates = {
    federations: [
        { id: "fiba", title: "FIBA", subtitle: "국제농구연맹 인증", thumb: "/certifications/thumbs/fiba.webp", pdf: "/certifications/pdfs/fiba.pdf" },
        { id: "fivb", title: "FIVB", subtitle: "국제배구연맹 인증", thumb: "/certifications/thumbs/fivb.webp", pdf: "/certifications/pdfs/fivb.pdf" },
        { id: "iff", title: "IFF", subtitle: "국제플로어볼연맹 인증", thumb: "/certifications/thumbs/iff.webp", pdf: "/certifications/pdfs/iff.pdf" },
        { id: "its", title: "ITS", subtitle: "ITS 인증", thumb: "/certifications/thumbs/its.webp", pdf: "/certifications/pdfs/its.pdf" },
        { id: "iwbf", title: "IWBF", subtitle: "국제휠체어농구연맹 인증", thumb: "/certifications/thumbs/iwbf.webp", pdf: "/certifications/pdfs/iwbf.pdf" },
    ],
    fire: [
        { id: "fire1", title: "European Fire Reaction Test Report 01", subtitle: "유럽 화재반응등급 시험성적서", thumb: "/certifications/thumbs/fire-reaction-01.webp", pdf: "/certifications/pdfs/fire-reaction-01.pdf" },
        { id: "fire2", title: "European Fire Reaction Test Report 02", subtitle: "유럽 화재반응등급 시험성적서", thumb: "/certifications/thumbs/fire-reaction-02.webp", pdf: "/certifications/pdfs/fire-reaction-02.pdf" },
    ],
    patents: [
        { id: "patent-us", title: "United States Patent", subtitle: "미국 특허", thumb: "/certifications/thumbs/us-patent.webp", pdf: "/certifications/pdfs/us-patent.pdf" },
        { id: "patent-de", title: "German Patent", subtitle: "독일 특허", thumb: "/certifications/thumbs/german-patent.webp", pdf: "/certifications/pdfs/german-patent.pdf" },
    ],
    tests: [
        { id: "en-perf", title: "EN Performance Test", subtitle: "EN 성능 테스트", thumb: "/certifications/thumbs/en-performance.webp", pdf: "/certifications/pdfs/en-performance.pdf" },
        { id: "en-slide", title: "EN Sliding Test", subtitle: "EN 슬라이딩 테스트", thumb: "/certifications/thumbs/en-sliding.webp", pdf: "/certifications/pdfs/en-sliding.pdf" },
        { id: "din-perf", title: "DIN Performance Test", subtitle: "DIN 성능 테스트", thumb: "/certifications/thumbs/din-performance.webp", pdf: "/certifications/pdfs/din-performance.pdf" },
    ]
};

export default function CertificationClient() {
    const heroRef = useRef<HTMLDivElement>(null);
    const lineScannerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animations
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from(".hero-title", { y: 50, opacity: 0, duration: 1.5, ease: "power3.out" })
              .from(".hero-subtitle", { y: 30, opacity: 0, duration: 1.5, ease: "power3.out" }, "-=1.2");

            if (lineScannerRef.current) {
                gsap.fromTo(lineScannerRef.current,
                    { x: "-100%" },
                    { x: "100%", duration: 3, ease: "power2.inOut", repeat: -1, delay: 1 }
                );
            }

            // Scroll animations for sections
            const sections = gsap.utils.toArray('.cert-section');
            sections.forEach((sec: any) => {
                gsap.from(sec.querySelectorAll('.fade-up'), {
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 80%",
                    },
                    y: 50,
                    opacity: 0,
                    filter: "blur(5px)",
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out"
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    };

    const handlePdfClick = (pdfUrl: string) => {
        if (window.innerWidth < 768) {
            // Mobile: open in new tab
            window.open(pdfUrl, '_blank');
        } else {
            // Desktop: open modal
            setSelectedPdf(pdfUrl);
        }
    };

    const CertificateCard = ({ item }: { item: any }) => (
        <div 
            className="fade-up group cursor-pointer"
            onClick={() => handlePdfClick(item.pdf)}
        >
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/40 transition-colors duration-500">
                <Image
                    src={item.thumb}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-black/80 backdrop-blur-sm rounded-full text-white">
                        <ExternalLink size={20} />
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mb-2">
                    {item.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base">
                    {item.subtitle}
                </p>
            </div>
        </div>
    );

    return (
        <div ref={containerRef} className="bg-black min-h-screen text-white">
            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative h-screen w-full flex items-end justify-start overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#111]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] opacity-80">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            src="" // [여기에 인증 페이지 메인 영상 파일명 입력]
                            poster="/glass-production-packaging-1024x666.jpeg" // fallback poster
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none" />
                </div>

                <div className="relative z-10 text-left px-8 md:px-16 pb-24 max-w-5xl origin-bottom-left transform scale-[0.8]">
                    <h1 className="hero-title text-4xl md:text-7xl font-extrabold text-white/80 mb-6 tracking-tighter leading-none">
                        CERTIFICATION
                    </h1>
                    <div className="hero-subtitle mb-10">
                        <h2 className="text-2xl md:text-3xl text-white font-medium mb-4">
                            국제 기준으로 검증된 ASB GlassFloor
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 font-light tracking-wider max-w-2xl leading-relaxed">
                            국제 스포츠 연맹 인증, 유럽 시험성적서, 특허 등록을 통해<br />
                            ASB GlassFloor의 신뢰성과 기술력을 입증합니다.
                        </p>
                    </div>

                    <div className="relative h-[1.6px] w-[420px] bg-[var(--color-led-line)]/30 mb-10 rounded-full shadow-[0_0_15px_var(--color-led-line)] overflow-hidden">
                        <div ref={lineScannerRef} className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_white]" />
                    </div>

                    <div
                        onClick={scrollToContent}
                        className="cursor-pointer inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                        <div className="p-3 rounded-full border border-white/20 group-hover:border-white transition-colors">
                            <ArrowDown className="w-6 h-6 animate-bounce" />
                        </div>
                        <span className="text-sm uppercase tracking-[0.3em]">Discover</span>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="cert-section py-24 md:py-32 relative border-b border-white/10">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="mb-20">
                        <h2 className="fade-up text-4xl md:text-6xl font-medium tracking-tighter mb-6 text-white">
                            Verified by Global Standards
                        </h2>
                        <h3 className="fade-up text-2xl md:text-3xl font-light text-gray-300 mb-8">
                            국제 스포츠 규격과 유럽 시험 기준으로 검증된 스마트 스포츠 플로어
                        </h3>
                        <p className="fade-up text-lg text-gray-400 leading-relaxed max-w-4xl text-pretty">
                            ASB GlassFloor는 종목별 국제 스포츠 연맹의 인증과 유럽 기준 시험성적서, 글로벌 특허를 통해 제품의 신뢰성과 기술력을 입증하고 있습니다. 
                            경기 운영을 위한 스포츠 적용성, 시설 기준 대응을 위한 안전성과 성능 검증, 그리고 독자 기술 기반의 차별성을 함께 갖춘 스마트 스포츠 플로어 시스템입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-up border-t border-white/10 pt-16">
                        <div className="border-l border-white/20 pl-6">
                            <h4 className="text-white font-bold mb-2 uppercase tracking-wide">International Federation Certifications</h4>
                            <p className="text-gray-400">종목별 국제연맹 인증</p>
                        </div>
                        <div className="border-l border-white/20 pl-6">
                            <h4 className="text-white font-bold mb-2 uppercase tracking-wide">European Fire Reaction Test Reports</h4>
                            <p className="text-gray-400">유럽 화재반응등급 시험성적서</p>
                        </div>
                        <div className="border-l border-white/20 pl-6">
                            <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Patents</h4>
                            <p className="text-gray-400">특허</p>
                        </div>
                        <div className="border-l border-white/20 pl-6">
                            <h4 className="text-white font-bold mb-2 uppercase tracking-wide">EN & DIN Test Reports</h4>
                            <p className="text-gray-400">EN·DIN 시험성적서</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Federations Section */}
            <section className="cert-section py-24 relative border-b border-white/10">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="mb-16 fade-up">
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
                            International Federation Certifications
                        </h2>
                        <h3 className="text-xl md:text-2xl text-gray-300 font-light mb-6">종목별 국제연맹 인증</h3>
                        <p className="text-gray-400 max-w-3xl leading-relaxed">
                            ASB GlassFloor는 주요 실내 스포츠 종목의 국제 기준을 충족하며,<br className="hidden md:block"/>
                            다목적 스포츠 환경에서의 활용성과 전문성을 공식적으로 검증받고 있습니다.
                        </p>
                    </div>

                    {/* 3 + 2 layout for 5 items */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
                        {certificates.federations.slice(0, 3).map(item => (
                            <CertificateCard key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:w-2/3 mx-auto">
                        {certificates.federations.slice(3, 5).map(item => (
                            <CertificateCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. European Fire Section */}
            <section className="cert-section py-24 relative border-b border-white/10 bg-white/[0.02]">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="mb-16 fade-up">
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
                            European Fire Reaction Test Reports
                        </h2>
                        <h3 className="text-xl md:text-2xl text-gray-300 font-light mb-6">유럽 화재반응등급 시험성적서</h3>
                        <p className="text-gray-400 max-w-3xl leading-relaxed">
                            ASB GlassFloor는 유럽 기준에 따른 화재 반응 성능 평가를 통해<br className="hidden md:block"/>
                            시설 적용 시 요구되는 안전성 검증 자료를 확보하고 있습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {certificates.fire.map(item => (
                            <CertificateCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Patents Section */}
            <section className="cert-section py-24 relative border-b border-white/10 bg-white/[0.04]">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="mb-16 fade-up">
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
                            Patents
                        </h2>
                        <h3 className="text-xl md:text-2xl text-gray-300 font-light mb-6">특허</h3>
                        <p className="text-gray-400 max-w-3xl leading-relaxed">
                            ASB GlassFloor의 핵심 기술은 주요 국가의 특허 등록을 통해 보호받고 있으며,<br className="hidden md:block"/>
                            이는 일반적인 스포츠 바닥재와 구별되는 독자적인 기술 기반을 보여줍니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {certificates.patents.map(item => (
                            <CertificateCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. EN/DIN Section */}
            <section className="cert-section py-24 relative pb-40">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="mb-16 fade-up">
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
                            EN & DIN Test Reports
                        </h2>
                        <h3 className="text-xl md:text-2xl text-gray-300 font-light mb-6">EN·DIN 시험성적서</h3>
                        <p className="text-gray-400 max-w-3xl leading-relaxed">
                            ASB GlassFloor는 유럽 EN 및 독일 DIN 기준에 따른 시험을 통해<br className="hidden md:block"/>
                            스포츠 플로어로서 요구되는 주요 성능과 안전성 기준을 검증받았습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {certificates.tests.map(item => (
                            <CertificateCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Modal */}
            {selectedPdf && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12">
                    <div className="relative w-full h-full max-w-6xl max-h-screen flex flex-col bg-deepBlack border border-white/20 rounded-lg overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black">
                            <h3 className="text-white font-medium">Document Viewer</h3>
                            <button 
                                onClick={() => setSelectedPdf(null)}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-1 w-full bg-white relative">
                            <iframe 
                                src={`${selectedPdf}#toolbar=0`} 
                                className="absolute inset-0 w-full h-full border-0"
                                title="PDF Document"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
