import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  Eye,
  FileSearch,
  HeadphonesIcon,
  Lock,
  Star,
  Store,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const whyRetainer = [
  {
    icon: <Eye size={22} className="text-accent" />,
    title: "Dedicated Security Engineer",
    desc: "You get a named specialist who understands your site and can respond with context, not just ticket history.",
  },
  {
    icon: <Clock size={22} className="text-accent" />,
    title: "Custom SLA",
    desc: "Response expectations are defined up front so stakeholders know what happens when something urgent appears.",
  },
  {
    icon: <FileSearch size={22} className="text-accent" />,
    title: "Monthly Security Audits",
    desc: "Regular reviews help catch drift, risky plugin choices, and configuration issues before they create incidents.",
  },
  {
    icon: <HeadphonesIcon size={22} className="text-accent" />,
    title: "Priority Incident Response",
    desc: "When something looks wrong, you already have a team with access, context, and an agreed response model.",
  },
  {
    icon: <Lock size={22} className="text-accent" />,
    title: "Recovery Included",
    desc: "If the site is compromised while on retainer, recovery work is covered inside the engagement instead of becoming a separate scramble.",
  },
  {
    icon: <CheckCircle2 size={22} className="text-accent" />,
    title: "Advisory Support",
    desc: "Quarterly or monthly reviews give your team better visibility into risk, roadmap decisions, and operational priorities.",
  },
];

const retainerTiers = [
  {
    name: "Security Retainer",
    price: "$999",
    desc: "For businesses and agencies that need dedicated security oversight, faster incident response, and recovery coverage inside the engagement.",
    features: [
      "Everything in Business Protection",
      "Dedicated security engineer",
      "Monthly security audit",
      "Emergency recovery included",
      "4h emergency response SLA",
      "Quarterly strategy call",
      "Custom SLA available",
    ],
    cta: "Start Retainer",
  },
  {
    name: "Agency Portfolio",
    price: "$150-$200",
    desc: "Per-site pricing for agencies with 10+ WordPress sites that need white-label reporting and a dependable security partner.",
    features: [
      "10+ site pricing",
      "White-label security reports",
      "Bulk monitoring and review cadence",
      "Shared escalation channel",
      "Emergency recovery options",
      "Co-branded case study support",
      "Agency delivery alignment",
    ],
    cta: "Contact Sales",
  },
];

const testimonials = [
  {
    name: "Verofax",
    role: "Tech Company",
    quote: "After getting hacked, we moved to WebAdish's retainer. Haven't had a single security incident in 2 years. Peace of mind is priceless.",
  },
  {
    name: "Vashishtha Luxury Fashion",
    role: "Fashion Brand",
    quote: "3 years on retainer. Sneha and the team are always there when we need them. Our site has never been down.",
  },
];

export default function Retainer() {
  return (
    <Layout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Lock size={14} /> Business Continuity Retainer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              WordPress Security Support <span className="text-accent">for Higher-Stakes Teams</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              A dedicated WordPress security partner for teams that need faster response, stronger oversight, and less risk around revenue-critical websites, campaigns, and client commitments.
            </p>
            <div className="mb-8 rounded-2xl border border-accent/20 bg-white/90 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">Good Fit Check</p>
              <p className="text-base text-foreground font-medium">If you are not sure whether you need a retainer, start with a free security audit first.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8" onClick={() => window.location.href = "/contact"}>
                Book a Retainer Call <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  View All Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-10 border border-border/50">
            <h2 className="text-2xl font-bold mb-8 text-center">Best Fit For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Building2 size={20} className="text-accent" />,
                  title: "Agencies & Multi-Site Operators",
                  desc: "When client delivery depends on consistent uptime, proactive patching, and a dependable technical partner behind the scenes.",
                },
                {
                  icon: <Store size={20} className="text-accent" />,
                  title: "WooCommerce & Revenue Teams",
                  desc: "When a slow store, malware warning, or plugin conflict can directly hit revenue and customer trust.",
                },
                {
                  icon: <BadgeCheck size={20} className="text-accent" />,
                  title: "High-Trust Brands",
                  desc: "When your site supports enterprise credibility, procurement reviews, or active campaigns and needs tighter operational control.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-border/50">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1h", label: "Fastest emergency SLA" },
              { value: "Named", label: "Dedicated security owner" },
              { value: "Monthly", label: "Audit and advisory cadence" },
              { value: "Included", label: "Incident response coverage" },
            ].map((item) => (
              <div key={item.label}>
              <div className="text-4xl font-bold text-accent mb-2">{item.value}</div>
              <div className="text-sm text-white/70">{item.label}</div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in the Retainer</h2>
            <p className="text-lg text-muted-foreground">Not just support tickets. An ongoing security operating rhythm.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyRetainer.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Retainer Plans</h2>
          <p className="text-lg text-muted-foreground">Global retainer pricing for dedicated oversight, plus agency portfolio pricing for white-label partners.</p>
          <p className="text-sm text-muted-foreground mt-3">Real client work includes verofax.com, shivamautozone.com, and crystalgroup.in.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {retainerTiers.map((t, idx) => (
              <div key={t.name} className={`rounded-3xl p-10 ${idx === 0 ? "bg-accent text-white shadow-2xl shadow-accent/20" : "bg-gray-50 border border-border/50"}`}>
                <h3 className={`text-xl font-semibold mb-2 ${idx === 0 ? "text-white" : ""}`}>{t.name}</h3>
                <div className="mb-3">
                  <span className={`text-5xl font-bold ${idx === 0 ? "text-white" : ""}`}>{t.price}</span>
                  {t.price !== "Custom" && <span className={idx === 0 ? "text-white/70" : "text-muted-foreground"}>/mo</span>}
                </div>
                <p className={`text-sm mb-8 ${idx === 0 ? "text-white/80" : "text-muted-foreground"}`}>{t.desc}</p>
                <ul className="space-y-3 mb-10">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${idx === 0 ? "text-white" : ""}`}>
                      <CheckCircle2 size={16} className={idx === 0 ? "text-white shrink-0" : "text-accent shrink-0"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={idx === 0 ? "white" : "accent"} className="w-full" onClick={() => window.location.href = "/contact"}>
                  {t.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">What Retainer Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}</div>
                <p className="italic text-foreground/80 mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Than a Basic Protection Plan?</h2>
          <p className="text-lg text-white/90 mb-8">
            If your team needs accountability, faster response, and a stronger security operating rhythm, the retainer is where we usually start.
          </p>
          <Button variant="white" size="lg" onClick={() => window.location.href = "/contact"}>
            Request Free Security Audit <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
