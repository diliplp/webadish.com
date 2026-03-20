import { ArrowRight, Briefcase, CheckCircle2, Gauge, Shield, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import OptimizedImage from "@/components/OptimizedImage";

const cases = [
  {
    client: "Verofax",
    tag: "Recovery + Security + Maintenance",
    tagColor: "text-primary",
    tagBg: "bg-primary/10",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500",
    profile:
      "Global tech company with brand-sensitive traffic and low tolerance for Google blacklist warnings.",
    engagement:
      "Emergency malware recovery followed by managed hardening and ongoing maintenance coverage.",
    challenge:
      "Verofax's WordPress site was compromised by a sophisticated attack injecting malware into core files and creating hidden backdoors. The site was blacklisted by Google, causing traffic loss and immediate brand risk.",
    solution:
      "We performed emergency malware removal, eliminated all backdoors, submitted blacklist removal requests, rebuilt compromised files, and implemented a full hardening protocol with ongoing oversight.",
    results: [
      "Site restored in under 18 hours",
      "Google blacklist cleared in 48 hours",
      "Implemented WAF, 2FA, and access cleanup",
      "Zero re-infections since recovery",
      "Moved into ongoing maintenance and security support",
    ],
    impact: [
      { label: "Recovery Window", value: "<18h" },
      { label: "Blacklist Clearance", value: "48h" },
      { label: "Post-Recovery Incidents", value: "0" },
    ],
  },
  {
    client: "Shivam Autozone",
    tag: "Security + Development + Maintenance",
    tagColor: "text-accent",
    tagBg: "bg-accent/10",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800&h=500",
    profile:
      "Growth-focused dealership that needed a more credible, better-performing site to support lead generation.",
    engagement:
      "Positioning-led website rebuild with security hardening, performance work, and ongoing maintenance.",
    challenge:
      "Shivam Autozone needed a professional, high-converting website with stronger security to support a growing dealership business. The previous site was slow, dated, and weak on trust signals.",
    solution:
      "We redesigned and rebuilt the site in WordPress, improved performance, implemented security controls, and set up an ongoing support model to keep the site stable.",
    results: [
      "60% faster page load times",
      "Fully responsive mobile experience",
      "SSL and firewall implementation",
      "Moved onto monthly maintenance coverage",
      "Higher-quality lead enquiries",
    ],
    impact: [
      { label: "Page Speed Improvement", value: "60%" },
      { label: "Mobile Readiness", value: "Full" },
      { label: "Lead Quality", value: "Higher" },
    ],
  },
  {
    client: "Crystal Cold Chain Solutions",
    tag: "Development + Maintenance",
    tagColor: "text-accent",
    tagBg: "bg-accent/10",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500",
    profile:
      "B2B operator selling into enterprise buyers where site credibility influences shortlist and procurement trust.",
    engagement:
      "Custom WordPress build with SEO-ready structure and managed monthly support.",
    challenge:
      "Crystal Cold Chain needed a professional B2B website that would establish credibility with enterprise clients. Their old site failed to communicate scale, capability, and trust.",
    solution:
      "We built a custom WordPress site that showcased certifications, services, and operational capability while improving site structure for search and lead generation.",
    results: [
      "Custom WordPress development",
      "SEO-optimized information architecture",
      "Professional B2B positioning",
      "Ongoing monthly maintenance",
      "Improved enterprise lead quality",
    ],
    impact: [
      { label: "Buyer Confidence", value: "Stronger" },
      { label: "SEO Readiness", value: "Built-In" },
      { label: "Lead Quality", value: "Improved" },
    ],
  },
];

const metrics = [
  { value: "800+", label: "Revenue-Critical Sites Supported" },
  { value: "500+", label: "Emergency Recoveries Delivered" },
  { value: "99.9%", label: "Average Uptime Across Managed Sites" },
  { value: "10+", label: "Years Helping Teams Protect WordPress" },
];

export default function CaseStudies() {
  return (
    <Layout>
      <section className="pt-36 pb-20 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-border/60 text-sm font-medium mb-6">
            <Briefcase size={16} className="text-accent" />
            Case studies for businesses with real revenue and real risk
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Proof for <span className="text-accent">Premium Buyers</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            See how WebAdish helps teams recover from high-stakes incidents, improve site performance, and support growth with ongoing WordPress expertise.
          </p>
        </div>
      </section>

      <section className="py-12 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-4xl font-bold text-accent mb-2">{m.value}</div>
                <div className="text-sm text-white/70">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield size={20} className="text-accent" />,
                title: "Business-Critical Protection",
                desc: "For brands that cannot afford malware warnings, blacklisting, or repeated downtime during active campaigns and sales cycles.",
              },
              {
                icon: <Gauge size={20} className="text-accent" />,
                title: "Operational Confidence",
                desc: "We take ownership of updates, hardening, and incident response so your team can stop firefighting WordPress issues internally.",
              },
              {
                icon: <TrendingUp size={20} className="text-accent" />,
                title: "Commercial Outcomes",
                desc: "The goal is not just a cleaner site. It is better trust, stronger lead quality, and fewer expensive interruptions to growth.",
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {cases.map((c, idx) => (
              <div
                key={c.client}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${c.tagBg} ${c.tagColor}`}>
                    {c.tag}
                  </div>
                  <h2 className="text-4xl font-bold mb-6">{c.client}</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {c.impact.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-border/50 bg-gray-50 p-5">
                        <div className="text-2xl font-bold text-accent mb-1">{item.value}</div>
                        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Client Profile</h3>
                    <p className="text-muted-foreground leading-relaxed">{c.profile}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Engagement Scope</h3>
                    <p className="text-muted-foreground leading-relaxed">{c.engagement}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{c.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{c.solution}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Results</h3>
                    <ul className="space-y-2">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button variant="accent">
                      Start a Similar Project <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                    <OptimizedImage src={c.img} alt={c.client} className="w-full h-80 object-cover" width={560} height={320} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Higher-Trust WordPress Partner?</h2>
          <p className="text-lg text-white/90 mb-8">
            If your website supports revenue, campaigns, or enterprise credibility, we can help you protect it and improve how it performs.
          </p>
          <Button variant="white" size="lg" onClick={() => window.location.href = "/contact"}>
            Book a Strategy Call <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
