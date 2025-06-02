"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in a real app
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thanks for your message! We'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-500" />,
      title: "Email Us",
      details: "hello@digitalpenguin.co.za",
      link: "mailto:hello@grahamusai0@gmail.com.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-500" />,
      title: "Call Us",
      details: "+27 658745691",
      link: "tel:+27658745691",	
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-500" />,
      title: "Visit Us",
      details: "63 School Avenue, Germiston, South Africa",
      link: "https://maps.google.com",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get in <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 flex flex-col items-center text-center hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="bg-purple-500/10 p-3 rounded-full mb-4">{item.icon}</div>
              <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.details}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300 text-sm">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 focus:border-purple-500 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300 text-sm">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 focus:border-purple-500 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-gray-300 text-sm">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="bg-black/50 border-white/10 focus:border-purple-500 text-white"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-300 text-sm">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className="bg-black/50 border-white/10 focus:border-purple-500 text-white min-h-[150px]"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white w-full md:w-auto px-8">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
