"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Companies", href: "/companies" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Glassmorphic background */}
      <div className="absolute inset-0 glass-dark"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white relative z-10">
            IM
          </Link>

          <div className="hidden md:flex gap-8 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white transition-all duration-300 text-sm font-medium hover:text-transparent hover:bg-clip-text hover:gradient-text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/70 hover:text-white relative z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white/70 hover:text-white py-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
