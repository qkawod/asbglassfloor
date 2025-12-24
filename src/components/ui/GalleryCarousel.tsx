"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * GalleryCarousel - 2-Image Simple Slideshow
 * 
 * Logic:
 * - Alternates between Slide 0 and Slide 2.
 * - Interval: 3000ms.
 * - Cross-fade transition.
 * - Maintains 100% width layout.
 */
export default function GalleryCarousel({ images }: { images: string[] }) {
    // Exact requested images
    const slideImages = images;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slideImages.length);
        }, 3000); // 3 seconds

        return () => clearInterval(timer);
    }, [slideImages.length]);

    return (
        <div className="w-full relative bg-transparent overflow-hidden">
            {/* 
                Container maintains relative positioning 
                The height will be determined by the images (using aspect-ratio placeholder or just normal flow if position absolute is managed)
                Since images are different ratios, this determines layout shift.
                However, for a slideshow, we usually want a fixed aspect ratio container to avoid jumping.
                Given "Match Width" constraint, I will let natural height flow but I need to ensure they overlap.
                I will use a grid stack or absolute positioning. 
                Best approach for "same width" is to stack them.
             */}
            <div className="relative w-full">
                {/* 
                   We need to reserve height or let standard flow work.
                   If we absolute position both, height collapses.
                   Solution: Render the first one purely primarily for height reference (invisible?) 
                   OR use Aspect Ratio.
                   Given previous context of "Strict Aspect Ratio" requests, I'll stick to a clean valid layout.
                   But this request is specifically "Slide between these two".
                   I'll use a grid stack method where they occupy the same cell.
                */}
                <div className="grid grid-cols-1 grid-rows-1 relative rounded-lg overflow-hidden">
                    <AnimatePresence>
                        <motion.img
                            key={currentIndex}
                            src={slideImages[currentIndex]}
                            alt={`Slide ${currentIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1, zIndex: -1 }}
                            // Exit maintains opacity so background doesn't show through. 
                            // zIndex sent to back to let new image shine.
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="col-start-1 row-start-1 w-full h-full object-contain block"
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "block",
                                aspectRatio: "16 / 9" // Enforce aspect ratio to prevent layout shifts
                            }}
                        />
                    </AnimatePresence>
                    {/* Preload next image to prevent loading flash */}
                    <img
                        src={slideImages[(currentIndex + 1) % slideImages.length]}
                        className="hidden"
                        alt="preload"
                    />
                </div>
            </div>
        </div>
    );
}
