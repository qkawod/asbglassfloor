"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.8 }}
            className="w-full min-h-screen"
        >
            {children}
        </motion.div>
    );
}
