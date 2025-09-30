"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, company, description = "", tags, image, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-6"
    >
      {/* Image dulu di mobile (order-1), di desktop ke kanan (md:order-2) */}
      <div className="order-1 md:order-2 w-full md:w-1/2 bg-gray-50 flex items-center justify-center aspect-video">
        {image ? (
          <motion.img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <span className="text-gray-400 text-sm">No Preview</span>
        )}
      </div>

      {/* Info di bawah gambar pas mobile (order-2), di desktop ke kiri (md:order-1) */}
      <div className="order-2 md:order-1 flex flex-col justify-between p-6 w-full md:w-1/2">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{company}</p>
          <p className="text-sm text-gray-700 mt-3 line-clamp-3">
            {expanded
              ? description
              : description.slice(0, 100) + (description.length > 100 ? "..." : "")}
          </p>
          {description.length > 100 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 text-sm mt-1 hover:underline"
            >
              {expanded ? "See Less" : "See More"}
            </button>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
