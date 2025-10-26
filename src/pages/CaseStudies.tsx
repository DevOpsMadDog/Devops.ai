import { SEO } from '../components/SEO';
import { TrendingDown, Clock, Shield, CheckCircle } from 'lucide-react';

export function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | DevOps.ai"
        description="See how enterprises cut audit prep by 80% and reduced false-positive churn by 60% with AlDeci."
        ogImage="/images/og-customers.png"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              Customer Success Stories
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Real results from enterprises automating trust and proving security with AlDeci.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">80%</div>
              <div className="text-xl text-slate-300">Reduction in Audit Prep Time</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">60%</div>
              <div className="text-xl text-slate-300">Decrease in False-Positive Churn</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">46%</div>
              <div className="text-xl text-slate-300">Faster MTTR for Critical Issues</div>
            </div>
          </div>

          {/* Case Study 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                <Shield className="text-teal-400" size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-50">Global Financial Services Firm</h2>
                <p className="text-slate-400">Multi-cloud infrastructure • 5,000+ employees • SOC 2 & ISO 27001</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Challenge</h3>
                <p className="text-slate-300 leading-relaxed">
                  A global financial services firm was running five different security scanners (Snyk, Wiz, Tenable, SonarQube, and Nexus Lifecycle) across AWS and Azure environments. Security and DevOps teams were drowning in 15,000+ alerts per month, with an estimated 70% false-positive rate. Manual triage consumed 200+ engineering hours monthly, and audit preparation for SOC 2 Type II and ISO 27001 took 6-8 weeks of dedicated effort from compliance, security, and engineering teams.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400 mb-1">15,000+</div>
                    <div className="text-sm text-slate-400">Monthly alerts</div>
                  </div>
                  <div className="bg-slate-950 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400 mb-1">70%</div>
                    <div className="text-sm text-slate-400">False-positive rate</div>
                  </div>
                  <div className="bg-slate-950 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400 mb-1">6-8 weeks</div>
                    <div className="text-sm text-slate-400">Audit prep time</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Approach</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-400 font-bold">1</span>
                    </div>
                    <div>
                      <strong className="text-slate-50">Standardized SBOM generation</strong> across all microservices using Syft and CycloneDX format, pushed to AlDeci from GitHub Actions workflows.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-400 font-bold">2</span>
                    </div>
                    <div>
                      <strong className="text-slate-50">Integrated AlDeci</strong> as the central decision engine, ingesting SARIF outputs from all five scanners plus CISA KEV and EPSS feeds.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-400 font-bold">3</span>
                    </div>
                    <div>
                      <strong className="text-slate-50">Enabled evidence-as-code</strong> with cryptographically signed bundles automatically generated for every deployment and stored in S3 with 7-year retention.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-400 font-bold">4</span>
                    </div>
                    <div>
                      <strong className="text-slate-50">Implemented risk-first triage</strong> using AlDeci's composite risk scores (EPSS + KEV + exposure + data sensitivity) to prioritize remediation.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-400 font-bold">5</span>
                    </div>
                    <div>
                      <strong className="text-slate-50">Automated Jira ticket creation</strong> with enriched context, evidence links, and remediation guidance for high-risk findings.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-950 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingDown className="text-green-400" size={24} />
                      <div className="text-2xl font-bold text-green-400">60%</div>
                    </div>
                    <div className="text-slate-50 font-semibold mb-2">Reduced False-Positive Churn</div>
                    <p className="text-sm text-slate-400">
                      From 15,000 to 6,000 actionable alerts per month through context-aware deduplication and KEV/EPSS filtering.
                    </p>
                  </div>

                  <div className="bg-slate-950 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="text-blue-400" size={24} />
                      <div className="text-2xl font-bold text-blue-400">46%</div>
                    </div>
                    <div className="text-slate-50 font-semibold mb-2">Faster MTTR (Critical)</div>
                    <p className="text-sm text-slate-400">
                      Mean time to remediation for critical vulnerabilities dropped from 13 days to 7 days with prioritized workflows.
                    </p>
                  </div>

                  <div className="bg-slate-950 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="text-teal-400" size={24} />
                      <div className="text-2xl font-bold text-teal-400">80%</div>
                    </div>
                    <div className="text-slate-50 font-semibold mb-2">Audit Prep Time Saved</div>
                    <p className="text-sm text-slate-400">
                      SOC 2 and ISO 27001 audit prep reduced from 6-8 weeks to 1-2 weeks with pre-generated evidence bundles.
                    </p>
                  </div>

                  <div className="bg-slate-950 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="text-teal-400" size={24} />
                      <div className="text-2xl font-bold text-teal-400">100%</div>
                    </div>
                    <div className="text-slate-50 font-semibold mb-2">Evidence Coverage</div>
                    <p className="text-sm text-slate-400">
                      All deployments now have cryptographically signed evidence bundles with SLSA provenance attestations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg p-6">
                  <p className="text-slate-300 italic">
                    "AlDeci transformed our DevSecOps workflow from reactive firefighting to proactive risk management. The evidence automation alone saved us 300+ hours during our last SOC 2 audit."
                  </p>
                  <p className="text-slate-400 mt-2">— CISO, Global Financial Services Firm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 Template */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Shield className="text-blue-400" size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-50">Healthcare Technology Platform</h2>
                <p className="text-slate-400">HIPAA compliant • 1,200+ employees • Multi-region deployment</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Challenge</h3>
                <p className="text-slate-300 leading-relaxed">
                  A healthcare technology platform processing sensitive patient data needed to maintain HIPAA compliance while scaling from 50 to 200 microservices. Manual security reviews were creating deployment bottlenecks, and the compliance team struggled to maintain audit trails across multiple cloud regions and CI/CD pipelines.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Approach</h3>
                <p className="text-slate-300 leading-relaxed">
                  Implemented AlDeci as a security gate in GitLab CI pipelines with automated SBOM generation, SARIF ingestion from multiple scanners, and business context tagging for PHI-handling services. Configured compliance module for HIPAA Security Rule mapping and enabled evidence bundles with 7-year retention for audit readiness.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Outcomes</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Zero security-related deployment delays</strong> after 3-month stabilization period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>65% reduction in manual security reviews</strong> through automated risk-based triage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Complete audit trail</strong> for all 200+ microservices with cryptographic verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>HIPAA audit passed</strong> with zero findings related to security monitoring or evidence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Case Study 3 Template */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                <Shield className="text-teal-400" size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-50">Australian Government Agency</h2>
                <p className="text-slate-400">Essential Eight compliance • 800+ employees • On-premises deployment</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Challenge</h3>
                <p className="text-slate-300 leading-relaxed">
                  A government agency required Essential Eight Maturity Level 3 compliance with on-premises deployment constraints. Existing security tools lacked integration, and manual evidence collection for quarterly assessments consumed significant resources from already-stretched security teams.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Approach</h3>
                <p className="text-slate-300 leading-relaxed">
                  Deployed AlDeci on-premises with air-gapped configuration, integrated with existing Tenable and SonarQube scanners, and configured Essential Eight compliance module. Implemented automated evidence generation for all eight mitigation strategies with quarterly reporting dashboards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Outcomes</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Achieved Maturity Level 3</strong> across all eight mitigation strategies within 6 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>75% reduction in quarterly assessment effort</strong> through automated evidence collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Real-time compliance dashboards</strong> for executive reporting and continuous monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span><strong>On-premises deployment</strong> met strict data sovereignty and air-gap requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-6">
            Ready to Transform Your DevSecOps?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join these enterprises in automating trust and proving security with AlDeci.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Book a Demo
            </a>
            <a
              href="/partners/design"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
            >
              Join Design Partner Program
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
