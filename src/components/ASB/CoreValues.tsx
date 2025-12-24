"use client";

import { Lightbulb, ShieldCheck, Leaf, Heart } from "lucide-react";

const values = [
    {
        icon: <Lightbulb size={40} />,
        title: "Innovation",
        description: "We constantly push the boundaries of what's possible in sports flooring technology."
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "Quality",
        description: "German engineering meets premium materials for unmatched durability and performance."
    },
    {
        icon: <Leaf size={40} />,
        title: "Sustainability",
        description: "Our glass floors are built to last decades, reducing waste and environmental impact."
    },
    {
        icon: <Heart size={40} />,
        title: "Passion",
        description: "We are driven by a love for sports and a commitment to enhancing the athlete's experience."
    }
];

export default function CoreValues() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-deepBlack mb-4">Core Values</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The principles that guide every innovation and installation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="text-electricCyan mb-6 group-hover:scale-110 transition-transform duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-deepBlack mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
