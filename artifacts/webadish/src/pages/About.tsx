import { Shield, Users, Clock, Award, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Shield,
    title: "Security-first, always",
    body: "Every recommendation, plan, and piece of work we do starts with one question: does this make the website more secure and resilient? We do not cut corners on security to save time.",
  },
  {
    icon: Clock,
    title: "Response that matches the urgency",
    body: "A hacked site is a business emergency. We treat it that way. When something goes wrong, the people who pick up the work are the same people who built the plan.",
  },
  {
    icon: Users,
    title: "Honest about what we do and don't do",
    body: "We are a specialist security agency, not a generalist. We focus on WordPress security, maintenance, and incident response. If something is outside our scope, we say so.",
  },
  {
    icon: Award,
    title: "Accountability over promises",
    body: "We do not oversell SLAs we cannot keep or promise outcomes we cannot control. What we commit to, we deliver — and we are transparent when circumstances change.",
  },
];

const milestones = [
  { year: "2004", label: "Founded", detail: "Started as a web design studio in India, with early focus on business websites and reliability." },
  { year: "2010", label: "Security pivot", detail: "Shifted primary focus to WordPress security after repeated client incidents revealed how underserved the space was." },
  { year: "2016", label: "Protection plans", detail: "Launched structured monthly protection plans, moving clients from reactive recovery to proactive security." },
  { year: "2020", label: "Global clients", detail: "Expanded to serve businesses across the UK, US, Australia, and the Middle East alongside Indian clients." },
  { year: "2024", label: "800+ sites protected", detail: "Now protecting and maintaining over 800 WordPress websites for agencies, WooCommerce stores, and enterprises." },
];

const teamFacts = [
  "20+ years of combined WordPress experience",
  "Specialists in malware removal, hardening, and incident response",
  "Direct communication — no ticket queues, no offshore handoffs",
  "Work across UK, India, US, Australia, and the Middle East",
  "Trusted by agencies managing multiple client sites",
];

export default function About() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
            <Globe size={16} />
            <span>WordPress Security Agency — Est. 2004</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            About WebAdish
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            We are a specialist WordPress security and maintenance agency with over 20 years of experience protecting business-critical websites. We help businesses prevent incidents, recover from breaches, and keep their WordPress sites running safely at scale.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                A security agency built around one question
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most agencies add security as an afterthought. We built WebAdish around it. Since 2004, we have focused exclusively on making WordPress websites more resilient — through proactive protection, structured maintenance, and expert incident response.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We work with businesses that cannot afford downtime, data loss, or the reputational cost of a breach. That means WooCommerce stores, agencies managing client portfolios, professional services firms, and enterprises that run business-critical operations on WordPress.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our clients stay with us because we are direct, responsive, and specific. We do not use templated reports or generic checklists. Every site we protect gets reviewed by a person who understands what that site does commercially and what failure would cost.
              </p>
            </div>
            <div className="space-y-4">
              {teamFacts.map((fact) => (
                <div key={fact} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground font-medium">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">How we work</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These are not marketing principles. They are the operating norms that shape how we make decisions and deliver work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our story</h2>
            <p className="text-muted-foreground">Two decades of focus on one platform.</p>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-10">
              {milestones.map(({ year, label, detail }) => (
                <div key={year} className="relative flex gap-8">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-sm font-bold text-accent">{year}</span>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-white shadow" />
                    <p className="font-bold text-foreground text-sm mb-1">{label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who we work with</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We are selective. We work best with businesses where the website is genuinely important to revenue or operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "WooCommerce stores",
                body: "Businesses selling online need payment security, uptime reliability, and fast incident response. A compromised store is a revenue emergency.",
              },
              {
                title: "Agencies with client portfolios",
                body: "We work as a white-label security partner for agencies managing multiple WordPress sites, providing the specialist depth their in-house teams cannot always maintain.",
              },
              {
                title: "Professional services & enterprises",
                body: "Law firms, healthcare providers, financial businesses, and enterprises where website security directly affects client trust and regulatory posture.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to talk about your website?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you are dealing with a security incident right now or want to build a stronger protection plan, we are straightforward to work with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="gap-2">
                Get in touch <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/hacked-site-recovery">
              <Button variant="outline-primary" size="lg">
                Emergency recovery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
