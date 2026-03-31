import { ArrowRight, CheckCircle2, FileCheck2, Shield, LockKeyhole, Database } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const implementationAreas = [
  {
    title: "Consent and form flows",
    desc: "Review contact forms, lead forms, newsletters, and checkout journeys so consent language, notices, and capture flows are operationally ready.",
    icon: FileCheck2,
  },
  {
    title: "Data collection minimisation",
    desc: "Reduce unnecessary collection points across WordPress plugins, CRMs, forms, and custom workflows so teams hold less risk by default.",
    icon: Database,
  },
  {
    title: "Access controls and logging",
    desc: "Harden admin access, role permissions, form storage, plugin behavior, and incident logging so operational data is easier to govern and audit.",
    icon: LockKeyhole,
  },
  {
    title: "Breach-readiness and hardening",
    desc: "Strengthen backups, plugin hygiene, monitoring, and response readiness so DPDP implementation is supported by real security controls.",
    icon: Shield,
  },
];

const deliverables = [
  "DPDP website and WordPress readiness review",
  "Consent, notice, and data-capture implementation recommendations",
  "Plugin, form, and storage-risk review",
  "Access-control and admin-surface review",
  "Retention and deletion workflow recommendations",
  "Breach-readiness and incident-handling technical recommendations",
  "Implementation roadmap for your internal team or legal partner",
];

const fitList = [
  "Lead generation websites collecting personal data",
  "Education, healthcare, dealership, and service businesses with multiple forms",
  "WordPress + CRM + plugin stacks with unclear data flow",
  "SMEs that need implementation help, not just legal interpretation",
];

export default function IndiaDpdp() {
  return (
    <Layout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
            <Shield size={16} className="text-accent" />
            India DPDP Implementation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            DPDP Act Website Implementation Support for <span className="text-accent">Indian Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            WebAdish helps Indian SMEs make WordPress websites, lead forms, consent journeys, and data-handling workflows operationally ready for DPDP compliance work. We support implementation and technical readiness alongside your legal or compliance advisor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" onClick={() => (window.location.href = "/contact")}>
              Request DPDP Readiness Review <ArrowRight size={18} className="ml-2" />
            </Button>
            <Link href="/india">
              <Button variant="outline" size="lg">View India Services</Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            We are not acting as a law firm. We help with the technical, website, workflow, and security implementation side of DPDP readiness.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Where WebAdish helps with DPDP implementation</h2>
            <p className="text-muted-foreground text-lg">
              Most small and medium businesses do not need a massive consulting project first. They need someone to review the actual website stack, the forms, the plugins, the data flow, and the security gaps that make implementation risky.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {implementationAreas.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-border/50 bg-gray-50 p-8">
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

      <section className="py-20 bg-gray-50 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Typical deliverables in a DPDP readiness engagement</h2>
            <p className="text-muted-foreground mb-8">
              The goal is not to produce theory. It is to give your team a workable implementation plan across WordPress, forms, admin access, plugin behavior, and data handling.
            </p>
            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white border border-border/50 p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-5">
              Best Fit
            </div>
            <h3 className="text-2xl font-bold mb-4">Who this page is for</h3>
            <ul className="space-y-4 mb-8">
              {fitList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-gray-50 border border-border/50 p-5">
              <h4 className="font-bold mb-2">Good starting CTA</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Ask for a DPDP website readiness review if you want clarity on where your website, forms, plugins, and workflows need implementation work first.
              </p>
              <Button variant="accent" className="w-full" onClick={() => (window.location.href = "/contact")}>
                Request Readiness Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common DPDP implementation questions from SMEs</h2>
            <p className="text-muted-foreground">
              These are the kinds of practical issues business owners raise when they are trying to move from concern to action.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Can WebAdish make our WordPress website DPDP-ready?",
                a: "We help make the website and its surrounding workflows technically ready by reviewing forms, consent journeys, plugin behavior, access controls, storage patterns, and incident-readiness. Legal interpretation and policy sign-off should still involve your legal or compliance advisor.",
              },
              {
                q: "Do we need a DPDP consultant or an implementation partner?",
                a: "Many SMEs need both. A legal or compliance advisor helps interpret obligations; an implementation partner helps translate those requirements into what changes on the website, form stack, plugins, CRM, hosting, and access controls.",
              },
              {
                q: "Can you help with contact forms, lead generation forms, and WordPress plugin setup?",
                a: "Yes. That is often the highest-friction area because data is captured in multiple plugins and sent into email, Sheets, CRMs, or third-party tools without a clear review of consent, storage, or retention implications.",
              },
              {
                q: "Do you provide legal certification of compliance?",
                a: "No. WebAdish provides technical implementation and readiness support. We help your team and your legal advisor move faster by addressing the website, operational, and security implementation side.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-3xl border border-border/50 bg-gray-50 p-8">
                <h3 className="text-xl font-bold mb-3">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-8 border border-white/10">
            <Shield size={16} />
            India Implementation Support
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a DPDP implementation partner for your website stack?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Start with a readiness review and we will show you where your WordPress setup, forms, plugins, and workflows need changes first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" onClick={() => (window.location.href = "/contact")}>
              Request DPDP Review <ArrowRight size={18} className="ml-2" />
            </Button>
            <Link href="/security">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                View Security Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
