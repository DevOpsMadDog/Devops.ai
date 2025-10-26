import { SEO } from '../components/SEO';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You | DevOps.ai"
        description="Thank you for contacting DevOps.ai. We'll be in touch soon."
        ogImage="/images/og-contact.png"
      />

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-500/10 rounded-full mb-8">
            <CheckCircle className="text-teal-400" size={48} />
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-50 mb-6">
            Thank You!
          </h1>
          
          <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
            We've received your message and will get back to you within 1 business day.
          </p>
          
          <p className="text-lg text-slate-400 mb-12">
            In the meantime, feel free to explore our resources or learn more about AlDeci.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/product/aldeci"
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-all"
            >
              Explore AlDeci
            </Link>
            <Link
              to="/resources"
              className="px-8 py-4 bg-slate-800 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
            >
              Browse Resources
            </Link>
            <Link
              to="/"
              className="px-8 py-4 bg-slate-900 text-slate-50 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all border border-slate-800"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
