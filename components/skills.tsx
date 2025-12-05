export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "PostgreSQL", "API Design", "Authentication"],
    },
    {
      title: "Embedded & Hardware",
      skills: ["ESP32", "STM32", "Arduino", "PCB Design", "Motor Control"],
    },
    {
      title: "Systems & DevOps",
      skills: ["Linux", "Docker", "Proxmox", "Nginx", "AWS"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 border border-white/10 hover:border-white/30 transition-all hover:bg-white/5"
            >
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-white/70 flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
