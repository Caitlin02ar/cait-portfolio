"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["About Me", "Skills", "Experience", "Projects", "Contact"];

  return (
    <header className="w-full fixed top-0 left-0 
                   bg-white/70 backdrop-blur-md 
                   border-b border-gray-200/50 
                   z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">Caitlin</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="relative px-2 py-2 text-sm font-medium text-gray-700 
                        transition-colors duration-300 hover:text-gray-900 group"
            >
              {item}
              {/* Underline modern */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 
                              transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md border text-gray-700 hover:bg-gray-100"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200/50"
          >
            <div className="flex flex-col px-4 py-3 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpen(false)} // auto close after click
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
