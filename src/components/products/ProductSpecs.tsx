"use client";

import { FileText, Download } from "lucide-react";

export default function ProductSpecs() {
    return (
        <section className="py-24 bg-deepGrey border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Technical Specifications</h2>
                    <p className="text-gray-400">Built to exceed international standards.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Column 1: Physical */}
                    <div className="bg-deepBlack/50 p-6 rounded-xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            System Data
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between border-b border-dashed border-gray-800 pb-2">
                                <span className="text-gray-400">Construction Height</span>
                                <span className="text-white font-mono">65mm - 90mm</span>
                            </li>
                            <li className="flex justify-between border-b border-dashed border-gray-800 pb-2">
                                <span className="text-gray-400">Panel Size</span>
                                <span className="text-white font-mono">2m x 3m (Std)</span>
                            </li>
                            <li className="flex justify-between border-b border-dashed border-gray-800 pb-2">
                                <span className="text-gray-400">Weight</span>
                                <span className="text-white font-mono">~40 kg/m²</span>
                            </li>
                            <li className="flex justify-between border-b border-dashed border-gray-800 pb-2">
                                <span className="text-gray-400">Lifespan</span>
                                <span className="text-white font-mono">&gt; 70 Years</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Standards */}
                    <div className="bg-deepBlack/50 p-6 rounded-xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            Compliance
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between border-b border-dashed border-gray-800 pb-2">
                                <span className="text-gray-400">EN 14904</span>
                                <span className="text-green-500 font-bold">Certified</span>
                            </li>
                            <li className="flex justify-between border-b border-dashed border-gray-800 pb-2">
                                <span className="text-gray-400">DIN 18032</span>
                                <span className="text-green-500 font-bold">Certified</span>
                            </li>
                            <li className="flex justify-between border-b border-dashed border-gray-800 pb-2">
                                <span className="text-gray-400">FIBA Level 1</span>
                                <span className="text-green-500 font-bold">Approved</span>
                            </li>
                            <li className="flex justify-between border-b border-dashed border-gray-800 pb-2">
                                <span className="text-gray-400">Slip Resistance</span>
                                <span className="text-white font-mono">R9 / R10</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Downloads */}
                    <div className="bg-deepBlack/50 p-6 rounded-xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            Downloads
                        </h3>
                        <div className="space-y-3">
                            {[
                                "Product Datasheet (PDF)",
                                "Planning Guide (PDF)",
                                "Cleaning Manual (PDF)"
                            ].map((file, i) => (
                                <button key={i} className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg group transition-colors">
                                    <div className="flex items-center gap-3">
                                        <FileText className="text-electricCyan w-5 h-5" />
                                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{file}</span>
                                    </div>
                                    <Download className="text-gray-500 w-4 h-4 group-hover:text-electricCyan" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm">
                        * Specifications may vary depending on the specific project requirements.
                        Contact our engineering team for detailed planning.
                    </p>
                </div>
            </div>
        </section>
    );
}
