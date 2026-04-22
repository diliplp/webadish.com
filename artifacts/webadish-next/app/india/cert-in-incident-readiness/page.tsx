import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, FileClock, Shield, Siren } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'CERT-In Incident Readiness for Indian SMEs',
  description:
    'Technical CERT-In incident-readiness support for WordPress websites, access controls, logging, and response preparation for Indian businesses.',
};

const readinessPoints = [
  'Rapid incident triage and internal escalation workflow review',
  'Evidence preservation basics for WordPress and hosting environments',
  'Logging, monitoring, admin-access, and plugin-risk review',
  'Breach-readiness guidance for websites collecting customer or lead data',
  'Technical recommendations your team can implement before an incident happens',
];

const commonTriggers = [
  'Your WordPress site is hacked, defaced, or redirecting visitors',
  'Hosting or admin access appears compromised',
  'Suspicious traffic, malware, or phishing indicators are detected',
  'Customer or lead data may have been exposed through the website stack',
];

const primaryLinkClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300';
const secondaryLinkClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300';

export default function IndiaCertInPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 font-medium text-sm mb-8 border border-red-500/20">
            <Siren size={16} />
            CERT-In Readiness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CERT-In Incident Readiness for <span className="text-accent">Indian SMEs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            WebAdish helps Indian businesses prepare the website, WordPress, logging, access, and response side of
            incident readiness so teams can move faster when something goes wrong.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={primaryLinkClass}>
              Request Incident Readiness Review <ArrowRight size={18} className="ml-1" />
            </Link>
            <Link href="/india/dpdp-compliance-wordpress" className={secondaryLinkClass}>
              View DPDP Implementation Support
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            This page focuses on technical and operational readiness, not legal advice. Your legal, compliance, and
            internal security stakeholders should remain part of final reporting decisions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why SMEs search for CERT-In help</h2>
            <p className="text-muted-foreground leading-8 mb-6">
              Most SMEs do not need theory first. They need to know whether their website stack is ready to detect an
              incident, preserve evidence, and support faster internal decisions when malware, compromise, or suspicious
              behavior appears.
            </p>
            <div className="space-y-4">
              {commonTriggers.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-gray-50 p-4 text-sm">
                  <AlertTriangle size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border/50 bg-gray-50 p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-5">
              Scope
            </div>
            <h3 className="text-2xl font-bold mb-4">What we review in a readiness engagement</h3>
            <ul className="space-y-4">
              {readinessPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Practical readiness questions we help answer</h2>
            <p className="text-muted-foreground">
              These are the operational questions that usually block a fast incident response when no one has reviewed
              the website stack in advance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Can we tell what changed on the website?',
                desc: 'We review whether your stack has enough logging, access visibility, and change-awareness to support an incident investigation.',
                icon: FileClock,
              },
              {
                title: 'Can we preserve evidence before cleanup starts?',
                desc: 'We help teams think through backups, exports, hosting access, and the order of operations before a panicked cleanup destroys useful evidence.',
                icon: Shield,
              },
              {
                title: 'Who gets alerted, and how fast?',
                desc: 'We look at the practical response flow across website admin, hosting, plugin monitoring, backups, and internal stakeholders.',
                icon: Siren,
              },
              {
                title: 'What website weaknesses should be closed first?',
                desc: 'We prioritise obvious plugin, access, form, and admin-surface risks so SMEs can act on the highest-value fixes first.',
                icon: AlertTriangle,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-border/50 bg-white p-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-7">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-8 border border-white/10">
            <Shield size={16} />
            India Incident Readiness
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Want help preparing your website stack before an incident happens?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Start with a readiness review and we will help your team understand where logging, forms, plugins, access,
            and monitoring need attention first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={primaryLinkClass}>
              Book Incident Readiness Review <ArrowRight size={18} className="ml-1" />
            </Link>
            <Link href="/security" className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              View Security Services
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
