import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

export default function EvidenceAsCode() {
  return (
    <>
      <SEO 
        title="Evidence-as-Code in Practice: Building Audit-Ready CI/CD Pipelines"
        description="Learn how to implement cryptographically signed evidence bundles in your CI/CD pipelines for automated compliance and audit readiness."
        canonical="/blog/evidence-as-code-in-practice"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Back to Blog */}
          <Link to="/blog" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-teal-500/10 text-teal-400 rounded-full mb-4">
                DevSecOps
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                Evidence-as-Code in Practice: Building Audit-Ready CI/CD Pipelines
              </h1>
              <div className="flex items-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Shivakumaar Umasudan
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  October 20, 2025
                </div>
                <span>12 min read</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="text-slate-300 space-y-6">
              <p className="text-xl text-slate-200 leading-relaxed">
                Modern compliance frameworks demand more than just security controls—they require continuous, auditable proof that those controls are working. Evidence-as-Code transforms compliance from a manual, quarterly exercise into an automated, continuous process embedded directly in your CI/CD pipelines.
              </p>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">The Audit Burden Problem</h2>
              <p>
                Enterprise security teams spend 40-60% of their time preparing for audits. This involves manually collecting evidence, correlating findings across multiple tools, and assembling compliance artifacts that prove security controls are functioning. The process is:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Time-intensive:</strong> Teams spend weeks gathering screenshots, logs, and reports</li>
                <li><strong>Error-prone:</strong> Manual evidence collection introduces gaps and inconsistencies</li>
                <li><strong>Point-in-time:</strong> Evidence represents a snapshot, not continuous compliance</li>
                <li><strong>Disconnected:</strong> Evidence lives in multiple systems with no unified view</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">What is Evidence-as-Code?</h2>
              <p>
                Evidence-as-Code treats compliance evidence as a first-class artifact in your software delivery pipeline. Just as Infrastructure-as-Code (IaC) automates infrastructure provisioning, Evidence-as-Code automates compliance evidence generation, signing, and retention.
              </p>
              <p>
                Core principles:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Automated Generation:</strong> Evidence is produced automatically at every pipeline stage</li>
                <li><strong>Cryptographic Signing:</strong> All evidence bundles are signed with RSA-SHA256 or Cosign for tamper-proof integrity</li>
                <li><strong>Structured Format:</strong> Evidence follows standardized schemas (SLSA provenance, SARIF, CycloneDX)</li>
                <li><strong>Version Controlled:</strong> Evidence bundles are versioned and stored alongside code artifacts</li>
                <li><strong>Continuous:</strong> Evidence generation happens on every commit, not just at audit time</li>
              </ol>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Architecture: Evidence Pipeline</h2>
              <p>
                A typical Evidence-as-Code pipeline has four stages:
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">1. Collection Stage</h3>
              <p>
                Gather security artifacts from multiple sources:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>SBOM:</strong> Software Bill of Materials (CycloneDX/SPDX) from build tools</li>
                <li><strong>SARIF:</strong> Static analysis results from SAST/DAST/SCA scanners</li>
                <li><strong>VEX:</strong> Vulnerability Exploitability eXchange documents</li>
                <li><strong>CNAPP Findings:</strong> Cloud security posture findings</li>
                <li><strong>Test Results:</strong> Unit, integration, and security test outputs</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">2. Correlation Stage</h3>
              <p>
                Normalize and correlate artifacts to create a unified security view:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Map SBOM components to CVE findings</li>
                <li>Correlate SARIF findings with code locations</li>
                <li>Enrich vulnerabilities with EPSS and KEV signals</li>
                <li>Link findings to compliance controls (SOC 2, ISO 27001, CPS 234)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">3. Decision Stage</h3>
              <p>
                Apply risk-based decision logic to determine exploitability and compliance status:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Calculate composite risk scores using EPSS, KEV, exposure, and context</li>
                <li>Run policy evaluations (OPA/Rego) against organizational standards</li>
                <li>Generate tri-state verdicts: ALLOW / FIX / BLOCK</li>
                <li>Produce explainable rationale with confidence scores</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">4. Evidence Bundle Generation</h3>
              <p>
                Package all artifacts into a cryptographically signed evidence bundle:
              </p>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`evidence-bundle-2025-10-20-abc123/
├── MANIFEST.yaml           # Signed manifest with checksums
├── sbom.cdx.json          # CycloneDX SBOM
├── sarif-results.json     # SARIF findings
├── risk-report.json       # Risk scores + EPSS/KEV
├── policy-evaluation.json # OPA policy results
├── provenance.slsa.json   # SLSA v1 provenance attestation
└── signature.sig          # RSA-SHA256 or Cosign signature`}
              </pre>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Implementation: GitHub Actions Example</h2>
              <p>
                Here's a practical example of integrating Evidence-as-Code into a GitHub Actions pipeline using AlDeci:
              </p>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`name: Build with Evidence-as-Code

on: [push, pull_request]

jobs:
  build-and-evidence:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # 1. Build and generate SBOM
      - name: Build application
        run: npm run build
      
      - name: Generate SBOM
        run: |
          syft . -o cyclonedx-json > sbom.cdx.json
      
      # 2. Run security scans
      - name: SAST scan
        run: |
          semgrep --config=auto --sarif > sarif-sast.json
      
      - name: SCA scan
        run: |
          npm audit --json > npm-audit.json
      
      # 3. Push artifacts to AlDeci
      - name: Push SBOM to AlDeci
        run: |
          curl -X POST https://api.devopsai.co/products/aldeci/inputs/sbom \\
            -H "Authorization: Bearer \${{ secrets.ALDECI_API_KEY }}" \\
            -H "Content-Type: application/json" \\
            -d @sbom.cdx.json
      
      - name: Push SARIF to AlDeci
        run: |
          curl -X POST https://api.devopsai.co/products/aldeci/inputs/sarif \\
            -H "Authorization: Bearer \${{ secrets.ALDECI_API_KEY }}" \\
            -H "Content-Type: application/json" \\
            -d @sarif-sast.json
      
      # 4. Get decision and evidence bundle
      - name: Get AlDeci verdict
        id: verdict
        run: |
          RESPONSE=$(curl -X GET https://api.devopsai.co/products/aldeci/verdicts/latest \\
            -H "Authorization: Bearer \${{ secrets.ALDECI_API_KEY }}")
          echo "verdict=\$(echo \$RESPONSE | jq -r '.verdict')" >> $GITHUB_OUTPUT
          echo "confidence=\$(echo \$RESPONSE | jq -r '.confidence')" >> $GITHUB_OUTPUT
      
      - name: Download evidence bundle
        run: |
          curl -X GET https://api.devopsai.co/products/aldeci/evidence/latest \\
            -H "Authorization: Bearer \${{ secrets.ALDECI_API_KEY }}" \\
            -o evidence-bundle.tar.gz
      
      # 5. Store evidence bundle as artifact
      - name: Upload evidence bundle
        uses: actions/upload-artifact@v3
        with:
          name: evidence-bundle
          path: evidence-bundle.tar.gz
          retention-days: 2555  # 7 years for compliance
      
      # 6. Gate deployment based on verdict
      - name: Check verdict
        run: |
          if [ "\${{ steps.verdict.outputs.verdict }}" == "BLOCK" ]; then
            echo "❌ Deployment blocked due to critical security findings"
            exit 1
          elif [ "\${{ steps.verdict.outputs.verdict }}" == "FIX" ]; then
            echo "⚠️  Deployment allowed with warnings - remediation required"
          else
            echo "✅ Deployment approved - no critical findings"
          fi`}
              </pre>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Evidence Bundle Structure</h2>
              <p>
                Each evidence bundle contains a signed MANIFEST.yaml that provides cryptographic proof of integrity:
              </p>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`version: "1.0"
bundle_id: "evidence-2025-10-20-abc123"
timestamp: "2025-10-20T14:32:15Z"
repository: "github.com/myorg/myapp"
commit_sha: "abc123def456"
pipeline_run: "github-actions-12345"

artifacts:
  - name: "sbom.cdx.json"
    type: "sbom"
    format: "cyclonedx-json"
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  
  - name: "sarif-results.json"
    type: "sarif"
    format: "sarif-2.1.0"
    sha256: "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
  
  - name: "risk-report.json"
    type: "risk-assessment"
    format: "aldeci-risk-v1"
    sha256: "4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"

verdict:
  decision: "ALLOW"
  confidence: 0.92
  rationale: "No exploitable vulnerabilities found. All findings are in non-internet-facing components with low EPSS scores."

compliance:
  frameworks:
    - name: "SOC 2 Type II"
      controls_covered: ["CC6.1", "CC6.6", "CC7.1", "CC7.2"]
      status: "compliant"
    - name: "ISO 27001:2022"
      controls_covered: ["A.8.1", "A.12.6", "A.14.2"]
      status: "compliant"

signature:
  algorithm: "RSA-SHA256"
  public_key_id: "aldeci-prod-key-2025"
  signature: "MEUCIQDxl+..."  # Truncated for brevity`}
              </pre>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Compliance Mapping</h2>
              <p>
                Evidence bundles automatically map to compliance controls:
              </p>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-4">SOC 2 Type II Control Coverage</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 font-mono">CC6.1</span>
                    <span>Logical and physical access controls - Evidence: SBOM shows no unauthorized dependencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 font-mono">CC6.6</span>
                    <span>Vulnerability management - Evidence: SARIF findings with risk scores and remediation status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 font-mono">CC7.1</span>
                    <span>Detection of security events - Evidence: Continuous monitoring with EPSS/KEV enrichment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 font-mono">CC7.2</span>
                    <span>Response to security incidents - Evidence: Automated blocking of critical findings</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Real-World Outcomes</h2>
              <p>
                Organizations implementing Evidence-as-Code report significant improvements:
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <div className="text-3xl font-bold text-teal-400 mb-2">70%</div>
                  <div className="text-slate-300">Reduction in audit prep time</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                  <div className="text-slate-300">Evidence coverage across all releases</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <div className="text-3xl font-bold text-teal-400 mb-2">60%</div>
                  <div className="text-slate-300">Reduction in false-positive noise</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Getting Started</h2>
              <p>
                To implement Evidence-as-Code in your organization:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Start with SBOM generation:</strong> Use tools like Syft, Trivy, or native package manager capabilities</li>
                <li><strong>Standardize on SARIF:</strong> Configure all scanners to output SARIF format for unified findings</li>
                <li><strong>Integrate AlDeci:</strong> Push artifacts to AlDeci for correlation, risk scoring, and evidence bundle generation</li>
                <li><strong>Implement CI/CD gates:</strong> Use AlDeci verdicts to gate deployments based on risk thresholds</li>
                <li><strong>Store evidence bundles:</strong> Retain signed bundles for 7 years to meet compliance requirements</li>
                <li><strong>Automate compliance reporting:</strong> Generate control coverage reports directly from evidence bundles</li>
              </ol>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Conclusion</h2>
              <p>
                Evidence-as-Code transforms compliance from a manual burden into an automated, continuous process. By treating evidence as a first-class artifact in your CI/CD pipeline, you gain:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Continuous compliance instead of point-in-time audits</li>
                <li>Cryptographically signed, tamper-proof evidence</li>
                <li>Automated control coverage mapping</li>
                <li>Significant reduction in audit preparation time</li>
                <li>Improved security posture through continuous monitoring</li>
              </ul>
              <p>
                The shift to Evidence-as-Code is not just about efficiency—it's about building trust through continuous, verifiable proof that your security controls are working as intended.
              </p>

              {/* CTA */}
              <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-slate-50 mb-4">Ready to Implement Evidence-as-Code?</h3>
                <p className="text-slate-300 mb-6">
                  AlDeci makes it easy to generate cryptographically signed evidence bundles in your CI/CD pipelines. Get started in 30 minutes with our push-based integration model.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors">
                    Book a Demo
                  </Link>
                  <Link to="/product/aldeci" className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-50 font-semibold rounded-lg transition-colors">
                    Learn More About AlDeci
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
