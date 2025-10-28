import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Download, Shield, Database, Zap, Lock, CheckCircle } from 'lucide-react';

function AlDeciArchitectureDiagram() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="600" fill="#0f172a" />
      
      {/* Title */}
      <text x="400" y="30" fill="#14b8a6" fontSize="24" fontWeight="bold" textAnchor="middle">
        AlDeci Platform Architecture
      </text>
      
      {/* Layer 1: Ingestion */}
      <rect x="50" y="80" width="700" height="80" fill="#1e293b" stroke="#334155" strokeWidth="2" rx="8" />
      <text x="400" y="110" fill="#f1f5f9" fontSize="18" fontWeight="bold" textAnchor="middle">
        Ingestion Layer
      </text>
      <text x="400" y="135" fill="#94a3b8" fontSize="14" textAnchor="middle">
        Push-based: SBOM • SARIF • CVE • VEX • CNAPP • Business Context
      </text>
      
      {/* Arrow */}
      <path d="M 400 160 L 400 190" stroke="#14b8a6" strokeWidth="3" markerEnd="url(#arrowhead)" />
      
      {/* Layer 2: Normalization */}
      <rect x="50" y="200" width="700" height="80" fill="#1e293b" stroke="#334155" strokeWidth="2" rx="8" />
      <text x="400" y="230" fill="#f1f5f9" fontSize="18" fontWeight="bold" textAnchor="middle">
        Normalization & Parsing
      </text>
      <text x="400" y="255" fill="#94a3b8" fontSize="14" textAnchor="middle">
        Multi-format support • Canonical models • Schema validation
      </text>
      
      {/* Arrow */}
      <path d="M 400 280 L 400 310" stroke="#14b8a6" strokeWidth="3" markerEnd="url(#arrowhead)" />
      
      {/* Layer 3: Correlation Graph */}
      <rect x="50" y="320" width="700" height="80" fill="#1e293b" stroke="#334155" strokeWidth="2" rx="8" />
      <text x="400" y="350" fill="#f1f5f9" fontSize="18" fontWeight="bold" textAnchor="middle">
        Correlation Graph
      </text>
      <text x="400" y="375" fill="#94a3b8" fontSize="14" textAnchor="middle">
        Design ↔ SBOM ↔ Findings ↔ CVEs ↔ Controls
      </text>
      
      {/* Arrow */}
      <path d="M 400 400 L 400 430" stroke="#14b8a6" strokeWidth="3" markerEnd="url(#arrowhead)" />
      
      {/* Layer 4: Decision & Risk Engine */}
      <rect x="50" y="440" width="700" height="80" fill="#1e293b" stroke="#334155" strokeWidth="2" rx="8" />
      <text x="400" y="470" fill="#f1f5f9" fontSize="18" fontWeight="bold" textAnchor="middle">
        Decision & Risk Engine
      </text>
      <text x="400" y="495" fill="#94a3b8" fontSize="14" textAnchor="middle">
        Vector patterns • Multi-LLM consensus • OPA policies • SBOM analysis
      </text>
      
      {/* Arrow */}
      <path d="M 400 520 L 400 550" stroke="#14b8a6" strokeWidth="3" markerEnd="url(#arrowhead)" />
      
      {/* Layer 5: Evidence Engine */}
      <rect x="50" y="560" width="340" height="30" fill="#14b8a6" stroke="#0d9488" strokeWidth="2" rx="4" />
      <text x="220" y="582" fill="#0f172a" fontSize="14" fontWeight="bold" textAnchor="middle">
        Evidence Engine (Signed Bundles)
      </text>
      
      {/* Layer 5: Publishing */}
      <rect x="410" y="560" width="340" height="30" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" rx="4" />
      <text x="580" y="582" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">
        Publishing (Jira • Slack • API)
      </text>
      
      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#14b8a6" />
        </marker>
      </defs>
    </svg>
  );
}

