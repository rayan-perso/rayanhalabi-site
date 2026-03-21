const certifications = [
  {
    name: 'Cisco CyberOps Associate',
    short: 'CBROPS',
    issuer: 'Cisco',
    date: 'Nov 2024',
    icon: '🔵',
    color: 'from-blue-600/20 to-blue-800/10',
    border: 'border-blue-600/30',
    badge: '🛡️',
  },
  {
    name: 'AWS CloudFront Subject Matter Expert',
    short: 'CloudFront SME',
    issuer: 'Amazon Web Services',
    date: 'Mar 2024',
    icon: '🟠',
    color: 'from-orange-600/20 to-orange-800/10',
    border: 'border-orange-500/30',
    badge: '⚡',
  },
  {
    name: 'AWS Solutions Architect Associate',
    short: 'SAA-C03',
    issuer: 'Amazon Web Services',
    date: 'Apr 2023',
    icon: '🟠',
    color: 'from-orange-500/20 to-yellow-500/10',
    border: 'border-orange-400/30',
    badge: '☁️',
  },
  {
    name: 'Cisco CCNA',
    short: 'CCNA',
    issuer: 'Cisco',
    date: 'Dec 2021',
    icon: '🔵',
    color: 'from-indigo-600/20 to-indigo-800/10',
    border: 'border-indigo-500/30',
    badge: '🌐',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-sm font-mono">04.</span>
          <span className="text-gray-500 text-sm uppercase tracking-widest">Certifications</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Credentials
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl">
          Industry certifications validating expertise across cloud architecture, cybersecurity operations, and networking.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.short}
              className={`relative bg-gradient-to-br ${cert.color} border ${cert.border} rounded-2xl p-6 card-hover flex flex-col`}
            >
              {/* Badge emoji */}
              <div className="text-3xl mb-4">{cert.badge}</div>

              {/* Cert info */}
              <div className="flex-1">
                <div className="inline-block text-xs font-bold bg-black/30 text-accent px-2 py-0.5 rounded mb-2 font-mono">
                  {cert.short}
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.name}</h3>
                <p className="text-gray-500 text-xs">{cert.issuer}</p>
              </div>

              {/* Date */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-gray-600 text-xs">Issued</span>
                <span className="text-gray-300 text-xs font-mono">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Education section below */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-accent">🎓</span> Education
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                degree: 'MSc Networks & Security',
                school: 'ESIEE Paris',
                period: '2020 – 2022',
                note: 'Ranked 6th in class',
              },
              {
                degree: 'Engineer Cycle',
                school: 'ESIEE Paris',
                period: '2019 – 2020',
                note: 'Engineering program',
              },
              {
                degree: 'Networks & Telecommunications',
                school: 'IUT de Rouen',
                period: '2017 – 2019',
                note: 'Ranked 6th in class',
              },
            ].map((edu) => (
              <div key={edu.degree} className="bg-surface border border-border rounded-xl p-5 card-hover">
                <p className="text-white font-semibold text-sm mb-1">{edu.degree}</p>
                <p className="text-accent text-xs font-medium mb-2">{edu.school}</p>
                <p className="text-gray-600 text-xs">{edu.period}</p>
                <p className="text-gray-500 text-xs mt-1 italic">{edu.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
