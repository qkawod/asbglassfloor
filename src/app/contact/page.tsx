"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        salutation: "",
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        country: "Germany",
        inquiryType: "Sales",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                alert("Thank you! Your request has been submitted.");
                setFormData({
                    salutation: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    phone: "",
                    country: "Germany",
                    inquiryType: "Sales",
                    message: ""
                });
            } else {
                setStatus("error");
                alert("Something went wrong. Please try again or contact us directly.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            alert("Network error. Please try again later.");
        } finally {
            setStatus("idle");
        }
    };

    return (
        <main className="bg-[#050505] min-h-screen text-white pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                        Get Started
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
                        From Sales to Partnership. Contact us to learn more about the future of sports flooring.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Form Section */}
                    <div className="bg-[#111] p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Salutation */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Salutation</label>
                                    <select
                                        name="salutation"
                                        value={formData.salutation}
                                        onChange={handleChange}
                                        className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select...</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Ms.">Ms.</option>
                                        <option value="Mrs.">Mrs.</option>
                                    </select>
                                </div>
                            </div>

                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Email & Company */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Company Name *</label>
                                    <input
                                        type="text"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Phone & Country */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Country *</label>
                                    <select
                                        name="country"
                                        required
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="Germany">Germany</option>
                                        <option value="USA">USA</option>
                                        <option value="South Korea">South Korea</option>
                                        <option value="France">France</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Inquiry Type */}
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Type of Inquiry</label>
                                <select
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="Sales">Sales</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Media">Media</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Your Message *</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white text-black px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-sm transition-colors duration-300 uppercase tracking-widest"
                            >
                                {status === "loading" ? "Sending..." : "Submit Request"}
                            </button>
                        </form>
                    </div>

                    {/* Address & Info Section */}
                    <div className="space-y-16">

                        {/* Address Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Germany */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Germany (HQ)</h3>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    ASB GlassFloor GmbH<br />
                                    Steinweg 6<br />
                                    83371 Stein an der Traun<br />
                                    Germany
                                </p>
                                <a href="mailto:info@asbglassfloor.com" className="text-blue-400 hover:text-white transition-colors block mb-2">
                                    info@asbglassfloor.com
                                </a>
                                <a href="tel:+498621988440" className="text-white hover:text-blue-400 transition-colors">
                                    +49 8621 988440
                                </a>
                            </div>

                            {/* Sales International */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Sales International</h3>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Reach out to our global sales team for inquiries outside of Germany.
                                </p>
                                <a href="mailto:sales@asbglassfloor.com" className="text-blue-400 hover:text-white transition-colors block">
                                    sales@asbglassfloor.com
                                </a>
                            </div>
                        </div>

                        {/* Map / Image Placeholder */}
                        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-900 border border-white/10">
                            {/* Placeholder for map or office image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                <span className="uppercase tracking-widest text-sm">Interactive Map Loading...</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
