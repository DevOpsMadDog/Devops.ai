import { SEO } from '../components/SEO';
import { Shield, Lock, Database, Zap } from 'lucide-react';

function PlatformArchitectureDiagram() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="600" fill="#0f172a" />
      
      {/* Title */}
      <text x="400" y="30" fill="#14b8a6" fontSize="24" fontWeight="bold" textAnchor="middle">
        DevOps.ai Platform Architecture
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

export function Platform() {
  return (
    <>
      <SEO
        title="Platform Architecture | DevOps.ai"
        description="Shared platform architecture powering AlDeci and future DevOps.ai products with push-based ingestion and evidence automation."
        ogImage="/images/og-platform.png"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              Platform Architecture
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Shared infrastructure powering AlDeci and future DevOps.ai products with push-based ingestion, modular processing, and evidence automation.
            </p>
          </div>
        </div>
      </section>

      {/* Layered Architecture Diagram */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Layered Architecture</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <PlatformArchitectureDiagram />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-2">1. Ingestion</h3>
              <p className="text-sm text-slate-400">
                Push-based model accepts artifacts from any source via REST API or CLI
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-2">2. Normalization</h3>
              <p className="text-sm text-slate-400">
                Multi-format parsers convert to canonical schemas
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-2">3. Correlation</h3>
              <p className="text-sm text-slate-400">
                Graph engine links design, SBOM, findings, and CVEs
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-2">4. Decision</h3>
              <p className="text-sm text-slate-400">
                Multi-layer intelligence produces risk verdicts
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-2">5. Evidence</h3>
              <p className="text-sm text-slate-400">
                Cryptographically signed bundles for audit trails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Flow Diagram */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Decision & Evidence Flow</h2>
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
            <DecisionFlowDiagram />
          </div>
        </div>
      </section>

      {/* Push-Based Ingestion */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Push-Based Ingestion</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Why Push-Based?</h3>
              <p className="text-slate-300 mb-4">
                Traditional security platforms require complex integrations with every scanner and tool. DevOps.ai takes a different approach:
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
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Example Integration</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`# GitHub Actions example
- name: Generate SBOM
  run: syft . -o cyclonedx-json > sbom.json

- name: Run SAST
  run: semgrep --sarif > sarif.json

- name: Push to AlDeci
  run: |
    curl -X POST https://api.devops.ai/inputs/sbom \\
      -H "Authorization: Bearer $TOKEN" \\
      -F "file=@sbom.json"
    curl -X POST https://api.devops.ai/inputs/sarif \\
      -H "Authorization: Bearer $TOKEN" \\
      -F "file=@sarif.json"`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay-Driven Modules */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Overlay-Driven Modules</h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-4xl">
            The platform uses an overlay configuration system to enable/disable modules based on your needs. Start simple and add capabilities as you grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">Context Engine</h3>
              <p className="text-sm text-slate-400">
                Enriches findings with business context: data sensitivity, criticality, exposure
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">Guardrails</h3>
              <p className="text-sm text-slate-400">
                Policy enforcement for deployment gates and security thresholds
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">Compliance</h3>
              <p className="text-sm text-slate-400">
                Framework mapping for SOC 2, ISO 27001, APRA CPS 234, Essential Eight
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">Policy Automation</h3>
              <p className="text-sm text-slate-400">
                OPA/Rego policy evaluation with policy-as-code workflows
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">SSDLC</h3>
              <p className="text-sm text-slate-400">
                Secure Software Development Lifecycle stage orchestration
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">IaC Posture</h3>
              <p className="text-sm text-slate-400">
                Infrastructure-as-Code security analysis for Terraform, Bicep, CloudFormation
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">AI Agents</h3>
              <p className="text-sm text-slate-400">
                Detection and analysis of AI agent usage in codebases
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">Exploit Signals</h3>
              <p className="text-sm text-slate-400">
                CISA KEV and FIRST.org EPSS threat intelligence integration
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">Probabilistic</h3>
              <p className="text-sm text-slate-400">
                Bayesian and Markov chain risk forecasting models
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Governance & Security</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Security Hardening */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Security Hardening</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
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

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
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

      {/* CTA */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-6">
            Build on the DevOps.ai Platform
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Start with AlDeci today and scale to future products on the same platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/product/aldeci"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Explore AlDeci
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
