import { SEO } from '../components/SEO';
import { useState } from 'react';
import { Database, Shield, CheckCircle, TrendingUp } from 'lucide-react';

export function ComingSoon() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early research list signup:', email);
    alert('Thank you for your interest! We\'ll keep you updated on AI Data Quality for Multi-Agent LLMs.');
    setEmail('');
  };

  return (
    <>
      <SEO
        title="AI Data Quality for Multi-Agent LLMs - Coming Soon | DevOps.ai"
        description="Ensure reliable agent collaboration by validating data quality, provenance, and grounding across agent workflows."
        ogImage="/images/og-ai-data-quality.png"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-semibold mb-6">
              Coming 2026
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              Data Quality for Multi-Agent LLMs
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ensure reliable agent collaboration by validating data quality, provenance, and grounding across agent workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-50 mb-8 text-center">The Challenge</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              As organizations deploy multi-agent LLM systems for documentation, code generation, SOC operations, and decision support, a critical gap emerges: <strong className="text-slate-50">how do you ensure data quality, provenance, and grounding across agent workflows?</strong>
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our next product addresses this by providing dataset profiling, lineage tracking, retrieval quality scoring, agent-consensus validation, and hallucination defense—all with the same cryptographically signed audit trails that power AlDeci.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Planned Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Dataset Profiling & Lineage</h3>
              <p className="text-slate-400">
                Track data sources, transformations, and quality metrics across agent workflows with full lineage graphs.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Schema & PII Checks</h3>
              <p className="text-slate-400">
                Validate schema compliance, detect PII exposure, and enforce data governance policies automatically.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Retrieval Quality Scoring</h3>
              <p className="text-slate-400">
                Measure RAG retrieval accuracy, relevance, and context window utilization with automated scoring.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Agent-Consensus Validators</h3>
              <p className="text-slate-400">
                Cross-validate outputs across multiple agents to detect inconsistencies and improve reliability.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Hallucination Defense</h3>
              <p className="text-slate-400">
                Reference-checking against ground truth sources to flag and prevent hallucinated outputs.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Signed Audit Trail</h3>
              <p className="text-slate-400">
                Cryptographically signed records of prompts, context, outputs, and validation results for compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Target Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">Regulated AI Systems</h3>
              <p className="text-slate-300 mb-4">
                Financial services, healthcare, and government organizations deploying LLM agents need provenance tracking and quality validation for regulatory compliance.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Audit trails for AI decisions</li>
                <li>• Data lineage for compliance</li>
                <li>• Quality metrics for risk assessment</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">Documentation Assistants</h3>
              <p className="text-slate-300 mb-4">
                AI agents generating technical documentation, runbooks, and knowledge base articles need grounding validation to prevent hallucinations.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Reference verification</li>
                <li>• Consistency checking</li>
                <li>• Version control integration</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">SDLC Copilots</h3>
              <p className="text-slate-300 mb-4">
                Code generation, review, and testing agents need quality validation to ensure generated code meets security and reliability standards.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Code quality scoring</li>
                <li>• Security pattern validation</li>
                <li>• Test coverage analysis</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">SOC Copilots</h3>
              <p className="text-slate-300 mb-4">
                Security operations agents analyzing alerts and incidents need data quality validation to prevent false conclusions and missed threats.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Alert correlation accuracy</li>
                <li>• Threat intelligence grounding</li>
                <li>• Incident response validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with AlDeci */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-50 mb-8 text-center">Built on the DevOps.ai Platform</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              AI Data Quality will leverage the same platform architecture as AlDeci:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-2">Shared Evidence Engine</h4>
                <p className="text-slate-400">
                  Cryptographically signed audit trails with the same 7-year retention and compliance mapping.
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-2">Push-Based Ingestion</h4>
                <p className="text-slate-400">
                  Same minimal-connector architecture for agent outputs, datasets, and validation results.
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-2">Overlay Configuration</h4>
                <p className="text-slate-400">
                  Enable/disable modules based on your needs: profiling, lineage, validation, hallucination defense.
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-2">On-Prem Deployment</h4>
                <p className="text-slate-400">
                  Same air-gap friendly, on-premises deployment options for regulated environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Research List */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-slate-50 mb-6">
              Join the Early Research List
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Be the first to know when AI Data Quality for Multi-Agent LLMs launches. We'll share research updates, early access opportunities, and design partner invitations.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-teal-500 text-slate-950 rounded-lg font-semibold hover:bg-teal-400 transition-all whitespace-nowrap"
                >
                  Join List
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-6">
            Start with AlDeci Today
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            While AI Data Quality is in development, get started with AlDeci for DevSecOps automation and evidence-as-code.
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
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
