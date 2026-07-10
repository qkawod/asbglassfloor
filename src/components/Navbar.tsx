"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        mobileMenuRef.current?.scrollTo({ top: 0 });

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const closeOnScrollIntent = () => {
            setIsMobileMenuOpen(false);
        };

        window.addEventListener("scroll", closeOnScrollIntent, { passive: true });
        window.addEventListener("wheel", closeOnScrollIntent, { passive: true });
        window.addEventListener("touchmove", closeOnScrollIntent, { passive: true });

        return () => {
            window.removeEventListener("scroll", closeOnScrollIntent);
            window.removeEventListener("wheel", closeOnScrollIntent);
            window.removeEventListener("touchmove", closeOnScrollIntent);
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "ASB", href: "/asb" },
        {
            name: "스마트코트",
            href: "/smartcourt",
            children: [
                { name: "ASB스마트코트", href: "/smartcourt" },
                { name: "ASB풀LED스마트코트", href: "/lumiflex" },
            ],
        },
        { name: "테크놀로지", href: "/technology" },
        { name: "인증", href: "/certifications" },
        { name: "레퍼런스", href: "/references" },
        { name: "컨택트", href: "/contact" },
        {
            name: "체험Zone",
            href: "/try-our-system",
            shadow: "0 0 10px #FFCCCC, 0 0 20px #FF0000, 0 0 40px #FF0000, 0 0 60px #8B0000",
            id: "red"
        }
    ];

    const socialLinks = [
        {
            name: "Youtube",
            href: "https://www.youtube.com/@ASBGlassFloor",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        },
        {
            name: "Instagram",
            href: "https://instagram.com/asbglassfloor",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
            )
        },
        {
            name: "Naver Blog",
            href: "https://blog.naver.com/asbkorea_globe",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
            )
        }
    ];

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const isActiveLink = (href: string) => {
        if (href === "/smartcourt") {
            return pathname === "/smartcourt" || pathname === "/products" || pathname === "/lumiflex";
        }

        return pathname === href;
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex h-24 items-center md:h-32 ${isScrolled || pathname === "/contact" ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="w-full px-6 md:px-12 flex items-center justify-between relative h-full">
                {/* 1. Left: Logo Section */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-7 w-44 sm:h-8 sm:w-52 md:h-[3.6rem] md:w-[29rem]">
                            <img
                                src="/Logo/logo-white.png"
                                alt="ASB GlassFloor"
                                className="h-full w-full object-contain object-left"
                            />
                        </div>
                    </Link>
                </div>

                {/* 2. Center: Desktop Navigation */}
                <div className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-12 pl-20">
                    {navLinks.map((link) => (
                        <div
                            key={link.id || link.name}
                            className="relative group"
                        >
                            <Link
                                href={link.href}
                                className="text-base md:text-base font-bold text-white transition-all duration-300 tracking-widest uppercase hover:text-white"
                                style={{
                                    textShadow: link.shadow || "none"
                                }}
                                onMouseEnter={link.shadow ? undefined : (e) => {
                                    e.currentTarget.style.textShadow = "0 0 10px #FFFFE0, 0 0 20px #FFFF00, 0 0 40px #FFD700, 0 0 60px #FFD700";
                                }}
                                onMouseLeave={link.shadow ? undefined : (e) => {
                                    e.currentTarget.style.textShadow = "none";
                                }}
                            >
                                {link.name}
                            </Link>
                            {link.children && (
                                <div className="pointer-events-none absolute left-1/2 top-full min-w-[230px] -translate-x-1/2 translate-y-[-10px] pt-5 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="flex flex-col items-center gap-3">
                                        {link.children.map((child, index) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="translate-y-2 opacity-0 block px-2 py-1 text-center text-sm font-black tracking-[0.18em] text-white transition-all duration-300 ease-out hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                                                style={{
                                                    textShadow: "0 1px 2px rgba(0,0,0,0.95), 0 0 8px rgba(0,0,0,0.9), 0 0 18px rgba(0,0,0,0.75)",
                                                    transitionDelay: `${index * 55}ms`,
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.textShadow = "0 0 10px #FFFFE0, 0 0 20px #FFFF00, 0 0 40px #FFD700, 0 0 60px #FFD700";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.textShadow = "0 1px 2px rgba(0,0,0,0.95), 0 0 8px rgba(0,0,0,0.9), 0 0 18px rgba(0,0,0,0.75)";
                                                }}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 3. Right: Social Icons & Mobile Menu */}
                <div className="flex items-center gap-6 justify-end">
                    {/* Social Icons (Desktop Only) */}
                    <div className="hidden lg:flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white hover:text-electricCyan transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                ref={mobileMenuRef}
                className={`fixed left-0 top-0 z-[60] h-[100dvh] w-screen overflow-y-auto bg-black/96 transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className="flex h-full flex-col px-7 py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="relative h-8 w-52" onClick={closeMobileMenu}>
                            <img
                                src="/Logo/logo-white.png"
                                alt="ASB GlassFloor"
                                className="h-full w-full object-contain object-left"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={closeMobileMenu}
                            className="inline-flex h-11 w-11 items-center justify-center border-0 bg-transparent text-white transition-colors hover:text-electricCyan focus:outline-none focus-visible:outline-none"
                            aria-label="모바일 메뉴 닫기"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="mt-8 flex flex-1 flex-col justify-center gap-0">
                        {navLinks.map((link) => {
                            const active = isActiveLink(link.href);

                            return (
                                <div key={link.name} className="border-b border-white/10">
                                    <Link
                                        href={link.href}
                                        className={`block py-4 text-xl font-bold tracking-widest transition-colors ${active ? "text-neonYellow" : "text-white hover:text-neonYellow"
                                            }`}
                                        onClick={closeMobileMenu}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.children && (
                                        <div className="pb-4 pl-5">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block py-2 text-sm font-bold tracking-widest text-white/58 transition-colors hover:text-neonYellow"
                                                    onClick={closeMobileMenu}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Social Links */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-xs font-bold uppercase tracking-[0.26em] text-white/36">
                            Social
                        </span>
                        <div className="flex items-center gap-7">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/74 transition-colors hover:text-neonYellow"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
