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
    name: "Security Protection",
    price: "From $3,000/yr",
    desc: "For business-critical websites requiring constant oversight.",
    features: ["Proactive Security Posture Management", "Real-time threat monitoring", "Business Continuity Backups", "Infrastructure-level hardening", "Priority Incident Response SLA"],
    cta: "Request Assessment",
    highlight: false,
  },
  {
    name: "Business Continuity Retainer",
    price: "Custom",
    desc: "For enterprise environments demanding maximum resilience.",
    features: ["Everything in Security Protection", "Dedicated security engineer", "Custom Service Level Agreement", "Direct communication channels", "Monthly audit & strategy"],
    cta: "Contact Sales",
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
              <Wrench size={14} /> WordPress Reliability & Uptime
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Protect Your Site's <span className="text-accent">Uptime & Security</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Proactive patching, automated backups, real-time monitoring, and security hardening — so your site is always protected, fast, and available. You grow your business. We protect your infrastructure.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Protection Built Into Your Operations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We prevent security incidents, maintain uptime, and reduce operational risk — so your team can focus on growth instead of firefighting WordPress issues.</p>
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
            <p className="text-lg text-muted-foreground">Month-to-month plans with no setup fees. Focused on uptime, security, and peace of mind.</p>
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
          <p className="text-lg text-white/90 mb-8">We handle the security, updates, backups, and monitoring. You focus on what matters to your business.</p>
          <Button variant="white" size="lg" onClick={() => window.location.href='/contact'}>
            Start Your Protection Plan <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
