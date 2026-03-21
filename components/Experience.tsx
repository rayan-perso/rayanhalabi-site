const experiences = [
  {
    company: 'Amazon Web Services',
    logo: '🟠',
    role: 'Cloud Engineer',
    period: 'May 2023 — Present',
    location: 'Dublin, Ireland',
    type: 'Full-time',
    highlights: [
      'Security event monitoring using enterprise SIEM tools across AWS customer environments',
      'Led incident response operations — ranked Top 2 performer in Dublin, Top 9 globally in 2023',
      'Coached and mentored junior engineers, raising team performance benchmarks',
      'Cross-functional collaboration on threat hunting and detection engineering',
    ],
    tags: ['SIEM', 'Incident Response', 'Threat Detection', 'Mentorship'],
  },
  {
    company: 'Amazon Web Services',
    logo: '🟠',
    role: 'Cloud Associate',
    period: 'Sep 2022 — Apr 2023',
    location: 'Dublin, Ireland',
    type: 'Full-time',
    highlights: [
      'Infrastructure as Code with Terraform — provisioning and managing cloud resources at scale',
      'AWS networking deep-dives: CloudFront, VPC design, EC2, Lambda serverless architectures',
      'Microsoft Defender XDR and Sentinel deployment and tuning for threat detection',
      'Rapid onboarding into enterprise-scale cloud operations',
    ],
    tags: ['Terraform', 'AWS', 'CloudFront', 'Microsoft Defender', 'Sentinel'],
  },
  {
    company: 'Axians France (Vinci Energie)',
    logo: '⚡',
    role: 'Network & Security Engineer',
    period: 'Sep 2020 — Aug 2022',
    location: 'Paris, France',
    type: 'Full-time',
    highlights: [
      'Configured and managed Fortigate & Palo Alto Next-Generation Firewalls for enterprise clients',
      'Conducted vulnerability assessments and remediation for critical infrastructure',
      'Developed Python automation scripts reducing manual security tasks by 40%+',
      'Designed and implemented network segmentation and VPN architectures',
    ],
    tags: ['Fortigate', 'Palo Alto', 'Python', 'Vulnerability Assessment', 'VPN'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-sm font-mono">02.</span>
          <span className="text-gray-500 text-sm uppercase tracking-widest">Experience</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12">
          Career timeline
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 items-start justify-center pt-1.5">
                  <div className="w-3 h-3 rounded-full bg-accent border-2 border-background ring-4 ring-accent/20 mt-0.5" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-surface border border-border rounded-2xl p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{exp.logo}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                        <p className="text-accent font-medium text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-gray-400 text-sm font-mono">{exp.period}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
