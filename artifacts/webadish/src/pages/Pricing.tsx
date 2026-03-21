import { CheckCircle2, ArrowRight, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useState } from "react";

const plans = [
  {
    name: "Essential Care",
    monthly: "$199",
    annual: "$159",
    desc: "Core maintenance for sites & small businesses.",
    color: "border-border/50",
    features: [
      { label: "WordPress & plugin updates", included: true },
      { label: "Daily cloud backups (30-day retention)", included: true },
      { label: "24/7 uptime monitoring", included: true },
      { label: "Monthly performance report", included: true },
      { label: "1hr/mo small fixes", included: true },
      { label: "Security hardening", included: false },
      { label: "Malware scanning", included: false },
      { label: "Emergency recovery", included: false },
      { label: "Priority support", included: false },
      { label: "Dedicated engineer", included: false },
    ],
  },
  {
    name: "Business Protection",
    monthly: "$399",
    monthlyMax: "$599",
    annual: "$319",
    annualMax: "$479",
    desc: "For eCommerce, membership sites & serious businesses.",
    color: "border-accent",
    highlight: true,
    features: [
      { label: "Everything in Essential Care", included: true },
      { label: "Security hardening", included: true },
      { label: "Real-time malware scanning", included: true },
      { label: "Priority support queue", included: true },
      { label: "3hrs/mo small fixes", included: true },
      { label: "Speed optimization", included: true },
      { label: "24h response SLA", included: true },
      { label: "Emergency recovery", included: false },
      { label: "Dedicated engineer", included: false },
      { label: "Monthly security audit", included: false },
    ],
  },
  {
    name: "Security Retainer",
    monthly: "$999",
    annual: "$799",
    desc: "Dedicated security for agencies, eCommerce & enterprises.",
    color: "border-border/50",
    features: [
      { label: "Everything in Business Protection", included: true },
      { label: "Dedicated security engineer", included: true },
      { label: "Monthly security audit", included: true },
      { label: "Emergency recovery included", included: true },
      { label: "4h emergency response SLA", included: true },
      { label: "Quarterly strategy call", included: true },
      { label: "Custom SLA available", included: true },
      { label: "Multi-site available", included: true },
      { label: "White-label for agencies", included: true },
      { label: "Enterprise pricing available", included: true },
    ],
  },
];

const addons = [
  { name: "Hacked Site Recovery", price: "From $299", desc: "One-time emergency malware removal + blacklist removal. 30-day guarantee." },
  { name: "Security Audit (One-Time)", price: "$149", desc: "Deep scan of your WordPress site for vulnerabilities, malware, and misconfigurations." },
  { name: "Web Design", price: "From $999", desc: "Custom WordPress website design and development for your brand." },
  { name: "Extra Dev Hours", price: "$75/hr", desc: "Need more than your plan's monthly fix allowance? Add hourly dev time." },
];

const faqs = [
  { q: "Are there setup fees?", a: "No. All plans start immediately with no hidden setup fees." },
  { q: "Can I upgrade or downgrade?", a: "Yes. You can change plans at any time. Upgrades take effect immediately; downgrades at the next billing cycle." },
  { q: "What payment methods do you accept?", a: "We accept credit/debit cards, bank transfers, and PayPal. All plans bill monthly or annually." },
  { q: "Do you offer a free trial?", a: "We don't offer a free trial, but we do offer a free security consultation to assess your site before you commit." },
  { q: "What if I manage multiple sites?", a: "We offer multi-site discounts. Contact us for a custom quote." },
  { q: "Is there a contract?", a: "Monthly plans have no contract — cancel anytime with 30 days' notice. Annual plans are paid upfront at a discount." },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, <span className="text-accent">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            No surprises. No lock-in contracts. Premium WordPress protection at prices that make sense.
          </p>
          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm border border-border/50">
            <button onClick={() => setAnnual(false)} className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${!annual ? "bg-accent text-white" : "text-muted-foreground"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${annual ? "bg-accent text-white" : "text-muted-foreground"}`}>
              Annual <span className="text-xs ml-1 text-green-600 font-bold">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-3xl p-10 border-2 ${plan.color} ${plan.highlight ? "shadow-2xl shadow-accent/10" : "shadow-sm"} bg-white relative`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">
                    {annual
                      ? plan.annualMax ? `${plan.annual}–${plan.annualMax}` : plan.annual
                      : plan.monthlyMax ? `${plan.monthly}–${plan.monthlyMax}` : plan.monthly
                    }
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                {annual && <p className="text-xs text-green-600 font-medium mb-3">Billed annually</p>}
                <p className="text-sm text-muted-foreground mb-8">{plan.desc}</p>
                <ul className="space-y-3 mb-10">
                  {plan.features.map(f => (
                    <li key={f.label} className={`flex items-center gap-3 text-sm ${!f.included ? "text-muted-foreground/50" : ""}`}>
                      {f.included
                        ? <CheckCircle2 size={16} className="text-accent shrink-0" />
                        : <X size={16} className="text-muted-foreground/30 shrink-0" />
                      }
                      {f.label}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlight ? "accent" : "outline"}
                  className="w-full h-12"
                  onClick={() => window.location.href='/contact'}
                >
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-On Services</h2>
            <p className="text-muted-foreground">Available as one-time purchases or alongside any plan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {addons.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl p-8 border border-border/50 flex items-start gap-6 hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-bold text-lg">{a.name}</h3>
                    <span className="text-accent font-bold text-sm whitespace-nowrap">{a.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gray-50 rounded-2xl p-8 border border-border/50">
                <h3 className="font-bold mb-3">{f.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Plan Is Right?</h2>
          <p className="text-lg text-white/90 mb-8">Book a free 15-minute consultation. We'll review your site and recommend the best fit.</p>
          <Button variant="white" size="lg" onClick={() => window.location.href='/contact'}>
            Book Free Consultation <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
