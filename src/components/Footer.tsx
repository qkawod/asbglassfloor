
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 md:px-12 lg:px-24 bg-transparent text-white/60 text-sm font-light tracking-wide">
            <div className="max-w-[1700px] mx-auto">
                {/* Company Name */}
                <h3 className="text-white text-lg font-bold mb-6">글로브(Globe Co.,Ltd)</h3>

                {/* Info Grid */}
                <div className="flex flex-col gap-2 mb-8">
                    <p>본사 : 경기도 성남시 분당구 판교역로 152, 1103</p>
                    <p>Development Center : 인천광역시 중구 영종순환로 279-52</p>
                    <div className="flex flex-wrap gap-6 mt-2">
                        <span>T. 031-717-1180</span>
                        <span>F. 031-717-1181</span>
                        <span>E-mail : <a href="mailto:globe@globecorp.co.kr" className="hover:text-white transition-colors">globe@globecorp.co.kr</a></span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 mt-8">
                    <p className="text-xs text-white/40">
                        COPYRIGHT © 2021 Globe Co.,Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
