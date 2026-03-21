export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-sm font-mono">06.</span>
          <span className="text-gray-500 text-sm uppercase tracking-widest">Contact</span>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Let's connect
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            Whether it's a collaboration opportunity, a security question, or just a chat about 
            AI and what's coming next — my inbox is open.
          </p>

          {/* Primary CTA */}
          <a
            href="https://www.linkedin.com/in/rayan-halabi5/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:shadow-xl hover:shadow-accent/25 active:scale-95 mb-6"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-gray-600 text-sm">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="bg-surface border border-border rounded-xl p-5">
              <div className="text-xl mb-2">📍</div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Location</p>
              <p className="text-white text-sm font-medium">Dublin, Ireland</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-5">
              <div className="text-xl mb-2">🚀</div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Open to</p>
              <p className="text-white text-sm font-medium">Collaborations & opportunities</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-5">
              <div className="text-xl mb-2">⏱️</div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Response</p>
              <p className="text-white text-sm font-medium">Within 24–48h</p>
            </div>
          </div>

          {/* Velvox mention */}
          <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-xl">
            <p className="text-gray-400 text-sm">
              Interested in AI products or automation?{' '}
              <a
                href="https://velvox.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-blue-400 font-medium transition-colors"
              >
                Check out Velvox →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
