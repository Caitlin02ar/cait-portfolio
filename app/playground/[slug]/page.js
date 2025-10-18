"use client"

import React from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { playgrounds } from "@/app/data/PlaygroundData"

export default function PlaygroundDetail({ params }) {
  // ⬇️ Gunakan React.use() untuk ambil params dari Promise
  const { slug } = React.use(params)

  const playground = playgrounds.find(p => p.slug === slug)

  if (!playground) return <p>Not found</p>

  // 🔁 Case 1: External Link
  if (playground.type === "external") {
    redirect(playground.link)
  }

  return (
    <section className="py-16 max-w-5xl mx-auto px-6">
      <Link
        href="/#my-playground"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-6 transition-colors gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to Projects
      </Link>

      <img src={playground.cover}
      alt={playground.title}
      className="w-full h-[300px] object-cover rounded-xl mb-6 shadow-md"/>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{playground.title}</h1>
      <p className="text-gray-600 mb-10">{playground.description}</p>

      {playground.type === "gallery" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {playground.items.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${playground.title} ${i + 1}`}
              className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          ))}
        </div>
      )}

      {playground.type === "detail" && (
        <div className="space-y-10">
          {playground.sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold mb-2">{sec.heading}</h2>
              <p className="text-gray-600 leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
