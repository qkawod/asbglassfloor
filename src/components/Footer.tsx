
import Link from 'next/link';
import { Youtube, Instagram, MessageCircle } from 'lucide-react'; // Using Lucide icons for simplicity if available, or I'll use SVGs to be safe since I didn't check package.json for lucide-react but it is commonly used. Actually, Navbar used SVGs inline. I should copy inline SVGs for consistency and safety.

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">

                {/* 1. Logo Section (Centered) */}
                <div className="mb-6 relative h-10 w-64 md:h-12 md:w-80">
                    <img
                        src="/Logo/logo-white.png"
                        alt="ASB GlassFloor"
                        className="h-full w-full object-contain mx-auto"
                    />
                </div>

                {/* 2. Navigation Menu (Centered) */}
                <nav className="flex flex-wrap justify-center gap-8 md:gap-16 mb-6">
                    <Link href="/" className="text-xs md:text-sm font-bold tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                        Home
                    </Link>
                    <Link href="/products" className="text-xs md:text-sm font-bold tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                        Products
                    </Link>
                    <Link href="/technology" className="text-xs md:text-sm font-bold tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                        Technology
                    </Link>
                    <Link href="/references" className="text-xs md:text-sm font-bold tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                        References
                    </Link>
                    <Link href="/contact" className="text-xs md:text-sm font-bold tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                        Contact
                    </Link>
                </nav>

                {/* 3. Contact Info (Horizontal, No Icons) */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-12 mb-6 text-xs md:text-sm text-white/50 font-light tracking-wide">
                    <span>Tel : 031-717-1180</span>
                    <span className="hidden md:block w-px h-3 bg-white/20"></span>
                    <span>Fax : 031-717-1181</span>
                    <span className="hidden md:block w-px h-3 bg-white/20"></span>
                    <span>globe@globecorp.co.kr</span>
                    <span className="hidden md:block w-px h-3 bg-white/20"></span>
                    <span>경기도 성남시 분당구 판교역로 152, 1103</span>
                </div>

                {/* 4. Social Icons */}
                <div className="flex items-center gap-6 mb-4">
                    <a
                        href="https://www.youtube.com/@ASBGlassFloor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
                        aria-label="YouTube"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </a>
                    <a
                        href="https://instagram.com/asbglassfloor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                    </a>
                    <a
                        href="https://blog.naver.com/asbkorea_globe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        aria-label="Naver Blog"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                        </svg>
                    </a>
                </div>

                {/* 5. Copyright */}
                <div className="border-t border-white/10 pt-4 w-full max-w-7xl">
                    <p className="text-[10px] md:text-xm text-white/30 tracking-wider">
                        COPYRIGHT © 2021 Globe Co.,Ltd. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}
