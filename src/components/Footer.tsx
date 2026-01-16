"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-deepBlack text-white py-12 border-t border-white/10">
            <div className="max-w-[1920px] mx-auto px-8 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">GLOBE</h3>
                        <p className="text-gray-400 max-w-md">
                            본 사이트는 독일 ASB Sports의 ASB GlassFloor 시스템을
                            국내에 공급하는 공식 파트너 GLOBE의 홈페이지입니다.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-500 text-right">
                        <p>© {new Date().getFullYear()} GLOBE Corp. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
