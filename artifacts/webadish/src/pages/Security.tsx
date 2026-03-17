import { Shield, Lock, Eye, Zap, FileSearch, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  { icon: <Shield size={24} className="text-accent" />, title: "Web Application Firewall", desc: "Block brute force attacks, SQL injections, XSS, and other OWASP Top 10 threats before they reach your WordPress core." },
  { icon: <Eye size={24} className="text-accent" />, title: "Real-Time Malware Scanning", desc: "Continuous automated scans detect malware, backdoors, and suspicious file changes the moment they appear." },
  { icon: <Lock size={24} className="text-accent" />, title: "WordPress Hardening", desc: "We lock down your login, disable file editing, enforce strong passwords, limit login attempts, and remove unnecessary exposure." },
  { icon: <FileSearch size={24} className="text-accent" />, title: "Vulnerability Patching", desc: "We monitor plugin & theme CVE databases and patch known vulnerabilities before attackers can exploit them." },
  { icon: <Zap size={24} className="text-accent" />, title: "Two-Factor Authentication", desc: "Enforce 2FA for all admin users — the simplest and most effective way to prevent unauthorized logins." },
  { icon: <AlertTriangle size={24} className="text-accent" />, title: "Blacklist Monitoring", desc: "We monitor Google Safe Browsing, Sucuri, and other blacklists. If your site is flagged, we respond immediately." },
];

const threats = [
  { pct: "94%", label: "of WordPress hacks exploit plugin vulnerabilities" },
  { pct: "40%", label: "of hacked sites were already out of date" },
  { pct: "300%", label: "increase in WordPress attacks since 2022" },
  { pct: "<5min", label: "average time for bots to find a vulnerable WP install" },
];

export default function Security() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Shield size={14} /> WordPress Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              WordPress Security That <span className="text-accent">Never Sleeps</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Firewall, malware scanning, hardening, and 24/7 monitoring — professional-grade protection for your WordPress site. Because one breach can cost you everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8" onClick={() => window.location.href='/contact'}>
                Secure My Site <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="/hacked-site-recovery">
                <Button variant="outline-primary" size="lg" className="text-lg px-8">Site Already Hacked?</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THREAT STATS */}
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

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Multi-Layer Security Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We don't rely on a single plugin. We implement defence-in-depth — multiple overlapping security controls that work together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-8 border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                  <span className="group-hover:text-white transition-colors">{f.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Secure Your Site</h2>
            <p className="text-lg text-muted-foreground">A proven 4-step security implementation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Security Audit", desc: "We scan your site for existing malware, vulnerabilities, misconfigurations and weaknesses." },
              { step: "02", title: "Harden & Clean", desc: "We patch vulnerabilities, remove threats, enforce secure configs, and install firewall rules." },
              { step: "03", title: "Monitor 24/7", desc: "Continuous real-time monitoring for login attempts, file changes, and malware injection." },
              { step: "04", title: "Report & Advise", desc: "Monthly security reports with plain-English summaries and proactive recommendations." },
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

      {/* CTA */}
      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Wait for a Breach to Act</h2>
          <p className="text-lg text-white/90 mb-8">It costs 10x more to recover from a hack than to prevent one. Let us protect your site today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="lg" onClick={() => window.location.href='/contact'}>
              Secure My WordPress Site <ArrowRight size={18} className="ml-2" />
            </Button>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">View Security Plans</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
