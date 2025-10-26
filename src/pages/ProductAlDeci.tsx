import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Download, Shield, Database, Zap, Lock, CheckCircle } from 'lucide-react';

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

  const handleDownloadOnePager = () => {
    alert('PDF generation coming soon. Please contact us for the one-pager.');
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
            <button
              onClick={handleDownloadOnePager}
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Product One-Pager
            </button>
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
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Architecture & Modes</h2>

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
      <section className="bg-slate-900 py-20">
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
      <section className="bg-slate-950 py-20">
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
            <button
              onClick={handleDownloadOnePager}
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download One-Pager
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
