export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  component: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    title: 'DevOps.ai - Automate Trust. Prove Security.',
    description: 'AlDeci turns scanner noise and SBOM sprawl into risk-based actions and cryptographically signed evidence for enterprise DevSecOps.',
    ogImage: '/images/og-home.png',
    component: 'Home'
  },
  {
    path: '/product/aldeci',
    title: 'AlDeci - Risk-Based Security Intelligence | DevOps.ai',
    description: 'AlDeci unifies SBOMs, scanner outputs, threat intel and compliance into risk-adjusted decisions and signed evidence bundles.',
    ogImage: '/images/og-aldeci.png',
    component: 'ProductAlDeci'
  },
  {
    path: '/partners/design',
    title: 'Design Partner Program | DevOps.ai',
    description: 'Join our design partner program to shape the future of DevSecOps automation and evidence-as-code.',
    ogImage: '/images/og-partners.png',
    component: 'DesignPartners'
  },
  {
    path: '/customers',
    title: 'Case Studies | DevOps.ai',
    description: 'See how enterprises cut audit prep by 80% and reduced false-positive churn by 60% with AlDeci.',
    ogImage: '/images/og-customers.png',
    component: 'CaseStudies'
  },
  {
    path: '/resources',
    title: 'Resources | DevOps.ai',
    description: 'Explore our blog, guides, and whitepapers on DevSecOps automation, evidence-as-code, and compliance.',
    ogImage: '/images/og-resources.png',
    component: 'Resources'
  },
  {
    path: '/blog',
    title: 'Blog | DevOps.ai',
    description: 'Technical insights on DevSecOps automation, risk prioritization, and compliance evidence.',
    ogImage: '/images/og-blog.png',
    component: 'Blog'
  },
  {
    path: '/resources/guides',
    title: 'Guides & Whitepapers | DevOps.ai',
    description: 'In-depth technical guides and whitepapers on AlDeci risk models and compliance automation.',
    ogImage: '/images/og-guides.png',
    component: 'Guides'
  },
  {
    path: '/about',
    title: 'About DevOps.ai | Founded by Shivakumaar Umasudan',
    description: 'DevOps.ai is founded and led by Shivakumaar Umasudan, a senior DevSecOps architect based in Sydney, Australia.',
    ogImage: '/images/og-about.png',
    component: 'About'
  },
  {
    path: '/contact',
    title: 'Contact & Book a Demo | DevOps.ai',
    description: 'Book a demo of AlDeci or get in touch with our team to discuss your DevSecOps automation needs.',
    ogImage: '/images/og-contact.png',
    component: 'Contact'
  },
  {
    path: '/thank-you',
    title: 'Thank You | DevOps.ai',
    description: 'Thank you for contacting DevOps.ai. We\'ll be in touch soon.',
    ogImage: '/images/og-contact.png',
    component: 'ThankYou'
  },
  {
    path: '/products/ai-data-quality',
    title: 'AI Data Quality for Multi-Agent LLMs - Coming Soon | DevOps.ai',
    description: 'Ensure reliable agent collaboration by validating data quality, provenance, and grounding across agent workflows.',
    ogImage: '/images/og-ai-data-quality.png',
    component: 'ComingSoon'
  },
  {
    path: '/legal/privacy',
    title: 'Privacy Policy | DevOps.ai',
    description: 'Privacy policy for DevOps.ai and AlDeci platform.',
    component: 'Privacy'
  },
  {
    path: '/legal/terms',
    title: 'Terms of Service | DevOps.ai',
    description: 'Terms of service for DevOps.ai and AlDeci platform.',
    component: 'Terms'
  },
  {
    path: '/legal/security',
    title: 'Security & Responsible Disclosure | DevOps.ai',
    description: 'Security practices and responsible disclosure policy for DevOps.ai.',
    component: 'Security'
  }
];

export const navItems = [
  { label: 'Product', path: '/product/aldeci' },
  { label: 'Customers', path: '/customers' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];
