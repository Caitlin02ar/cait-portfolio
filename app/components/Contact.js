"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Contact() {
  return (
    <section className="relative w-screen -mx-[calc((100vw-100%)/2)] py-12 md:py-16 overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-rose-50"
            animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            }}
            style={{
            backgroundSize: "200% 200%",
            }}
        />

        <motion.div
            className="absolute top-10 left-1/4 w-72 h-72 bg-pink-200 opacity-30 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
            className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
        />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-xl mx-auto px-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Let’s collaborate to create intuitive and impactful digital experiences. 💬
        </h2>

        <p className="text-gray-600 mt-3">
          Currently open to full-time and freelance design opportunities!
        </p>

        <div className="mt-8">
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=caitlinliadi@gmail.com"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-gray-300 bg-white rounded-md px-5 py-3 text-gray-800 font-medium hover:bg-gray-50 shadow-sm transition"
          >
            <Image src="/Mail.svg" alt="Gmail" width={24} height={24} />
            caitlinliadi@gmail.com
          </motion.a>
        </div>

        <div className="mt-8">
          <p className="text-gray-500 mb-3 text-sm">Other social media</p>
          <div className="flex flex-wrap gap-4 sm:gap-5 justify-center">
            {[
              { icon: "/LinkedOutline.svg", label: "LinkedIn", href: "https://www.linkedin.com/in/caitlin-liadi/" },
              { icon: "/InstagramOutline.svg", label: "Instagram", href: "https://www.instagram.com/designedby.cait/" },
              { icon: "/TwitterOutline.svg", label: "Twitter", href: "https://x.com/designedby_cait" },
              { icon: "/BehanceOutline.svg", label: "Behance", href: "https://www.behance.net/caitlinliadi" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
