export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">RH<span className="text-accent">.</span></span>
          <span className="text-gray-600 text-sm">
            © {currentYear} Rayan Halabi. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/rayan-halabi5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://velvox.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition-colors text-sm"
          >
            Velvox
          </a>
          <span className="text-gray-800 text-sm">
            Built with Next.js + Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
