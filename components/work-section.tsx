"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Apps" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "saas", name: "SaaS" },
    { id: "mobile", name: "Mobile" },
  ]

  const projects = [
    {
      id: 1,
      title: "Tropical Blinds",
      category: "web",
      image: "/images/tropical.png",
      tags: ["React", "Node.js", "MongoDB"],
      description: "",
      link: "https://tropicalblinds.co.zw",
    },
    {
      id: 2,
      title: "Go Advert",
      category: "ecommerce",
      image: "/images/go-advert.png",
      tags: ["Firebase", "Next.js", "Stripe"],
      description: "",
      link: "https://iadvertiz.com",
    },
    {
      id: 3,
      title: "McDare Ads",
      category: "web",
      image: "/images/elevate.png",
      tags: ["Nextjs", "Firebase", "Tailwind"],
      description: "",
      link: "https://mcdare-jfc8.vercel.app/",
    },
    {
      id: 4,
      title: "Nandos Zimbabwe",
      category: "web",
      image: "/images/nandos.png",
      tags: ["JSP", "GraphQL", "AWS"],
      description: "",
      link: "https://nandos.co.zw/",
    },
    {
      id: 5,
      title: "Natlage",
      category: "saas",
      image: "/images/natlage.png",
      tags: ["WordPress", "PHP", "Apache"],
      description: "",
      link: "https://natlage.com/",

    },
    {
      id: 6,
      title: "Ntane Projects",
      category: "ecommerce",
      image: "/images/ntane.png",
      tags: ["WooCommerce", "PHP", "WordPress"],
      description: "",
      link: "https://ntaneentitiesandprojects.co.za/",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-orange-500">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff0000] to-orange-600 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects and digital solutions we've delivered for our clients.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "text-white border-white/20 hover:bg-white/10"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-video overflow-hidden rounded-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} className="bg-orange-500/30 text-orange-200 hover:bg-orange-500/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-sm font-medium text-orange-400 hover:text-orange-300"
                  >
                    View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
