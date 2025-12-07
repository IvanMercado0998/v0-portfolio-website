"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // REALISTIC FLASHLIGHT EFFECT
    const drawFlashlight = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Base dark background
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x, y } = mouseRef.current

      // Main bright radius
      const coreRadius = 130
      const glowRadius = 280
      const vignetteRadius = 900

      // ---- 1. Bright Core (strong white hotspot) ----
      const core = ctx.createRadialGradient(x, y, 0, x, y, coreRadius)
      core.addColorStop(0, "rgba(255,255,255,0.75)")
      core.addColorStop(1, "rgba(255,255,255,0)")
      ctx.fillStyle = core
      ctx.beginPath()
      ctx.arc(x, y, coreRadius, 0, Math.PI * 2)
      ctx.fill()

      // ---- 2. Soft Glow Halo ----
      const glow = ctx.createRadialGradient(x, y, coreRadius, x, y, glowRadius)
      glow.addColorStop(0, "rgba(255,255,255,0.18)")
      glow.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(x, y, glowRadius, 0, Math.PI * 2)
      ctx.fill()

      // ---- 3. Fog + Bloom Layer (smooth atmospheric look) ----
      ctx.globalAlpha = 0.12
      ctx.beginPath()
      ctx.arc(x, y, glowRadius * 1.4, 0, Math.PI * 2)
      ctx.fillStyle = "white"
      ctx.fill()
      ctx.globalAlpha = 1

      // ---- 4. Grain Noise (barely visible realism) ----
      const noiseIntensity = 35 // lower = softer
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data

      for (let i = 0; i < pixels.length; i += 4) {
        const noise = (Math.random() - 0.5) * noiseIntensity
        pixels[i] += noise
        pixels[i + 1] += noise
        pixels[i + 2] += noise
      }
      ctx.putImageData(imageData, 0, 0)

      // ---- 5. Vignette (cinematic darkness on edges) ----
      const vignette = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        vignetteRadius
      )
      vignette.addColorStop(0, "rgba(0,0,0,0)")
      vignette.addColorStop(1, "rgba(0,0,0,0.7)")

      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Animation loop
    const animate = () => {
      drawFlashlight()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="about" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40 pointer-events-none"
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

          <div className="h-96 rounded-lg border border-white/20 overflow-hidden bg-white/5 backdrop-blur-sm hover:border-white/40 transition-all flex items-center justify-center">
            <Image
              src="/ivanmercado.jpg"
              alt="Ivan Mercado Portrait"
              fill
              className="object-cover"
              style={{ objectPosition: "center 60%", transform: "scale(1.2)" }}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
