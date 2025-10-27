import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Shield, Zap, FileCheck, Network } from 'lucide-react';

export function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevOps.ai',
    url: 'https://devops.ai',
    logo: 'https://devops.ai/images/logo.png',
    description: 'AlDeci turns scanner noise and SBOM sprawl into risk-based actions and cryptographically signed evidence.',
    founder: {
      '@type': 'Person',
      name: 'Shivakumaar Umasudan'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressCountry: 'Australia'
    }
  };

  return (
    <>
      <SEO
        title="DevOps.ai - Automate Trust. Prove Security."
        description="AlDeci turns scanner noise and SBOM sprawl into risk-based actions and cryptographically signed evidence for enterprise DevSecOps."
        ogImage="/images/og-home.png"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block text-slate-50">Automate Trust.</span>
              <span className="block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Prove Security.
              </span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              AlDeci turns scanner noise and SBOM sprawl into risk-based actions and cryptographically signed evidence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all shadow-lg hover:shadow-teal-500/50"
              >
                Book a Demo
              </Link>
              <Link
                to="/product/aldeci"
                className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
              >
                Request AlDeci Access
              </Link>
            </div>
            <div className="mt-8">
              <Link
                to="/partners/design"
                className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
              >
                Join Design Partner Program →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-slate-400 mb-6">Integrates with your existing tools</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
            <a href="https://azure.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">Azure</a>
            <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">AWS</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">GitHub</a>
            <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">GitLab</a>
            <a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">Kubernetes</a>
            <a href="https://www.terraform.io" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">Terraform</a>
            <a href="https://snyk.io" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">Snyk</a>
            <a href="https://www.wiz.io" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">Wiz</a>
            <a href="https://www.tenable.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-teal-400 transition-colors">Tenable</a>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-50 mb-4">
              Security Intelligence That Actually Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Stop drowning in alerts. Start making risk-based decisions backed by cryptographic evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Network className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Unified Intelligence</h3>
              <p className="text-slate-400 mb-4">
                Correlate SBOMs, SARIF findings, CVE feeds, VEX, CNAPP outputs, and business context into a single decision graph.
              </p>
              <Link to="/product/aldeci#architecture" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">
                Learn more →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Context-Aware Risk</h3>
              <p className="text-slate-400 mb-4">
                Risk scores combine EPSS, KEV, version lag, exposure flags, and data sensitivity—not just CVSS.
              </p>
              <Link to="/product/aldeci" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">
                Learn more →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Evidence-as-Code</h3>
              <p className="text-slate-400 mb-4">
                Every decision produces cryptographically signed bundles with SLSA provenance for SOC 2, ISO 27001, and APRA CPS 234.
              </p>
              <Link to="/product/aldeci#evidence" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">
                Learn more →
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Seamless Integrations</h3>
              <p className="text-slate-400 mb-4">
                Push-based ingestion means minimal connectors. Works with GitHub Actions, GitLab CI, Azure DevOps, and Jenkins.
              </p>
              <Link to="/product/aldeci#integrations" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-6">
            Ready to Transform Your DevSecOps?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join enterprises automating trust and proving security with AlDeci.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Book a Demo
            </Link>
            <Link
              to="/product/aldeci"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
            >
              Explore AlDeci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
