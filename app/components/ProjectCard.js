"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export default function ProjectCard({
  title,
  company,
  description,
  tags,
  image,
  slug,
}) {
  const [expanded, setExpanded] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const descRef = useRef(null)

  useEffect(() => {
    if (descRef.current) {
      setIsOverflow(descRef.current.scrollHeight > descRef.current.clientHeight + 5)
    }
  }, [description])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-6"
    >
      {/* Image */}
      <div className="order-1 md:order-2 w-full md:w-1/2 bg-gray-50 flex items-center justify-center">
        {image ? (
          <motion.img
            src={image}
            alt={title}
            className="object-cover w-full h-64 md:h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <span className="text-gray-400 text-sm">No Preview</span>
        )}
      </div>

      {/* Info */}
      <div className="order-2 md:order-1 flex flex-col justify-between p-6 w-full md:w-1/2">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{company}</p>

          <div
            ref={descRef}
            className={`text-sm text-gray-700 mt-3 transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            {description}
          </div>

          {isOverflow && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 text-sm mt-1 hover:underline"
            >
              {expanded ? "See Less" : "See More"}
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-wrap gap-2 max-w-[70%]">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                {tag}
              </span>
            ))}
          </div>

          {slug ? (
            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href={`/projects/${slug}`}
                className="whitespace-nowrap text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors inline-block"
              >
                View Project →
              </Link>
            </motion.div>
          ) : (
            <span className="whitespace-nowrap text-gray-400 text-sm">No Detail</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
