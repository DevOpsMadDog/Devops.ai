import { SEO } from '../components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Evidence-as-Code in Practice: Building Audit-Ready CI/CD Pipelines',
      excerpt: 'Learn how to implement cryptographically signed evidence bundles in your CI/CD pipelines for automated compliance and audit readiness. We explore the architecture, implementation patterns, and real-world examples from enterprises using AlDeci.',
      author: 'Shivakumaar Umasudan',
      date: 'October 20, 2025',
      category: 'DevSecOps',
      readTime: '12 min read'
    },
    {
      id: 2,
      title: 'CTEM + CNAPP Without the Noise: Context-Aware Risk Prioritization',
      excerpt: 'Continuous Threat Exposure Management (CTEM) and Cloud-Native Application Protection Platforms (CNAPP) generate thousands of findings. Discover how combining EPSS, KEV, business context, and SBOM correlation cuts through the noise to focus on what matters.',
      author: 'Shivakumaar Umasudan',
      date: 'October 15, 2025',
      category: 'Risk Management',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'How EPSS and KEV Improve Vulnerability Prioritization: A Data-Driven Approach',
      excerpt: 'CVSS scores alone don\'t tell you which vulnerabilities to fix first. Learn how EPSS (Exploit Prediction Scoring System) and CISA KEV (Known Exploited Vulnerabilities) provide exploit intelligence that dramatically improves remediation prioritization.',
      author: 'Shivakumaar Umasudan',
      date: 'October 10, 2025',
      category: 'Vulnerability Management',
      readTime: '15 min read'
    },
    {
      id: 4,
      title: 'Designing Golden Paths for DevSecOps: Platform Engineering Meets Security',
      excerpt: 'Golden paths make secure defaults easy and insecure shortcuts hard. Explore how platform engineering teams are building self-service DevSecOps workflows with automated security gates, evidence generation, and compliance mapping built in.',
      author: 'Shivakumaar Umasudan',
      date: 'October 5, 2025',
      category: 'Platform Engineering',
      readTime: '14 min read'
    }
  ];

  return (
    <>
      <SEO
        title="Blog | DevOps.ai"
        description="Technical insights on DevSecOps automation, risk prioritization, and compliance evidence."
        ogImage="/images/og-blog.png"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
              Blog
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Technical insights on DevSecOps automation, risk prioritization, and compliance evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="inline-block px-3 py-1 bg-teal-500 text-slate-950 rounded-full text-sm font-semibold mb-4">
                Featured
              </div>
              <h2 className="text-4xl font-bold text-slate-50 mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="px-3 py-1 bg-slate-800 rounded-full text-sm">
                  {blogPosts[0].category}
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <button className="px-6 py-3 bg-teal-500 text-slate-950 rounded-lg font-semibold hover:bg-teal-400 transition-all flex items-center gap-2">
                Read Article <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Recent Articles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all group">
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-50 mb-4 group-hover:text-teal-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-teal-400 font-semibold hover:text-teal-300 transition-colors flex items-center gap-2">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              DevSecOps
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Risk Management
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Compliance
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Platform Engineering
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              SBOM
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Vulnerability Management
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              Supply Chain Security
            </button>
            <button className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all">
              AI & LLMs
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-slate-50 mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the latest DevSecOps insights, product updates, and technical articles delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  required
                  className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-teal-500 text-slate-950 rounded-lg font-semibold hover:bg-teal-400 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
