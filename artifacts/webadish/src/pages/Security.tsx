import {
  AlertTriangle,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  FileSearch,
  Globe,
  Shield,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  {
    icon: <Shield size={24} className="text-accent" />,
    title: "Web Application Firewall",
    desc: "Block brute force attacks, SQL injections, XSS, and other common threats before they reach your WordPress stack.",
  },
  {
    icon: <Eye size={24} className="text-accent" />,
    title: "Real-Time Malware Scanning",
    desc: "Continuous automated scans detect malware, backdoors, and suspicious file changes before they become customer-facing incidents.",
  },
  {
    icon: <FileSearch size={24} className="text-accent" />,
    title: "Vulnerability Monitoring",
    desc: "We track plugin and theme risk so your site is not left exposed while known vulnerabilities circulate publicly.",
  },
  {
    icon: <Zap size={24} className="text-accent" />,
    title: "Hardening & Access Control",
    desc: "We lock down admin access, remove unnecessary exposure, and reduce the number of easy attack paths available to bots and bad actors.",
  },
  {
    icon: <Shield size={24} className="text-accent" />,
    title: "Incident Readiness",
    desc: "If something looks wrong, you already have a team that knows the stack and can investigate instead of starting from zero.",
  },
  {
    icon: <AlertTriangle size={24} className="text-accent" />,
    title: "Blacklist Monitoring",
    desc: "We watch for signs that your site has been flagged so response can start before damage compounds across SEO, trust, and conversions.",
  },
];

const threats = [
  { pct: "94%", label: "of WordPress hacks exploit plugin vulnerabilities" },
  { pct: "40%", label: "of hacked sites were already out of date" },
  { pct: "300%", label: "increase in WordPress attacks since 2022" },
  { pct: "<5min", label: "average time for bots to find a vulnerable WordPress install" },
];

export default function Security() {
  return (
    <Layout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Shield size={14} /> Managed WordPress Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              WordPress Security for <span className="text-accent">Revenue-Critical Sites</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Firewall management, malware scanning, hardening, and 24/7 monitoring for businesses that cannot afford breach-driven revenue loss, brand damage, or emergency cleanup during key campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8" onClick={() => window.location.href = "/contact"}>
                Book a Security Review <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="/hacked-site-recovery">
                <Button variant="outline-primary" size="lg" className="text-lg px-8">
                  Site Already Hacked?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShoppingCart size={20} className="text-accent" />,
                title: "WooCommerce & Membership Sites",
                desc: "Best for businesses where downtime, checkout issues, or malware warnings directly affect revenue and trust.",
              },
              {
                icon: <BriefcaseBusiness size={20} className="text-accent" />,
                title: "Lead-Gen & B2B Websites",
                desc: "Ideal for teams running campaigns, demos, and inbound funnels that need reliability and stronger trust signals.",
              },
              {
                icon: <Globe size={20} className="text-accent" />,
                title: "Agencies & Multi-Stakeholder Teams",
                desc: "Useful when marketing, sales, and ops all depend on WordPress and no one has time to own security day to day.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border/50 bg-gray-50 p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {threats.map((t) => (
              <div key={t.label}>
                <div className="text-4xl font-bold text-primary mb-2">{t.pct}</div>
                <div className="text-sm text-white/70 leading-snug">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Level of Security Support You Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We support businesses at three stages: one-time hardening, ongoing managed protection, and high-touch retained security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Security Hardening Sprint",
                desc: "A one-time engagement to close common WordPress vulnerabilities, clean up access, and improve baseline protection.",
              },
              {
                title: "Managed Security + Maintenance",
                desc: "Best for growing businesses that need updates, monitoring, backups, and practical day-to-day WordPress protection.",
              },
              {
                title: "Dedicated Security Retainer",
                desc: "For high-value sites that need a named expert, response SLAs, monthly audits, and stronger operational coverage.",
              },
            ].map((offer) => (
              <div key={offer.title} className="rounded-3xl border border-border/50 bg-white p-8">
                <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Multi-Layer Security Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We do not rely on a single plugin. We implement defence-in-depth so one missed update or single point of failure does not expose the whole site.
            </p>
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

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Secure Your Site</h2>
            <p className="text-lg text-muted-foreground">A practical four-step process for businesses that need less risk and less internal overhead.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Audit", desc: "We identify current malware, weak plugins, risky access, and obvious exposure points." },
              { step: "02", title: "Harden", desc: "We close vulnerabilities, tighten configuration, and reduce the number of attack paths available." },
              { step: "03", title: "Monitor", desc: "We watch for suspicious behaviour, malware indicators, and issues that need human review." },
              { step: "04", title: "Advise", desc: "We help your team understand what changed, what matters, and what to prioritize next." },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-8 border border-border/50 text-center">
                <div className="text-4xl font-bold text-accent/20 mb-4">{step.step}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Security Without Becoming the Security Team?</h2>
          <p className="text-lg text-white/90 mb-8">
            We work best with businesses that want experienced ownership, faster response, and fewer WordPress fire drills for internal teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="lg" onClick={() => window.location.href = "/contact"}>
              Book a Security Consultation <ArrowRight size={18} className="ml-2" />
            </Button>
            <Link href="/hacked-site-recovery">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                Site Already Hacked?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
