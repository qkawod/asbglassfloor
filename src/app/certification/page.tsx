import type { Metadata } from "next";
import CertificationClient from "@/components/certification/CertificationClient";

export const metadata: Metadata = {
    title: "Certification | ASB GlassFloor",
    description: "국제 기준으로 검증된 ASB GlassFloor의 신뢰성과 기술력을 입증하는 인증, 시험성적서, 특허를 확인하세요.",
};

export default function CertificationPage() {
    return <CertificationClient />;
}