function DecisionFlowDiagram() {
  return (
    <svg viewBox="0 0 1400 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="1400" height="500" fill="#0f172a" />
      
      {/* Title */}
      <text x="700" y="40" fill="#14b8a6" fontSize="28" fontWeight="bold" textAnchor="middle">
        6-Step Decision Flow
      </text>
      
      {/* Step 1: Enrichment */}
      <rect x="50" y="120" width="180" height="100" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" rx="8" />
      <text x="140" y="145" fill="#14b8a6" fontSize="16" fontWeight="bold" textAnchor="middle">
        1. Enrichment
      </text>
      <text x="140" y="170" fill="#f1f5f9" fontSize="13" textAnchor="middle">
        EPSS • KEV • CVSS
      </text>
      <text x="140" y="190" fill="#94a3b8" fontSize="12" textAnchor="middle">
        CWE • ExploitDB
      </text>
      <text x="140" y="208" fill="#f59e0b" fontSize="10" textAnchor="middle">
        (ExploitDB: Coming soon)
      </text>
      
      {/* Arrow 1→2 */}
      <path d="M 230 170 L 270 170" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Step 2: Forecasting */}
      <rect x="270" y="120" width="180" height="100" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" rx="8" />
      <text x="360" y="145" fill="#8b5cf6" fontSize="16" fontWeight="bold" textAnchor="middle">
        2. Forecasting
      </text>
      <text x="360" y="170" fill="#f1f5f9" fontSize="13" textAnchor="middle">
        Markov Chain
      </text>
      <text x="360" y="190" fill="#94a3b8" fontSize="12" textAnchor="middle">
        Bayesian Analytics
      </text>
      
      {/* Arrow 2→3 */}
      <path d="M 450 170 L 490 170" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Step 3: Threat Modeling */}
      <rect x="490" y="120" width="180" height="100" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="8" />
      <text x="580" y="145" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">
        3. Threat Modeling
      </text>
      <text x="580" y="170" fill="#f1f5f9" fontSize="13" textAnchor="middle">
        CVE → Architecture
      </text>
      <text x="580" y="190" fill="#94a3b8" fontSize="12" textAnchor="middle">
        Threat Tree Match
      </text>
      <text x="580" y="208" fill="#f59e0b" fontSize="10" textAnchor="middle">
        (Threat Tree: Beta)
      </text>
      
      {/* Arrow 3→4 */}
      <path d="M 670 170 L 710 170" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Step 4: Compliance Mapping */}
      <rect x="710" y="120" width="180" height="100" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <text x="800" y="145" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="middle">
        4. Compliance
      </text>
      <text x="800" y="170" fill="#f1f5f9" fontSize="13" textAnchor="middle">
        Org-specific Controls
      </text>
      <text x="800" y="190" fill="#94a3b8" fontSize="12" textAnchor="middle">
        SOC2 • ISO • CPS234
      </text>
      
      {/* Arrow 4→5 */}
      <path d="M 890 170 L 930 170" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Step 5: LLM Explanation */}
      <rect x="930" y="120" width="180" height="100" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="8" />
      <text x="1020" y="145" fill="#10b981" fontSize="16" fontWeight="bold" textAnchor="middle">
        5. LLM Explanation
      </text>
      <text x="1020" y="170" fill="#f1f5f9" fontSize="13" textAnchor="middle">
        Natural Language
      </text>
      <text x="1020" y="190" fill="#94a3b8" fontSize="12" textAnchor="middle">
        Math-backed + Guard
      </text>
      
      {/* Arrow 5→6 */}
      <path d="M 1110 170 L 1150 170" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Step 6: Final Verdict */}
      <rect x="1150" y="120" width="180" height="100" fill="#14b8a6" stroke="#0d9488" strokeWidth="2" rx="8" />
      <text x="1240" y="145" fill="#0f172a" fontSize="16" fontWeight="bold" textAnchor="middle">
        6. Final Verdict
      </text>
      <text x="1240" y="170" fill="#0f172a" fontSize="13" textAnchor="middle">
        Exploitable
      </text>
      <text x="1240" y="190" fill="#0f172a" fontSize="12" textAnchor="middle">
        Not Exploitable
      </text>
      <text x="1240" y="208" fill="#0f172a" fontSize="12" textAnchor="middle">
        Needs Review
      </text>
      
      {/* MITRE Dual Role Legend */}
      <rect x="50" y="280" width="650" height="180" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="8" opacity="0.9" />
      <text x="375" y="310" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">
        MITRE ATT&CK: Dual Role
      </text>
      
      {/* Design-time baseline */}
      <rect x="70" y="330" width="290" height="110" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" rx="6" />
      <text x="215" y="355" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
        Design-Time Baseline
      </text>
      <text x="215" y="378" fill="#f1f5f9" fontSize="11" textAnchor="middle">
        Architecture → Threat Model
      </text>
      <text x="215" y="396" fill="#94a3b8" fontSize="10" textAnchor="middle">
        Defines applicable techniques per
      </text>
      <text x="215" y="412" fill="#94a3b8" fontSize="10" textAnchor="middle">
        component; feeds Step 3 & 4 policies
      </text>
      <text x="215" y="430" fill="#f59e0b" fontSize="9" textAnchor="middle">
        (Beta)
      </text>
      
      {/* Runtime evidence */}
      <rect x="380" y="330" width="290" height="110" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" rx="6" />
      <text x="525" y="355" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
        Runtime Evidence
      </text>
      <text x="525" y="378" fill="#f1f5f9" fontSize="11" textAnchor="middle">
        LLM identifies techniques
      </text>
      <text x="525" y="396" fill="#94a3b8" fontSize="10" textAnchor="middle">
        Included in evidence bundles for
      </text>
      <text x="525" y="412" fill="#94a3b8" fontSize="10" textAnchor="middle">
        threat context & audit transparency
      </text>
      <text x="525" y="430" fill="#10b981" fontSize="9" textAnchor="middle">
        (Available)
      </text>
      
      {/* Feature Status Legend */}
      <rect x="750" y="280" width="600" height="180" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" rx="8" opacity="0.9" />
      <text x="1050" y="310" fill="#94a3b8" fontSize="16" fontWeight="bold" textAnchor="middle">
        Feature Status
      </text>
      
      <circle cx="780" cy="345" r="6" fill="#10b981" />
      <text x="800" y="350" fill="#f1f5f9" fontSize="12">
        Available: EPSS, KEV, CVSS, CWE, Bayesian, Markov, Compliance, LLM
      </text>
      
      <circle cx="780" cy="380" r="6" fill="#f59e0b" />
      <text x="800" y="385" fill="#f1f5f9" fontSize="12">
        Beta: Threat tree matching, Design-time MITRE baseline
      </text>
      
      <circle cx="780" cy="415" r="6" fill="#94a3b8" />
      <text x="800" y="420" fill="#f1f5f9" fontSize="12">
        Coming soon: ExploitDB presence & PoC detection
      </text>
      
      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#14b8a6" />
        </marker>
      </defs>
    </svg>
  );
}

