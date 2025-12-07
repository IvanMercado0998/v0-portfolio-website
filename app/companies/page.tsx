// implement parallax effect on the hero section
// implement glass morphism design 
// keep the color scheme 
//A) Global mouse-position parallax (UI elements tilt/shift as you move the mouse) create the completed code
"use client"

import { useEffect, useState, useRef } from "react"
import { Car, Wrench, GraduationCap, Code } from "lucide-react"

// Define the type for the company data
interface Company {
  id: number
  name: string
  icon?: React.ElementType 
  logo?: string           // URL to logo image
  description: string
  roles: string[]
  projects: string[]
}

// --------------------------------------------------
// GLOBAL MOUSE PARALLAX HOOK
// --------------------------------------------------
function useMouseParallax(strength = 15) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2)
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2)

      element.style.transform = `
        perspective(800px)
        rotateX(${y * strength}deg)
        rotateY(${x * strength}deg)
        translateZ(0)
      `
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [strength])

  return ref
}

const companyData: Company[] = [
  {
    id: 1,
    name: "NAVICOM",
    logo: "/Navicom.png", 
    description: "**Automotive Infotainment** & **Smart Systems** development.",
    roles: ["Embedded Systems Engineer", "Automotive Systems Designer", "Software Engineer"],
    projects: ["NAVI System", "OBD-II Integration", "Win11 Optimizer", "Custom Head Unit"],
  },
  {
    id: 2,
    name: "RVMercado Engineering Corp.",
    logo: "/rvmercado.jpg",
    description: "**Industrial Motor Engineering**, Field Service, and **Electrical Systems**.",
    roles: ["Motor Control Engineer", "Field Service Technician", "Electrical Systems Designer"],
    projects: ["Industrial Motor Control", "Electrical Systems", "Motor Rewinding", "3-Phase Systems"],
  },
  {
    id: 3,
    name: "University",
    logo: "/HAULogo.png",
    description: "Academic Engineering & **Hardware** Capstone Projects.",
    roles: ["Hardware Engineer", "Systems Designer", "Research Developer"],
    projects: ["People Counting System", "STM32 Counter Machine", "Course Management System"],
  },
  {
    id: 4,
    name: "Personal Projects",
    icon: Code,
    description: "Innovation, **Experimental Engineering**, and **DevOps Infrastructure**.",
    roles: ["Full-Stack Engineer", "Hardware Architect", "Systems Integrator"],
    projects: ["TITAN RAM Robot", "Home Server Infrastructure", "Embedded Prototypes"],
  },
]

// --- Helper for Rendering Markdown Bolding ---
const BOLD_REGEX = /\*\*(.*?)\*\*/g;

// Function to safely render bolded text
const renderDescription = (text: string) => {
    const parts = text.split(BOLD_REGEX);
    return parts.map((part, index) => {
      // Every odd index (1, 3, 5, ...) is a bolded segment
      return index % 2 === 1 ? <strong key={index}>{part}</strong> : part;
    });
};

