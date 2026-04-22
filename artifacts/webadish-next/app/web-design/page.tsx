import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Monitor, Palette, Search, Smartphone, Star, Zap } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'WordPress Web Design | WebAdish',
  description:
    'Custom WordPress websites built for conversion, speed, SEO, and security by WebAdish.',
};

const features = [
  { icon: <Monitor size={24} className="text-accent" />, title: 'Custom WordPress Design', desc: 'Bespoke designs built around your brand, audience, and goals — not templated themes that look like everyone else.' },
  { icon: <Smartphone size={24} className="text-accent" />, title: 'Fully Responsive', desc: 'Your site will look and work perfectly on every device, from wide desktop monitors to the smallest mobile screens.' },
  { icon: <Zap size={24} className="text-accent" />, title: 'Performance Optimized', desc: 'Fast-loading sites with optimal Core Web Vitals. We build for speed from the ground up — not as an afterthought.' },
  { icon: <Search size={24} className="text-accent" />, title: 'SEO Ready', desc: 'Semantic markup, structured data, sitemap, and technical SEO baked into every site we build.' },
  { icon: <Palette size={24} className="text-accent" />, title: 'Brand Aligned', desc: 'We work with your existing brand identity or help you develop one — ensuring visual consistency across the web.' },
  { icon: <CheckCircle2 size={24} className="text-accent" />, title: 'Security Built-In', desc: 'Every site we build comes hardened — not as an add-on. SSL, firewall, and security best practices from day one.' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We deep-dive into your business, goals, target audience, and competitors to build a strategic brief.' },
  { step: '02', title: 'Design', desc: 'Wireframes and full design mockups reviewed and refined until you love every pixel.' },
  { step: '03', title: 'Build', desc: 'Development in a staging environment with daily updates and your feedback incorporated throughout.' },
  { step: '04', title: 'Launch', desc: 'Thorough QA, performance checks, SEO setup — then a clean, confident launch.' },
  { step: '05', title: 'Maintain', desc: 'Post-launch we offer maintenance and security plans to keep your new site running perfectly.' },
];

const testimonials = [
  { name: 'Shivam Nexa', role: 'Automotive Client', quote: 'I like it so much when I open the front page it takes my breath away. Thank you for building the best website ever!' },
  { name: 'Triton Poker Tables', role: 'eCommerce', quote: 'Amazing job guiding me through the whole process. The result exceeded every expectation.' },
];

const primaryLinkClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300';
const secondaryLinkClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium border-2 border-input bg-background hover:bg-muted hover:text-foreground transition-all duration-300';

export default function WebDesignPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Monitor size={14} /> WordPress Web Design
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              WordPress Websites That <span className="text-accent">Convert &amp; Perform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Beautiful, fast, secure, and SEO-optimized WordPress websites designed to turn visitors into customers.
              Every brand has a story — let&apos;s make yours unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className={primaryLinkClass}>
                Start Your Project <ArrowRight size={18} className="ml-1" />
              </Link>
              <Link href="/case-studies" className={secondaryLinkClass}>
                View Our Work
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-sm font-medium text-muted-foreground">
              {['Custom WordPress design', 'Mobile-first', 'SEO optimized', 'Security included'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build Into Every Site</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">No compromises. Every site we deliver meets a high standard across design, performance, and security.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design &amp; Build Process</h2>
            <p className="text-lg text-muted-foreground">Transparent, collaborative, and delivered on time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step, idx) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-border/50 text-center h-full">
                  <div className="text-3xl font-bold text-accent/20 mb-4">{step.step}</div>
                  <h3 className="font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">What Our Design Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-8 border border-border/50">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={18} />
                  ))}
                </div>
                <p className="italic text-foreground/80 mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Starting from $999 for Custom WordPress Websites</h3>
          <p className="text-muted-foreground mb-6">Every project is scoped individually. Contact us for a free quote tailored to your requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={primaryLinkClass}>
              Get a Free Quote <ArrowRight size={16} className="ml-1" />
            </Link>
            <Link href="/case-studies" className={secondaryLinkClass}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Next WordPress Site?</h2>
          <p className="text-lg text-white/90 mb-8">Let&apos;s create something that makes your competitors envious and your customers convert.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-white text-foreground hover:bg-gray-50 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
            Start a Project <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
