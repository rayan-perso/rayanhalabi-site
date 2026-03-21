const skillCategories = [
  {
    category: 'Cloud',
    icon: '☁️',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
    skills: ['AWS', 'Azure', 'Terraform', 'CloudFormation', 'EC2', 'Lambda', 'CloudFront', 'VPC'],
  },
  {
    category: 'Security',
    icon: '🛡️',
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/20',
    skills: ['SIEM', 'EDR', 'SOAR', 'Microsoft Defender XDR', 'Microsoft Sentinel', 'AWS GuardDuty', 'Threat Hunting', 'Incident Response'],
  },
  {
    category: 'Networking',
    icon: '🌐',
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/20',
    skills: ['TCP/IP', 'Firewalls', 'VPN', 'Cisco', 'Fortigate', 'Palo Alto NGFW', 'DNS', 'BGP'],
  },
  {
    category: 'Frameworks',
    icon: '📋',
    color: 'from-orange-500/20 to-yellow-500/10',
    border: 'border-orange-500/20',
    skills: ['ISO 27001', 'NIST CSF', 'Zero Trust', 'DevSecOps', 'MITRE ATT&CK', 'CIS Controls'],
  },
  {
    category: 'Dev & Automation',
    icon: '⚙️',
    color: 'from-accent/20 to-blue-400/10',
    border: 'border-accent/20',
    skills: ['Python', 'Bash', 'Infrastructure as Code', 'CI/CD', 'Git', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-sm font-mono">03.</span>
          <span className="text-gray-500 text-sm uppercase tracking-widest">Skills</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Technical toolkit
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl">
          Spanning cloud platforms, security tooling, networking, and automation — built through years of real-world enterprise operations.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className={`bg-gradient-to-br ${cat.color} border ${cat.border} rounded-2xl p-6 card-hover`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-300 bg-black/30 border border-white/5 px-2.5 py-1.5 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Proficiency bar card */}
          <div className="bg-surface border border-border rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📊</span>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">Core Proficiency</h3>
            </div>
            <div className="space-y-3">
              {[
                { skill: 'Cloud Security (AWS)', pct: 95 },
                { skill: 'Incident Response', pct: 92 },
                { skill: 'SIEM Operations', pct: 90 },
                { skill: 'Terraform / IaC', pct: 82 },
                { skill: 'Network Security', pct: 88 },
                { skill: 'Python Automation', pct: 75 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">{item.skill}</span>
                    <span className="text-accent font-mono">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
