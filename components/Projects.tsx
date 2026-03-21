export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-sm font-mono">05.</span>
          <span className="text-gray-500 text-sm uppercase tracking-widest">Projects</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Building things
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl">
          Beyond the 9-to-5 — shipping AI products and exploring what autonomous systems can build.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Velvox — hero card */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-accent/15 via-surface to-surface border border-accent/30 rounded-2xl p-8 overflow-hidden card-hover group">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">⚡</span>
                    <div className="h-px w-8 bg-accent/50" />
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded">Active</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-white">Velvox</h3>
                  <p className="text-accent font-medium mt-1">velvox.io</p>
                </div>
                <a
                  href="https://velvox.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-accent/25 flex-shrink-0 self-start"
                >
                  Visit site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-2xl">
                AI-powered digital tools and automation products studio. Building the next generation 
                of intelligent workflows — from autonomous income streams to agentic systems that work 
                while you sleep.
              </p>

              <div className="flex flex-wrap gap-2">
                {['AI Products', 'Automation', 'Agentic Systems', 'Digital Tools', 'SaaS'].map((tag) => (
                  <span key={tag} className="text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI Entrepreneurship card */}
          <div className="bg-surface border border-border rounded-2xl p-6 card-hover">
            <div className="text-2xl mb-4">🤖</div>
            <h3 className="text-white font-bold text-lg mb-2">AI Entrepreneurship</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Exploring autonomous income streams using AI agents. Testing and iterating on 
              agentic workflows that generate value with minimal human intervention.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AI Agents', 'Automation', 'Passive Income'].map((tag) => (
                <span key={tag} className="text-xs text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Security Research card */}
          <div className="bg-surface border border-border rounded-2xl p-6 card-hover">
            <div className="text-2xl mb-4">🔐</div>
            <h3 className="text-white font-bold text-lg mb-2">Cloud Security Research</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Continuous research into emerging cloud threats, detection engineering, 
              and AWS security patterns. Applying findings directly to production environments.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AWS Security', 'Threat Intel', 'Detection Engineering'].map((tag) => (
                <span key={tag} className="text-xs text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
