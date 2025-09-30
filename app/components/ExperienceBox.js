"use client";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceBox({ role, company, period }) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center 
                    border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 
                    shadow-sm hover:shadow-md hover:bg-gray-50 
                    transition-all duration-300 cursor-pointer"
        >
        <div>
            <h3 className="font-medium text-lg text-gray-900">{role}</h3>
            <p className="text-sm text-gray-600">{company}</p>
        </div>
        <div className="flex items-center border border-gray-200 bg-gray-50 px-3 py-1 rounded-md text-sm mt-2 sm:mt-0">
            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
            {period}
        </div>
        </motion.div>
    );
}
