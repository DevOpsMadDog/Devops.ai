import { SEO } from '../components/SEO';
import { Shield, Lock, AlertTriangle } from 'lucide-react';

export function Security() {
  return (
    <>
      <SEO
        title="Security & Responsible Disclosure | DevOps.ai"
        description="Security practices and responsible disclosure policy for DevOps.ai."
      />

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-slate-50 mb-6">Security & Responsible Disclosure</h1>
          <p className="text-slate-400 mb-12">Last updated: October 26, 2025</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">Our Commitment to Security</h2>
              <p className="leading-relaxed">
                Security is at the core of DevOps.ai. As a platform that processes sensitive security artifacts and generates compliance evidence, we implement defense-in-depth strategies and follow industry best practices to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">Security Measures</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                      <Lock className="text-teal-400" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50">Encryption</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    <li>Data at rest: AES-256 encryption</li>
                    <li>Data in transit: TLS 1.3 with perfect forward secrecy</li>
                    <li>Evidence bundles: RSA-SHA256 cryptographic signatures</li>
                    <li>Optional Fernet encryption for sensitive payloads</li>
                  </ul>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Shield className="text-blue-400" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50">Access Control</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    <li>Role-based access control (RBAC)</li>
                    <li>JWT authentication with short-lived tokens</li>
                    <li>API key rotation and management</li>
                    <li>Multi-tenant isolation</li>
                    <li>Least-privilege principle enforcement</li>
                  </ul>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                      <Shield className="text-teal-400" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50">Infrastructure Security</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    <li>Isolated processing containers with resource limits</li>
                    <li>Network segmentation and firewall rules</li>
                    <li>Regular security patches and updates</li>
                    <li>Intrusion detection and monitoring</li>
                    <li>DDoS protection and rate limiting</li>
                  </ul>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Lock className="text-blue-400" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50">Audit & Compliance</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    <li>Immutable audit logs for all operations</li>
                    <li>Configurable retention policies (90 days to 7 years)</li>
                    <li>SOC 2 Type II controls implementation</li>
                    <li>Regular penetration testing</li>
                    <li>Third-party security assessments</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">Secure Development Practices</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Secure Software Development Lifecycle (SSDLC)</li>
                <li>Code review requirements for all changes</li>
                <li>Automated security scanning (SAST, DAST, SCA)</li>
                <li>Dependency vulnerability monitoring</li>
                <li>Secrets scanning and prevention</li>
                <li>Security training for all team members</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">Incident Response</h2>
              <p className="leading-relaxed mb-4">
                We maintain a comprehensive incident response plan that includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>24/7 security monitoring and alerting</li>
                <li>Defined escalation procedures</li>
                <li>Incident containment and remediation protocols</li>
                <li>Customer notification within 72 hours of confirmed breach</li>
                <li>Post-incident analysis and improvement</li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-red-400" size={32} />
                <h2 className="text-3xl font-semibold text-slate-50">Responsible Disclosure Policy</h2>
              </div>
              
              <p className="leading-relaxed mb-6">
                We welcome security researchers and the community to help us maintain the security of our platform. If you discover a security vulnerability, please follow our responsible disclosure process.
              </p>

              <h3 className="text-xl font-semibold text-teal-400 mb-4">Reporting a Vulnerability</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-50 mb-2">1. Contact Us Securely</h4>
                  <p className="text-slate-400">
                    Email: <a href="mailto:security@devops.ai" className="text-teal-400 hover:text-teal-300">security@devops.ai</a><br />
                    PGP Key: Available upon request
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-50 mb-2">2. Provide Detailed Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-400">
                    <li>Description of the vulnerability</li>
                    <li>Steps to reproduce</li>
                    <li>Potential impact assessment</li>
                    <li>Proof of concept (if applicable)</li>
                    <li>Your contact information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-50 mb-2">3. Allow Time for Response</h4>
                  <p className="text-slate-400">
                    We will acknowledge receipt within 48 hours and provide an initial assessment within 5 business days.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-teal-400 mb-4">Our Commitments</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>We will not pursue legal action against researchers who follow this policy</li>
                <li>We will acknowledge your contribution (with your permission)</li>
                <li>We will keep you informed of our progress</li>
                <li>We will work with you to understand and resolve the issue</li>
                <li>We will publicly disclose the issue after remediation (coordinated disclosure)</li>
              </ul>

              <h3 className="text-xl font-semibold text-teal-400 mb-4 mt-6">Safe Harbor</h3>
              <p className="text-slate-400 mb-4">
                When conducting security research according to this policy, we consider your activities authorized and will not initiate legal action. We ask that you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Make a good faith effort to avoid privacy violations and data destruction</li>
                <li>Do not access or modify data beyond what is necessary to demonstrate the vulnerability</li>
                <li>Do not perform attacks that could harm the availability of our services</li>
                <li>Do not publicly disclose the vulnerability before we have had a chance to remediate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">Bug Bounty Program</h2>
              <p className="leading-relaxed">
                We are planning to launch a formal bug bounty program in 2026. In the meantime, we may offer recognition and rewards for significant vulnerability discoveries on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">Security Certifications & Compliance</h2>
              <p className="leading-relaxed mb-4">
                We are working towards the following certifications:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>SOC 2 Type II (in progress)</li>
                <li>ISO 27001 (planned 2026)</li>
                <li>APRA CPS 234 alignment (for Australian customers)</li>
                <li>Essential Eight Maturity Level 3 (for government customers)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">Security Updates</h2>
              <p className="leading-relaxed">
                We publish security advisories for significant vulnerabilities affecting our platform. Subscribe to our security mailing list to receive notifications:
              </p>
              <p className="mt-4">
                <a href="mailto:security-announce@devops.ai" className="text-teal-400 hover:text-teal-300">security-announce@devops.ai</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">Questions?</h2>
              <p className="leading-relaxed">
                For general security questions or concerns, contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> <a href="mailto:security@devops.ai" className="text-teal-400 hover:text-teal-300">security@devops.ai</a><br />
                <strong>Address:</strong> Sydney, Australia
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
