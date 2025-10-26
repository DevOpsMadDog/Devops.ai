import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';

export function Resources() {
  return (
    <>
      <SEO
        title="Resources | DevOps.ai"
        description="Explore our blog, guides, and whitepapers on DevSecOps automation, evidence-as-code, and compliance."
        ogImage="/images/og-resources.png"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              Resources
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Technical insights, guides, and best practices for DevSecOps automation and evidence-as-code.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog */}
            <Link
              to="/blog"
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-teal-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-50 mb-4 group-hover:text-teal-400 transition-colors">
                Blog
              </h2>
              <p className="text-slate-400 mb-6">
                Technical articles on DevSecOps automation, risk prioritization, compliance evidence, and platform engineering.
              </p>
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                Read Articles <ArrowRight size={20} />
              </div>
            </Link>

            {/* Guides & Whitepapers */}
            <Link
              to="/resources/guides"
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-50 mb-4 group-hover:text-teal-400 transition-colors">
                Guides & Whitepapers
              </h2>
              <p className="text-slate-400 mb-6">
                In-depth technical guides, whitepapers, and implementation resources for AlDeci and DevSecOps best practices.
              </p>
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                Browse Guides <ArrowRight size={20} />
              </div>
            </Link>

            {/* Documentation */}
            <a
              href="https://deepwiki.com/DevOpsMadDog/Fixops"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-teal-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-50 mb-4 group-hover:text-teal-400 transition-colors">
                Documentation
              </h2>
              <p className="text-slate-400 mb-6">
                Complete technical documentation for AlDeci architecture, APIs, integrations, and deployment guides.
              </p>
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                View Docs <ArrowRight size={20} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Featured Content</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Blog Post */}
            <Link
              to="/blog"
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
                <BookOpen className="text-teal-400" size={48} />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal-400 mb-2">Blog Post</div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">
                  Evidence-as-Code in Practice
                </h3>
                <p className="text-slate-400 text-sm">
                  How to implement cryptographically signed evidence bundles in your CI/CD pipelines for audit-ready compliance.
                </p>
              </div>
            </Link>

            {/* Featured Guide */}
            <Link
              to="/resources/guides"
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center">
                <FileText className="text-blue-400" size={48} />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-400 mb-2">Whitepaper</div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">
                  AlDeci Risk Model Deep Dive
                </h3>
                <p className="text-slate-400 text-sm">
                  Technical analysis of composite risk scoring using EPSS, KEV, version lag, and business context.
                </p>
              </div>
            </Link>

            {/* Featured Guide */}
            <Link
              to="/resources/guides"
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
                <FileText className="text-teal-400" size={48} />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal-400 mb-2">Implementation Pack</div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">
                  APRA CPS 234 Automation Pack
                </h3>
                <p className="text-slate-400 text-sm">
                  Complete guide to automating APRA CPS 234 compliance for Australian financial institutions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Book a demo to see AlDeci in action or join our design partner program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Book a Demo
            </Link>
            <Link
              to="/partners/design"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
            >
              Join Design Partners
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
