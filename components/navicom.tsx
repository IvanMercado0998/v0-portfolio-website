export default function NAVICOM() {
  return (
    <section id="navicom" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8">NAVICOM Initiative</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              NAVICOM is an initiative focused on creating innovative digital solutions that transform how we interact
              with vehicles and technology.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              We combine strategic engineering with cutting-edge development to deliver automotive systems that drive
              real innovation and exceptional user experiences.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 border border-white/10">
                <h4 className="text-white font-bold mb-2">Engineering</h4>
                <p className="text-white/60 text-sm">Precision embedded systems</p>
              </div>
              <div className="glass-card p-6 border border-white/10">
                <h4 className="text-white font-bold mb-2">Innovation</h4>
                <p className="text-white/60 text-sm">Pushing automotive boundaries</p>
              </div>
              <div className="glass-card p-6 border border-white/10">
                <h4 className="text-white font-bold mb-2">Design</h4>
                <p className="text-white/60 text-sm">Elegant user interfaces</p>
              </div>
              <div className="glass-card p-6 border border-white/10">
                <h4 className="text-white font-bold mb-2">Impact</h4>
                <p className="text-white/60 text-sm">Creating lasting value</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-8 border-2 border-white/20">
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Our Approach</h4>
                <p className="text-white/60">
                  We analyze, design, and build with precision and care, ensuring every automotive system aligns with
                  performance and user goals.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Technology Stack</h4>
                <p className="text-white/60">
                  Modern embedded platforms, automotive protocols, and frameworks that enable scalable, reliable
                  systems.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Philosophy</h4>
                <p className="text-white/60">
                  We believe in precision engineering, continuous innovation, and delivering excellence consistently
                  across every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
