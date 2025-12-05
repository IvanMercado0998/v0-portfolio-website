"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    const drawRoboticArm = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 2

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Base
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
      ctx.stroke()

      // Arm segments with rotation
      const angle1 = Math.sin(time * 0.001) * 0.5
      const angle2 = Math.cos(time * 0.001) * 0.3

      // Segment 1
      const x1 = centerX + Math.cos(angle1) * 100
      const y1 = centerY + Math.sin(angle1) * 100

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x1, y1)
      ctx.stroke()

      // Segment 2
      const x2 = x1 + Math.cos(angle1 + angle2) * 80
      const y2 = y1 + Math.sin(angle1 + angle2) * 80

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()

      // End effector
      ctx.beginPath()
      ctx.arc(x2, y2, 10, 0, Math.PI * 2)
      ctx.stroke()
    }

    let animationId: number
    const animate = (time: number) => {
      drawRoboticArm(time)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="about" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              Ivan
              <span className="block">Mercado</span>
            </h1>
            <p className="text-xl text-white/70 mb-6 font-light">
              Electronics Engineer • Embedded Systems • Automotive Innovation
            </p>
            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
              Precision engineering meets elegant design. I architect automotive systems, embedded platforms, and
              digital experiences where technical excellence and user-centered design converge. From motor control to
              infotainment—built for precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all hover:scale-105 text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/30 text-white hover:border-white/60 font-bold rounded-lg transition-all hover:bg-white/5 text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="h-96 rounded-lg border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm hover:border-white/40 transition-all">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/30 to-white/10 mx-auto mb-4"></div>
              <p className="text-white/40">Portrait coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
