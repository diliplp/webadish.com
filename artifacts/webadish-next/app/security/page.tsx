import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, BriefcaseBusiness, CheckCircle2, Eye, FileSearch, Globe, Mail, MessageCircle, Phone, Shield, ShoppingCart, Zap } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'WordPress Security Audit India & Managed Protection | WebAdish',
  description:
    'Request a free WordPress security audit for Indian businesses. WhatsApp WebAdish for vulnerability review, malware risk checks, hardening, and managed WordPress protection.',
  alternates: {
    canonical: '/security',
  },
  openGraph: {
    title: 'WordPress Security Audit India & Managed Protection | WebAdish',
    description:
      'Free WordPress security audit route for Indian businesses that need vulnerability review, malware risk checks, hardening, and managed protection.',
    url: '/security',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Security Audit India & Managed Protection | WebAdish',
    description:
      'Free WordPress security audit route for Indian businesses that need vulnerability review, malware risk checks, hardening, and managed protection.',
  },
};

const whatsappUrl =
  'https://wa.me/919998757045?text=I%20need%20a%20WordPress%20security%20audit%20for%20my%20India%20business%20website.';

const features = [
  { icon: <Shield size={24} className="text-accent" />, title: 'Web Application Firewall', desc: 'Block brute force attacks, SQL injections, XSS, and other common threats before they reach your WordPress stack.' },
  { icon: <Eye size={24} className="text-accent" />, title: 'Real-Time Malware Scanning', desc: 'Continuous automated scans detect malware, backdoors, and suspicious file changes before they become customer-facing incidents.' },
  { icon: <FileSearch size={24} className="text-accent" />, title: 'Vulnerability Monitoring', desc: 'We track plugin and theme risk so your site is not left exposed while known vulnerabilities circulate publicly.' },
  { icon: <Zap size={24} className="text-accent" />, title: 'Hardening & Access Control', desc: 'We lock down admin access, remove unnecessary exposure, and reduce the number of easy attack paths available to bots and bad actors.' },
  { icon: <Shield size={24} className="text-accent" />, title: 'Incident Readiness', desc: 'If something looks wrong, you already have a team that knows the stack and can investigate instead of starting from zero.' },
  { icon: <AlertTriangle size={24} className="text-accent" />, title: 'Blacklist Monitoring', desc: 'We watch for signs that your site has been flagged so response can start before damage compounds across SEO, trust, and conversions.' },
];

const threats = [
  { pct: '94%', label: 'of WordPress hacks exploit plugin vulnerabilities' },
  { pct: '40%', label: 'of hacked sites were already out of date' },
  { pct: '300%', label: 'increase in WordPress attacks since 2022' },
  { pct: '<5min', label: 'average time for bots to find a vulnerable WordPress install' },
];

const auditOutcomes = [
  'Plugin, theme, and core version risk review',
  'Admin access, roles, backups, and exposed surfaces check',
  'Malware, blacklist, and suspicious file-change triage',
  'Plain-English priority list before paid hardening work',
];

const faqItems = [
  {
    question: 'Is the WordPress security audit free for Indian businesses?',
    answer:
      'Yes. The first fit check is free. We review the website URL, obvious WordPress exposure, and current issue, then recommend whether you need hardening, managed protection, or emergency recovery.',
  },
  {
    question: 'Can WebAdish help if the WordPress site is already hacked?',
    answer:
      'Yes. If the site is already hacked, blacklisted, redirecting, or suspended by hosting, we route the case into emergency recovery instead of treating it as a routine audit.',
  },
  {
    question: 'What happens after the audit?',
    answer:
      'You receive a practical next-step recommendation. That may be a one-time hardening sprint, managed security and maintenance, a retained security plan, or no paid work if the risk is low.',
  },
  {
    question: 'Do you only install a security plugin?',
    answer:
      'No. Plugins are only one layer. We review access, update discipline, backups, hosting controls, monitoring, blacklist risk, and incident readiness so the protection plan matches the business risk.',
  },
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'WordPress Security Audit India',
    description:
      'Free WordPress security audit route for Indian businesses, covering vulnerability review, malware risk checks, hardening recommendations, and managed protection options.',
    serviceType: 'WordPress security audit and managed protection',
    provider: {
      '@type': 'Organization',
      name: 'WebAdish LLP',
      url: 'https://www.webadish.com',
      telephone: '+919998757045',
      email: 'hello@webadish.com',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'Place',
        name: 'Worldwide',
      },
    ],
    offers: {
      '@type': 'Offer',
      name: 'Free WordPress Security Audit Fit Check',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://www.webadish.com/security',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
];

