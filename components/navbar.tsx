"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
          <Image src="/images/logo.png" alt="Digital Penguin Logo" width={88} height={30}></Image>
        </motion.div>
       
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#work">Our Work</NavLink>
        <NavLink href="#testimonials">Testimonials</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">Get a Quote</Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </Button>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 p-4 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#work" onClick={() => setIsOpen(false)}>
              Our Work
            </MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)}>
              Testimonials
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">Get a Quote</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors p-2 block" onClick={onClick}>
      {children}
    </Link>
  )
}
