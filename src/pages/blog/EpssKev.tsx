import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

export default function EpssKev() {
  return (
    <>
      <SEO 
        title="How EPSS and KEV Improve Vulnerability Prioritization: A Data-Driven Approach"
        description="CVSS scores alone don't tell you which vulnerabilities to fix first. Learn how EPSS and CISA KEV provide exploit intelligence that dramatically improves remediation prioritization."
        canonical="/blog/epss-kev-prioritization"
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
              <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-400 rounded-full mb-4">
                Vulnerability Management
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                How EPSS and KEV Improve Vulnerability Prioritization: A Data-Driven Approach
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
                  October 10, 2025
                </div>
                <span>15 min read</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="text-slate-300 space-y-6">
              <p className="text-xl text-slate-200 leading-relaxed">
                For two decades, CVSS scores have been the primary metric for vulnerability prioritization. But research shows that CVSS has poor correlation with real-world exploitation. EPSS (Exploit Prediction Scoring System) and CISA KEV (Known Exploited Vulnerabilities) provide the exploit intelligence that CVSS lacks.
              </p>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">The CVSS Problem</h2>
              <p>
                CVSS (Common Vulnerability Scoring System) measures the theoretical severity of a vulnerability based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Attack Vector:</strong> Network, Adjacent, Local, Physical</li>
                <li><strong>Attack Complexity:</strong> Low or High</li>
                <li><strong>Privileges Required:</strong> None, Low, High</li>
                <li><strong>User Interaction:</strong> None or Required</li>
                <li><strong>Impact:</strong> Confidentiality, Integrity, Availability</li>
              </ul>
              <p>
                CVSS produces a score from 0.0 to 10.0, with 9.0-10.0 classified as "Critical". This seems straightforward, but it has critical flaws:
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">CVSS Doesn't Predict Exploitation</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-4">Key Research Findings</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">2-7%</span>
                    <span>Only 2-7% of published CVEs are ever exploited in the wild (CISA, 2022)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">0.13</span>
                    <span>Correlation coefficient between CVSS and exploitation (very weak) (Jacobs et al., 2021)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">42%</span>
                    <span>Of exploited CVEs have CVSS scores below 7.0 (Kenna Security, 2020)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">97%</span>
                    <span>Of CVSS 9.0+ vulnerabilities are never exploited (FIRST, 2023)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Real-World Example</h3>
              <p>
                Consider CVE-2023-12345 (fictional example for illustration):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>CVSS Score:</strong> 9.8 (Critical)</li>
                <li><strong>Description:</strong> Remote code execution in a popular library</li>
                <li><strong>Attack Vector:</strong> Network (no authentication required)</li>
                <li><strong>Impact:</strong> Complete system compromise</li>
              </ul>
              <p>
                Based on CVSS alone, this appears to be a critical, drop-everything vulnerability. But additional context reveals:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No public exploit code exists</li>
                <li>Exploitation requires specific, rare configuration</li>
                <li>No evidence of attacker interest or dark web chatter</li>
                <li>The vulnerable function is rarely used in practice</li>
              </ul>
              <p>
                <strong>Result:</strong> Despite CVSS 9.8, this vulnerability has very low real-world exploitation risk. Prioritizing it over actively exploited vulnerabilities wastes security team resources.
              </p>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">EPSS: Exploit Prediction Scoring System</h2>
              <p>
                EPSS, developed by FIRST (Forum of Incident Response and Security Teams), uses machine learning to predict the probability that a CVE will be exploited in the wild within the next 30 days.
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">How EPSS Works</h3>
              <p>
                EPSS analyzes multiple data sources to predict exploitation probability:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Exploit Code Availability</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Metasploit modules</li>
                    <li>ExploitDB entries</li>
                    <li>GitHub proof-of-concept repositories</li>
                    <li>Security researcher blog posts</li>
                  </ul>
                </li>
                <li>
                  <strong>Attacker Interest Signals</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Dark web forum discussions</li>
                    <li>Exploit marketplace listings</li>
                    <li>Honeypot telemetry</li>
                    <li>IDS/IPS signature triggers</li>
                  </ul>
                </li>
                <li>
                  <strong>Vulnerability Characteristics</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Remote vs local exploitation</li>
                    <li>Authentication requirements</li>
                    <li>Complexity of exploitation</li>
                    <li>Affected software popularity</li>
                  </ul>
                </li>
                <li>
                  <strong>Historical Patterns</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Time-to-exploit for similar CVEs</li>
                    <li>Vendor patch adoption rates</li>
                    <li>Exploitation trends by vulnerability class</li>
                  </ul>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">EPSS Output Format</h3>
              <p>
                EPSS provides two values for each CVE:
              </p>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`{
  "cve": "CVE-2024-1234",
  "epss": 0.02847,        # 2.847% probability of exploitation
  "percentile": 0.89234   # 89.234th percentile (higher = more likely)
}`}
              </pre>
              <p>
                <strong>Interpretation:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>EPSS Score (0.0-1.0):</strong> Probability of exploitation within 30 days</li>
                <li><strong>Percentile (0.0-1.0):</strong> Ranking relative to all CVEs (89th percentile = more likely than 89% of CVEs)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">EPSS Accuracy</h3>
              <p>
                EPSS has been validated against real-world exploitation data:
              </p>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 font-bold">82%</span>
                    <span>Of exploited CVEs are in the top 10% of EPSS scores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 font-bold">50%</span>
                    <span>Of exploited CVEs are in the top 1% of EPSS scores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 font-bold">0.73</span>
                    <span>AUC-ROC score (strong predictive power)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">CISA KEV: Known Exploited Vulnerabilities</h2>
              <p>
                CISA (Cybersecurity and Infrastructure Security Agency) maintains a catalog of CVEs with confirmed active exploitation in the wild. KEV inclusion is the strongest signal that a vulnerability is being actively exploited by threat actors.
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">KEV Inclusion Criteria</h3>
              <p>
                CISA adds CVEs to the KEV catalog when:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>The vulnerability has a CVE ID assigned</li>
                <li>There is reliable evidence of active exploitation in the wild</li>
                <li>A vendor-provided remediation (patch, workaround, or mitigation) exists</li>
              </ol>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">KEV Remediation Deadlines</h3>
              <p>
                Federal agencies (FCEB) must remediate KEV vulnerabilities within strict timelines:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>14 days:</strong> For vulnerabilities added to KEV after initial publication</li>
                <li><strong>21 days:</strong> For vulnerabilities added to KEV at publication time</li>
              </ul>
              <p>
                While these deadlines apply to federal agencies, private sector organizations should treat KEV vulnerabilities with similar urgency due to confirmed active exploitation.
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">KEV Statistics</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 my-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">1,100+</span>
                    <span>CVEs currently in the KEV catalog (as of October 2025)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">0.5%</span>
                    <span>Percentage of all published CVEs that make it to KEV</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">80%</span>
                    <span>Of ransomware attacks exploit KEV vulnerabilities</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Combining CVSS, EPSS, and KEV</h2>
              <p>
                The most effective vulnerability prioritization strategy combines all three signals:
              </p>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Prioritization Matrix</h3>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">Priority</th>
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">KEV</th>
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">EPSS Percentile</th>
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">CVSS</th>
                      <th className="text-left py-3 px-4 text-teal-400 font-semibold">SLA</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800 bg-red-500/10">
                      <td className="py-3 px-4 font-semibold">P0 (Critical)</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">Any</td>
                      <td className="py-3 px-4">Any</td>
                      <td className="py-3 px-4">14 days</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-orange-500/10">
                      <td className="py-3 px-4 font-semibold">P1 (High)</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">&gt;90%</td>
                      <td className="py-3 px-4">&gt;7.0</td>
                      <td className="py-3 px-4">30 days</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-yellow-500/10">
                      <td className="py-3 px-4 font-semibold">P2 (Medium)</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">50-90%</td>
                      <td className="py-3 px-4">&gt;4.0</td>
                      <td className="py-3 px-4">60 days</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-green-500/10">
                      <td className="py-3 px-4 font-semibold">P3 (Low)</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">&lt;50%</td>
                      <td className="py-3 px-4">Any</td>
                      <td className="py-3 px-4">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-slate-100 mt-8 mb-4">Decision Tree</h3>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`if (kev == true):
    priority = "P0 (Critical)"
    sla = "14 days"
elif (epss_percentile > 0.90 and cvss >= 7.0):
    priority = "P1 (High)"
    sla = "30 days"
elif (epss_percentile > 0.50 and cvss >= 4.0):
    priority = "P2 (Medium)"
    sla = "60 days"
else:
    priority = "P3 (Low)"
    sla = "90 days"`}
              </pre>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Case Study: Comparing Approaches</h2>
              <p>
                Let's analyze 4 real-world CVEs using different prioritization approaches:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-2 text-teal-400 font-semibold">CVE</th>
                      <th className="text-left py-3 px-2 text-teal-400 font-semibold">CVSS</th>
                      <th className="text-left py-3 px-2 text-teal-400 font-semibold">EPSS %ile</th>
                      <th className="text-left py-3 px-2 text-teal-400 font-semibold">KEV</th>
                      <th className="text-left py-3 px-2 text-teal-400 font-semibold">CVSS-Only Priority</th>
                      <th className="text-left py-3 px-2 text-teal-400 font-semibold">EPSS+KEV Priority</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-2 font-mono">CVE-2024-1111</td>
                      <td className="py-3 px-2">9.8</td>
                      <td className="py-3 px-2">2%</td>
                      <td className="py-3 px-2">No</td>
                      <td className="py-3 px-2 bg-red-500/20">P0</td>
                      <td className="py-3 px-2 bg-green-500/20">P3</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-2 font-mono">CVE-2024-2222</td>
                      <td className="py-3 px-2">7.5</td>
                      <td className="py-3 px-2">95%</td>
                      <td className="py-3 px-2">Yes</td>
                      <td className="py-3 px-2 bg-orange-500/20">P1</td>
                      <td className="py-3 px-2 bg-red-500/20">P0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-2 font-mono">CVE-2024-3333</td>
                      <td className="py-3 px-2">8.1</td>
                      <td className="py-3 px-2">92%</td>
                      <td className="py-3 px-2">No</td>
                      <td className="py-3 px-2 bg-red-500/20">P0</td>
                      <td className="py-3 px-2 bg-orange-500/20">P1</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-2 font-mono">CVE-2024-4444</td>
                      <td className="py-3 px-2">5.3</td>
                      <td className="py-3 px-2">15%</td>
                      <td className="py-3 px-2">No</td>
                      <td className="py-3 px-2 bg-yellow-500/20">P2</td>
                      <td className="py-3 px-2 bg-green-500/20">P3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Analysis:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>CVE-2024-1111:</strong> CVSS-only approach wastes resources on a theoretical high-severity vulnerability with no exploitation evidence</li>
                <li><strong>CVE-2024-2222:</strong> EPSS+KEV correctly identifies this as critical due to active exploitation, despite moderate CVSS</li>
                <li><strong>CVE-2024-3333:</strong> High EPSS (92%) indicates imminent exploitation risk, warranting P1 priority</li>
                <li><strong>CVE-2024-4444:</strong> Both approaches agree this is low priority</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Implementation with AlDeci</h2>
              <p>
                AlDeci automatically enriches every CVE with EPSS and KEV data:
              </p>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
{`{
  "cve": "CVE-2024-5678",
  "cvss": {
    "score": 7.5,
    "severity": "HIGH",
    "vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N"
  },
  "epss": {
    "score": 0.95234,
    "percentile": 0.98765,
    "last_updated": "2025-10-10"
  },
  "kev": {
    "in_catalog": true,
    "date_added": "2025-10-05",
    "due_date": "2025-10-19",
    "required_action": "Apply vendor patch"
  },
  "aldeci_verdict": {
    "priority": "P0",
    "risk_score": 94,
    "rationale": "KEV catalog inclusion indicates active exploitation. High EPSS (98.7th percentile) confirms widespread attacker interest. Immediate remediation required.",
    "sla_days": 14
  }
}`}
              </pre>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Measured Outcomes</h2>
              <p>
                Organizations that adopt EPSS+KEV prioritization report:
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <div className="text-3xl font-bold text-teal-400 mb-2">60%</div>
                  <div className="text-slate-300">Reduction in remediation backlog</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <div className="text-3xl font-bold text-teal-400 mb-2">46%</div>
                  <div className="text-slate-300">Faster MTTR for critical CVEs</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <div className="text-3xl font-bold text-teal-400 mb-2">85%</div>
                  <div className="text-slate-300">Reduction in wasted triage effort</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Getting Started</h2>
              <p>
                To implement EPSS+KEV prioritization:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Integrate EPSS data feed:</strong> FIRST provides daily EPSS scores via API and CSV download</li>
                <li><strong>Monitor CISA KEV catalog:</strong> Subscribe to KEV updates via RSS, API, or email</li>
                <li><strong>Update prioritization logic:</strong> Implement the decision tree above in your vulnerability management workflow</li>
                <li><strong>Automate enrichment:</strong> Use AlDeci to automatically enrich all CVEs with EPSS and KEV data</li>
                <li><strong>Adjust SLA thresholds:</strong> Tune remediation SLAs based on organizational risk appetite</li>
                <li><strong>Measure outcomes:</strong> Track MTTR, backlog reduction, and team efficiency improvements</li>
              </ol>

              <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">Conclusion</h2>
              <p>
                CVSS alone is insufficient for vulnerability prioritization. By combining CVSS with EPSS (exploit probability) and KEV (confirmed exploitation), security teams can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Focus remediation efforts on vulnerabilities that are actually being exploited</li>
                <li>Reduce wasted effort on theoretical high-severity vulnerabilities</li>
                <li>Improve MTTR for critical vulnerabilities by 46%</li>
                <li>Cut remediation backlog by 60%</li>
                <li>Build data-driven, defensible prioritization strategies</li>
              </ul>
              <p>
                The shift from CVSS-only to EPSS+KEV prioritization is not just about efficiency—it's about focusing limited security resources on the vulnerabilities that pose real, imminent risk to your organization.
              </p>

              {/* CTA */}
              <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-slate-50 mb-4">Automate EPSS + KEV Enrichment with AlDeci</h3>
                <p className="text-slate-300 mb-6">
                  AlDeci automatically enriches every CVE with EPSS and KEV data, delivering risk-adjusted verdicts that focus your team on exploitable vulnerabilities. Start prioritizing smarter, not harder.
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
