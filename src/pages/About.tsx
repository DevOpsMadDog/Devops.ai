import { SEO } from '../components/SEO';
import { MapPin, Award, Code, Shield } from 'lucide-react';

export function About() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevOps.ai',
    founder: {
      '@type': 'Person',
      name: 'Shivakumaar Umasudan',
      jobTitle: 'Founder & Director'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'Australia'
    }
  };

  return (
    <>
      <SEO
        title="About DevOps.ai | Founded by Shivakumaar Umasudan"
        description="DevOps.ai is founded and led by Shivakumaar Umasudan, a senior DevSecOps architect based in Sydney, Australia."
        ogImage="/images/og-about.png"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              About DevOps.ai
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Building AI-driven DevSecOps and reliability platforms for enterprise security automation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-50 mb-8">Our Mission</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              DevOps.ai is building the next generation of DevSecOps intelligence platforms that transform security noise into actionable insights and audit-ready evidence. We believe that security automation should be transparent, explainable, and built on open standards.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our flagship product, AlDeci, unifies SBOMs, scanner outputs, threat intelligence, and compliance frameworks into risk-adjusted decisions backed by cryptographically signed evidence. We're starting with DevSecOps automation and expanding into data quality for multi-agent LLM systems.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-slate-950">SU</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-50">Shivakumaar Umasudan</h2>
                  <p className="text-xl text-slate-400">Founder & Sole Director</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  DevOps.ai is founded and led by <strong className="text-slate-50">Shivakumaar Umasudan</strong>, a senior DevSecOps architect with extensive enterprise experience across AWS and Azure, platform engineering, vulnerability management, and compliance automation. He leads product, architecture, and customer outcomes as the sole director and employee.
                </p>
                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <MapPin size={20} className="text-teal-400" />
                  <span>Sydney, Australia</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-teal-400 mb-6">Expertise & Background</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                        <Code className="text-teal-400" size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-50">Platform Engineering</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• Infrastructure-as-Code (Terraform, Bicep)</li>
                      <li>• CI/CD pipeline design and optimization</li>
                      <li>• Multi-cloud architecture (AWS, Azure)</li>
                      <li>• Container orchestration (Kubernetes)</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Shield className="text-blue-400" size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-50">Security & Compliance</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• SAST, DAST, SCA, CNAPP integration</li>
                      <li>• Vulnerability management at scale</li>
                      <li>• Threat modeling and risk assessment</li>
                      <li>• Compliance automation (SOC 2, ISO 27001)</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                        <Award className="text-teal-400" size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-50">DevSecOps Architecture</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• Secure SDLC design and implementation</li>
                      <li>• Security automation and orchestration</li>
                      <li>• Golden path engineering</li>
                      <li>• Evidence-as-code frameworks</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Code className="text-blue-400" size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-50">Compliance Frameworks</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• SOC 2 Type II automation</li>
                      <li>• ISO 27001 implementation</li>
                      <li>• APRA CPS 234 (Australian financial)</li>
                      <li>• Essential Eight (ACSC)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Our Principles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-teal-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Transparency First</h3>
              <p className="text-slate-400">
                Every decision is explainable. Every verdict includes rationale. No black-box AI making security calls without context.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Open Standards</h3>
              <p className="text-slate-400">
                Built on CycloneDX, SPDX, SARIF, SLSA, and other open formats. No vendor lock-in. Your data, your control.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-teal-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Enterprise Ready</h3>
              <p className="text-slate-400">
                On-premises deployment, air-gap support, 7-year retention, cryptographic signing. Built for regulated industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Product Roadmap</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-950 border border-teal-500 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-teal-500 text-slate-950 rounded-full text-sm font-semibold">
                  Now
                </div>
                <h3 className="text-2xl font-bold text-slate-50">AlDeci</h3>
              </div>
              <p className="text-slate-300">
                Risk-based security intelligence platform unifying SBOMs, scanner outputs, threat intel, and compliance into cryptographically signed evidence bundles.
              </p>
            </div>

            <div className="bg-slate-950 border border-blue-500 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-blue-500 text-slate-950 rounded-full text-sm font-semibold">
                  Next
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Data Quality for Multi-Agent LLMs</h3>
              </div>
              <p className="text-slate-300">
                Ensure reliable agent collaboration by validating data quality, provenance, and grounding across agent workflows. Coming 2026.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm font-semibold">
                  Future
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Platform Expansion</h3>
              </div>
              <p className="text-slate-300">
                Additional products leveraging the DevOps.ai platform for reliability, observability, and AI governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join our design partner program or book a demo to see AlDeci in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="/partners/design"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
            >
              Join Design Partners
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
