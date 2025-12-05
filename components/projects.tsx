"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Upload, X } from "lucide-react"

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [projectMedia, setProjectMedia] = useState<{ [key: number]: string[] }>({})

  const projects = [
    {
      id: 1,
      title: "NAVI — Smart Infotainment & Vehicle Safety System",
      company: "NAVICOM",
      category: "Embedded Systems",
      year: "2024–2025",
      description: "Tesla-style infotainment and safety enhancement system built from scratch for legacy vehicles.",
      overview:
        "A comprehensive vehicle head unit featuring multi-camera blind spot monitoring, reverse camera auto-triggering, Sentry Mode with motion detection, GPS tracking, and local LLM voice commands.",
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
      skills: ["Embedded Systems", "AI Integration", "UI/UX Design", "Networking", "Power Electronics"],
    },
    {
      id: 2,
      title: "Automated People Counting System",
      company: "University (Hardware Capstone)",
      category: "Digital Electronics",
      year: "2023–2024",
      description: "Robust PIR + IC-based counter for tracking event attendance with error-proof design.",
      overview:
        "Published prototype featuring dual PIR sensors with entry/exit logic, IC-based up/down counting, and fully modular PCB layout for field repairs.",
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
    },
    {
      id: 3,
      title: "TITAN RAM — Combat Robot Motor Control System",
      company: "Personal Engineering Project",
      category: "Robotics",
      year: "2025",
      description: "Complete motor control system for 4-motor combat robot with wireless Bluetooth command.",
      overview:
        "Fully documented system integrating Arduino Uno, ESP32, dual BTS7960 motor drivers, and 12V/640RPM motors with wireless smartphone control.",
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
    },
    {
      id: 4,
      title: "STM32F429I-DISC1 Counter Machine",
      company: "University (Practicum Project)",
      category: "Microcontroller Systems",
      year: "2025",
      description: "TouchGFX-powered admin counter system with PIR sensor and secure event logging.",
      overview:
        "Embedded system featuring STM32F429 MCU, PIR motion detection, keypad input, LED indicators, PWM buzzer, RTC, and color touchscreen display.",
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
    },
    {
      id: 5,
      title: "Industrial Motor Control & Electrical Systems",
      company: "RVMercado Engineering Corporation",
      category: "Industrial Electronics",
      year: "2022–2025",
      description: "Real-world industrial engineering: motor rewinding, AVR calibration, and 3-phase system design.",
      overview:
        "Professional field service work serving major industrial clients including Metro Clark Waste Management, Balibago Waterworks, and Airnergy Renewables.",
      engineeringWork: [
        "Rewound submersible motors (230V/460V AC)",
        "Diagnosed and calibrated Automatic Voltage Regulators (AVRs)",
        "Designed Motor Control Units (MCUs) for industrial applications",
        "Installed and commissioned 3-phase water pump systems",
        "Tested motor insulation resistance and current draw",
        "Troubleshot industrial electrical faults",
        "Replaced magnetic contactors, overload relays, and protection circuits",
        "Built custom MCC (Motor Control Center) panels",
      ],
      tags: ["3-Phase Motors", "Industrial Controls", "Electrical Safety", "Field Service", "Motor Rewinding"],
      skills: [
        "Industrial Electrical Systems",
        "Motor Engineering",
        "Diagnostics",
        "Safety Standards",
        "Field Service",
      ],
    },
    {
      id: 6,
      title: "Win11 Optimizer App",
      company: "NAVICOM Software Division",
      category: "Systems Software",
      year: "2024–2025",
      description: "Custom Windows optimization tool with automated cleanup, service management, and modern UI.",
      overview:
        "Desktop application built with PowerShell backend and ElectronJS frontend for system-wide Windows optimization and maintenance.",
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
    },
    {
      id: 7,
      title: "Course Management System",
      company: "University Project",
      category: "Desktop Application",
      year: "2024",
      description: "Expanded C++ GUI application with file I/O, data persistence, and modular architecture.",
      overview:
        "Evolution from console application to full GUI-based desktop system with file-based persistence and modular object-oriented design.",
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
    },
    {
      id: 8,
      title: "ESP32-C3 OBD-II Reader Integration",
      company: "NAVICOM",
      category: "Automotive Electronics",
      year: "2024–2025",
      description: "OBD-II telemetry reader integrated with NAVI infotainment display system.",
      overview:
        "Automotive diagnostic module reading real-time vehicle parameters and error codes for NAVI display integration.",
      engineeringWork: [
        "Implemented OBD-II PID protocol communication",
        "Configured Bluetooth/WiFi telemetry transmission",
        "Built vehicle data parsing (speed, RPM, throttle, error codes)",
        "Integrated telemetry feed into NAVI UI",
        "Designed data buffering for reliability",
        "Implemented error code interpretation system",
      ],
      tags: ["OBD-II", "ESP32", "Automotive Protocols", "Bluetooth", "Telemetry"],
      skills: ["Automotive Electronics", "Communication Protocols", "Embedded Systems"],
    },
    {
      id: 9,
      title: "Home Server (Proxmox + Ubuntu)",
      company: "NAVICOM Cloud",
      category: "DevOps / Infrastructure",
      year: "2024–2025",
      description: "Virtualized home lab with Nginx reverse proxy, containers, and hosting services.",
      overview:
        "Professional DevOps infrastructure featuring virtual machines, containerized services, and application hosting.",
      engineeringWork: [
        "Set up Proxmox hypervisor for bare-metal virtualization",
        "Configured Ubuntu Server VMs with resource optimization",
        "Deployed Nginx reverse proxy for load balancing",
        "Containerized services using Docker",
        "Built LXC development containers",
        "Implemented local AI model containers",
        "Hosted static websites and web applications",
      ],
      tags: ["Proxmox", "Ubuntu", "Nginx", "Docker", "Virtualization", "Linux"],
      skills: ["Systems Administration", "DevOps", "Infrastructure as Code", "Cloud Computing"],
    },
    {
      id: 10,
      title: "Custom Car Head Unit (Mini PC + Touchscreen)",
      company: "NAVICOM",
      category: "Automotive UI",
      year: "2024",
      description: "Modern touchscreen infotainment interface for vehicle integration with NAVI compatibility.",
      overview:
        "Full-screen automotive UI system featuring multi-window capability, camera feeds, and offline assistant integration.",
      engineeringWork: [
        "Designed automotive UI/UX in Figma",
        "Integrated Mini PC with custom touchscreen drivers",
        "Built multi-window application framework",
        "Implemented camera feed rendering",
        "Created NAVI system compatibility layer",
        "Optimized performance for automotive environment",
      ],
      tags: ["UI/UX Design", "Embedded Linux", "Automotive Systems", "Electron", "React"],
      skills: ["Automotive UI", "Hardware Integration", "Software Optimization"],
    },
  ]

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  const handleMediaUpload = (projectId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const mediaUrl = e.target?.result as string
        setProjectMedia((prev) => ({
          ...prev,
          [projectId]: [...(prev[projectId] || []), mediaUrl],
        }))
      }
      reader.readAsDataURL(file)
    })
  }

  const removeMedia = (projectId: number, index: number) => {
    setProjectMedia((prev) => ({
      ...prev,
      [projectId]: prev[projectId]?.filter((_, i) => i !== index) || [],
    }))
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8 text-black">Featured Projects</h2>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white text-black hover:bg-black/5 border border-black/20"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card bg-white border-2 border-black/10 hover:border-black/30 overflow-hidden"
            >
              {/* Project header */}
              <button
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="w-full p-6 flex items-start justify-between gap-4 hover:bg-black/2 transition-colors text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-black">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-black px-2 py-1 rounded font-medium">
                      {project.company}
                    </span>
                    <span className="text-xs text-black/50">{project.year}</span>
                  </div>
                  <p className="text-black/70 text-sm">{project.description}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-black flex-shrink-0 transition-transform ${
                    expandedId === project.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expanded details */}
              {expandedId === project.id && (
                <div className="px-6 pb-6 border-t border-black/10 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Overview</h4>
                    <p className="text-sm text-black/70">{project.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Engineering Work</h4>
                    <ul className="text-sm text-black/70 space-y-1">
                      {project.engineeringWork.map((work, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-black flex-shrink-0">→</span>
                          <span>{work}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-black/5 text-black border border-black/20 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-black mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-black/10 text-black border border-black/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/10">
                    <h4 className="text-sm font-semibold text-black mb-3">Project Media (Photos/Videos)</h4>

                    {/* Media upload input */}
                    <label className="flex items-center justify-center w-full p-4 border-2 border-dashed border-black/20 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all">
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={20} className="text-black/50" />
                        <span className="text-xs text-black/50">Click to upload photos or videos</span>
                      </div>
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={(e) => handleMediaUpload(project.id, e)}
                        className="hidden"
                      />
                    </label>

                    {/* Display uploaded media */}
                    {projectMedia[project.id] && projectMedia[project.id].length > 0 && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {projectMedia[project.id].map((media, idx) => (
                          <div key={idx} className="relative group">
                            <img
                              src={media || "/placeholder.svg"}
                              alt={`Project media ${idx}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => removeMedia(project.id, idx)}
                              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
