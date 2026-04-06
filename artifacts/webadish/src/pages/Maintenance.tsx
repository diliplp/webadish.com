import { CheckCircle2, Wrench, RefreshCw, Shield, BarChart3, Clock, HeadphonesIcon, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  { icon: <RefreshCw size={24} className="text-accent" />, title: "Proactive Core & Plugin Updates", desc: "We patch WordPress core, themes, and all plugins in a safe staging environment before deploying to production — zero downtime, zero broken sites." },
  { icon: <Shield size={24} className="text-accent" />, title: "Daily Offsite Backups", desc: "Automated daily backups with 30-day retention stored offsite. One-click restore if something goes wrong, and tested monthly." },
  { icon: <BarChart3 size={24} className="text-accent" />, title: "24/7 Uptime Monitoring", desc: "Continuous monitoring of uptime, performance, and response times. We're alerted to issues before they affect your customers." },
  { icon: <HeadphonesIcon size={24} className="text-accent" />, title: "Priority Response", desc: "Your WordPress engineers are available with guaranteed response times. No queues, no waiting." },
  { icon: <Clock size={24} className="text-accent" />, title: "Monthly Performance Reporting", desc: "Detailed reporting on uptime, security status, performance metrics, and recommendations for reducing risk." },
  { icon: <Wrench size={24} className="text-accent" />, title: "infrastructure changes Included", desc: "Each plan includes a monthly allowance for infrastructure changes — content edits, layout tweaks, link repairs — at no additional cost." },
];

const plans = [
  {
    name: "Essential Care",
    price: "$199",
    desc: "For growing business sites that need dependable updates, backups, and day-to-day protection.",
    features: ["WordPress & plugin updates", "Daily backups (30-day retention)", "Uptime monitoring", "Monthly protection report", "Security hardening baseline"],
    cta: "Request Assessment",
    highlight: false,
  },
  {
    name: "Business Protection",
    price: "$399-$599",
    desc: "For revenue-generating websites that need faster response and deeper security oversight.",
    features: ["Everything in Essential Care", "Real-time scanning", "Priority queue", "Speed optimisation", "24h response SLA"],
    cta: "Start Protection",
    highlight: true,
  },
];

const faqs = [
  { q: "How do you handle plugin updates safely?", a: "We test all updates in a staging copy of your site first. Only after verifying no conflicts do we push to live. This means zero surprise breakages." },
  { q: "What if my site breaks after an update?", a: "We restore from the backup we took immediately before the update — your site is back in minutes. This has never been a problem our clients had to worry about." },
  { q: "Do I need to give you admin access?", a: "Yes, we'll need WordPress admin and (if applicable) hosting panel access. All credentials are stored in encrypted vaults." },
  { q: "Can I cancel anytime?", a: "Yes — our protection retainers are month-to-month with no lock-in contracts. Cancel with 30 days' notice." },
];

export default function Maintenance() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Wrench size={14} /> WordPress Maintenance Service
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              WordPress Maintenance Services for <span className="text-accent">Business-Critical Websites</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Safe updates, backups, monitoring, and hardening packaged as a premium WordPress maintenance service. Built for global businesses that need more than generic website support and want a stronger operational protection layer.
            </p>
            <div className="mb-8 rounded-2xl border border-primary/15 bg-primary/5 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Why This Page Exists</p>
              <p className="text-base text-foreground font-medium">If you are searching for a WordPress maintenance service, this is our structured global offer.</p>
              <p className="text-sm text-muted-foreground mt-2">We handle the maintenance layer properly: staged updates, offsite backups, monitoring, hardening, and faster response when something breaks or looks risky.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8" onClick={() => window.location.href='/contact'}>
                Schedule a Protection Review <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="/pricing"><Button variant="outline" size="lg" className="text-lg px-8">See All Plans</Button></Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground font-medium">
              {["800+ sites protected", "No lock-in contracts", "99.9% uptime guarantee", "20+ years in business"].map(b => (
                <div key={b} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our WordPress Maintenance Service Covers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We prevent security incidents, maintain uptime, and reduce operational risk so your team can focus on growth instead of firefighting WordPress issues.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-8 border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Level of Protection</h2>
            <p className="text-lg text-muted-foreground">USD pricing for global clients. India-specific pricing lives on a separate page to keep international positioning clear.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-3xl p-10 ${plan.highlight ? "bg-accent text-white shadow-2xl shadow-accent/20 scale-105" : "bg-white border border-border/50 shadow-sm"}`}>
                <h3 className={`text-xl font-semibold mb-2 ${plan.highlight ? "text-white" : ""}`}>{plan.name}</h3>
                <div className="mb-3"><span className={`text-5xl font-bold ${plan.highlight ? "text-white" : ""}`}>{plan.price}</span><span className={`${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>/mo</span></div>
                <p className={`text-sm mb-8 ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-10">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${plan.highlight ? "text-white" : ""}`}>
                      <CheckCircle2 size={16} className={plan.highlight ? "text-white shrink-0" : "text-accent shrink-0"} />{f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? "white" : "outline"} className="w-full" onClick={() => window.location.href='/contact'}>{plan.cta}</Button>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/india" className="text-sm font-medium text-accent hover:underline">
              Indian business pricing is available on the dedicated India page →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">WordPress Maintenance Services, But Higher Standard</p>
              <h2 className="text-3xl font-bold mb-4">How WebAdish differs from generic maintenance vendors</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many maintenance providers sell a checklist. We treat maintenance as risk reduction for commercially important WordPress sites. That means staged updates, rollback discipline, plugin hygiene, operational hardening, and a clear path into deeper security support when your website carries real revenue or brand risk.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                {[
                  "Staging-first updates instead of risky live changes",
                  "Backup and restore readiness, not just backup claims",
                  "Maintenance plus hardening, not maintenance alone",
                  "Direct path into hacked-site recovery and retainers if needed",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 border border-border/50">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Worrying About Your WordPress Site</h2>
          <p className="text-lg text-white/90 mb-8">We handle the protection stack, and when you need a named expert plus emergency recovery coverage, the security retainer becomes the next step.</p>
          <Button variant="white" size="lg" onClick={() => window.location.href='/contact'}>
            Start Your Protection Plan <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
