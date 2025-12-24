"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const navLinks = [
        { name: "ASB", href: "/asb" },
        { name: "PRODUCTS", href: "/products" },
        { name: "TECHNOLOGY", href: "/technology" },
        { name: "REFERENCES", href: "/references" },

        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-32 flex items-center ${isScrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="w-full px-6 md:px-12 flex items-center justify-between relative h-full">
                {/* Logo Section - Flow layout to prevent overlap */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Emblem Fallback (if image fails or for clearer look) */}
                    <div className="relative h-12 w-96 md:h-[3.6rem] md:w-[29rem]">
                        <img
                            src="/Logo/logo-white.png"
                            alt="ASB GlassFloor"
                            className="h-full w-full object-contain object-left"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                        >
                            {link.name === "PRODUCTS" ? (
                                <>
                                    <button
                                        className="text-sm md:text-lg font-bold text-white transition-all duration-300 tracking-widest uppercase flex items-center gap-1 cursor-default group-hover:text-white"
                                        style={{ textShadow: "none" }}
                                        onMouseEnter={(e) => e.currentTarget.style.textShadow = "0 0 10px #FFFFE0, 0 0 20px #FFFF00, 0 0 40px #FFD700, 0 0 60px #FFD700"}
                                        onMouseLeave={(e) => e.currentTarget.style.textShadow = "none"}
                                    >
                                        {link.name}
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-8 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                                        <div className="bg-transparent min-w-[220px] flex flex-col gap-3 p-3">
                                            <Link
                                                href="/products"
                                                className="block px-4 py-3 text-sm font-bold text-gray-400 hover:text-white transition-all text-center"
                                                onMouseEnter={(e) => e.currentTarget.style.textShadow = "0 0 10px #FFFFE0, 0 0 20px #FFFF00, 0 0 40px #FFD700, 0 0 60px #FFD700"}
                                                onMouseLeave={(e) => e.currentTarget.style.textShadow = "none"}
                                            >
                                                ASB MultiSports
                                            </Link>
                                            <Link
                                                href="/lumiflex"
                                                className="block px-4 py-3 text-sm font-bold text-gray-400 hover:text-white transition-all text-center"
                                                onMouseEnter={(e) => e.currentTarget.style.textShadow = "0 0 10px #FFFFE0, 0 0 20px #FFFF00, 0 0 40px #FFD700, 0 0 60px #FFD700"}
                                                onMouseLeave={(e) => e.currentTarget.style.textShadow = "none"}
                                            >
                                                ASB LumiFlex
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-sm md:text-lg font-bold text-white transition-all duration-300 tracking-widest uppercase hover:text-white"
                                    style={{
                                        textShadow: "none"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.textShadow = "0 0 10px #FFFFE0, 0 0 20px #FFFF00, 0 0 40px #FFD700, 0 0 60px #FFD700";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.textShadow = "none";
                                    }}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white hover:text-electricCyan transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-bold text-white hover:text-neonYellow transition-colors tracking-widest"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
