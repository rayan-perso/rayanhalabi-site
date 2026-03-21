import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-4">
              <span className="gradient-text">Rayan</span>{' '}
              <span className="text-white">Halabi</span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2">
              Cloud & Cybersecurity Engineer
            </p>
            <p className="text-base sm:text-lg text-accent font-medium mb-6">
              @ Amazon Web Services · Dublin
            </p>

            {/* Bio */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Securing cloud infrastructure at scale. Top performer in incident response.
              Building the next generation of AI-powered products through{' '}
              <a href="https://velvox.io" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-400 transition-colors">
                Velvox
              </a>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/rayan-halabi5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://velvox.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Velvox.io
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
              >
                Get in touch →
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Years Experience</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-white">Top 2</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Dublin 2023</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-white">Top 9</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Globally 2023</p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110 animate-[glowPulse_4s_ease-in-out_infinite]" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-white/10 blue-glow">
              <Image
                src="/rayan.jpg"
                alt="Rayan Halabi"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-surface border border-border rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
              <span className="text-lg">🔐</span>
              <div>
                <p className="text-xs font-semibold text-white">AWS Engineer</p>
                <p className="text-xs text-gray-500">Dublin, Ireland</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <p className="text-xs uppercase tracking-widest">Scroll</p>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
