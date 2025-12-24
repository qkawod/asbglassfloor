"use client";

import Image from "next/image";

export default function Partners() {
    const partners = [
        { name: "FIBA", logo: "/Logo/FIBA_1.svg" },
        { name: "University of Oxford", logo: "/Logo/Oxford.svg" },
        { name: "Nike", logo: "/Logo/NIKE.svg" },
        { name: "Audi", logo: "/Logo/Audi.svg" },
        { name: "Absen", logo: "/Logo/absen_01.png" },
        { name: "Microsoft", logo: "/Logo/Microsoft.svg" },
        { name: "Volleyball Bundesliga", logo: "/Logo/Bundesliga_Volleyball.svg" },
        { name: "Dell", logo: "/Logo/DELL.svg" },
        { name: "Supercup", logo: "/Logo/Supercup.svg" },
        { name: "Politecnico Milano", logo: "/Logo/Politecnico Milano_01.png" },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-24 w-full bg-[#F3F8FC] text-black">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 text-black">
                        Partners and Customers
                    </h2>
                    <p className="text-gray-600 text-lg">
                        A proven track record of excellence — trusted collaborations with leaders.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="aspect-[4/5] bg-white rounded-sm flex items-center justify-center p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {partner.logo ? (
                                <div className="relative w-[85%] h-[85%]">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <span className="text-gray-400 font-bold text-center">
                                    {partner.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
