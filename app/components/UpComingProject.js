"use client";

import { motion } from "framer-motion";

export default function UpcomingProjects() {
    return (
        <section className="w-full max-w-4xl mx-auto mt-12 text-center">
        <div className="mb-4">
            <span className="inline-block px-4 py-2 mb-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
            Coming Soon
            </span>
            <h2 className="text-3xl font-semibold text-gray-900">More Projects Ahead</h2>
            <p className="text-gray-500 mt-2">
            I’m currently exploring new ideas — stay tuned for what’s next!
            </p>
        </div>
        </section>
    );
}