// --- Component for a single company card ---
const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Intersection Observer for fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const Icon = company.icon

  return (
    <div
      ref={cardRef}
      className={`group p-8 rounded-2xl shadow-xl transition-all duration-700 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        bg-black border border-blue-500/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer 
        ${company.id % 2 === 0 ? 'md:hover:translate-x-1' : 'md:hover:-translate-x-1'}` 
      }
    >
      <div className="mb-4 w-fit p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
        {company.logo ? (
          <img 
            src={company.logo} 
            alt={`${company.name} logo`} 
            className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300" 
          />
        ) : Icon ? (
          <Icon size={36} className="group-hover:scale-110 transition-transform duration-300" />
        ) : null}
      </div>

      <h2 className="text-3xl font-bold mb-2 text-white">{company.name}</h2>
      <p className="text-white/70 mb-6 font-medium">
        {renderDescription(company.description)}
      </p>

      <div className="mb-6 border-t border-white/10 pt-6">
        <h3 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wider">Roles</h3>
        <div className="flex flex-wrap gap-2">
          {company.roles.map((role) => (
            <span key={role} className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <h3 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wider">Key Projects</h3>
        <ul className="space-y-2">
          {company.projects.map((project) => (
            <li key={project} className="flex items-center text-white/70 text-sm hover:text-blue-400 transition-colors">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
              {project}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// --- Timeline Entry Component with Enhanced Interactivity ---
const TimelineEntry: React.FC<{ entry: any; idx: number }> = ({ entry, idx }) => {
    const TimelineIcon = entry.icon;
    const timelineRef = useRef<HTMLDivElement>(null);
    const [timelineVisible, setTimelineVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Staggered timeline fade-in with cleanup fix
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const currentRef = timelineRef.current;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the visibility delay
                    timeoutId = setTimeout(() => setTimelineVisible(true), idx * 200);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [idx]);

    return (
        <div 
            ref={timelineRef} 
            key={idx} 
            className={`flex gap-6 relative transition-all duration-700 ease-out 
                        ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated Connector Bar on Hover */}
            <div 
                className={`hidden md:block absolute left-1/2 top-0 h-full w-0.5 transform -translate-x-1/2 transition-all duration-300 ease-in-out z-0
                           ${isHovered ? 'bg-blue-500 shadow-blue-500/50 shadow-md' : 'bg-white/10'}`}
            />
            
            {/* Timeline Dot & Icon */}
            <div className={`absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 mt-2 z-10 p-2 rounded-full border-4 border-[#0a0a0a] transition-all duration-300 ${isHovered ? 'bg-blue-500 scale-110 shadow-lg shadow-blue-500/40' : 'bg-white/10'}`}>
                <TimelineIcon size={16} className={`transition-colors ${isHovered ? 'text-white' : 'text-blue-400'}`} />
            </div>

            {/* Year */}
            <div className="md:w-1/2 pt-2 flex-shrink-0">
                <span className={`text-lg font-bold text-blue-400 ${idx % 2 === 0 ? 'md:text-right md:pr-12 block' : 'md:text-left md:pl-12 block'}`}>
                    {entry.year}
                </span>
            </div>
            
            {/* Content Card */}
            <div className={`md:w-1/2 pb-12 pl-10 md:pl-0 relative z-10 ${idx % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                <h3 className="text-2xl font-bold mb-1 text-white">{entry.company}</h3>
                <p className="text-blue-300/80 mb-3 font-medium">{entry.role}</p>
                <p className="text-white/70 transition-colors duration-300">
                    {renderDescription(entry.description)}
                </p>
            </div>
        </div>
    )
}

// --- Main Page Component ---
export default function CompaniesPage() {
  const [scrollY, setScrollY] = useState(0)

  // Parallax Hero Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white"> {/* Changed from main to div and added overflow-y-auto */}
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-extrabold tracking-widest text-white hover:text-blue-400 transition-colors cursor-pointer">
            IM
          </a>
          <a href="/" className="text-white/60 hover:text-blue-400 transition-colors text-sm font-medium cursor-pointer">
            ← Back to Portfolio
          </a>
        </div>
      </nav>

      {/* Main content container with proper spacing */}
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        
        {/* Hero Section with Parallax */}
        <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-color-black)_0%,_#1f2937_100%)]">
          <div
            className="will-change-transform"
            style={{ transform: `translateY(${Math.min(scrollY * 0.1, 50)}px)` }} // Reduced parallax effect
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Companies & Collaborations
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mt-6">
            Precision engineering across multiple domains | AUTOMOTIVE SYSTEMS | INDUSTRIAL APPLICATIONS | building solutions that matter.
          </p>
        </section>

        <hr className="border-t border-white/10" />

        {/* Companies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </section>

        <hr className="border-t border-white/10" />

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">Experience Timeline</h2>

            <div className="space-y-12 relative before:absolute before:left-3 before:top-0 before:h-full before:w-0.5 before:bg-white/10 md:before:left-1/2 md:before:-translate-x-1/2">
              {[
                {
                  year: "2022–2025",
                  company: "RVMercado Engineering Corporation",
                  role: "Motor Control & Electrical Systems Engineer",
                  description:
                    "Field service and engineering work on **industrial motor systems**, AVR calibration, and **3-phase electrical design** for major industrial clients.",
                  icon: Wrench,
                },
                {
                  year: "2023–2024",
                  company: "University",
                  role: "Hardware & Systems Engineer",
                  description:
                    "Capstone projects in **digital electronics**, **microcontroller programming**, and **system design** with published prototypes.",
                  icon: GraduationCap,
                },
                {
                  year: "2024–2025",
                  company: "NAVICOM",
                  role: "Embedded Systems & Automotive Engineer",
                  description:
                    "Leading **automotive system development** including NAVI infotainment system, **motor control integration**, and **software optimization**.",
                  icon: Car,
                },
              ].map((entry, idx) => (
                  <TimelineEntry key={idx} entry={entry} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-white/10" />

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Collaborate? 🚀</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Let's work together on your next Engineering or Automotive Systems project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 sm:px-10 py-3 bg-blue-500 text-black font-bold rounded-full transition-all shadow-lg shadow-blue-500/50 transform hover:scale-105 hover:bg-blue-400 
                         relative z-10
                         animate-pulse hover:animate-none group inline-block text-center"
              >
                Get in Touch
              </a>
              <a
                href="/"
                className="px-8 sm:px-10 py-3 border border-white/30 text-white hover:border-white/70 font-bold rounded-full transition-all hover:bg-white/5 transform hover:scale-105 inline-block text-center"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        <hr className="border-t border-white/10" />

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center text-white/50 text-sm">
          <p>© 2025 Ivan Mercado. NAVICOM. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  )
}