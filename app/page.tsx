import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import NAVICOM from "@/components/navicom"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CompaniesPage from "./companies/page"
export default function Home() {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <NAVICOM />
      <Contact />
      <Footer />
    </main>
  )
}
