// components/skills.tsx
// DO NOT CHANGE LOGIC CALLS
// Added a compact, draggable carousel for the skill cards using Framer Motion.

"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        // New frontend skills
        "React Native",
        "Redux",
        "Vite",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "PostgreSQL",
        "API Design",
        "Authentication",
        // New backend skills
        "Express.js",
        "GraphQL",
        "Redis",
        "Kafka",
        "TypeORM",
      ],
    },
    {
      title: "Embedded & Hardware",
      skills: [
        "ESP32",
        "STM32",
        "Arduino",
        "PCB Design",
        "Motor Control",
        // New embedded / hardware skills
        "FreeRTOS",
        "BTS7960",
        "MPU6050",
      ],
    },
    {
      title: "Systems & DevOps",
      skills: [
        "Linux",
        "Docker",
        "Proxmox",
        "Nginx",
        "AWS",
        // New DevOps / systems skills
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "CI/CD",
        "Prometheus",
        "Grafana",
      ],
    },
    // ---------------------------------------------------------
    // NEW CATEGORY – AI / Machine Learning
    // ---------------------------------------------------------
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Local LLM Training",
        "Computer Vision Model Training",
      ],
    },
  ]

  /* -------------------------------------------------------
     Drag‑carousel state & constraints (Framer Motion)
     ------------------------------------------------------- */
  const carouselRef = useRef<HTMLDivElement>(null)
  const [constraints, setConstraints] = useState({ right: 0, left: 0 })

  useEffect(() => {
    const el = carouselRef.current
    if (el) {
      const scrollWidth = el.scrollWidth
      const width = el.offsetWidth
      // If content overflows, allow dragging leftward by the overflow amount.
      setConstraints({ right: 0, left: -(scrollWidth - width) })
    }
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8">Skills & Expertise</h2>

        {/* -----------  Carousel wrapper (overflow hidden) ----------- */}
        <div className="overflow-hidden">
          {/* -----------  Framer Motion draggable container ----------- */}
          <motion.div
            ref={carouselRef}
            className="flex gap-4"
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.1}
            whileTap={{ cursor: "grabbing" }}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="glass-card p-4 border border-white/10 hover:border-white/30 transition-all hover:bg-white/5 min-w-[200px] flex-shrink-0"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>
                <ul className="space-y-1 text-sm">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-white/70 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
