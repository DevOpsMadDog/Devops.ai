import { SEO } from '../components/SEO';
import { useState } from 'react';
import { Mail, MessageSquare, Calendar } from 'lucide-react';

export function Contact() {
  const [activeForm, setActiveForm] = useState<'demo' | 'access' | 'general'>('demo');

  return (
    <>
      <SEO
        title="Contact & Book a Demo | DevOps.ai"
        description="Book a demo of AlDeci or get in touch with our team to discuss your DevSecOps automation needs."
        ogImage="/images/og-contact.png"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              Get in Touch
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Book a demo, request access to AlDeci, or discuss your DevSecOps automation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <button
              onClick={() => setActiveForm('demo')}
              className={`bg-slate-900 border rounded-xl p-8 text-left transition-all ${
                activeForm === 'demo' ? 'border-teal-500 bg-teal-500/5' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-2">Book a Demo</h3>
              <p className="text-slate-400">
                Schedule a personalized demo of AlDeci with our team to see how it works with your tools and workflows.
              </p>
            </button>

            <button
              onClick={() => setActiveForm('access')}
              className={`bg-slate-900 border rounded-xl p-8 text-left transition-all ${
                activeForm === 'access' ? 'border-teal-500 bg-teal-500/5' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-2">Request AlDeci Access</h3>
              <p className="text-slate-400">
                Get early access to AlDeci and start automating your DevSecOps workflows with evidence-as-code.
              </p>
            </button>

            <button
              onClick={() => setActiveForm('general')}
              className={`bg-slate-900 border rounded-xl p-8 text-left transition-all ${
                activeForm === 'general' ? 'border-teal-500 bg-teal-500/5' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-2">General Inquiry</h3>
              <p className="text-slate-400">
                Have questions about DevOps.ai, partnerships, or other topics? Send us a message.
              </p>
            </button>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <form 
              action="https://formsubmit.co/contact@devops.ai" 
              method="POST"
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6"
            >
              {/* Hidden fields for Formsubmit.co configuration */}
              <input type="hidden" name="_subject" value={`DevOps.ai ${activeForm === 'demo' ? 'Demo Request' : activeForm === 'access' ? 'Access Request' : 'General Inquiry'}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/thank-you" />
              <input type="hidden" name="form_type" value={activeForm} />
              
              <div>
                <h2 className="text-2xl font-bold text-slate-50 mb-2">
                  {activeForm === 'demo' && 'Book a Demo'}
                  {activeForm === 'access' && 'Request AlDeci Access'}
                  {activeForm === 'general' && 'Send Us a Message'}
                </h2>
                <p className="text-slate-400">
                  {activeForm === 'demo' && 'Fill out the form below and we\'ll schedule a personalized demo at your convenience.'}
                  {activeForm === 'access' && 'Tell us about your use case and we\'ll get you set up with AlDeci access.'}
                  {activeForm === 'general' && 'We\'ll respond to your inquiry within 1 business day.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
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
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="">Select role</option>
                    <option value="ciso">CISO / Security Leader</option>
                    <option value="security-engineer">Security Engineer</option>
                    <option value="devops-engineer">DevOps Engineer</option>
                    <option value="platform-engineer">Platform Engineer</option>
                    <option value="compliance">Compliance / GRC</option>
                    <option value="developer">Developer</option>
                    <option value="executive">Executive / C-Level</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {(activeForm === 'access' || activeForm === 'general') && (
                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-slate-300 mb-2">
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="aldeci">AlDeci</option>
                    <option value="ai-data-quality">AI Data Quality (Coming Soon)</option>
                    <option value="both">Both</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder={
                    activeForm === 'demo'
                      ? 'Tell us about your current DevSecOps setup, challenges, and what you\'d like to see in the demo...'
                      : activeForm === 'access'
                      ? 'Describe your use case, team size, and timeline for getting started with AlDeci...'
                      : 'Your message...'
                  }
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
              >
                {activeForm === 'demo' && 'Request Demo'}
                {activeForm === 'access' && 'Request Access'}
                {activeForm === 'general' && 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-50 mb-8">Other Ways to Reach Us</h2>
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="text-teal-400" size={24} />
                <h3 className="text-xl font-semibold text-slate-50">Email</h3>
              </div>
              <a href="mailto:contact@devops.ai" className="text-teal-400 hover:text-teal-300 text-lg transition-colors">
                contact@devops.ai
              </a>
              <p className="text-slate-400 mt-4">
                We typically respond within 1 business day
              </p>
            </div>

            <div className="mt-8 text-slate-400">
              <p>Based in Sydney, Australia</p>
              <p className="mt-2">Available for global partnerships and enterprise deployments</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
