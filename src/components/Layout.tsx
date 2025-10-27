import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../lib/routes';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                DevOps.ai
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-teal-400 ${
                    location.pathname === item.path ? 'text-teal-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-4 py-2 bg-teal-500 text-slate-950 rounded-lg font-medium hover:bg-teal-400 transition-colors"
              >
                Book a Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-teal-400 ${
                    location.pathname === item.path ? 'text-teal-400' : 'text-slate-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-4 px-4 py-2 bg-teal-500 text-slate-950 rounded-lg font-medium hover:bg-teal-400 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                DevOps.ai
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Automate Trust. Prove Security.
              </p>
              <p className="text-sm text-slate-400">
                Sydney, Australia
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-300">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/product/aldeci" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    AlDeci
                  </Link>
                </li>
                <li>
                  <Link to="/products/ai-data-quality" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-300">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/partners/design" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Design Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources & Legal */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-300">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/resources/guides" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Guides & Whitepapers
                  </Link>
                </li>
                <li>
                  <a href="https://deepwiki.com/DevOpsMadDog/Fixops" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <Link to="/legal/privacy" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/legal/security" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} DevOps.ai. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/company/devops-ai" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/devops_ai" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="Twitter/X">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://github.com/DevOpsMadDog" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@devops-ai" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
