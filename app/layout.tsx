import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ivan Mercado - Electronics Engineer & Automotive Systems Specialist",
  description:
    "Precision engineering meets elegant design. Exploring the future of automotive electronics and embedded systems.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Navicom.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`font-sans antialiased bg-black text-white relative overflow-hidden`}
      >
        
        

        {/* EVERYTHING ELSE ABOVE IT */}
        <div className="relative z-[5]">
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  )
}
