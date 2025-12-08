// implement glass morphism effect on project cards
// enhance background slideshow with smooth transitions and overlay
// add lightbox modal for project media viewing
"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, X, Play, Maximize2, ChevronLeft, ChevronRight } from "lucide-react"

type MediaType = "image" | "video"

interface ProjectMedia {
  type: MediaType
  src: string
  alt?: string
}

interface Project {
  id: number
  title: string
  company?: string
  category?: string
  year?: string
  description?: string
  overview?: string
  engineeringWork?: string[]
  tags?: string[]
  skills?: string[]
  media?: ProjectMedia[]
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedMedia, setSelectedMedia] = useState<ProjectMedia | null>(null)
  
  // Slider state
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Background slideshow state
  const [bgIndex, setBgIndex] = useState(0)
  const backgroundImages = [
    "/ClarkAirbaseTesting.jpg",
    "/ClarkAirbaseTesting1.jpg",
    "/SmartGenTesting1.jpg",
    "/TitanRamBattle.jpg",
    "/TitanRamFinalBuild1.jpg",
    "/NAVI.png",
    "/TitanRam3D.png",
    "/TitanRamTesting .jpg",
  ]

  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => { document.body.style.overflow = "auto" }
  }, [selectedMedia])

  // Background slideshow cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      title: "NAVI — Smart Infotainment & Vehicle Safety System",
      company: "NAVICOM | Founded: Ivan Mercado",
      category: "Embedded Systems",
      year: "2024–2025",
      description: "Tesla-style infotainment and safety enhancement system built from scratch for legacy vehicles.",
      overview: "A comprehensive vehicle head unit featuring multi-camera blind spot monitoring, reverse camera auto-triggering, Sentry Mode with motion detection, GPS tracking, and local LLM voice commands.",
      engineeringWork: [
        "ESP32 signal handling for ignition, reverse, turn signals",
        "Multi-camera RTSP stream routing and management",
        "Tesla-style UI design in Figma → Electron implementation",
        "MCU ↔ Mini PC communication protocols",
        "Voltage level shifting for safe analog inputs",
        "Power management (ACC/Ignition logic)",
        "Sentry mode AI workflow with motion detection",
        "Local LLM installation and optimization",
      ],
      tags: ["ESP32-C3", "Electron", "React", "Python", "AI/ML", "Automotive"],
      skills: ["Automotive UI", "Embedded Systems", "AI Integration", "UI/UX Design", "Networking", "Power Electronics"],
      media: [
        { type: "image", src: "/NAVI.png", alt: "Main Dashboard UI" },
        { type: "image", src: "/NAVIapps.png", alt: "Navigation & Apps" },
        { type: "video", src: "/NAVI1.mp4", alt: "System Demo" }
      ],
    },
    {
      id: 2,
      title: "Automated People Counting System",
      company: "University (Hardware Capstone)",
      category: "Digital Electronics",
      year: "2023–2024",
      description: "Robust PIR + IC-based counter for tracking event attendance with error-proof design.",
      overview: "Published prototype featuring dual PIR sensors with entry/exit logic, IC-based up/down counting, and fully modular PCB layout for field repairs.",
      engineeringWork: [
        "Designed complete circuit using IC counter logic",
        "Implemented dual PIR detection and signal conditioning",
        "Created neat, color-coded PCB layout with modular design",
        "Built error-proof wiring for easy field repairs",
        "Ensured expandable architecture for LGU monitoring",
        "Published within university program",
      ],
      tags: ["PIR Sensors", "Digital ICs", "PCB Design", "Analog Electronics", "Signal Conditioning"],
      skills: ["Circuit Design", "PCB Layout", "Sensor Integration", "Systems Engineering"],
      media: [
        { type: "image", src: "/STMCountingMachine.jpg", alt: "Prototype" },
        { type: "image", src: "/STMCountingMachine1.jpg", alt: "Testing" },
      ],
    },
    {
      id: 3,
      title: "TITAN RAM — Combat Robot Motor Control System",
      company: "University Project",
      category: "Robotics",
      year: "2025",
      description: "Complete motor control system for 2-motor combat robot with wireless Bluetooth command.",
      overview: "Fully documented system integrating Arduino Uno, ESP32, dual BTS7960 motor drivers, and 12V/640RPM motors with wireless smartphone control.",
      engineeringWork: [
        "Designed high-power motor driver circuits (BTS7960)",
        "Implemented PWM speed control logic for 4-motor coordination",
        "Built voltage level shifting (3.3V ↔ 5V) for MCU integration",
        "Configured LM2596 buck converter for stable 5V rail",
        "Developed Bluetooth wireless control protocol",
        "Created Proteus simulations and wiring diagrams",
        "Implemented full rotation control (CW/CCW) for each motor",
      ],
      tags: ["Arduino", "ESP32", "Motor Drivers", "PWM Control", "Bluetooth", "Power Electronics"],
      skills: ["Motor Control", "Power Electronics", "Embedded C", "Wireless Communication", "PCB Design"],
      media: [
        { type: "image", src: "/TitanRam3D.png", alt: "3D Design" },
        { type: "image", src: "/TitanRamTesting .jpg", alt: "Prototype Testing" },
        { type: "image", src: "/TitanRamFinalBuild1.jpg", alt: "Final Build" },
        { type: "image", src: "/TitanRamBattle.jpg", alt: "Battle Bots" },
      ],
    },
    {
      id: 4,
      title: "STM32F429I-DISC1 Counter Machine",
      company: "DSDC Internship (Practicum Project)",
      category: "Microcontroller Systems",
      year: "2025",
      description: "TouchGFX-powered admin counter system with PIR sensor and secure event logging.",
      overview: "Embedded system featuring STM32F429 MCU, PIR motion detection, keypad input, LED indicators, PWM buzzer, RTC, and color touchscreen display.",
      engineeringWork: [
        "Reconfigured STM32 HAL GPIO driver for custom pin mapping",
        "Integrated TouchGFX framework with real-time callbacks",
        "Designed multi-layer user interface with admin controls",
        "Managed GPIO interrupts for PIR and keypad inputs",
        "Implemented PWM buzzer alarms with TIM3_CH1",
        "Configured RTC for accurate event timestamping",
        "Built system state machine for reset/reboot/counting operations",
      ],
      tags: ["STM32", "TouchGFX", "HAL", "GPIO Interrupts", "PWM", "Embedded UI"],
      skills: ["Microcontroller Programming", "Real-time Systems", "Interrupt Handling", "UI Development"],
      media: [
        { type: "image", src: "/STMCountingMachine.jpg", alt: "Prototype" },
        { type: "image", src: "/STMCountingMachine1.jpg", alt: "Prototype" },
      ],
    },
    {
      id: 5,
      title: "IntelliLite, DeapSea and SmartGen Generator Reconfiguration & ATS Integration",
      company: "RVMercado Engineering Corporation",
      category: "Power Systems & Industrial Automation",
      year: "2024–2025",
      description: "Reconfiguration, diagnostics, and reprogramming of IntelliLite generator controllers with Automatic Transfer Switch (ATS) integration.",
      overview: "Performed full-site generator rehabilitation including IntelliLite control logic updates, ATS communication repairs, AC sensing calibration, battery maintenance system installation.",
      engineeringWork: [
        "Reconfigured IntelliLite controller parameters using IntelliConfig",
        "Integrated ATS logic: utility sensing, generator sensing, and transfer sequencing",
        "Calibrated voltage, frequency, and AC phase rotation sensing",
        "Fixed wiring faults and corrected ATS feedback/contact signals",
        "Programmed safety limits: overspeed, coolant temperature, low oil pressure",
        "Diagnosed controller faults and communication errors",
        "Installed smart trickle-charging devices for long-term battery maintenance",
        "Performed full functional testing: utility failure, generator takeover, and cooldown",
      ],
      tags: ["IntelliLite Controllers", "Automatic Transfer Switch", "Generator Systems", "Power Automation", "Battery Maintenance"],
      skills: ["Generator Control Systems", "ATS Integration", "Diagnostics & Calibration", "Power System Safety", "Industrial Field Service"],
      media: [
        { type: "image", src: "/SmartGenTesting1.jpg", alt: "SmartGen Integration Testing" },
        { type: "image", src: "/ATSCharger.jpg", alt: "ATS Integration" },
        { type: "image", src: "/InteliLiteRecon.jpg", alt: "InteliLite AMF 20 Reconfiguration" },
        { type: "image", src: "/InteliLite.jpg", alt: "AMF 20 Reconfiguration" },
        { type: "image", src: "/ClarkAirbaseTesting.jpg", alt: "Clark Airbase Final Testing" },
        { type: "image", src: "/ClarkAirbaseTesting1.jpg", alt: "Clark Airbase Demo" },
      ],
    },
    {
      id: 6,
      title: "Win11 Optimizer App",
      company: "NAVICOM Software Division",
      category: "Systems Software",
      year: "2024–2025",
      description: "Custom Windows optimization tool with automated cleanup, service management, and modern UI.",
      overview: "Desktop application built with PowerShell backend and ElectronJS frontend for system-wide Windows optimization and maintenance.",
      engineeringWork: [
        "Engineered PowerShell scripts for system operations",
        "Designed WinForms UI with responsive controls",
        "Packaged application as Windows .exe using ElectronJS",
        "Implemented cache and temporary file cleanup routines",
        "Built startup program management system",
        "Created disk cleaner with safe deletion protocols",
        "Designed modern UI in Figma with Electron implementation",
      ],
      tags: ["PowerShell", "WinForms", "ElectronJS", "Figma", "Windows API"],
      skills: ["Systems Programming", "Desktop Development", "UI/UX Design", "Performance Optimization"],
      media: [],
    },
    {
      id: 7,
      title: "Course Management System",
      company: "University Project",
      category: "Desktop Application",
      year: "2024",
      description: "Expanded C++ GUI application with file I/O, data persistence, and modular architecture.",
      overview: "Evolution from console application to full GUI-based desktop system with file-based persistence and modular object-oriented design.",
      engineeringWork: [
        "Migrated console codebase to GUI-based architecture",
        "Implemented file I/O for data persistence",
        "Built dialog-based input system with validation",
        "Created data display panels with real-time updates",
        "Refactored code into modular class structure",
        "Designed user-friendly popup interfaces",
        "Implemented error handling and data validation",
      ],
      tags: ["C++", "GUI Development", "File I/O", "OOP Design", "Data Structures"],
      skills: ["Software Architecture", "C++ Development", "UI Design", "Data Management"],
      media: [],
    },
  ]

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))]
  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  const updateScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 350
      const newScrollLeft = direction === 'left' 
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount
      
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      updateScrollButtons()
      slider.addEventListener('scroll', updateScrollButtons)
      window.addEventListener('resize', updateScrollButtons)
      return () => {
        slider.removeEventListener('scroll', updateScrollButtons)
        window.removeEventListener('resize', updateScrollButtons)
      }
    }
  }, [filteredProjects])

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 text-black overflow-hidden bg-white">
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {/* Slideshow images */}
        {backgroundImages.map((img, index) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{
              opacity: index === bgIndex ? 1 : 0,
              zIndex: 0,
            }}
          >
            <img
              src={img}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ opacity: 0.6 }}
            />
          </div>
        ))}
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-black drop-shadow-sm">Featured Projects</h2>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white/90 backdrop-blur-sm text-black hover:bg-white border border-gray-200 hover:border-gray-300 shadow-sm"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Horizontal Slider */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 backdrop-blur-sm hover:bg-white shadow-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
          )}

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-6 px-2 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-[320px] snap-start"
              >
                <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                    {project.media && project.media.length > 0 ? (
                      project.media[0].type === 'video' ? (
                        <video
                          src={project.media[0].src}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <img
                          src={project.media[0].src}
                          alt={project.media[0].alt || project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      )
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="inline-block text-xs uppercase text-purple-600 font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Bottom Info */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500">
                        <span>{project.year}</span>
                      </div>
                      <button
                        onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                        className="flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors group/btn"
                      >
                        Details
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            expandedId === project.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 backdrop-blur-sm hover:bg-white shadow-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          )}
        </div>

        {/* Expanded Project Details */}
        {expandedId && (
          <div className="mt-8 animate-in slide-in-from-top duration-500">
            {(() => {
              const project = projects.find((p) => p.id === expandedId)
              if (!project) return null

              return (
                <div className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-xl p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-3 text-black">{project.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{project.overview}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                          Engineering Work
                        </h4>
                        <ul className="space-y-2">
                          {project.engineeringWork?.map((work, idx) => (
                            <li key={idx} className="flex gap-3 text-gray-700">
                              <span className="text-purple-600 mt-1">→</span>
                              <span>{work}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full hover:border-purple-300 hover:shadow-sm transition-all"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <aside className="md:col-span-1 space-y-6">
                      <div className="border border-gray-200 rounded-xl p-5 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm">
                        <h5 className="text-sm font-semibold mb-4 text-black">Project Info</h5>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-semibold text-gray-900">Company:</span>
                            <p className="text-gray-600 mt-1">{project.company}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">Year:</span>
                            <p className="text-gray-600 mt-1">{project.year}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">Category:</span>
                            <p className="text-gray-600 mt-1">{project.category}</p>
                          </div>
                        </div>
                      </div>

                      {/* Media Gallery */}
                      {project.media && project.media.length > 0 && (
                        <div>
                          <h5 className="text-sm font-semibold mb-3 text-black">Project Gallery</h5>
                          <div className="grid grid-cols-2 gap-3">
                            {project.media.map((item, idx) => (
                              <div
                                key={idx}
                                onClick={() => setSelectedMedia(item)}
                                className="relative group rounded-lg overflow-hidden border border-gray-200 cursor-zoom-in shadow-sm hover:shadow-lg transition-all duration-300"
                              >
                                <div className="overflow-hidden bg-gray-100">
                                  {item.type === "video" ? (
                                    <div className="relative w-full h-24 bg-black">
                                      <video
                                        src={item.src}
                                        muted
                                        loop
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <Play size={20} className="text-white fill-white opacity-80" />
                                      </div>
                                    </div>
                                  ) : (
                                    <img
                                      src={item.src}
                                      alt={item.alt || `Media ${idx}`}
                                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                  )}
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </aside>
                  </div>
                </div>
              )
            })()}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-50"
          >
            <X size={24} />
          </button>

          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'video' ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl bg-black"
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            )}
            {selectedMedia.alt && (
              <p className="mt-6 text-white/90 text-center text-sm font-medium bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
                {selectedMedia.alt}
              </p>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}