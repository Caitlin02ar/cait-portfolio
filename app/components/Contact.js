"use client"
import { motion } from "framer-motion"

export default function Contact() {
    return (
        <section className="text-center mt-12">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-6">
            Let’s connect and create something impactful together. 💬
        </h2>

        <p className="text-gray-600 mt-2">
            Open to opportunities, freelance projects and creative collaborations!
        </p>

        {/* Email */}
        <div className="mt-6">
            <motion.a
            href="mailto:caitlinliadi@gmail.com"
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
            <img src="/Gmail.svg" className="w-6 h-6" alt="Gmail" />
            caitlinliadi@gmail.com
            </motion.a>
        </div>

        {/* Social Media */}
        <div className="mt-6">
            <p className="text-gray-500 mb-3">Other media social</p>
            <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/caitlin-liadi/" target="_blank" rel="noopener noreferrer">
                <img src="/LinkedIn.svg" alt="LinkedIn" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" />
            </a>
            <a href="https://www.instagram.com/designedby.cait/" target="_blank" rel="noopener noreferrer">
                <img src="/Instagram.svg" alt="Instagram" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" />
            </a>
            <a href="https://x.com/designedby_cait" target="_blank" rel="noopener noreferrer">
                <img src="/Twitter.svg" alt="Twitter" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" />
            </a>
            <a href="https://www.behance.net/caitlinliadi" target="_blank" rel="noopener noreferrer">
                <img src="/Behance.svg" alt="Behance" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" />
            </a>
            </div>
        </div>
        </section>
    );
}
