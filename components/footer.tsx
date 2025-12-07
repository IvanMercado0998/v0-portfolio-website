export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a href="https://github.com/IvanMercado0998" className="hover:text-white transition-colors">  
                  GitHub
                </a>
              </li>
              <li>
                <a href="www.linkedin.com/in/ivan-mercado-" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ivan.mercado.7127" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Projects</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a href="/companies" className="hover:text-white transition-colors">
                  Companies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#navicom" className="hover:text-white transition-colors">
                  NAVICOM
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} Ivan Mercado. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
