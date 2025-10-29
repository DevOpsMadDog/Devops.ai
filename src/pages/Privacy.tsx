import { SEO } from '../components/SEO';

export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | DevOps.ai"
        description="Privacy policy for DevOps.ai and AlDeci platform."
      />

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-slate-50 mb-6">Privacy Policy</h1>
          <p className="text-slate-400 mb-12">Last updated: October 26, 2025</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                DevOps.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AlDeci platform and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Account information (name, email, company)</li>
                <li>Security artifacts (SBOMs, SARIF files, CVE data)</li>
                <li>Business context and configuration data</li>
                <li>Support and communication records</li>
              </ul>

              <h3 className="text-xl font-semibold text-teal-400 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Usage data and analytics</li>
                <li>Log files and API access patterns</li>
                <li>Device and browser information</li>
                <li>IP addresses and geolocation data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and maintain AlDeci services</li>
                <li>Process security artifacts and generate evidence bundles</li>
                <li>Improve our products and develop new features</li>
                <li>Communicate with you about updates and support</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">4. Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Encryption at rest (AES-256) and in transit (TLS 1.3)</li>
                <li>Cryptographically signed evidence bundles (RSA-SHA256)</li>
                <li>Role-based access control (RBAC)</li>
                <li>Regular security audits and penetration testing</li>
                <li>Isolated processing environments</li>
                <li>Configurable retention policies (90 days to 7 years)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">5. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your data based on your subscription tier and compliance requirements. Demo mode retains data for 90 days, while Enterprise mode supports up to 7-year retention for regulatory compliance. You can request data deletion at any time, subject to legal retention requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">6. Data Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We do not sell your data. We may share information only in these circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers under strict confidentiality agreements</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">8. International Data Transfers</h2>
              <p className="leading-relaxed">
                We are based in Australia. If you access our services from outside Australia, your data may be transferred to and processed in Australia. We ensure appropriate safeguards are in place for international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">9. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use essential cookies for authentication and session management. We use privacy-friendly analytics that do not track individual users across sites. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes via email or through the platform. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">
                For privacy-related questions or to exercise your rights, contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> <a href="mailto:privacy@devopsai.co" className="text-teal-400 hover:text-teal-300">privacy@devopsai.co</a><br />
                <strong>Address:</strong> Sydney, Australia
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
