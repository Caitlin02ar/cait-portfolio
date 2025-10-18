"use client"
import { motion } from "framer-motion"

const sectionStyles = {
  background: "bg-white",
  problem: "bg-rose-50",
  solution: "bg-blue-50",
  research: "bg-emerald-50",
  background: "bg-orange-50",
}

export default function ProjectSection({ section }) {
  const bgColor = sectionStyles[section.type] || sectionStyles.background

  return (
    <section
      className={`w-full py-16 px-6 sm:px-10 my-12 rounded-3xl ${bgColor}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center"
      >
        {/* 📝 Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            {section.title}
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {section.content}
          </p>
        </div>

        {/* 🖼️ Image Section */}
        {section.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full max-w-md rounded-2xl shadow-md"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
