"use client";

import { motion } from "framer-motion";

export default function MyPlayground() {
    return (
        <section className="relative mt-4 mb-20 mx-auto w-full max-w-4xl text-center rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-md pt-8 pb-16 px-10">
        <motion.div
            className="absolute w-8 h-8 bg-purple-200 rounded-full top-8 left-16 opacity-40"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
            className="absolute w-10 h-10 bg-pink-200 rounded-full bottom-10 right-20 opacity-40"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Title */}
        <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            My Playground
        </motion.h2>

        {/* Subtitle */}
        <motion.p
            className="text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
        >
            Coming Soon...
        </motion.p>

        {/* Optional mini caption */}
        <p className="text-gray-500 text-base mt-3">
            A space for experiments, creative projects, and design explorations ✨
        </p>
        </section>
    );
    }