export default function SecurityPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Shield size={14} /> Free WordPress Security Audit for India
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              WordPress Security Audit for <span className="text-accent">Revenue-Critical Sites</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Firewall management, malware scanning, hardening, and 24/7 monitoring for India and global businesses that cannot afford breach-driven revenue loss, brand damage, or emergency cleanup during key campaigns.
            </p>
            <div className="mb-8 rounded-2xl border border-accent/20 bg-white/90 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">Recommended First Step</p>
              <p className="text-base text-foreground font-medium">Send your WordPress URL for a free audit fit check before choosing a monthly plan.</p>
              <p className="text-sm text-muted-foreground mt-2">We identify obvious risks first, then recommend hardening, a protection plan, emergency recovery, or no paid work if the risk is low.</p>
            </div>
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-500 hover:-translate-y-0.5"
              >
                <MessageCircle size={17} /> WhatsApp Audit
              </a>
              <a
                href="tel:+919998757045"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent px-5 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <Phone size={17} /> Call India Team
              </a>
              <a
                href="mailto:hello@webadish.com?subject=WordPress%20security%20audit%20request"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <Mail size={17} /> Email Website URL
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="text-lg px-8">
                  Request Free Security Audit <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline-primary" size="lg" className="text-lg px-8">Compare Protection Plans</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-3xl border border-primary/15 bg-primary/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">Why This Matters Now</p>
            <p className="text-base text-foreground leading-relaxed">
              Patchstack reported <strong>7,966 WordPress ecosystem vulnerabilities</strong> in 2024, with <strong>96% found in plugins</strong>. For business websites, that is why security now depends less on assuming WordPress core is fine and more on tightening plugin discipline, prioritising the right issues, and reviewing risk before attackers do. Read our{' '}
              <Link href="/blog/state-of-wordpress-security-2025-business-takeaways" className="font-semibold text-accent hover:underline">
                breakdown of what that means for serious WordPress operators
              </Link>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShoppingCart size={20} className="text-accent" />,
                title: 'WooCommerce & Membership Sites',
                desc: 'Best for businesses where downtime, checkout issues, or malware warnings directly affect revenue and trust.',
              },
              {
                icon: <BriefcaseBusiness size={20} className="text-accent" />,
                title: 'Lead-Gen & B2B Websites',
                desc: 'Ideal for teams running campaigns, demos, and inbound funnels that need reliability and stronger trust signals.',
              },
              {
                icon: <Globe size={20} className="text-accent" />,
                title: 'Agencies & Multi-Stakeholder Teams',
                desc: 'Useful when marketing, sales, and ops all depend on WordPress and no one has time to own security day to day.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border/50 bg-gray-50 p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">{item.icon}</div>
                <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-accent/20 bg-accent/5 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-3">Audit Output</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What we check before recommending paid work</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  The audit is designed for buyers searching for WordPress vulnerability scanners, malware checks, or security audits, but who need a human recommendation before paying for a full engagement.
                </p>
              </div>
              <div className="grid gap-3">
                {auditOutcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-white p-4 text-sm text-foreground">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {threats.map((threat) => (
              <div key={threat.label}>
                <div className="text-4xl font-bold text-primary mb-2">{threat.pct}</div>
                <div className="text-sm text-white/70 leading-snug">{threat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Level of Security Support You Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We support businesses at three stages: one-time hardening, ongoing managed protection, and high-touch retained security.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Security Hardening Sprint', desc: 'A one-time engagement to close common WordPress vulnerabilities, clean up access, and improve baseline protection.' },
              { title: 'Managed Security + Maintenance', desc: 'Best for growing businesses that need updates, monitoring, backups, and practical day-to-day WordPress protection.' },
              { title: 'Dedicated Business Continuity Retainer', desc: 'For high-value sites that need a named expert, response SLAs, monthly audits, and stronger operational coverage.' },
            ].map((offer) => (
              <div key={offer.title} className="rounded-3xl border border-border/50 bg-white p-8">
                <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Multi-Layer Security Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We do not rely on a single plugin. We implement defence-in-depth so one missed update or single point of failure does not expose the whole site.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-2xl p-8 border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Secure Your Site</h2>
            <p className="text-lg text-muted-foreground">A practical four-step process for businesses that need less risk and less internal overhead.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Audit', desc: 'We identify current malware, weak plugins, risky access, and obvious exposure points.' },
              { step: '02', title: 'Harden', desc: 'We close vulnerabilities, tighten configuration, and reduce the number of attack paths available.' },
              { step: '03', title: 'Monitor', desc: 'We watch for suspicious behaviour, malware indicators, and issues that need human review.' },
              { step: '04', title: 'Advise', desc: 'We help your team understand what changed, what matters, and what to prioritize next.' },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-8 border border-border/50 text-center">
                <div className="text-4xl font-bold text-accent/20 mb-4">{step.step}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Security Without Becoming the Security Team?</h2>
          <p className="text-lg text-white/90 mb-8">We work best with businesses that want experienced ownership, faster response, and fewer WordPress fire drills for internal teams.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="white" size="lg">
                Request Free Security Audit <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                View Protection Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent mb-3">Security Audit FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before You Request an Audit</h2>
            <p className="text-muted-foreground">
              These are the common questions from India WordPress security leads before they share a website URL.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-border/50 bg-gray-50 p-6">
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
