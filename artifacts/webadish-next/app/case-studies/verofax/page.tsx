import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, Shield } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'Verofax Case Study | Website Recovery and Reinfection Prevention',
  description: 'How WebAdish recovered verofax.com after compromise and stabilized it against reinfection.',
};

function EmergencyCTA() {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
      <p className="text-lg font-bold text-foreground mb-2">Facing a similar issue?</p>
      <p className="text-sm text-muted-foreground mb-6">Response within 30 minutes during business hours.</p>
      <Link
        href="/hacked-site-recovery"
        className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300"
      >
        Request Emergency Assessment <ArrowRight size={18} className="ml-1" />
      </Link>
    </div>
  );
}

export default function CaseStudyVerofaxPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-16 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Verofax Website Recovery <br />and Reinfection Prevention
          </h1>
          <p className="text-xl text-muted-foreground">
            How WebAdish recovered a compromised business-critical website for <strong>verofax.com</strong> and stabilized it for ongoing protection.
          </p>
        </div>
      </section>

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Shield size={12} /> Incident Response
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Recovered a Compromised eCommerce Website and Prevented Reinfection
            </h2>
            <p className="text-muted-foreground text-lg">Client: Verofax (verofax.com) — Global technology company</p>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-border/50 p-8 mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Case Snapshot</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Client Type', value: 'eCommerce / Technology' },
                { label: 'Issue', value: 'Malware infection, SEO drop, admin compromise' },
                { label: 'Impact', value: 'Revenue disruption, search engine warning' },
                { label: 'Resolution Time', value: '48 hours' },
                { label: 'Engagement Level', value: 'Incident Response + Ongoing Protection' },
              ].map((row) => (
                <div key={row.label} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{row.label}</span>
                  <span className="text-sm font-medium text-foreground">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">01</span>
              The Problem
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The site began redirecting users to spam destinations, Google warnings appeared, and organic visibility dropped. Previous low-cost cleanup attempts removed visible symptoms but not the actual access path.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Google had started flagging the site',
                'Organic traffic dropped significantly',
                'Admin access was partially compromised',
                'Previous attempts using plugins failed',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">02</span>
              What We Did
            </h3>
            <div className="space-y-4">
              {[
                { step: 'Containment', items: ['Blocked malicious access', 'Isolated compromised components'] },
                { step: 'Forensic Analysis', items: ['Identified entry point', 'Traced persistence mechanisms'] },
                { step: 'Complete Cleanup', items: ['Removed all malware and backdoors', 'Verified file and database integrity'] },
                { step: 'Hardening', items: ['Secured admin access', 'Patched vulnerabilities', 'Improved server-level security'] },
                { step: 'Monitoring', items: ['Implemented alerts and tracking', 'Validated no reinfection'] },
              ].map((phase) => (
                <div key={phase.step} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-border/50">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-2">{phase.step}</p>
                    <ul className="space-y-1">
                      {phase.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <ChevronRight size={13} className="text-accent shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { value: '<48h', label: 'Full Recovery' },
                { value: '0', label: 'Reinfections' },
                { value: '48h', label: 'Warnings Cleared' },
              ].map((metric) => (
                <div key={metric.label} className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-700 mb-1">{metric.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wide text-green-600">{metric.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground border-l-4 border-accent pl-4">
              A proper forensic recovery prevented continuing revenue loss, deeper SEO damage, and repeated cleanup costs.
            </p>
          </div>

          <div className="bg-foreground text-white rounded-2xl p-8 mb-10">
            <h3 className="text-lg font-bold mb-3">Key Takeaway</h3>
            <p className="text-white/75 leading-relaxed">
              Incomplete cleanup creates repeat incidents. Verofax needed a full root-cause recovery, not another malware scan.
            </p>
          </div>

          <EmergencyCTA />
        </div>
      </article>
    </SiteLayout>
  );
}
