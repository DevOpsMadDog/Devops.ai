import { SEO } from '../components/SEO';
import { CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

export function DesignPartners() {

  return (
    <>
      <SEO
        title="Design Partner Program | DevOps.ai"
        description="Join our design partner program to shape the future of DevSecOps automation and evidence-as-code."
        ogImage="/images/og-partners.png"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              Design Partner Program
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Shape the future of DevSecOps automation and evidence-as-code. Join enterprises building with AlDeci from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Who Should Apply</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Multi-Scanner Enterprises</h3>
              <p className="text-slate-400">
                Running 3+ security scanners (SAST, DAST, SCA, CNAPP) and struggling with alert fatigue and false positives.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Regulated Industries</h3>
              <p className="text-slate-400">
                Financial services, healthcare, government, or critical infrastructure with SOC 2, ISO 27001, APRA CPS 234, or Essential Eight requirements.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Heavy Audit Burden</h3>
              <p className="text-slate-400">
                Spending weeks preparing for audits, manually collecting evidence, and struggling to prove security controls.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">DevSecOps Leaders</h3>
              <p className="text-slate-400">
                Platform engineering teams building golden paths and looking to automate security gates with evidence trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">What You Get</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Early Access & Influence</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Early feature access</strong>: Get new capabilities before general availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Roadmap influence</strong>: Shape product direction based on your real-world needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Priority support</strong>: Direct access to engineering team via dedicated Slack channel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Custom integrations</strong>: Help us build connectors for your specific tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-teal-400 mb-6">Commercial Benefits</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Discounted enterprise pricing</strong>: Lock in preferential rates for 3 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Joint case study</strong>: Co-marketing opportunity to showcase your success</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Reference customer status</strong>: Recognition as an innovation leader</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Conference speaking</strong>: Present your DevSecOps transformation at industry events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Ask */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">What We Ask</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <ul className="space-y-6 text-slate-300">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-50 mb-2">Sanitized Datasets</h4>
                    <p className="text-slate-400">
                      Share anonymized SBOM, SARIF, and CVE data for correlation testing. We'll sign NDAs and work with your security team to ensure compliance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-50 mb-2">Monthly Feedback Sessions</h4>
                    <p className="text-slate-400">
                      60-minute calls with product and engineering teams to review features, discuss challenges, and prioritize roadmap items.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-50 mb-2">Success Metrics</h4>
                    <p className="text-slate-400">
                      Track and share key metrics: MTTR (mean time to remediation), false-positive rate, audit prep hours saved, scanner coverage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-50 mb-2">6-Month Commitment</h4>
                    <p className="text-slate-400">
                      Minimum 6-month engagement to properly evaluate AlDeci in production workflows and measure impact.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Apply to Join</h2>

          <form 
            action="https://formsubmit.co/contact@devops.ai" 
            method="POST"
            className="bg-slate-950 border border-slate-800 rounded-xl p-8 space-y-6"
          >
            {/* Hidden fields for Formsubmit.co configuration */}
            <input type="hidden" name="_subject" value="DevOps.ai Design Partner Application" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/thank-you" />
            <input type="hidden" name="form_type" value="design_partner" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-slate-300 mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                >
                  <option value="">Select industry</option>
                  <option value="financial">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="government">Government</option>
                  <option value="technology">Technology</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-slate-300 mb-2">
                  Company Size *
                </label>
                <select
                  id="size"
                  name="size"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                >
                  <option value="">Select size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1,000 employees</option>
                  <option value="1001-5000">1,001-5,000 employees</option>
                  <option value="5000+">5,000+ employees</option>
                </select>
              </div>

              <div>
                <label htmlFor="clouds" className="block text-sm font-medium text-slate-300 mb-2">
                  Cloud Platforms *
                </label>
                <input
                  type="text"
                  id="clouds"
                  name="clouds"
                  required
                  placeholder="e.g., AWS, Azure, GCP"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="scanners" className="block text-sm font-medium text-slate-300 mb-2">
                Security Scanners in Use *
              </label>
              <input
                type="text"
                id="scanners"
                name="scanners"
                required
                placeholder="e.g., Snyk, Wiz, Tenable, SonarQube"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="frameworks" className="block text-sm font-medium text-slate-300 mb-2">
                Compliance Frameworks *
              </label>
              <input
                type="text"
                id="frameworks"
                name="frameworks"
                required
                placeholder="e.g., SOC 2, ISO 27001, APRA CPS 234, Essential Eight"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="objectives" className="block text-sm font-medium text-slate-300 mb-2">
                Primary Objectives *
              </label>
              <textarea
                id="objectives"
                name="objectives"
                required
                rows={4}
                placeholder="What are your main goals? (e.g., reduce false positives, automate audit prep, improve MTTR)"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                Expected Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (within 1 month)</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6+months">6+ months</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-slate-300 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
