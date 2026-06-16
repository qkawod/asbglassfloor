import { Metadata } from "next";
import ProductHero from "@/components/products/ProductHero";
import CertificationArchive from "@/components/certifications/CertificationArchive";

export const metadata: Metadata = {
    title: "국제 인증 | ASB GlassFloor",
    description: "국제농구연맹(FIBA), 국제배구연맹(FIVB), 국제핸드볼연맹(IHF) 등 글로벌 최고 등급 인증을 획득한 ASB GlassFloor의 성능을 확인하세요.",
    keywords: [
        "ASB GlassFloor 인증",
        "FIBA 인증 바닥재",
        "FIVB 인증 바닥재",
        "IHF 인증 바닥재",
        "IWBF 인증",
        "EN 14904",
        "DIN 18032",
        "스포츠 플로어 국제 인증",
        "농구 코트 인증",
        "배구 코트 인증",
        "핸드볼 코트 인증",
    ],
};

export default function CertificationsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neonCyan selection:text-black">
            <ProductHero
                title="인증"
                subtitle="국제 기준으로 검증된 ASB GlassFloor의 기술력"
                imageSrc="/FIBA_U19_Womens_World_Cup.jpg"
                imageClassName="object-cover object-center md:object-contain"
                imageWrapperClassName="h-screen w-screen bg-black"
            />
            <CertificationArchive />
        </main>
    );
}
