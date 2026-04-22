import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, Clock, Shield } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'Case Studies | WordPress Recovery and Protection',
  description: 'Real WordPress security and recovery case studies from WebAdish across incident response, rebuilds, and ongoing protection.',
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

export default function CaseStudiesPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-16 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Real Incidents.<br />Expert Recovery. No Reinfection.
          </h1>
          <p className="text-xl text-muted-foreground">
            How WebAdish handles critical WordPress security incidents — from containment to long-term protection.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Trust built through real client work for verofax.com, shivamautozone.com, and crystalgroup.in.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/case-studies/verofax" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all duration-300">View Verofax Case Study</Link>
            <Link href="/case-studies/shivamautozone" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium border-2 border-primary text-primary bg-white hover:bg-primary hover:text-primary-foreground transition-all duration-300">View Shivam Autozone</Link>
            <Link href="/case-studies/crystalgroup" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium border-2 border-primary text-primary bg-white hover:bg-primary hover:text-primary-foreground transition-all duration-300">View Crystal Group</Link>
          </div>
        </div>
      </section>

      <article className="py-20 bg-white border-b border-border/50">
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
              The client approached us after noticing their website was redirecting users to external spam pages.
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
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-red-800">
                Critical issue: The infection was not limited to visible malware — multiple hidden backdoors existed.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">02</span>
              What Others Missed
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The client had already attempted cleanup using standard tools and low-cost services.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                'Only surface-level malware was removed',
                'Hidden access points remained intact',
                'Reinfection occurred within days',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic border-l-4 border-amber-300 pl-4">
              This is a common failure pattern with incomplete recovery approaches.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">03</span>
              Our Approach
            </h3>
            <p className="text-muted-foreground mb-6">We handled this as a full security incident, not a basic cleanup.</p>
            <div className="space-y-4">
              {[
                { step: 'Step 1 — Containment', items: ['Blocked malicious access', 'Isolated compromised components'] },
                { step: 'Step 2 — Forensic Analysis', items: ['Identified entry point', 'Traced persistence mechanisms'] },
                { step: 'Step 3 — Complete Cleanup', items: ['Removed all malware and backdoors', 'Verified file and database integrity'] },
                { step: 'Step 4 — Hardening', items: ['Secured admin access', 'Patched vulnerabilities', 'Improved server-level security'] },
                { step: 'Step 5 — Monitoring', items: ['Implemented tracking and alerts', 'Ensured no reinfection'] },
              ].map((phase) => (
                <div key={phase.step} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-border/50">
                  <div className="shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="text-accent" />
                  </div>
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
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">04</span>
              Results
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { value: '<48h', label: 'Full Recovery' },
                { value: '0', label: 'Reinfections' },
                { value: '48h', label: 'Google Warnings Cleared' },
              ].map((metric) => (
                <div key={metric.label} className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-700 mb-1">{metric.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wide text-green-600">{metric.label}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {[
                'Website fully restored and verified clean',
                'No malicious activity detected post-recovery',
                'Google warnings removed within 48 hours',
                'Traffic began recovering immediately',
                'No reinfection after 30 days',
              ].map((result) => (
                <li key={result} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-green-500 shrink-0" /> {result}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-foreground text-white flex items-center justify-center text-xs font-bold">05</span>
              Business Impact
            </h3>
            <p className="text-muted-foreground mb-4">The client avoided:</p>
            <ul className="space-y-2 mb-5">
              {[
                'Continued revenue loss from redirected visitors',
                'Long-term SEO damage from Google blacklisting',
                'Repeated recovery costs from incomplete fixes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-foreground border-l-4 border-accent pl-4">
              A proper recovery prevented significantly higher losses than the cost of the engagement.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">06</span>
              What Happened Next
            </h3>
            <p className="text-muted-foreground mb-4">
              After recovery, the client opted for ongoing security protection to prevent future incidents.
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Continuous monitoring and threat detection',
                'Regular security audits',
                'Priority incident response coverage',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-accent shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-sm italic text-muted-foreground">
              This ensures long-term stability — not just a one-time fix.
            </p>
          </div>

          <div className="bg-foreground text-white rounded-2xl p-8 mb-10">
            <h3 className="text-lg font-bold mb-3">Key Takeaway</h3>
            <p className="text-white/90 leading-relaxed mb-2">
              Most hacked websites are not properly secured after cleanup.
            </p>
            <p className="text-white/75 leading-relaxed">
              Without root-cause resolution, reinfection is highly likely. A full forensic approach — not a plugin scan — is required to permanently resolve a serious compromise.
            </p>
          </div>

          <EmergencyCTA />
        </div>
      </article>
    </SiteLayout>
  );
}
