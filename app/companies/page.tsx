"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function CompaniesPage() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const companies = [
    {
      id: 1,
      name: "NAVICOM",
      logo: "🚗",
      description: "Automotive Infotainment & Smart Systems",
      roles: ["Embedded Systems Engineer", "Automotive Systems Designer", "Software Engineer"],
      projects: ["NAVI System", "OBD-II Integration", "Win11 Optimizer", "Custom Head Unit"],
    },
    {
      id: 2,
      name: "RVMercado Engineering Corporation",
      logo: "⚙️",
      description: "Industrial Motor Engineering & Field Service",
      roles: ["Motor Control Engineer", "Field Service Technician", "Electrical Systems Designer"],
      projects: ["Industrial Motor Control", "Electrical Systems", "Motor Rewinding", "3-Phase Systems"],
    },
    {
      id: 3,
      name: "University",
      logo: "🎓",
      description: "Academic Engineering & Hardware Projects",
      roles: ["Hardware Engineer", "Systems Designer", "Research Developer"],
      projects: ["People Counting System", "STM32 Counter Machine", "Course Management System"],
    },
    {
      id: 4,
      name: "Personal Projects",
      logo: "🔧",
      description: "Innovation & Experimental Engineering",
      roles: ["Full-Stack Engineer", "Hardware Architect", "Systems Integrator"],
      projects: ["TITAN RAM Robot", "Home Server Infrastructure", "Embedded Prototypes"],
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            IM
          </Link>
          <a href="/" className="text-white/70 hover:text-white transition-colors">
            Back to Portfolio
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
        >
          Companies & Collaborations
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Precision engineering across multiple domains. From automotive systems to industrial applications—building
          solutions that matter.
        </p>
      </section>

      {/* Companies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group glass-card p-8 border border-white/10 hover:border-white/30 transition-all hover:bg-white/5 cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{company.logo}</div>

              <h2 className="text-3xl font-bold mb-2">{company.name}</h2>
              <p className="text-white/60 mb-6">{company.description}</p>

              <div className="mb-6 border-t border-white/10 pt-6">
                <h3 className="text-sm font-semibold text-white/80 mb-3">Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {company.roles.map((role) => (
                    <span key={role} className="text-xs bg-white/5 border border-white/20 px-3 py-1 rounded-full">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-sm font-semibold text-white/80 mb-3">Key Projects</h3>
                <ul className="space-y-2">
                  {company.projects.map((project) => (
                    <li key={project} className="flex items-center text-white/70 text-sm">
                      <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience Timeline</h2>

          <div className="space-y-12">
            {[
              {
                year: "2022–2025",
                company: "RVMercado Engineering Corporation",
                role: "Motor Control & Electrical Systems Engineer",
                description:
                  "Field service and engineering work on industrial motor systems, AVR calibration, and 3-phase electrical design for major industrial clients.",
              },
              {
                year: "2023–2024",
                company: "University",
                role: "Hardware & Systems Engineer",
                description:
                  "Capstone projects in digital electronics, microcontroller programming, and system design with published prototypes.",
              },
              {
                year: "2024–2025",
                company: "NAVICOM",
                role: "Embedded Systems & Automotive Engineer",
                description:
                  "Leading automotive system development including NAVI infotainment system, motor control integration, and software optimization.",
              },
            ].map((entry, idx) => (
              <div key={idx} className="flex gap-6 md:gap-12">
                <div className="md:text-right md:w-1/4">
                  <span className="text-lg font-bold text-white/80">{entry.year}</span>
                </div>
                <div className="md:w-3/4 pb-12 border-l border-white/20 pl-6 md:border-l-0 md:pl-0">
                  <h3 className="text-2xl font-bold mb-2">{entry.company}</h3>
                  <p className="text-white/60 mb-3">{entry.role}</p>
                  <p className="text-white/50">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-white/60 mb-8">
            Let's work together on your next engineering or automotive systems project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="/"
              className="px-8 py-3 border border-white/30 text-white hover:border-white/60 font-bold rounded-lg transition-all"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 text-center text-white/50 text-sm">
        <p>© 2025 Ivan Mercado. Precision Engineering.</p>
      </footer>
    </main>
  )
}
