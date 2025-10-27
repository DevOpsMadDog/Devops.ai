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
    <svg viewBox="0 0 800 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="400" fill="#0f172a" />
      
      {/* Title */}
      <text x="400" y="30" fill="#14b8a6" fontSize="24" fontWeight="bold" textAnchor="middle">
        Decision & Evidence Flow
      </text>
      
      {/* Input */}
      <rect x="50" y="80" width="150" height="60" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" rx="8" />
      <text x="125" y="110" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">
        Security Artifacts
      </text>
      <text x="125" y="130" fill="#94a3b8" fontSize="12" textAnchor="middle">
        SBOM + SARIF + CVE
      </text>
      
      {/* Arrow */}
      <path d="M 200 110 L 280 110" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead2)" />
      
      {/* Risk Scoring */}
      <rect x="280" y="80" width="150" height="60" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <text x="355" y="110" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">
        Risk Scoring
      </text>
      <text x="355" y="130" fill="#94a3b8" fontSize="12" textAnchor="middle">
        EPSS + KEV + Context
      </text>
      
      {/* Arrow */}
      <path d="M 430 110 L 510 110" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead2)" />
      
      {/* Decision Engine */}
      <rect x="510" y="80" width="150" height="60" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <text x="585" y="110" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">
        Decision Engine
      </text>
      <text x="585" y="130" fill="#94a3b8" fontSize="12" textAnchor="middle">
        Multi-LLM + OPA
      </text>
      
      {/* Arrow down */}
      <path d="M 585 140 L 585 200" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead2)" />
      
      {/* Verdict */}
      <rect x="510" y="200" width="150" height="60" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" rx="8" />
      <text x="585" y="225" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">
        Verdict
      </text>
      <text x="585" y="245" fill="#94a3b8" fontSize="12" textAnchor="middle">
        ALLOW / FIX / BLOCK
      </text>
      
      {/* Arrow down */}
      <path d="M 585 260 L 585 320" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead2)" />
      
      {/* Evidence Bundle */}
      <rect x="510" y="320" width="150" height="60" fill="#14b8a6" stroke="#0d9488" strokeWidth="2" rx="8" />
      <text x="585" y="345" fill="#0f172a" fontSize="14" fontWeight="bold" textAnchor="middle">
        Evidence Bundle
      </text>
      <text x="585" y="365" fill="#0f172a" fontSize="12" textAnchor="middle">
        Signed + Encrypted
      </text>
      
      {/* Compliance Path */}
      <path d="M 510 350 L 280 350 L 280 300" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead2)" />
      <rect x="205" y="270" width="150" height="60" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <text x="280" y="295" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">
        Compliance Check
      </text>
      <text x="280" y="315" fill="#94a3b8" fontSize="12" textAnchor="middle">
        SOC2 • ISO • CPS234
      </text>
      
      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
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
              href="/pdfs/aldeci-one-pager-v20251032.pdf"
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
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">Decision & Evidence Flow</h3>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <DecisionFlowDiagram />
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

      {/* Risk & Decision Engines */}
      <section className="bg-slate-950 py-20">
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

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Multi-Layer Decision Pipeline</h3>
            <p className="text-slate-300 mb-6">
              Decisions combine multiple intelligence sources for high-confidence verdicts:
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
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-50 mb-6">Verdict Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">ALLOW</div>
                <p className="text-slate-300">Risk score &lt; 60, safe to deploy with evidence bundle</p>
              </div>
              <div className="bg-slate-950 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">FIX</div>
                <p className="text-slate-300">Risk score 60-85, remediation required with clear rationale</p>
              </div>
              <div className="bg-slate-950 rounded-lg p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">BLOCK</div>
                <p className="text-slate-300">Risk score ≥ 85, deployment blocked with detailed explanation</p>
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
              href="/pdfs/enterprise-vm-competitive-one-pager-v20251032.pdf"
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
              href="/pdfs/aldeci-one-pager-v20251032.pdf"
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
