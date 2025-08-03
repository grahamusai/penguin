"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Thabo Mokoena",
      position: "Managing Director, CapeTech Solutions",
      content:
        "Digital Penguin brought our vision to life with a stunning website that truly represents our South African brand. Their professionalism and creativity made the whole process seamless.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Naledi Jacobs",
      position: "Founder, Jozi Market",
      content:
        "Working with Digital Penguin was a breath of fresh air. They understood the local market and delivered an e-commerce platform that our Johannesburg customers love.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Sipho Dlamini",
      position: "CTO, Durban Fintech",
      content:
        "The Digital Penguin team helped us migrate our systems with zero downtime. Their expertise and commitment to South African businesses are unmatched.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Client <span className="text-orange-500">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff0000] to-orange-600 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 -top-8 text-orange-500 opacity-30">
            <Quote size={64} />
          </div>

          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10"
              >
                <p className="text-gray-300 text-lg md:text-xl italic mb-8">"{testimonials[current].content}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonials[current].name}</h4>
                    <p className="text-orange-400 text-sm">{testimonials[current].position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-white/10 text-white hover:bg-orange-500/20 hover:text-orange-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === current ? "bg-orange-500" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-white/10 text-white hover:bg-orange-500/20 hover:text-orange-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
