"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "15+", label: "Team Members" },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} custom={0} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About <span className="text-[#ff0000]">Digital Penguin</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-[#ff0000] to-orange-600 mx-auto mb-6"
          />
          <motion.p variants={fadeIn} custom={2} className="text-gray-400 max-w-2xl mx-auto text-lg">
            We're a team of passionate developers, designers, and digital strategists dedicated to crafting exceptional
            digital experiences that drive business growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff0000] to-orange-600 rounded-lg blur-lg opacity-30" />
              <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 mb-6">
                  To empower businesses with innovative digital solutions that transform ideas into reality, drive
                  growth, and create meaningful user experiences.
                </p>

                <ul className="space-y-3">
                  {[
                    "Client-focused approach",
                    "Technical excellence",
                    "Creative innovation",
                    "Continuous improvement",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-[#ff0000] mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#ff5e00] mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
