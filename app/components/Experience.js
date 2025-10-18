"use client"

import React from "react"
import ExperienceBox from "./ExperienceBox"
import { motion } from "framer-motion"

export default function Experience() {
    const experiences = [
        {
        role: "UI/UX Designer",
        company: "PT. Cross Network Indonesia",
        period: "Jul 2024 - Dec 2024",
        description:
            "Designed user interfaces and improved the user experience of internal POS systems. Collaborated with the development team to create wireframes, prototypes, and interaction flows for better usability.",
        },
        // {
        // role: "System Analyst Intern",
        // company: "PT. XYZ Solutions",
        // period: "Jan 2024 - Jun 2024",
        // description:
        //     "Assisted in requirements gathering, process mapping, and documentation for system integration projects. Supported data flow modeling and user acceptance testing.",
        // },
    ]

    return (
        <section className="py-8 max-w-4xl mx-auto px-6">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
            Experience
        </motion.h2>

        <div>
            {experiences.map((exp, i) => (
            <ExperienceBox
                key={i}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                description={exp.description}
            />
            ))}
        </div>
        </section>
    )
    }
