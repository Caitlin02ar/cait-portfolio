"use client"
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-600">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="text-lg tracking-wide"
        >
            Loading your portfolio...
        </motion.div>
        </div>
    );
}
