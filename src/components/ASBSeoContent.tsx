"use client";

export default function ASBSeoContent() {
    return (
        <section className="py-20 bg-deepGrey text-white">
            <div className="max-w-4xl mx-auto px-8">
                {/* Main Product Description */}
                <div className="mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-electricCyan">
                        ASB GlassFloor 글라스플로어 시스템
                    </h1>
                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                        <p>
                            ASB GlassFloor는 독일 ASB Sports가 개발한 프리미엄 글라스플로어 시스템으로,
                            농구장, 멀티스포츠 코트, 스마트체육센터 등 다양한 실내 스포츠 시설에 적용되고 있습니다.
                            기존 우든플로어와 달리 강화유리와 알루미늄 하부 구조를 기반으로 설계되어
                            내구성, 탄성, 안정성을 동시에 만족시키는 스포츠플로어 솔루션입니다.
                        </p>
                        <p>
                            ASB GlassFloor는 국제농구연맹(FIBA), NBA, 국제핸드볼연맹(IHF),
                            국제배구연맹(FIVB) 등 주요 국제 스포츠 연맹의 최고 등급 인증을 획득했으며,
                            글로벌 경기장과 프로 스포츠 시설에서 실제 사용되고 있습니다.
                        </p>
                        <p>
                            GLOBE는 ASB GlassFloor의 공식 파트너로서 국내 프로젝트에 맞춘 설계 검토,
                            기술 협의, 시공 지원 및 운영 컨설팅까지 종합적인 서비스를 제공합니다.
                        </p>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                        글라스플로어와 우든플로어의 차이
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        기존 우든플로어는 유지관리 비용과 변형 문제가 발생할 수 있는 반면,
                        글라스플로어는 장기 사용에 적합한 구조로 설계되어
                        유지관리 효율성과 시각적 완성도를 동시에 제공합니다.
                        특히 ASB GlassFloor는 LED 라인 연동이 가능해
                        하나의 코트에서 다양한 종목을 운영할 수 있는 장점을 가지고 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
