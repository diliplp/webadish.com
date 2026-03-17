import { CheckCircle2, Wrench, RefreshCw, Shield, BarChart3, Clock, HeadphonesIcon, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  { icon: <RefreshCw size={24} className="text-accent" />, title: "Core & Plugin Updates", desc: "We update WordPress core, themes, and all plugins in a safe staging environment before deploying to live — zero downtime, zero broken sites." },
  { icon: <Shield size={24} className="text-accent" />, title: "Daily Cloud Backups", desc: "Automated daily offsite backups with 30-day retention. One-click restore if anything ever goes wrong." },
  { icon: <BarChart3 size={24} className="text-accent" />, title: "Performance Monitoring", desc: "Real-time uptime and performance monitoring. You're alerted the moment anything is slow or down — before your customers notice." },
  { icon: <HeadphonesIcon size={24} className="text-accent" />, title: "Priority Support", desc: "Skip the queue. Our WordPress engineers are available for direct support with a guaranteed response time." },
  { icon: <Clock size={24} className="text-accent" />, title: "Monthly Reports", desc: "Detailed monthly reports covering updates applied, uptime stats, security scans, and performance metrics." },
  { icon: <Wrench size={24} className="text-accent" />, title: "Small Fix Included", desc: "Each plan includes a monthly allowance of small fixes — content edits, broken links, layout tweaks — at no extra cost." },
];

const plans = [
  {
    name: "Standard Maintenance",
    price: "$99",
    desc: "Perfect for blogs, brochure sites, and small businesses.",
    features: ["Monthly WP core & plugin updates", "Daily cloud backups (30-day retention)", "24/7 uptime monitoring", "Monthly performance report", "1hr/mo small fixes included"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro Maintenance",
    price: "$199",
    desc: "For eCommerce and business sites that need more.",
    features: ["Everything in Standard", "Weekly plugin updates", "Security hardening & malware scans", "Priority support queue", "3hrs/mo small fixes included", "Speed optimization"],
    cta: "Get Started",
    highlight: true,
  },
];

const faqs = [
  { q: "How do you handle plugin updates safely?", a: "We test all updates in a staging copy of your site first. Only after verifying no conflicts do we push to live. This means zero surprise breakages." },
  { q: "What if my site breaks after an update?", a: "We restore from the backup we took immediately before the update — your site is back in minutes. This has never been a problem our clients had to worry about." },
  { q: "Do I need to give you admin access?", a: "Yes, we'll need WordPress admin and (if applicable) hosting panel access. All credentials are stored in encrypted vaults." },
  { q: "Can I cancel anytime?", a: "Yes — our maintenance plans are month-to-month with no lock-in contracts. Cancel with 30 days' notice." },
];

export default function Maintenance() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Wrench size={14} /> WordPress Maintenance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Keep Your WordPress Site <span className="text-accent">Running Perfectly</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Proactive updates, daily backups, and real-time monitoring — so your site is always fast, secure, and up-to-date. You run your business. We run your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8" onClick={() => window.location.href='/contact'}>
                Start a Maintenance Plan <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="/pricing"><Button variant="outline" size="lg" className="text-lg px-8">See Pricing</Button></Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground font-medium">
              {["800+ sites maintained", "No contracts", "Cancel anytime", "10+ years experience"].map(b => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Site Needs to Thrive</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our maintenance plans are proactive, not reactive — we prevent problems before they happen.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Maintenance Plans</h2>
            <p className="text-lg text-muted-foreground">All plans are month-to-month. No setup fees.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Worry-Free WordPress?</h2>
          <p className="text-lg text-white/90 mb-8">Let us handle the maintenance while you focus on growing your business.</p>
          <Button variant="white" size="lg" onClick={() => window.location.href='/contact'}>
            Get Your Maintenance Plan <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
