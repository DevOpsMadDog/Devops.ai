import { SEO } from '../components/SEO';
import { FileText, Download, BookOpen } from 'lucide-react';

export function Guides() {
  const guides = [
    {
      id: 1,
      title: 'AlDeci Risk Model Deep Dive',
      description: 'Comprehensive technical analysis of AlDeci\'s composite risk scoring system, including EPSS integration, KEV mapping, version lag calculation, and business context weighting. Includes mathematical models, implementation details, and validation methodology.',
      type: 'Whitepaper',
      pages: '28 pages',
      format: 'PDF',
      topics: ['Risk Scoring', 'EPSS', 'KEV', 'Vulnerability Management'],
      pdfFile: 'risk-model-deep-dive-v20251037.pdf'
    },
    {
      id: 2,
      title: 'APRA CPS 234 Automation Pack',
      description: 'Complete implementation guide for automating APRA CPS 234 compliance for Australian financial institutions. Covers information security capability requirements, evidence collection, continuous monitoring, and audit preparation using AlDeci.',
      type: 'Implementation Guide',
      pages: '42 pages',
      format: 'PDF',
      topics: ['APRA CPS 234', 'Compliance', 'Financial Services', 'Australia'],
      pdfFile: 'apra-cps234-automation-pack-v20251037.pdf'
    },
    {
      id: 3,
      title: 'Evidence-as-Code Architecture Guide',
      description: 'Design patterns and implementation strategies for building evidence-as-code workflows in CI/CD pipelines. Covers cryptographic signing, SLSA provenance, retention policies, and integration with compliance frameworks.',
      type: 'Technical Guide',
      pages: '35 pages',
      format: 'PDF',
      topics: ['Evidence-as-Code', 'CI/CD', 'SLSA', 'Cryptography'],
      pdfFile: 'evidence-as-code-architecture-guide-v20251037.pdf'
    },
    {
      id: 4,
      title: 'SBOM Integration Best Practices',
      description: 'Practical guide to generating, managing, and analyzing Software Bill of Materials (SBOM) across multi-cloud environments. Covers CycloneDX and SPDX formats, tooling comparison, and correlation with vulnerability data.',
      type: 'Best Practices',
      pages: '24 pages',
      format: 'PDF',
      topics: ['SBOM', 'Supply Chain Security', 'CycloneDX', 'SPDX'],
      pdfFile: 'sbom-integration-best-practices-v20251037.pdf'
    },
    {
      id: 5,
      title: 'Multi-Scanner Correlation Strategies',
      description: 'How to effectively correlate findings from multiple security scanners (SAST, DAST, SCA, CNAPP) to reduce false positives and improve remediation prioritization. Includes deduplication algorithms and context enrichment techniques.',
      type: 'Technical Guide',
      pages: '31 pages',
      format: 'PDF',
      topics: ['Scanner Integration', 'Deduplication', 'Risk Prioritization'],
      pdfFile: 'multi-scanner-correlation-strategies-v20251037.pdf'
    },
    {
      id: 6,
      title: 'SOC 2 Type II Evidence Automation',
      description: 'Step-by-step guide to automating SOC 2 Type II evidence collection using AlDeci. Covers all trust service criteria, control mapping, continuous evidence generation, and audit preparation workflows.',
      type: 'Compliance Guide',
      pages: '38 pages',
      format: 'PDF',
      topics: ['SOC 2', 'Compliance', 'Audit', 'Evidence Automation'],
      pdfFile: 'soc2-type-ii-evidence-automation-v20251037.pdf'
    },
    {
      id: 7,
      title: 'Enterprise Vulnerability Management: Real-World Examples + Competitive Snapshot',
      description: 'How large enterprises struggle with vulnerability management and how AlDeci solves these challenges. Includes real-world archetypes (Fortune 100 Bank, Global SaaS, Regulated Healthcare), proven outcomes, and competitive analysis vs. Aikido Security and Apiiro.',
      type: 'One-Pager',
      pages: '2 pages',
      format: 'PDF',
      topics: ['Competitive Analysis', 'Enterprise Examples', 'ROI', 'Market Positioning'],
      pdfFile: 'enterprise-vm-competitive-one-pager-v20251037.pdf'
    }
  ];

  return (
    <>
      <SEO
        title="Guides & Whitepapers | DevOps.ai"
        description="In-depth technical guides and whitepapers on AlDeci risk models and compliance automation."
        ogImage="/images/og-guides.png"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              Guides & Whitepapers
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              In-depth technical resources for implementing DevSecOps automation, evidence-as-code, and compliance frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="inline-block px-3 py-1 bg-teal-500 text-slate-950 rounded-full text-sm font-semibold mb-4">
                  Featured Whitepaper
                </div>
                <h2 className="text-4xl font-bold text-slate-50 mb-4">
                  {guides[0].title}
                </h2>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  {guides[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {guides[0].topics.map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 text-slate-400 mb-6">
                  <span>{guides[0].pages}</span>
                  <span>•</span>
                  <span>{guides[0].format}</span>
                </div>
                <a
                  href={`/pdfs/${guides[0].pdfFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-slate-950 rounded-lg font-semibold hover:bg-teal-400 transition-all"
                >
                  <Download size={20} />
                  Download Whitepaper
                </a>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center p-12">
                <FileText className="text-teal-400" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">All Guides & Whitepapers</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guides.slice(1).map((guide) => (
              <div key={guide.id} className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-teal-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 mb-2">
                      {guide.type}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {guide.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {guide.topics.map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-slate-400">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>{guide.pages}</span>
                    <span>•</span>
                    <span>{guide.format}</span>
                  </div>
                  <a
                    href={`/pdfs/${guide.pdfFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-50 rounded-lg font-semibold hover:bg-slate-700 transition-all"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Browse by Topic</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Compliance
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Risk Management
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              SBOM
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Evidence-as-Code
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              CI/CD Integration
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Scanner Integration
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Supply Chain
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Architecture
            </button>
          </div>
        </div>
      </section>

      {/* Request Custom Guide */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-slate-50 mb-6">
              Need a Custom Implementation Guide?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We can create custom guides and implementation packs tailored to your specific compliance frameworks, cloud environments, and tooling.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Book a demo to see AlDeci in action or explore our product documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Book a Demo
            </a>
            <a
              href="/product/aldeci"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
            >
              Explore AlDeci
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