export function ProductAlDeci() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'AlDeci',
    description: 'AlDeci unifies SBOMs, scanner outputs, threat intel and compliance into risk-adjusted decisions and signed evidence bundles.',
    brand: {
      '@type': 'Organization',
      name: 'DevOps.ai'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder'
    }
  };


  return (
    <>
      <SEO
        title="AlDeci - Risk-Based Security Intelligence | DevOps.ai"
        description="AlDeci unifies SBOMs, scanner outputs, threat intel and compliance into risk-adjusted decisions and signed evidence bundles."
        ogImage="/images/og-aldeci.png"
        type="website"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-4">
              AlDeci
            </h1>
            <p className="text-lg text-slate-400 mb-2">formerly FixOps</p>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Unified security intelligence that transforms scanner noise and SBOM sprawl into risk-based actions and cryptographically signed evidence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold hover:bg-teal-400 transition-all text-center"
            >
              Request Access
            </Link>
            <a
              href="/pdfs/aldeci-one-pager-v20251037.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Product One-Pager
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700 text-center"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* What AlDeci Does */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">What AlDeci Does</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Ingestion & Normalization</h3>
              <p className="text-slate-300 mb-4">
                AlDeci ingests security artifacts from multiple sources and normalizes heterogeneous formats into canonical models:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>SBOM</strong>: CycloneDX, SPDX, GitHub Dependency Snapshot, Syft JSON</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>SARIF</strong>: SAST, DAST, SCA findings from any scanner</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>CNAPP/CTEM</strong>: Cloud-native application protection findings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>VEX</strong>: Vulnerability Exploitability eXchange documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Threat Intel</strong>: CISA KEV (Known Exploited Vulnerabilities), EPSS (Exploit Prediction Scoring)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Business Context</strong>: Data sensitivity, exposure flags, criticality ratings</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Correlation & Risk Scoring</h3>
              <p className="text-slate-300 mb-4">
                AlDeci correlates data across sources and scores risk with context:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Shield className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Design ↔ SBOM ↔ Findings ↔ CVEs</strong>: Full traceability from architecture to vulnerabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Composite Risk Score (0-100)</strong>: Combines EPSS percentile, KEV flag, version lag, exposure, and data sensitivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Control Coverage</strong>: Maps findings to existing security controls and identifies gaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Internet-Facing Detection</strong>: Flags publicly exposed components for priority remediation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Automated Evidence Generation</h3>
            <p className="text-slate-300 mb-4">
              Every decision produces cryptographically signed, audit-ready evidence bundles for compliance frameworks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start gap-3">
                <Lock className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-slate-50">SOC 2 Type II</strong>
                  <p className="text-slate-400 text-sm mt-1">Security monitoring, change management, and incident response evidence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-slate-50">ISO 27001</strong>
                  <p className="text-slate-400 text-sm mt-1">Information security management system controls and audit trails</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-slate-50">APRA CPS 234</strong>
                  <p className="text-slate-400 text-sm mt-1">Information security capability for Australian financial institutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-slate-50">Essential Eight</strong>
                  <p className="text-slate-400 text-sm mt-1">Australian Cyber Security Centre mitigation strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Modes */}
      <section id="architecture" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Architecture & Modes</h2>

          {/* Layered Architecture Diagram */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">Layered Architecture</h3>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 mb-8">
              <AlDeciArchitectureDiagram />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-teal-400 mb-2">1. Ingestion</h4>
                <p className="text-sm text-slate-400">
                  Push-based model accepts artifacts from any source via REST API or CLI
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-teal-400 mb-2">2. Normalization</h4>
                <p className="text-sm text-slate-400">
                  Multi-format parsers convert to canonical schemas
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-teal-400 mb-2">3. Correlation</h4>
                <p className="text-sm text-slate-400">
                  Graph engine links design, SBOM, findings, and CVEs
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-teal-400 mb-2">4. Decision</h4>
                <p className="text-sm text-slate-400">
                  Multi-layer intelligence produces risk verdicts
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-teal-400 mb-2">5. Evidence</h4>
                <p className="text-sm text-slate-400">
                  Cryptographically signed bundles for audit trails
                </p>
              </div>
            </div>
          </div>

          {/* Decision Flow Diagram */}
          <div id="decision-flow" className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">Decision & Evidence Flow</h3>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <DecisionFlowDiagram />
            </div>
            
            {/* Step → What we use → Output artifact table */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mt-8">
              <h4 className="text-xl font-semibold text-slate-50 mb-4">6-Step Flow Summary</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">Step</th>
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">What We Use</th>
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">Output Artifact</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">1. Enrichment</td>
                      <td className="py-3 px-4">EPSS, KEV, CVSS, CWE, ExploitDB</td>
                      <td className="py-3 px-4">Enriched CVE metadata with exploit signals</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">2. Forecasting</td>
                      <td className="py-3 px-4">Markov chain, Bayesian analytics</td>
                      <td className="py-3 px-4">Risk projection + trend forecast (5-state model)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">3. Threat Modeling</td>
                      <td className="py-3 px-4">Architecture baseline, threat tree, MITRE techniques</td>
                      <td className="py-3 px-4">Exploitability assessment per component</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">4. Compliance Mapping</td>
                      <td className="py-3 px-4">Org-specific controls, SOC2, ISO, CPS234</td>
                      <td className="py-3 px-4">Control coverage report + policy violations</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">5. LLM Explanation</td>
                      <td className="py-3 px-4">Multi-LLM consensus, RAG, hallucination guard</td>
                      <td className="py-3 px-4">Natural language explanation + confidence score</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">6. Final Verdict</td>
                      <td className="py-3 px-4">All prior steps + policy overlay</td>
                      <td className="py-3 px-4">Exploitable / Not Exploitable / Needs Review</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Interfaces</h3>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <p className="text-slate-300 mb-4">
                  <strong>REST API</strong> (FastAPI) with dedicated endpoints:
                </p>
                <ul className="space-y-2 text-sm font-mono text-slate-400">
                  <li>POST /inputs/design</li>
                  <li>POST /inputs/sbom</li>
                  <li>POST /inputs/sarif</li>
                  <li>POST /inputs/cve</li>
                  <li>POST /inputs/vex</li>
                  <li>POST /inputs/cnapp</li>
                  <li>POST /inputs/context</li>
                </ul>
                <p className="text-slate-300 mt-4">
                  <strong>CLI parity</strong> for CI/CD integration with identical functionality.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Overlay Configuration</h3>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <p className="text-slate-300 mb-4">
                  Toggle modules via overlay config:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>context_engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>guardrails</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>policy_automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>ssdlc</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>iac</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>ai_agents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>exploit_signals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>probabilistic</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Deployment Modes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-50 mb-3">Demo Mode</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400">•</span>
                    <span>In-memory storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400">•</span>
                    <span>Mock LLM responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400">•</span>
                    <span>Simplified authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400">•</span>
                    <span>90-day retention</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-50 mb-3">Enterprise Mode</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Persistent vector store (ChromaDB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Real LLM APIs (GPT-5, Claude-3, Gemini-2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>OPA policy client</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>7-year evidence retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>JWT authentication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-slate-950 border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Observability</h3>
            <p className="text-slate-300 mb-4">
              Built-in OpenTelemetry metrics and traces with Grafana dashboards:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 rounded-lg p-4">
                <Database className="text-teal-400 mb-2" size={24} />
                <div className="text-sm font-mono text-slate-400">http_request_seconds</div>
                <div className="text-xs text-slate-500 mt-1">Request latency distribution</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-4">
                <Zap className="text-blue-400 mb-2" size={24} />
                <div className="text-sm font-mono text-slate-400">policy_block_ratio</div>
                <div className="text-xs text-slate-500 mt-1">Policy enforcement rate</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-4">
                <Shield className="text-teal-400 mb-2" size={24} />
                <div className="text-sm font-mono text-slate-400">provenance_operations</div>
                <div className="text-xs text-slate-500 mt-1">Evidence generation metrics</div>
              </div>
            </div>
          </div>

          {/* Push-Based Integration Example */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Push-Based Integration</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-50 mb-4">Why Push-Based?</h4>
                <p className="text-slate-300 mb-4">
                  AlDeci uses a push-based architecture that simplifies integration:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <Zap className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Minimal connectors</strong>: Teams push artifacts from CI/CD pipelines—no scanner-specific integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Tool agnostic</strong>: Works with any scanner that outputs SBOM (CycloneDX/SPDX) or SARIF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Fast onboarding</strong>: Add new tools without platform changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Air-gap friendly</strong>: Works in disconnected environments</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-50 mb-4">CI/CD Integration Example</h4>
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                  <pre className="text-sm text-slate-300 overflow-x-auto">
                    <code>{`# GitHub Actions example
- name: Generate SBOM
  run: syft . -o cyclonedx-json > sbom.json

- name: Run SAST
  run: semgrep --sarif > sarif.json

- name: Push to AlDeci
  run: |
    curl -X POST https://api.devops.ai/products/aldeci/inputs/sbom \\
      -H "Authorization: Bearer $TOKEN" \\
      -F "file=@sbom.json"
    curl -X POST https://api.devops.ai/products/aldeci/inputs/sarif \\
      -H "Authorization: Bearer $TOKEN" \\
      -F "file=@sarif.json"`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture Comparison */}
      <section className="bg-slate-900 py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-50 mb-4">
              Platform Architecture: How AlDeci Compares
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              AlDeci's platform architecture includes advanced capabilities that differentiate it from traditional ASPM platforms. Here's how our core platform features compare.
            </p>
          </div>

          {/* Platform Features Comparison Matrix */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-slate-950 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 border-b border-slate-700">Platform Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-teal-400 border-b border-slate-700">AlDeci</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 border-b border-slate-700">Apiiro</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 border-b border-slate-700">ArmorCode</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 border-b border-slate-700">Cycode</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 border-b border-slate-700">Vulcan Cyber</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Ingestion Model</strong>
                    <p className="text-xs text-slate-500 mt-1">How data enters the platform</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">Push-based (any SBOM/SARIF tool)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Pull-based connectors</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Scanner integrations</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Platform integrations</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Scanner integrations</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Normalizer</strong>
                    <p className="text-xs text-slate-500 mt-1">Multi-format parsing to canonical schema</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ CycloneDX, SPDX, SARIF, VEX, CNAPP</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Proprietary format</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">✅ Multi-scanner normalization</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Limited formats</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Scanner-specific</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>LLM Functions</strong>
                    <p className="text-xs text-slate-500 mt-1">AI-powered pattern matching & reasoning</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ RAG-backed LLM with vector DB</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">✅ Behavioral AI (opaque)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ ML-based correlation</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ ML-based prioritization</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ ML-based priority</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Bayesian Analytics</strong>
                    <p className="text-xs text-slate-500 mt-1">Probabilistic risk projection</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ Posterior probability with EPSS priors</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Markov Chain Forecasting</strong>
                    <p className="text-xs text-slate-500 mt-1">Vulnerability trend prediction</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ 5-state model (76% accuracy)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>MITRE ATT&CK Mapping</strong>
                    <p className="text-xs text-slate-500 mt-1">Adversary tactics & techniques identification</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">
                    <div className="font-semibold text-teal-400 mb-1">✅ Dual role: Design-time baseline + Runtime evidence</div>
                    <p className="text-xs text-slate-500">Design-time: Architecture → threat baseline (Beta). Runtime: LLM maps CVEs to techniques for evidence bundles</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">✅ Live threat feeds</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Limited</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Limited</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Limited</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Design-Time Threat Modeling</strong>
                    <p className="text-xs text-slate-500 mt-1">Architecture baseline for exploitability assessment</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">
                    <div className="font-semibold text-teal-400 mb-1">✅ Component-level technique mapping (Beta)</div>
                    <p className="text-xs text-slate-500">Teams provide architecture baseline; CVEs matched against applicable techniques per component</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">✅ Code-to-runtime mapping</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Verdict Classification</strong>
                    <p className="text-xs text-slate-500 mt-1">Exploitability assessment output</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">
                    <div className="font-semibold text-teal-400 mb-1">✅ Tri-state classifier</div>
                    <p className="text-xs text-slate-500">Exploitable / Not Exploitable / Needs Review → maps to ALLOW/FIX/BLOCK gates via policy overlay</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Risk score only (opaque)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Priority score</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Risk score</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Priority score</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Evidence Packs</strong>
                    <p className="text-xs text-slate-500 mt-1">Cryptographically signed audit bundles</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ SLSA provenance + 7yr retention</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Internal logs only</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Compliance reports</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ No</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Local/Air-Gapped Deployment</strong>
                    <p className="text-xs text-slate-500 mt-1">On-premises & disconnected environments</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ Full on-prem + air-gapped support</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Private cloud (limited)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ SaaS only</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ SaaS only</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">❌ SaaS only</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Customization</strong>
                    <p className="text-xs text-slate-500 mt-1">Policy & threshold configuration</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ Overlay config + OPA/Rego policies</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">✅ Policy-as-code (rigid)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Limited customization</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Basic configuration</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Remediation workflows</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <strong>Data Sovereignty</strong>
                    <p className="text-xs text-slate-500 mt-1">Control over data location & residency</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ Full control (on-prem/air-gapped)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Private cloud regions</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ SaaS regions</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ SaaS regions</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ SaaS regions</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Differentiators */}
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-50 mb-4 text-center">
              Why AlDeci's Platform Architecture Stands Out
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">30 min</div>
                <p className="text-slate-300">Onboarding time vs. weeks for pull-based platforms</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">8%</div>
                <p className="text-slate-300">Precision improvement with Bayesian analytics</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">7 years</div>
                <p className="text-slate-300">Evidence retention with cryptographic signing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Decision Engines */}
      <section id="risk" className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Risk & Decision Engines</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Composite Risk Scoring</h3>
            <p className="text-slate-300 mb-6">
              AlDeci calculates a composite risk score (0-100) by combining multiple signals:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-2">EPSS Percentile</h4>
                <p className="text-sm text-slate-400">Exploit prediction probability from FIRST.org</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-2">KEV Flag</h4>
                <p className="text-sm text-slate-400">Known exploited vulnerabilities from CISA</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-2">Version Lag</h4>
                <p className="text-sm text-slate-400">Days behind latest secure version</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-2">Exposure Flags</h4>
                <p className="text-sm text-slate-400">Internet-facing, data sensitivity, criticality</p>
              </div>
            </div>
          </div>

          <div id="probabilistic" className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Probabilistic Models</h3>
            <p className="text-slate-300 mb-6">
              AlDeci enhances traditional risk scoring with forward-looking probabilistic models that project exploit likelihood and forecast vulnerability trends:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">Bayesian Risk Projection</h4>
                <p className="text-slate-400 mb-3">
                  Applies <strong>Bayesian posterior probability</strong> using EPSS-informed priors to project exploit likelihood. The model computes P(exploit | signals) using Bayes' theorem with calibrated priors from historical exploit data.
                </p>
                <p className="text-sm text-slate-500">
                  <strong>Target benchmark:</strong> ~8% precision improvement over static CVSS scoring (Brier score: 0.12)
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">Markov Chain Trend Forecasting</h4>
                <p className="text-slate-400 mb-3">
                  Uses a <strong>5-state Markov model</strong> (Open, Triaged, In Remediation, Remediated, Reopened) to forecast vulnerability state transitions. The transition matrix is learned from historical vulnerability lifecycle data.
                </p>
                <p className="text-sm text-slate-500">
                  <strong>Target benchmark:</strong> ~76% state prediction accuracy enables resource planning and remediation timeline forecasting
                </p>
              </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-50 mb-3">Score Composition</h4>
              <p className="text-slate-400 mb-3">
                The composite risk score (0-100) combines EPSS percentile, KEV flag, version lag, exposure flags, Bayesian posterior (w_bayes=0.10), and Markov forecast (w_trend=0.05). The extended formula improves F1 score from 0.87 to 0.91 in validation tests.
              </p>
              <p className="text-slate-400">
                <strong>Note:</strong> MITRE ATT&CK technique mappings are identified during LLM decision reasoning and included in evidence bundles for threat-informed prioritization and audit transparency, but are not included in the default score weights. Detailed mathematical derivations and validation results are available in the <a href="/pdfs/risk-model-deep-dive-v20251037.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Risk Model Deep Dive whitepaper</a>.
              </p>
            </div>
          </div>

          <div id="mitre" className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">MITRE ATT&CK Threat Mapping</h3>
            <p className="text-slate-300 mb-6">
              AlDeci maps vulnerabilities to adversary tactics and techniques from the MITRE ATT&CK framework, enabling threat-informed prioritization based on real-world attack patterns:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">LLM-Powered Technique Identification</h4>
                <p className="text-slate-400 mb-3">
                  GPT-5 analyzes CVE descriptions, exploit patterns, and vulnerability characteristics to identify applicable MITRE ATT&CK techniques. The model maps vulnerabilities to specific tactics (Initial Access, Execution, Credential Access, etc.) and techniques with contextual reasoning.
                </p>
                <p className="text-sm text-slate-500">
                  <strong>Example techniques:</strong> T1190 (Exploit Public-Facing Application), T1059 (Command Injection), T1078 (Valid Accounts), T1003 (Credential Dumping)
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">Threat-Informed Prioritization</h4>
                <p className="text-slate-400 mb-3">
                  MITRE technique mappings enable threat-informed prioritization by identifying vulnerabilities that enable high-impact attack paths. Vulnerabilities mapped to Initial Access or Credential Access tactics provide critical threat context for security teams to prioritize remediation based on real-world attack patterns.
                </p>
                <p className="text-sm text-slate-500">
                  <strong>Integration:</strong> Technique mappings appear in LLM decision responses, evidence bundles, and compliance reports for threat-context documentation and audit transparency
                </p>
              </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-50 mb-3">Configurable Threat Intelligence</h4>
              <p className="text-slate-400">
                AlDeci integrates configurable threat intelligence feeds including MITRE ATT&CK, CISA KEV, EPSS, and custom threat intel sources. The overlay configuration allows teams to enable/disable specific threat intelligence modules based on their security posture and compliance requirements.
              </p>
            </div>
          </div>

          <div id="threat-model" className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Design-Time Threat Modeling</h3>
            <p className="text-slate-300 mb-6">
              Step 3 (Threat Modeling) compares CVEs against your system's architecture and threat baseline to determine exploitability in context:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">Architecture Baseline</h4>
                <p className="text-slate-400 mb-3">
                  Teams provide their system architecture, components, trust boundaries, and data flows via <code className="text-teal-400">/inputs/threat_model</code> endpoint. This creates a design-time baseline of applicable techniques and attack paths for your specific system.
                </p>
                <p className="text-sm text-slate-500">
                  <strong>Format:</strong> YAML/JSON schema defining components, exposures, controls, and technique mappings
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">Runtime Matching</h4>
                <p className="text-slate-400 mb-3">
                  At decision time, CVEs are matched against the threat baseline to determine if they enable techniques that are critical for your architecture. Considers component exposure, existing controls, and attack path completion.
                </p>
                <p className="text-sm text-slate-500">
                  <strong>Example:</strong> CVE enables T1190 on internet-facing API + insufficient WAF controls → Exploitable
                </p>
              </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-slate-50 mb-3">Sample Threat Model Schema</h4>
              <pre className="text-sm text-slate-300 bg-slate-900 p-4 rounded overflow-x-auto">
{`components:
  - id: "api-gateway"
    trust_boundary: "internet-facing"
    data_sensitivity: "pci"
    applicable_techniques: ["T1190", "T1078"]
    controls: ["waf", "mfa"]
    
threat_baseline:
  - technique: "T1190"
    components: ["api-gateway", "web-frontend"]
    impact: "critical"
    likelihood: "high"`}
              </pre>
              <p className="text-slate-400 mt-3">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-500/10 text-orange-400 mr-2">Beta</span>
                Full threat tree matching and attack path analysis coming soon. Current implementation supports component-level technique mapping.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Decision Engine Internals</h3>
            <p className="text-slate-300 mb-6">
              Step 5 (LLM Explanation) uses multiple intelligence sources and techniques for high-confidence verdicts:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-50">Vector Pattern Matching</h4>
                  <p className="text-slate-400">Semantic search against known security patterns using sentence transformers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-50">RAG-Backed LLM Reasoning</h4>
                  <p className="text-slate-400">Multi-LLM consensus (GPT-5, Claude-3, Gemini-2) with retrieval-augmented generation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-50">Consensus Checks</h4>
                  <p className="text-slate-400">Escalates when LLM agreement &lt; 50%, requires human review</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-50">Golden Baselines</h4>
                  <p className="text-slate-400">Regression testing against known-good decisions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 font-bold">5</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-50">OPA/Rego Policies</h4>
                  <p className="text-slate-400">Policy-as-code enforcement with Open Policy Agent</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 font-bold">6</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-50">SBOM Dependency Analysis</h4>
                  <p className="text-slate-400">Transitive dependency risk and supply chain security</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 font-bold">7</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-50">Probabilistic Models</h4>
                  <p className="text-slate-400">Bayesian analytics for risk projection and Markov chain forecasting of vulnerability trends</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 font-bold">8</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-50">MITRE ATT&CK Mapping</h4>
                  <p className="text-slate-400">LLMs identify applicable adversary tactics and techniques (T1190: Exploit Public-Facing Application, T1059: Command Injection, T1078: Valid Accounts, T1003: Credential Dumping) during reasoning; included in evidence bundles and policy checks for threat-informed prioritization</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-50 mb-6">Tri-State Verdict Classification</h3>
            <p className="text-slate-300 mb-6">
              Step 6 produces an exploitability classification based on enrichment, forecasting, threat modeling, and compliance analysis:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-950 rounded-lg p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">Exploitable</div>
                <p className="text-slate-300 mb-3">CVE enables baseline-critical technique + component exposed + controls insufficient</p>
                <p className="text-sm text-slate-500">Example: T1190 on internet-facing API without WAF</p>
              </div>
              <div className="bg-slate-950 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">Not Exploitable</div>
                <p className="text-slate-300 mb-3">CVE not in threat baseline OR controls are sufficient OR component not exposed</p>
                <p className="text-sm text-slate-500">Example: Internal service with network segmentation</p>
              </div>
              <div className="bg-slate-950 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Needs Review</div>
                <p className="text-slate-300 mb-3">Insufficient data, low LLM confidence, or missing threat baseline</p>
                <p className="text-sm text-slate-500">Example: Novel CVE with no CWE mapping</p>
              </div>
            </div>
            
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-slate-50 mb-4">Policy Overlay: Verdict → Pipeline Gates</h4>
              <p className="text-slate-300 mb-4">
                The tri-state verdict maps to pipeline gates via configurable policy overlay:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900 rounded p-4">
                  <div className="text-lg font-bold text-red-400 mb-2">Exploitable →</div>
                  <p className="text-slate-300 text-sm">Gate: <span className="font-semibold text-red-400">BLOCK</span> or <span className="font-semibold text-yellow-400">FIX</span></p>
                  <p className="text-slate-500 text-xs mt-1">(policy-dependent)</p>
                </div>
                <div className="bg-slate-900 rounded p-4">
                  <div className="text-lg font-bold text-green-400 mb-2">Not Exploitable →</div>
                  <p className="text-slate-300 text-sm">Gate: <span className="font-semibold text-green-400">ALLOW</span></p>
                  <p className="text-slate-500 text-xs mt-1">(with evidence bundle)</p>
                </div>
                <div className="bg-slate-900 rounded p-4">
                  <div className="text-lg font-bold text-yellow-400 mb-2">Needs Review →</div>
                  <p className="text-slate-300 text-sm">Gate: <span className="font-semibold text-yellow-400">FIX</span> or require approval</p>
                  <p className="text-slate-500 text-xs mt-1">(human review)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Bundles */}
      <section id="evidence" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Evidence Bundles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Bundle Contents</h3>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span>Normalized SBOM with component inventory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span>Risk report with EPSS/KEV analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span>SARIF findings with severity mapping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span>SLSA v1 provenance attestation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span>Policy evaluation results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span>Signed MANIFEST.yaml with fingerprint</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Cryptographic Signing</h3>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <p className="text-slate-300 mb-4">
                  Every evidence bundle is cryptographically signed for tamper-proof audit trails:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <Lock className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>RSA-SHA256</strong> or <strong>Cosign</strong> signatures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <span>Public key fingerprints for verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <span>Optional Fernet encryption at rest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <span>Immutable storage with transparency indices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Example Bundle Structure</h3>
            <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto text-sm">
              <code className="text-slate-300">{`{
  "payload": {
    "findings": [...],
    "verdict": "allow",
    "confidence": 0.85,
    "compliance": {
      "soc2": { "coverage": 0.92, "gaps": [...] },
      "iso27001": { "coverage": 0.88, "gaps": [...] }
    },
    "top_factors": [
      { "type": "severity", "value": "high", "count": 3 },
      { "type": "exploit", "kev_overlap": 1, "epss_max": 0.82 }
    ]
  },
  "signature": "base64_encoded_rsa_signature",
  "algorithm": "RSA-SHA256",
  "fingerprint": "sha256:abc123...",
  "signed_at": "2025-10-26T12:00:00Z"
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Integrations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-teal-400 mb-4">CI/CD Platforms</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• GitHub Actions</li>
                <li>• GitLab CI</li>
                <li>• Azure DevOps</li>
                <li>• Jenkins</li>
                <li>• CircleCI</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Security Scanners</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Snyk</li>
                <li>• Wiz</li>
                <li>• Tenable</li>
                <li>• SonarQube</li>
                <li>• Nexus Lifecycle</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Ticketing & Collaboration</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Jira</li>
                <li>• Azure Boards</li>
                <li>• Confluence</li>
                <li>• Slack</li>
                <li>• Microsoft Teams</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Enriched Ticket Creation</h3>
            <p className="text-slate-300 mb-4">
              AlDeci automatically creates Jira tickets and Azure Boards work items enriched with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Risk score and priority</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Affected components and versions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>EPSS/KEV intelligence</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Remediation guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Evidence bundle links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Compliance impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Governance */}
      <section id="security" className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Security & Governance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Access Control</h3>
              <p className="text-slate-400 mb-4">
                Role-based access control (RBAC) with JWT authentication and API key management.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Multi-tenant isolation</li>
                <li>• Least-privilege keys</li>
                <li>• Audit logging</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Retention Windows</h3>
              <p className="text-slate-400 mb-4">
                Configurable retention policies for evidence bundles and artifacts.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Demo: 90 days</li>
                <li>• Enterprise: 7 years</li>
                <li>• Custom policies available</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Cryptographic Keys</h3>
              <p className="text-slate-400 mb-4">
                RSA-SHA256 signing with public key fingerprints for evidence verification.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Key rotation support</li>
                <li>• Hardware security module (HSM) ready</li>
                <li>• Cosign integration</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Isolated Processing</h3>
              <p className="text-slate-300 mb-4">
                All artifact processing happens in isolated containers with resource limits:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Sandboxed parsers prevent code execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Memory and CPU limits per job</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Network isolation for sensitive workloads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Automatic cleanup after processing</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Encrypted Storage</h3>
              <p className="text-slate-300 mb-4">
                Evidence bundles and sensitive data are encrypted at rest:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Fernet symmetric encryption (AES-128-CBC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Key management via environment or HSM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>TLS 1.3 for data in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Immutable audit logs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why AlDeci is Different */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Why AlDeci is Different</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-teal-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Push-Model Architecture</h3>
              <p className="text-slate-400">
                Teams push artifacts to AlDeci—no complex connectors or scanner integrations required. Works with any tool that outputs SBOM or SARIF.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Evidence + Prioritization</h3>
              <p className="text-slate-400">
                Single workflow produces both risk-based prioritization and audit-ready evidence. No separate compliance tools needed.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-teal-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">On-Prem Friendly</h3>
              <p className="text-slate-400">
                Transparent pipeline with explainable outputs. Deploy on-premises or in your VPC. No black-box SaaS required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare to ASPM Platforms */}
      <section className="bg-slate-950 py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-50 mb-4">
              Compare AlDeci to ASPM Platforms
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              AlDeci occupies the gap between lightweight triage tools and heavyweight governance platforms by delivering instant-on contextual risk re-scoring with automated evidence bundles.
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-slate-900 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 border-b border-slate-700">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-teal-400 border-b border-slate-700">AlDeci</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 border-b border-slate-700">Apiiro</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 border-b border-slate-700">ArmorCode</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 border-b border-slate-700">Cycode</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 border-b border-slate-700">Vulcan Cyber</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">Onboarding Speed</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">30 min instant-on</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Weeks (connector setup)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Days (integration)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Days (integration)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Days (integration)</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">Risk Scoring</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">EPSS + KEV + Context</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Behavioral AI</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Multi-scanner correlation</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Risk-based prioritization</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Cyber risk scoring</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">Evidence Automation</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ SLSA provenance</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Internal logs</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Compliance reports</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Basic reports</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Remediation tracking</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">Deployment Options</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">Demo + Enterprise (on-prem)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Enterprise SaaS only</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">SaaS</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">SaaS + Private cloud</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">SaaS</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">Decision Transparency</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">✅ Full breakdown</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Black box AI</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Risk score only</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Limited details</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">⚠️ Risk score only</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-300">Retention Period</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">7 years (Enterprise)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Standard retention</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Standard retention</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Standard retention</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Standard retention</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-300">Integration Model</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-400">Push-based (any tool)</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Pull-based connectors</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Scanner integrations</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Platform integrations</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">Scanner integrations</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Download CTA */}
          <div className="text-center mb-16">
            <a
              href="/pdfs/enterprise-vm-competitive-one-pager-v20251037.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-50 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700"
            >
              <Download size={20} />
              Download Full Competitive Analysis + Enterprise Examples
            </a>
          </div>

          {/* Integrates With Section */}
          <div className="border-t border-slate-800 pt-16">
            <h3 className="text-2xl font-bold text-slate-50 mb-6 text-center">
              Integrates With Your Existing Security Tools
            </h3>
            <p className="text-slate-400 text-center mb-8 max-w-3xl mx-auto">
              AlDeci works alongside your scanners and security tools, not as a replacement. Push SBOM and SARIF outputs from any tool.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Snyk</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Wiz</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Tenable</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Orca Security</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">GitHub Advanced Security</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Qualys</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">SonarQube</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Trivy</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Grype</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Nexus Lifecycle</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Checkmarx</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-300">Any SBOM/SARIF tool</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-6">
            Ready to See AlDeci in Action?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Request access to AlDeci or book a personalized demo with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Request Access
            </Link>
            <a
              href="/pdfs/aldeci-one-pager-v20251037.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download One-Pager
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
