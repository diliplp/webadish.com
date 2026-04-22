import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'Crystal Group Case Study | Trust, SEO Readiness, and Stability',
  description: 'How WebAdish supported crystalgroup.in with WordPress improvements for trust, clarity, and operational reliability.',
};

export default function CaseStudyCrystalGroupPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-16 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Crystal Group Website Support <br />for Trust, SEO Readiness, and Stability
          </h1>
          <p className="text-xl text-muted-foreground">
            How WebAdish supported <strong>crystalgroup.in</strong> with WordPress improvements that strengthened trust, usability, and operational reliability.
          </p>
        </div>
      </section>

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Shield size={12} /> Trust + Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              SEO Readiness, Trust Positioning, and Ongoing WordPress Support for a B2B Business Site
            </h2>
            <p className="text-muted-foreground text-lg">Client: Crystal Group (crystalgroup.in) — B2B logistics and cold chain solutions</p>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-border/50 p-8 mb-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Case Snapshot</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Client Type', value: 'B2B Logistics / Cold Chain' },
                { label: 'Issue', value: 'Website trust, clarity, and support gaps' },
                { label: 'Impact', value: 'Credibility and search-readiness concerns' },
                { label: 'Engagement Level', value: 'WordPress support + site improvement' },
              ].map((row) => (
                <div key={row.label} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{row.label}</span>
                  <span className="text-sm font-medium text-foreground">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 mb-10">
            <div>
              <h3 className="text-lg font-bold mb-3">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crystal Group needed a stronger business website foundation with better credibility, clearer messaging, and a more reliable WordPress support layer to keep the site dependable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Our Approach</h3>
              <ul className="space-y-2">
                {[
                  'Improved content structure and trust presentation',
                  'Strengthened WordPress support and operational reliability',
                  'Focused on SEO readiness and user clarity',
                  'Reduced avoidable technical friction for future updates',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={15} className="text-accent shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: 'Stronger', label: 'Trust Signals' },
                { value: 'Clearer', label: 'Site Messaging' },
                { value: 'Ongoing', label: 'Support Reliability' },
              ].map((metric) => (
                <div key={metric.label} className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-700 mb-1">{metric.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wide text-green-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-foreground text-white rounded-2xl p-8 mb-10">
            <h3 className="text-lg font-bold mb-3">Key Takeaway</h3>
            <p className="text-white/75 leading-relaxed">
              For B2B websites, operational trust and clarity matter as much as design. A stable WordPress foundation supports both credibility and growth.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Free Security Audit <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
