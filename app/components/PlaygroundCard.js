"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function PlaygroundCard({ slug, title, description, cover, tags }) {
  return (
    <Link href={`/playground/${slug}`}>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        className="group bg-white border border-gray-200 rounded-2xl overflow-hidden 
                shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer
                flex flex-col h-[380px]"
      >
        <div className="overflow-hidden">
          <Image
            src={cover}
            alt={title}
            width={800}
            height={400}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col justify-between flex-grow p-5">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
