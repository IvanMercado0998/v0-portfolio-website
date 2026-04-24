// components/navicom.tsx
// DO NOT CHANGE LOGIC CALLS
// The logo now slides in from far‑left (outside the viewport), grows a little
// and then stays positioned in the left column as the user scrolls –
// just like a carousel effect.

"use client"

import { useEffect, useRef, useState } from "react"

export default function NAVICOM() {
  /* -------------------------------------------------
     Refs & state
     ------------------------------------------------- */
  const sectionRef = useRef<HTMLDivElement>(null) // the whole component
  const [progress, setProgress] = useState(0) // 0 = off‑screen, 1 = settled

  /* -------------------------------------------------
     Scroll‑based animation
     ------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return

      // Position where the animation should start (300 px before the
      // section reaches the top of the viewport) and where it ends
      const sectionTop = sectionRef.current.offsetTop
      const start = sectionTop - 300 // start 300 px before the section
      const end = sectionTop // end when the top of the section hits the top

      const p = Math.min(
        Math.max((window.scrollY - start) / (end - start), 0),
        1
      ) // clamp 0‑1
      setProgress(p)
    }

    // Listen to scroll events
    window.addEventListener("scroll", onScroll, { passive: true })
    // Initialise on mount
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Transform values derived from progress
  const translateX = -100 * (1 - progress) // -100% → 0%
  const scale = 0.5 + 1.0 * progress // 0.5 → 2.3
  const opacity = 0.75 // keep the logo faint

  return (
    <section
      id="navicom"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8">NAVICOM Initiative</h2>

        {/* -------------------------------------------------
            Logo – positioned absolutely, animated via inline style
            ------------------------------------------------- */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/Navicom.png"
            alt="NAVICOM logo"
            className="absolute top-1/4 left-0 w-96 h-auto opacity-999"
            style={{
              opacity,
              transform: `translateX(${translateX}%) scale(${scale})`,
            }}
          />
        </div>

        {/* -------------------------------------------------
            Main layout – two‑column grid
            ------------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
          {/* -------------------- LEFT COLUMN -------------------- */}
          <div className="flex flex-col items-start relative">
            {/* Content – sits above the animated logo */}
            <div className="relative z-10">
              {/* Intro paragraph */}
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                NAVICOM is a forward‑thinking initiative dedicated to creating
                innovative embedded‑system solutions that redefine how we
                interact with vehicles and technology. By blending precision
                engineering with modern software practices, we deliver
                automotive platforms that are reliable, scalable, and future‑ready.
              </p>

              {/* Expanded description */}
              <p className="text-white/60 leading-relaxed mb-8">
                Our focus on embedded hardware, real‑time control, and
                AI‑enhanced infotainment lets us push the boundaries of what
                automotive systems can do—while keeping safety, performance,
                and user experience at the core of every project.
              </p>

              {/* Core values – glass‑card grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-2">Engineering</h4>
                  <p className="text-white/60 text-sm">
                    Precision embedded systems
                  </p>
                </div>

                <div className="glass-card p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-2">Innovation</h4>
                  <p className="text-white/60 text-sm">
                    Pushing automotive boundaries
                  </p>
                </div>

                <div className="glass-card p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-2">Design</h4>
                  <p className="text-white/60 text-sm">
                    Elegant user interfaces
                  </p>
                </div>

                <div className="glass-card p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-2">Impact</h4>
                  <p className="text-white/60 text-sm">
                    Creating lasting value
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------- RIGHT COLUMN -------------------- */}
          <div className="glass-card p-8 border-2 border-white/20">
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Our Approach
                </h4>
                <p className="text-white/60">
                  We analyze, design, and build with precision and care,
                  ensuring every automotive system aligns with performance and
                  user goals. Our workflow blends hardware prototyping,
                  firmware development, and UI/UX refinement in a single,
                  seamless pipeline.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Technology Stack
                </h4>
                <p className="text-white/60">
                  Modern embedded platforms (ESP32, STM32, Jetson Nano),
                  automotive communication protocols, real‑time operating
                  systems, and cloud‑enabled services that enable scalable,
                  reliable deployments.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Philosophy
                </h4>
                <p className="text-white/60">
                  Precision engineering, continuous innovation, and
                  uncompromising quality are the pillars that drive every
                  NAVICOM project—from concept to production.
                </p>
              </div>

              {/* *** NEW SECTION: Embedded Expertise *** */}
              <div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Embedded Systems Expertise
                </h4>
                <p className="text-white/60">
                  Our team of experts specializes in embedded systems design
                  and development, bringing together deep knowledge of
                  hardware‑software integration, real‑time processing, and
                  automotive electronics to deliver cutting‑edge solutions
                  that push the boundaries of what's possible in the connected
                  vehicle ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
