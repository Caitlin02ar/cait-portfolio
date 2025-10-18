"use client";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceBox({ role, company, period, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-8 border-l-2 border-blue-100 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <span className="absolute -left-[7px] top-2 w-3 h-3 bg-blue-400 rounded-full shadow-md"></span>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:bg-gray-50 
                   rounded-xl p-5 transition-all duration-300 cursor-default"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{role}</h3>
            <p className="text-sm text-gray-600">{company}</p>
          </div>

          <div className="flex items-center gap-2 mt-2 sm:mt-0 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            {period}
          </div>
        </div>

        {description && (
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
