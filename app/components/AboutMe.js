"use client"

import React, { useEffect, useRef } from "react"
import { ChevronDown, Sparkles } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutMe() {
  const cursorRef = useRef(null)
  const bgRef = useRef(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const smoothRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }

    const animate = () => {
      const ease = 0.08
      smoothRef.current.x += (targetRef.current.x - smoothRef.current.x) * ease
      smoothRef.current.y += (targetRef.current.y - smoothRef.current.y) * ease

      if (cursorRef.current) {
        cursorRef.current.style.left = `${smoothRef.current.x}px`
        cursorRef.current.style.top = `${smoothRef.current.y}px`
      }
      if (bgRef.current) {
        bgRef.current.style.backgroundImage = `radial-gradient(circle at ${smoothRef.current.x}px ${smoothRef.current.y}px, rgba(251,146,60,0.3) 0%, transparent 50%)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 w-full relative overflow-hidden">
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full border-2 border-orange-400 pointer-events-none z-50"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'border-color 0.2s ease',
        }}
      />

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative">
        <div ref={bgRef} className="absolute inset-0 opacity-30 transition-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700 font-medium">UX/UI Designer & Developer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Hi! I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent animate-gradient">
              Caitlin
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed text-center">
            <span className="relative font-semibold text-slate-900">
              <span className="bg-gradient-to-r from-amber-100 via-orange-100 to-pink-100 px-1 rounded">
                UI/UX Designer
              </span>
            </span>{" "}
            passionate about creating{" "}
            <span className="bg-gradient-to-r from-indigo-100 via-violet-100 to-pink-100 px-1 rounded">
              intuitive digital experiences
            </span>{" "}
            that balance{" "}
            <span className="bg-rose-100 px-1 rounded">creativity</span> and{" "}
            <span className="bg-emerald-100 px-1 rounded">logic</span>. With a background in{" "}
            <span className="bg-yellow-100 px-1 rounded">
              Business Information Systems
            </span>
            , I design with both{" "}
            <span className="bg-blue-100 px-1 rounded">user empathy</span> and{" "}
            <span className="bg-teal-100 px-1 rounded">business understanding</span> in mind.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5 justify-center mb-16">
            {[
              { icon: '/LinkedOutline.svg', label: 'LinkedIn' },
              { icon: '/FigmaOutline.svg', label: 'Figma' },
              { icon: '/Mail.svg', label: 'Email' },
              { icon: '/InstagramOutline.svg', label: 'Instagram' },
              { icon: '/TwitterOutline.svg', label: 'Twitter' },
              { icon: '/BehanceOutline.svg', label: 'Behance' },
              { icon: '/DribbleOutline.svg', label: 'Dribble' },
            ].map((social, i) => (
              <button
                key={i}
                className="group relative p-3 sm:p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:rotate-3 sm:hover:rotate-6"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute -top-9 sm:-top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </button>
            ))}
          </div>

          {/* Arrow bounce */}
          <div className="animate-bounce-slow">
            <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-orange-400" />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-15px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  )
}
