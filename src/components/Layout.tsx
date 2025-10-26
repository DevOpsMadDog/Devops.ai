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
                  <Link to="/customers" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    Case Studies
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

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} DevOps.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
