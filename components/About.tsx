export default function About() {
  const traits = [
    {
      icon: '☁️',
      title: 'Cloud Security',
      desc: 'Deep expertise in AWS security architecture, IAM, GuardDuty, and cloud-native protection at scale.',
    },
    {
      icon: '🛡️',
      title: 'Incident Response',
      desc: 'Led high-severity incident response operations. Ranked top 2 in Dublin, top 9 globally at AWS in 2023.',
    },
    {
      icon: '🤖',
      title: 'Building with AI',
      desc: 'Founding Velvox to ship AI-powered digital products. Exploring autonomous systems and agentic workflows.',
    },
    {
      icon: '⚡',
      title: 'DevSecOps',
      desc: 'Terraform IaC, CI/CD security, infrastructure automation — shifting security left in every pipeline.',
    },
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-sm font-mono">01.</span>
          <span className="text-gray-500 text-sm uppercase tracking-widest">About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Cloud defender.
              <br />
              <span className="accent-gradient-text">AI builder.</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                I'm a Cloud & Cybersecurity Engineer at <span className="text-white font-medium">Amazon Web Services</span> in Dublin, 
                where I work on security event monitoring, SIEM operations, and incident response for AWS customers worldwide.
              </p>
              <p>
                With 4+ years in the field — from firewalls at Vinci Energie to cloud-native security at AWS — I specialize 
                in bridging deep technical security with real operational impact. I've been recognized as a <span className="text-white font-medium">top performer 
                globally</span> for my work in threat detection and incident leadership.
              </p>
              <p>
                Beyond my day role, I'm building <span className="text-accent font-medium">Velvox</span>, an AI-powered product 
                studio focused on automation tools and digital products. I believe the intersection of cybersecurity 
                and AI is where the most interesting problems live — and I'm building at that edge.
              </p>
              <p>
                MSc in Networks & Security from <span className="text-white font-medium">ESIEE Paris</span>, 
                graduated ranked 6th in class.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8 flex gap-4 flex-wrap">
              {[
                { lang: 'French', level: 'Native' },
                { lang: 'English', level: 'Fluent' },
                { lang: 'Spanish', level: 'B1' },
              ].map((l) => (
                <div key={l.lang} className="flex items-center gap-2 bg-surface border border-border rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">{l.lang}</span>
                  <span className="text-gray-500 text-xs">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait) => (
              <div
                key={trait.title}
                className="bg-surface border border-border rounded-2xl p-5 card-hover"
              >
                <div className="text-2xl mb-3">{trait.icon}</div>
                <h3 className="text-white font-semibold mb-2">{trait.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
