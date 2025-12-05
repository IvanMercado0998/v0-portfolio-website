export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title text-black">Let's Work Together</h2>
        <p className="text-xl text-black/70 mb-8 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities in automotive electronics, embedded
          systems, and engineering innovation.
        </p>

        <div className="glass-card p-8 border-2 border-black/20 mb-8 bg-white">
          <p className="text-black/70 mb-6">
            Whether you have a project in mind or just want to chat about engineering challenges, I'd love to hear from
            you.
          </p>
          <a
            href="mailto:ivanbmercado0998@gmail.com"
            className="inline-block px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-black/80 transition-all"
          >
            Send Email
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 border border-black/10 bg-white">
            <h4 className="text-black font-bold mb-2">Email</h4>
            <p className="text-black/60">ivanbmercado0998@gmail.com</p>
          </div>
          <div className="glass-card p-6 border border-black/10 bg-white">
            <h4 className="text-black font-bold mb-2">LinkedIn</h4>
            <p className="text-black/60">linkedin.com/in/ivanmercado</p>
          </div>
          <div className="glass-card p-6 border border-black/10 bg-white">
            <h4 className="text-black font-bold mb-2">GitHub</h4>
            <p className="text-black/60">github.com/ivanmercado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
