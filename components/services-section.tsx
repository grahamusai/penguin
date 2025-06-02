"use client"

import { motion } from "framer-motion"
import { Code, ShoppingCart, Cloud, Database, Workflow, Layers, Server } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs and challenges.",
    },
    {
      icon: <Layers className="h-10 w-10 text-purple-500" />,
      title: "Web App Development",
      description: "Responsive, scalable web applications with modern frameworks and cutting-edge technologies.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-purple-500" />,
      title: "Ecommerce Development",
      description: "Custom online stores with seamless checkout experiences and automation capabilities.",
    },
    {
      icon: <Database className="h-10 w-10 text-purple-500" />,
      title: "SaaS Product Development",
      description: "End-to-end development of scalable, cloud-based software-as-a-service solutions.",
    },
    {
      icon: <Workflow className="h-10 w-10 text-purple-500" />,
      title: "Workflow Optimization",
      description: "Streamline your business processes with custom automation and optimization solutions.",
    },
    {
      icon: <Server className="h-10 w-10 text-purple-500" />,
      title: "API Integration",
      description: "Seamless integration of third-party services and APIs to enhance your digital ecosystem.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-purple-500" />,
      title: "Cloud Migration",
      description: "Migrate your existing infrastructure to the cloud for improved scalability and performance.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-purple-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-black/50 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
