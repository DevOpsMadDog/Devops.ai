import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

export default function GoldenPaths() {
  return (
    <>
      <SEO 
        title="Designing Golden Paths for DevSecOps: Platform Engineering Meets Security"
        description="Golden paths make secure defaults easy and insecure shortcuts hard. Explore how platform engineering teams are building self-service DevSecOps workflows."
        canonical="/blog/golden-paths-devsecops"
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
              <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-500/10 text-indigo-400 rounded-full mb-4">
                Platform Engineering
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                Designing Golden Paths for DevSecOps: Platform Engineering Meets Security
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
                  October 5, 2025
                </div>
                <span>14 min read</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="text-slate-300 space-y-6">
              <p className="text-xl text-slate-200 leading-relaxed">
                Golden paths are the paved roads of software delivery—opinionated, well-maintained routes that make the right thing the easy thing. When platform engineering meets security, golden paths transform DevSecOps from a compliance checkbox into a frictionless developer experience.
              </p>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">The Security Friction Problem</h2>
              <p>
                Traditional security approaches create friction at every stage of the software delivery lifecycle:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Manual security reviews:</strong> Developers wait days for security team approval</li>
                <li><strong>Blocking CI/CD gates:</strong> 30% of builds fail due to false-positive security findings</li>
                <li><strong>Tool sprawl:</strong> Developers must learn 8-12 different security tools</li>
                <li><strong>Inconsistent standards:</strong> Each team implements security differently</li>
                <li><strong>Shadow IT:</strong> Developers bypass security controls to ship faster</li>
              </ul>
              <p>
                The result: security becomes an adversary, not an enabler. Developers view security as "the team that says no" rather than a partner in building resilient systems.
              </p>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">What is a Golden Path?</h2>
              <p>
                A golden path is a pre-built, opinionated workflow that:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Makes secure defaults easy:</strong> Security controls are built-in, not bolted-on</li>
                <li><strong>Provides self-service:</strong> Developers can provision resources without tickets</li>
                <li><strong>Automates compliance:</strong> Evidence generation happens automatically</li>
                <li><strong>Offers escape hatches:</strong> Advanced users can deviate when needed (with approval)</li>
                <li><strong>Evolves continuously:</strong> Platform teams maintain and improve the path</li>
              </ol>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Golden Path vs Paved Road vs Guardrails</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <strong className="text-slate-50">Golden Path:</strong> The recommended, opinionated way to do something (e.g., "Use this Terraform module to create a secure S3 bucket")
                  </li>
                  <li>
                    <strong className="text-slate-50">Paved Road:</strong> Similar to golden path, but implies there are multiple paved options (e.g., "Use either Terraform or Pulumi, both are supported")
                  </li>
                  <li>
                    <strong className="text-slate-50">Guardrails:</strong> Constraints that prevent dangerous actions (e.g., "You cannot create an S3 bucket without encryption")
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  <strong>Best practice:</strong> Combine golden paths (easy secure defaults) with guardrails (prevent dangerous actions) to create a secure-by-default platform.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Anatomy of a DevSecOps Golden Path</h2>
              <p>
                A well-designed golden path has five layers:
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">1. Self-Service Provisioning</h3>
              <p>
                Developers provision infrastructure and services through a portal or CLI without filing tickets:
              </p>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`# Developer runs a single command
$ platform create service \\
    --name payment-api \\
    --type nodejs \\
    --data-classification pii \\
    --environment production

✅ Service created: payment-api
✅ GitHub repo: github.com/myorg/payment-api
✅ CI/CD pipeline: Configured with security gates
✅ Infrastructure: ECS cluster + ALB + RDS (encrypted)
✅ Monitoring: Datadog dashboards + PagerDuty
✅ Security: SAST/SCA/DAST enabled, WAF configured
✅ Compliance: SOC 2 controls mapped, evidence enabled

🔗 Service URL: https://payment-api.prod.myorg.com
📊 Dashboard: https://platform.myorg.com/services/payment-api`}
              </pre>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">2. Secure-by-Default Templates</h3>
              <p>
                Infrastructure-as-Code templates with security baked in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption at rest:</strong> All data stores use KMS encryption</li>
                <li><strong>Encryption in transit:</strong> TLS 1.3 enforced for all services</li>
                <li><strong>Network isolation:</strong> Private subnets, security groups, NACLs pre-configured</li>
                <li><strong>IAM least privilege:</strong> Service roles with minimal permissions</li>
                <li><strong>Logging enabled:</strong> CloudTrail, VPC Flow Logs, application logs to SIEM</li>
                <li><strong>Backup configured:</strong> Automated backups with 7-year retention for compliance</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">3. Automated Security Gates</h3>
              <p>
                CI/CD pipelines with intelligent, context-aware security gates:
              </p>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`# .github/workflows/golden-path-cicd.yml
name: Golden Path CI/CD

on: [push, pull_request]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # 1. Generate SBOM
      - name: Generate SBOM
        run: syft . -o cyclonedx-json > sbom.json
      
      # 2. Run security scans
      - name: SAST
        run: semgrep --config=auto --sarif > sast.sarif
      
      - name: SCA
        run: trivy fs . --format sarif > sca.sarif
      
      - name: Secrets scan
        run: trufflehog filesystem . --json > secrets.json
      
      # 3. Push to AlDeci for risk-based decision
      - name: AlDeci verdict
        id: aldeci
        run: |
          # Push all artifacts
          aldeci push sbom sbom.json
          aldeci push sarif sast.sarif
          aldeci push sarif sca.sarif
          
          # Get verdict
          VERDICT=$(aldeci verdict --format json)
          echo "decision=\$(echo \$VERDICT | jq -r '.decision')" >> $GITHUB_OUTPUT
          echo "risk_score=\$(echo \$VERDICT | jq -r '.risk_score')" >> $GITHUB_OUTPUT
      
      # 4. Adaptive gate (not blocking for low-risk findings)
      - name: Security gate
        run: |
          if [ "\${{ steps.aldeci.outputs.decision }}" == "BLOCK" ]; then
            echo "❌ Build blocked: Critical exploitable vulnerabilities found"
            echo "Risk score: \${{ steps.aldeci.outputs.risk_score }}"
            exit 1
          elif [ "\${{ steps.aldeci.outputs.decision }}" == "FIX" ]; then
            echo "⚠️  Build allowed with warnings: Remediation required within 30 days"
            echo "Risk score: \${{ steps.aldeci.outputs.risk_score }}"
          else
            echo "✅ Build approved: No critical findings"
            echo "Risk score: \${{ steps.aldeci.outputs.risk_score }}"
          fi
      
      # 5. Generate evidence bundle
      - name: Download evidence
        run: aldeci evidence download --output evidence-bundle.tar.gz
      
      - name: Upload evidence
        uses: actions/upload-artifact@v3
        with:
          name: compliance-evidence
          path: evidence-bundle.tar.gz
          retention-days: 2555  # 7 years`}
              </pre>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">4. Continuous Compliance</h3>
              <p>
                Compliance controls mapped to every stage of the golden path:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">Stage</th>
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">Control</th>
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">Evidence</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">Code Commit</td>
                      <td className="py-3 px-4">CC6.1 (Access Control)</td>
                      <td className="py-3 px-4">Git commit signatures, branch protection rules</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">Build</td>
                      <td className="py-3 px-4">CC7.2 (Vulnerability Mgmt)</td>
                      <td className="py-3 px-4">SBOM, SARIF findings, risk scores</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">Deploy</td>
                      <td className="py-3 px-4">CC6.6 (Change Mgmt)</td>
                      <td className="py-3 px-4">Deployment logs, approval records</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">Runtime</td>
                      <td className="py-3 px-4">CC7.1 (Monitoring)</td>
                      <td className="py-3 px-4">CloudTrail logs, security alerts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">5. Observability & Feedback</h3>
              <p>
                Developers get real-time feedback on security posture:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Security dashboard:</strong> Service-level security scores and trends</li>
                <li><strong>Slack notifications:</strong> Critical findings posted to team channels</li>
                <li><strong>Jira integration:</strong> Auto-created tickets for remediation with context</li>
                <li><strong>Metrics:</strong> MTTR, vulnerability density, compliance coverage</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Real-World Example: Secure Microservice Golden Path</h2>
              <p>
                Let's walk through a complete golden path for deploying a secure microservice:
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Step 1: Developer Initiates</h3>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`$ platform create service \\
    --name user-profile-api \\
    --type nodejs \\
    --data-classification pii \\
    --environment production \\
    --team payments`}
              </pre>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Step 2: Platform Provisions Infrastructure</h3>
              <p>
                Behind the scenes, the platform:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Creates GitHub repo from secure template</li>
                <li>Provisions ECS cluster with Fargate (no EC2 management)</li>
                <li>Creates RDS PostgreSQL with encryption at rest (KMS)</li>
                <li>Configures ALB with TLS 1.3 and WAF</li>
                <li>Sets up private subnets + security groups (least privilege)</li>
                <li>Enables CloudTrail, VPC Flow Logs, container logs to Datadog</li>
                <li>Creates IAM roles with minimal permissions</li>
                <li>Configures automated backups (7-year retention)</li>
              </ol>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Step 3: Developer Pushes Code</h3>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`$ git clone github.com/myorg/user-profile-api
$ cd user-profile-api
$ # ... write code ...
$ git add .
$ git commit -m "Add user profile endpoints"
$ git push origin main`}
              </pre>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Step 4: Automated CI/CD Pipeline</h3>
              <p>
                GitHub Actions workflow automatically:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Runs unit tests</li>
                <li>Generates SBOM (Syft)</li>
                <li>Runs SAST (Semgrep), SCA (Trivy), secrets scan (TruffleHog)</li>
                <li>Pushes artifacts to AlDeci</li>
                <li>Gets risk-based verdict (ALLOW / FIX / BLOCK)</li>
                <li>Builds Docker image</li>
                <li>Pushes to ECR with image signing (Cosign)</li>
                <li>Deploys to ECS (if verdict is ALLOW or FIX)</li>
                <li>Generates evidence bundle</li>
                <li>Posts summary to Slack</li>
              </ol>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Step 5: Developer Gets Feedback</h3>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`🎉 Deployment successful: user-profile-api v1.2.3

✅ Security verdict: ALLOW (risk score: 24)
✅ 0 critical vulnerabilities
⚠️  2 medium vulnerabilities (30-day remediation SLA)
✅ Evidence bundle generated: EVD-2025-10-05-abc123
✅ Compliance: SOC 2 (CC6.1, CC6.6, CC7.1, CC7.2)

🔗 Service: https://user-profile-api.prod.myorg.com
📊 Dashboard: https://platform.myorg.com/services/user-profile-api
📋 Jira tickets: VULN-1234, VULN-1235 (medium priority)`}
              </pre>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Escape Hatches: When to Deviate</h2>
              <p>
                Golden paths should be opinionated but not rigid. Provide escape hatches for advanced use cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Custom infrastructure:</strong> Allow Terraform overrides with security review</li>
                <li><strong>Alternative tools:</strong> Support multiple languages/frameworks with consistent security</li>
                <li><strong>Experimental features:</strong> Sandbox environments with relaxed controls</li>
                <li><strong>Legacy migration:</strong> Gradual adoption path for existing services</li>
              </ul>
              <p>
                <strong>Key principle:</strong> Make the golden path so easy that deviating requires more effort than following it.
              </p>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Measuring Success</h2>
              <p>
                Track these metrics to measure golden path adoption and effectiveness:
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Adoption Metrics</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Golden path adoption rate:</strong> % of services using the golden path</li>
                <li><strong>Time to first deploy:</strong> How long from service creation to production</li>
                <li><strong>Developer satisfaction:</strong> NPS score for platform experience</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Security Metrics</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>MTTR:</strong> Mean time to remediate critical vulnerabilities</li>
                <li><strong>Vulnerability density:</strong> Findings per 1000 lines of code</li>
                <li><strong>False positive rate:</strong> % of security findings that are not exploitable</li>
                <li><strong>Gate failure rate:</strong> % of builds blocked by security gates</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Compliance Metrics</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Control coverage:</strong> % of services with automated compliance evidence</li>
                <li><strong>Audit prep time:</strong> Hours spent preparing for audits</li>
                <li><strong>Evidence completeness:</strong> % of required evidence automatically generated</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Implementation Roadmap</h2>
              <p>
                Building a golden path is an iterative process:
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Phase 1: Foundation (Weeks 1-4)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Identify the most common service pattern (e.g., Node.js API + PostgreSQL)</li>
                <li>Create secure IaC templates with encryption, logging, IAM</li>
                <li>Build self-service provisioning CLI or portal</li>
                <li>Document the golden path with examples</li>
              </ol>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Phase 2: Security Automation (Weeks 5-8)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Integrate SBOM generation (Syft, Trivy)</li>
                <li>Add SAST/SCA/secrets scanning to CI/CD</li>
                <li>Implement AlDeci for risk-based verdicts</li>
                <li>Configure adaptive gates (block only critical findings)</li>
              </ol>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Phase 3: Compliance & Evidence (Weeks 9-12)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Map controls to pipeline stages (SOC 2, ISO 27001)</li>
                <li>Enable evidence bundle generation</li>
                <li>Configure 7-year evidence retention</li>
                <li>Build compliance dashboard</li>
              </ol>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Phase 4: Expand & Iterate (Weeks 13+)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Add golden paths for other patterns (Python, Go, Java)</li>
                <li>Build escape hatches for advanced use cases</li>
                <li>Migrate existing services to golden path</li>
                <li>Continuously improve based on feedback</li>
              </ol>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Common Pitfalls</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Too opinionated:</strong> Golden path is so rigid that teams bypass it</li>
                <li><strong>Too permissive:</strong> Golden path allows insecure configurations</li>
                <li><strong>Poor documentation:</strong> Developers don't understand how to use the golden path</li>
                <li><strong>No escape hatches:</strong> Advanced teams can't deviate when needed</li>
                <li><strong>Stale templates:</strong> Golden path isn't maintained and falls behind best practices</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Conclusion</h2>
              <p>
                Golden paths transform DevSecOps from a compliance burden into a competitive advantage. By making secure defaults easy, automating compliance evidence, and providing self-service workflows, platform engineering teams can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reduce time-to-production from weeks to hours</li>
                <li>Improve developer satisfaction and reduce friction</li>
                <li>Decrease security vulnerabilities through secure-by-default templates</li>
                <li>Automate compliance evidence generation (70% reduction in audit prep time)</li>
                <li>Build trust between security and engineering teams</li>
              </ul>
              <p>
                The future of DevSecOps isn't more security tools—it's better developer experiences. Golden paths are the bridge between security requirements and developer productivity.
              </p>

              {/* CTA */}
              <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-slate-50 mb-4">Build Golden Paths with AlDeci</h3>
                <p className="text-slate-300 mb-6">
                  AlDeci provides the risk-based decision engine and evidence automation you need to build frictionless DevSecOps golden paths. Integrate in 30 minutes with our push-based model.
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
