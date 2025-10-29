import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const ProductAlDeci = lazy(() => import('./pages/ProductAlDeci').then(module => ({ default: module.ProductAlDeci })));
const DesignPartners = lazy(() => import('./pages/DesignPartners').then(module => ({ default: module.DesignPartners })));
const Resources = lazy(() => import('./pages/Resources').then(module => ({ default: module.Resources })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const EvidenceAsCode = lazy(() => import('./pages/blog/EvidenceAsCode'));
const CtemCnapp = lazy(() => import('./pages/blog/CtemCnapp'));
const EpssKev = lazy(() => import('./pages/blog/EpssKev'));
const GoldenPaths = lazy(() => import('./pages/blog/GoldenPaths'));
const Guides = lazy(() => import('./pages/Guides').then(module => ({ default: module.Guides })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const ThankYou = lazy(() => import('./pages/ThankYou').then(module => ({ default: module.ThankYou })));
const ComingSoon = lazy(() => import('./pages/ComingSoon').then(module => ({ default: module.ComingSoon })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const Security = lazy(() => import('./pages/Security').then(module => ({ default: module.Security })));

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-400">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/aldeci" element={<ProductAlDeci />} />
              <Route path="/platform" element={<Navigate to="/product/aldeci#architecture" replace />} />
              <Route path="/partners/design" element={<DesignPartners />} />
              <Route path="/customers" element={<Navigate to="/partners/design" replace />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/evidence-as-code-in-practice" element={<EvidenceAsCode />} />
              <Route path="/blog/ctem-cnapp-without-noise" element={<CtemCnapp />} />
              <Route path="/blog/epss-kev-prioritization" element={<EpssKev />} />
              <Route path="/blog/golden-paths-devsecops" element={<GoldenPaths />} />
              <Route path="/resources/guides" element={<Guides />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/products/ai-data-quality" element={<ComingSoon />} />
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/security" element={<Security />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
