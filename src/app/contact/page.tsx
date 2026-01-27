"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactMultiSports from "@/components/ContactMultiSports";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        salutation: "",
        name: "",
        email: "",
        company: "",
        jobTitle: "",
        phone: "",
        country: "Germany",
        inquiryType: "Sales",
        productInterest: "ASB GlassFloor",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submission started");

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    salutation: "",
                    name: "",
                    email: "",
                    company: "",
                    jobTitle: "",
                    phone: "",
                    country: "Germany",
                    inquiryType: "Sales",
                    productInterest: "ASB GlassFloor",
                    message: ""
                });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage("Network error. Please try again later.");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col pt-0 lg:flex-row lg:h-screen overflow-hidden">

            {/* Mobile Visual Header (Only visible on Mobile) */}
            <div className="lg:hidden w-full h-64 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gray-900">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    >
                        <source src={encodeURI("/IGNITE THE COURT The Future of Sports Venues with ASB GlassFloor.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* LEFT SIDE: Input Form (Scrollable) */}
            <div className="w-full lg:w-[45%] flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none] relative z-10">
                <div className="px-6 md:px-12 py-12 lg:pt-40 lg:pb-24 max-w-2xl mx-auto w-full">

                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Start Your Project
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Name */}
                        <div className="group">
                            <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-white transition-colors">Name *</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-[#1A1A1A]/40 border-b border-gray-700 text-white px-2 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-t-sm"
                            />
                        </div>

                        {/* Company & Job Title */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label htmlFor="company" className="block text-xs uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-white transition-colors">Company Name *</label>
                                <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A1A]/40 border-b border-gray-700 text-white px-2 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-t-sm"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="jobTitle" className="block text-xs uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-white transition-colors">Job Title</label>
                                <input
                                    id="jobTitle"
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A1A]/40 border-b border-gray-700 text-white px-2 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-t-sm"
                                />
                            </div>
                        </div>


                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-white transition-colors">Email *</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A1A]/40 border-b border-gray-700 text-white px-2 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-t-sm"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-white transition-colors">Telephone *</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A1A]/40 border-b border-gray-700 text-white px-2 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-t-sm"
                                />
                            </div>
                        </div>


                        {/* Dropdowns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label htmlFor="inquiryType" className="block text-xs uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-white transition-colors">Inquiry Type *</label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A1A]/40 border-b border-gray-700 text-white px-2 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-t-sm appearance-none"
                                >
                                    <option value="Sales">Sales</option>
                                    <option value="Technical">Technical</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="group">
                                <label htmlFor="productInterest" className="block text-xs uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-white transition-colors">Product Interest *</label>
                                <select
                                    id="productInterest"
                                    name="productInterest"
                                    value={formData.productInterest}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A1A]/40 border-b border-gray-700 text-white px-2 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-t-sm appearance-none"
                                >
                                    <option value="ASB GlassFloor">ASB GlassFloor</option>
                                    <option value="ASB LumiFlex">ASB LumiFlex</option>
                                    <option value="ASB Architectural">ASB Architectural</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="group">
                            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-white transition-colors">Your Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                placeholder="프로젝트 규모, 일정 등..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-[#1A1A1A]/40 border-b border-gray-700 text-white px-2 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-t-sm"
                            ></textarea>
                        </div>

                        {/* Privacy Checkbox */}
                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="privacy" required className="accent-white w-4 h-4" />
                            <label htmlFor="privacy" className="text-sm text-gray-400">
                                [필수] 개인정보 수집 및 이용에 동의합니다.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col gap-4">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className={`w-full font-bold py-5 rounded-sm transition-all duration-300 uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] ${status === "loading"
                                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                        : "bg-white hover:bg-gray-200 text-black"
                                    }`}
                            >
                                {status === "loading" ? "Sending..." : "Submit Request"}
                            </button>

                            {/* Status Messages */}
                            {status === "success" && (
                                <div className="p-4 bg-green-900/50 border border-green-500 text-green-200 rounded-sm text-center">
                                    Thank you! Your request has been submitted successfully.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-red-900/50 border border-red-500 text-red-200 rounded-sm text-center">
                                    {errorMessage}
                                </div>
                            )}
                        </div>



                    </form>
                </div>
            </div>

            {/* RIGHT SIDE: Visual Showcase (Fixed/Hidden on Mobile) */}
            <div className="hidden lg:block w-[55%] h-full relative overflow-hidden bg-black">
                <ContactMultiSports />
            </div>

        </main>
    );
}
